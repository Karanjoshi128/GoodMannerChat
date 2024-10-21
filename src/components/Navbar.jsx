import React from 'react';

const Navbar = () => {
    return (
        <nav className=" p-4 bg-[#171717] border-2 rounded-[1rem] mt-2 w-[97vw] ml-7">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">GoodManner chat</div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;