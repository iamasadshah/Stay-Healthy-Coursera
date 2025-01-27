"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Stay Healthy Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-xl font-bold text-blue-500">Stay Healthy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/appointments" className="px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors">
              Appointments
            </Link>
            <Link href="/instant-consultation" className="px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors">
              Instant Consultation
            </Link>
            <Link href="/blog" className="px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors">
              Healthy Blog
            </Link>
            <Link href="/review" className="px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors">
              Review
            </Link>
            <div className="ml-4 flex items-center space-x-2">
              <Link 
                href="/signin" 
                className="px-4 py-2 text-blue-500 hover:text-teal-700 border border-blue-500 rounded-full transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="px-4 py-2 text-white bg-blue-500 hover:bg-teal-700 rounded-full transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md"
          >
            Home
          </Link>
          <Link 
            href="/appointments" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md"
          >
            Appointments
          </Link>
          <Link 
            href="/instant-consultation" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md"
          >
            Instant Consultation
          </Link>
          <Link 
            href="/blog" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md"
          >
            Healthy Blog
          </Link>
          <Link 
            href="/review" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md"
          >
            Review
          </Link>
          <div className="mt-4 space-y-2">
            <Link 
              href="/signin" 
              className="block w-full px-4 py-2 text-center text-blue-500 border border-blue-500 rounded-full hover:bg-teal-50"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="block w-full px-4 py-2 text-center text-white bg-blue-500 rounded-full hover:bg-teal-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
