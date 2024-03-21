import React, { useState, useEffect } from 'react';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchCustomers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/customers'); // Replace with your actual API URL
  
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
  
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchCustomers();
    }, []);
  
    return (
      <div>
        {isLoading ? (
          <p>Loading customers...</p>
        ) : (
          <ul>
            {customers.map((customer) => (
              <li key={customer.id}>
                {customer.firstName} 
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export default CustomerList;
