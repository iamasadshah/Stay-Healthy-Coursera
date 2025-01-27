"use client";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
            Your Health,{' '}
            <span className="block mt-2">Our Responsibility</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering you to live a healthier, happier life with expert medical care and personalized health solutions.
          </p>
          
          <div className="flex justify-center space-x-4 mt-8">
            <Link
              href="/appointments"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-teal-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
