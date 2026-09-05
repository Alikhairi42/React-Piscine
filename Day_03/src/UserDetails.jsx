import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function UserDetails() {
  const { id } = useParams();
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading user details...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">← Back to Home</Link>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div>
  );
}