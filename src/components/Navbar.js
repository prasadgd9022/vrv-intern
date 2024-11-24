"use client";
import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-purple-800 to-indigo-900 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-xl font-bold hover:text-purple-200 transition duration-300">
                    AccessFlow
                </Link>

                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-white hover:text-purple-200 transition duration-300">Dashboard</Link>
                    <Link href="/admin" className="text-white hover:text-purple-200 transition duration-300">Control Panel</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-white">Menu</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 