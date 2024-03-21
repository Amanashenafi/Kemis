import React, { useState } from 'react';

const AddCustomer = () => {
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });
  const [response, setResponse] = useState(null);

  const handleChange = (event) => {
    setCustomerData({
      ...customerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:3000/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      setResponse(data);
      setCustomerData({ // Clear form after successful submission
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
      });
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={customerData.firstName}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={customerData.lastName}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={customerData.phoneNumber}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={customerData.email}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Add Customer</button>
      </form>

      {response && ( // Display response after successful submission
        <div>
          <p>Customer added successfully!</p>
          <p>Response: {JSON.stringify(response)}</p>
        </div>
      )}
    </div>
  );
};

export default AddCustomer;
