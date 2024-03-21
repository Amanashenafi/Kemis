import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditDress = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/dresses/${id}`)
      .then(response => response.json())
      .then(data => setFormData(data))
      .catch(error => console.error('Error fetching dress:', error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3001/dresses/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      alert('Dress updated successfully');
    } catch (error) {
      console.error('Error updating dress:', error);
    }
  };

  return (
    <div>
      <h1>Edit Dress</h1>
      <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" value={formData.name || ''} onChange={handleChange} required />

    <label htmlFor="category">Category:</label>
    <input type="text" id="category" name="category" value={formData.category || ''} onChange={handleChange} required />

    <label htmlFor="color">Color:</label>
    <input type="text" id="color" name="color" value={formData.color || ''} onChange={handleChange} required />

    <label htmlFor="size">Size:</label>
    <input type="text" id="size" name="size" value={formData.size || ''} onChange={handleChange} required />

    <label htmlFor="price">Price:</label>
    <input type="text" id="price" name="price" value={formData.price || ''} onChange={handleChange} required />

    <label htmlFor="quantity">Quantity:</label>
    <input type="text" id="quantity" name="quantity" value={formData.quantity || ''} onChange={handleChange} required />

    <label htmlFor="img_url">Image URL:</label>
    <input type="text" id="img_url" name="img_url" value={formData.img_url || ''} onChange={handleChange} required />

    <button type="submit">Save</button>
  </form>
    </div>
  );
};

export default EditDress;