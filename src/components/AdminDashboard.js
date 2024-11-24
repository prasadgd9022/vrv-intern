"use client";
import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import RoleManager from './RoleManager';
import { mockApi } from '../mockApi';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [activeTab, setActiveTab] = useState('users');

    const fetchData = async () => {
        try {
            const usersData = await mockApi.getUsers();
            const rolesData = await mockApi.getRoles();
            if (Array.isArray(usersData.data)) {
                setUsers(usersData.data);
            } 
            setRoles(rolesData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 text-gray-800">
            <div className="p-4 text-black w-4/5">
                <h1 className="text-3xl font-bold mb-6 text-purple-900">Control Panel</h1>
                <div className="flex space-x-4 mb-4">
                    <button
                        onClick={() => setActiveTab('users')}
                        className={`px-4 py-2 rounded-lg ${activeTab === 'users' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'bg-white text-purple-900'} transition duration-300 shadow-md`}
                    >
                        Users
                    </button>
                    <button
                        onClick={() => setActiveTab('roles')}
                        className={`px-4 py-2 rounded-lg ${activeTab === 'roles' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'bg-white text-purple-900'} transition duration-300 shadow-md`}
                    >
                        Roles
                    </button>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-6">
                    {activeTab === 'users' ? (
                        <UserTable users={users} setUsers={setUsers} roles={roles} />
                    ) : (
                        <RoleManager roles={roles} setRoles={setRoles} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard; 