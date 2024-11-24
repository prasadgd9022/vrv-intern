import React from 'react';
import Link from 'next/link';

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800">
            <div className="text-center bg-white shadow-lg rounded-lg p-8 max-w-md">
                <h1 className="text-4xl font-extrabold mb-4 text-purple-900">Welcome to AccessFlow</h1>
                <p className="text-lg mb-6 text-gray-700">Streamline your user and role management with ease.</p>
                <Link href="/admin">
                    <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition duration-300 shadow-lg">
                        Launch Control Panel
                    </button>
                </Link>
            </div>
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-2">Features</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>✔ User Management</li>
                    <li>✔ Role Management</li>
                    <li>✔ Dynamic Permissions</li>
                    <li>✔ Easy Navigation</li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
