// AdminDresses.jsx

import React, { useEffect, useState } from 'react';

const AdminDresses = () => {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/dresses')
      .then(response => response.json())
      .then(data => setDresses(data))
      .catch(error => console.error('Error fetching dresses:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/dresses/${id}`, {
        method: 'DELETE'
      });
      setDresses(dresses.filter(dress => dress.id !== id));
    } catch (error) {
      console.error('Error deleting dress:', error);
    }
  };

  return (
    <div>
      <h1>Admin Dresses</h1>
      <a href={`/admin/dresses/create`}>Create</a>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Color</th>
            <th>Size</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dresses.map(dress => (
            <tr key={dress.id}>
              <td>{dress.name}</td>
              <td>{dress.category}</td>
              <td>{dress.color}</td>
              <td>{dress.size}</td>
              <td>{dress.price}</td>
              <td>{dress.quantity}</td>
              <td>
                <button onClick={() => handleDelete(dress.id)}>Delete</button>
                <a href={`/admin/dresses/${dress.id}/edit`}>Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDresses;
