"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  isAvailable: boolean;
  experience: string;
  rating: number;
}

const InstantConsultationPage: React.FC = () => {
  const router = useRouter();
  const [symptoms, setSymptoms] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(false);

  // Mock data for available doctors
  const availableDoctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Sarah Wilson',
      specialization: 'General Medicine',
      isAvailable: true,
      experience: '10+ years',
      rating: 4.8
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialization: 'Emergency Medicine',
      isAvailable: true,
      experience: '8+ years',
      rating: 4.9
    },
    {
      id: '3',
      name: 'Dr. Emily Brown',
      specialization: 'Family Medicine',
      isAvailable: true,
      experience: '12+ years',
      rating: 4.7
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctor || !symptoms.trim()) {
      alert('Please select a doctor and describe your symptoms');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert('Consultation request sent successfully! The doctor will connect with you shortly.');
      router.push('/appointments');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Instant Consultation</h1>
          <p className="text-gray-600 mb-8">
            Connect with available doctors instantly for urgent medical advice. Our doctors are available 24/7 to help you.
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Doctors</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {availableDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  onClick={() => setSelectedDoctor(doctor)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedDoctor?.id === doctor.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{doctor.name}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Online
                    </span>
                  </div>
                  <p className="text-gray-600">{doctor.specialization}</p>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-gray-500">{doctor.experience}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-gray-600">{doctor.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                Describe Your Symptoms
              </label>
              <textarea
                id="symptoms"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please describe your symptoms and concerns in detail..."
                required
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Consultation Fee</h3>
              <p className="text-2xl font-bold text-gray-900">$30.00</p>
              <p className="text-sm text-gray-500 mt-1">Includes 15 minutes consultation</p>
            </div>

            <button
              type="submit"
              disabled={loading || !selectedDoctor || !symptoms.trim()}
              className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Start Consultation'
              )}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">1</div>
              <h3 className="font-medium mb-2">Select Doctor</h3>
              <p className="text-gray-600 text-sm">Choose from our available doctors</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">2</div>
              <h3 className="font-medium mb-2">Describe Symptoms</h3>
              <p className="text-gray-600 text-sm">Tell us about your health concerns</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">3</div>
              <h3 className="font-medium mb-2">Start Consultation</h3>
              <p className="text-gray-600 text-sm">Connect with the doctor instantly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantConsultationPage;
