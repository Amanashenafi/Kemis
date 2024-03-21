import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Dresses = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    color: '',
    size: '',
    price: '',
    quantity: '',
    img_url: '',
    created_at: '',
    updated_at: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/dresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dress: formData }) // Changed 'dresses' to 'dress'
      });
      console.log(response);
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
        <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required />

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

export default Dresses;
