"use client";

import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Modal from "@/components/Modal"; // Adjust the import path as needed

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      // Implement search logic here
      console.log(`Searching for: ${searchQuery}`);
    }
  };

  const navItems = [
    {href: "/", label: "Table", icon: "📊"},
    {href: "/card-vue", label: "Card View", icon: "🃏"},
    {href: "/archive", label: "Archive", icon: "📚"},
  ];

  return (
    <>
      {/* Desktop Navigation Bar */}
      <nav className='hidden md:flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 shadow-lg'>
        <div className='flex space-x-4'>
          <Link
            href='/'
            className={`hover:underline ${
              pathname === "/" ? "font-bold" : ""
            }`}>
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:underline ${
                pathname === item.href ? "font-bold" : ""
              }`}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className='flex items-center space-x-4'>
          <form onSubmit={handleSearch} className='flex space-x-2'>
            <input
              type='text'
              placeholder='Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
            <button
              type='submit'
              className='bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition-colors'>
              Search
            </button>
          </form>
          <Link href='/create-intervention'>
            <button className='bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition-colors'>
              + Create Intervention
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className='fixed bottom-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 flex justify-between md:hidden shadow-t-lg'>
        {/* Home Icon */}
        <Link href='/' className='flex flex-col items-center'>
          <span role='img' aria-label='Home'>
            🏠
          </span>
          <span className='text-sm'>Home</span>
        </Link>

        {/* Create Icon */}
        <Link
          href='/create-intervention'
          className='flex flex-col items-center'>
          <span role='img' aria-label='Create'>
            ➕
          </span>
          <span className='text-sm'>Create</span>
        </Link>

        {/* Menu Icon */}
        <button
          onClick={() => setIsModalOpen(true)}
          className='flex flex-col items-center'>
          <span role='img' aria-label='Menu'>
            ☰
          </span>
          <span className='text-sm'>Menu</span>
        </button>
      </nav>

      {/* Modal for Additional Menu Items */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ul className='space-y-2'>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className='flex items-center space-x-2 p-2 rounded hover:bg-gray-100'
                onClick={() => setIsModalOpen(false)}>
                <span role='img' aria-label={item.label}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
}
