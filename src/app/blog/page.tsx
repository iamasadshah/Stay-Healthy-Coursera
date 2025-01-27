"use client";
import React from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Heart Health: A Comprehensive Guide',
    excerpt: 'Learn about the essential factors that contribute to maintaining a healthy heart and preventing cardiovascular diseases.',
    category: 'Cardiology',
    imageUrl: '/blog/heart-health.jpg',
    date: '2024-01-27',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'The Importance of Mental Health in Modern Life',
    excerpt: 'Discover how to maintain good mental health and recognize early signs of stress and anxiety.',
    category: 'Mental Health',
    imageUrl: '/blog/mental-health.jpg',
    date: '2024-01-26',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'Nutrition Tips for a Healthy Lifestyle',
    excerpt: 'Expert advice on maintaining a balanced diet and making healthy food choices for optimal health.',
    category: 'Nutrition',
    imageUrl: '/blog/nutrition.jpg',
    date: '2024-01-25',
    readTime: '6 min read'
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Healthy Blog</h1>
          <p className="mt-4 text-lg text-gray-600">Stay informed with the latest health tips and medical insights</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                {/* Note: Add actual images to the public folder */}
                {/* <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
