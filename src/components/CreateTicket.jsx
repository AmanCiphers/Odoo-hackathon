// src/components/UserManagement.jsx
import React, { useState } from 'react';
import './view-tickets.css'; // Reuse same CSS

const UserManagement = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Aman Singh',
            email: 'aman@example.com',
            role: 'User',
            joined: '2025-07-01',
        },
        {
            id: 2,
            name: 'Jasmine Kaur',
            email: 'jasmine@example.com',
            role: 'Admin',
            joined: '2025-06-15',
        },
        {
            id: 3,
            name: 'Ravi Sharma',
            email: 'ravi@example.com',
            role: 'Moderator',
            joined: '2025-08-01',
        },
    ]);

    const handleRoleChange = (userId, newRole) => {
        const updatedUsers = users.map(user =>
            user.id === userId ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
    };

    return (
        <div className="view-tickets-container">
            <h2>Staff Management</h2>
            <table className="tickets-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                         <th>Joined</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.joined}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
