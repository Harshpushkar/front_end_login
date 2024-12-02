import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <h1 className="text-lg font-bold">Campus Link</h1>
        <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/events" className="hover:underline">Events</Link>
            <Link to="/chat" className="hover:underline">Chat</Link>
        </div>
    </nav>
);

export default Navbar;
