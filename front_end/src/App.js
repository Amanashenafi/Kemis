import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateDress = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '', // Initialize category as an empty string
    color: '',
    size: '',
    price: '',
    quantity: '',
    img_url: '',
    created_at: '',
    updated_at: ''
  });

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/dresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dress: formData })
      });
      console.log(response);
      // Redirect to a different route after successful submission
      history.push('/'); // Assuming you want to redirect to the home page
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Add a New Dress</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="habesha">Habesha</option>
          <option value="casual">Casual</option>
          <option value="chefoon">Chefoon</option>
          <option value="formal">Formal</option>
          <option value="semi_formal">Semi Formal</option>
        </select>

        <label htmlFor="color">Color:</label>
        <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} required />

        <label htmlFor="size">Size:</label>
        <input type="text" id="size" name="size" value={formData.size} onChange={handleChange} required />

        <label htmlFor="price">Price:</label>
        <input type="number" step="0.01" id="price" name="price" value={formData.price} onChange={handleChange} required />

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required />

        <label htmlFor="img_url">Image URL:</label>
        <input type="text" id="img_url" name="img_url" value={formData.img_url} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateDress;
