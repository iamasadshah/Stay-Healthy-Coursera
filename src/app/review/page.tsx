"use client";
import React, { useState } from 'react';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewPage: React.FC = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock existing reviews
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      name: 'John Doe',
      rating: 5,
      comment: 'Excellent service and very professional staff!',
      date: '2024-01-20'
    },
    {
      id: '2',
      name: 'Jane Smith',
      rating: 4,
      comment: 'Great experience overall. The doctors are very knowledgeable.',
      date: '2024-01-18'
    }
  ]);

  const isFormValid = () => {
    return name.trim() !== '' && rating > 0 && comment.trim() !== '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newReview: Review = {
        id: Date.now().toString(),
        name,
        rating,
        comment,
        date: new Date().toISOString().split('T')[0]
      };

      setReviews(prev => [newReview, ...prev]);
      setName('');
      setRating(0);
      setComment('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Write a Review</h1>

          {/* Review Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`text-2xl ${
                      star <= rating ? 'text-yellow-400' : 'text-gray-300'
                    } hover:text-yellow-400 focus:outline-none transition-colors`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Your Review
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors ${
                isFormValid() && !isSubmitting
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>

          {/* Existing Reviews */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Reviews</h2>
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className="text-lg">
                          {index < review.rating ? '⭐' : '☆'}
                        </span>
                      ))}
                    </div>
                  </div>
                  <time className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReviewPage;
