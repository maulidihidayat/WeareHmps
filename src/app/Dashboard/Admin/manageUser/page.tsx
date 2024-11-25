// pages/manageuser/page.tsx
"use client"

import { useEffect, useState } from 'react';
import { Edit, Trash } from 'lucide-react';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
}

const page = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Simulate fetching users from an API
    const fetchUsers = async () => {
      // Replace with your API call
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      // Replace with your API call to delete the user
      await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });
      setUsers(users.filter(user => user.id !== userId));
      console.log(`User  with ID ${userId} deleted`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl text-secondary font-bold mb-4">User  Management</h1>
      <Link href="/manageuser/add">
        <button className="mb-4 bg-primary text-white py-2 px-4 border-2 border-secondary border-b-[6px] rounded-xl hover:bg-orange-600 transition-colors duration-300">
          Add New User
        </button>
      </Link>
      <table className="w-full bg-white border-2  border-secondary">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                <Link href={`/manageuser/edit/${user.id}`}>
                  <Edit className="text-blue-500 hover:text-blue-700 cursor-pointer" />
                </Link>
                <Trash
                  className="text-red-500 hover:text-red-700 cursor-pointer ml-4"
                  onClick={() => handleDelete(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page ;