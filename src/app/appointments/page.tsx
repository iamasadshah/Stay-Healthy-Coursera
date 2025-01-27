"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  availableSlots: AvailableSlot[];
}

interface AvailableSlot {
  day: string;
  times: string[];
}

interface AppointmentFormData {
  doctorId: string;
  date: string;
  timeSlot: string;
  symptoms: string;
}

const AppointmentsPage: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [formData, setFormData] = useState<AppointmentFormData>({
    doctorId: '',
    date: '',
    timeSlot: '',
    symptoms: ''
  });
  const [loading, setLoading] = useState<boolean>(false);

  // Mock data for demonstration
  const mockDoctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. John Doe',
      specialization: 'Cardiologist',
      availableSlots: [
        {
          day: 'Monday',
          times: ['09:00 AM', '10:00 AM', '11:00 AM']
        },
        {
          day: 'Tuesday',
          times: ['02:00 PM', '03:00 PM', '04:00 PM']
        }
      ]
    },
    {
      id: '2',
      name: 'Dr. Jane Smith',
      specialization: 'Dermatologist',
      availableSlots: [
        {
          day: 'Wednesday',
          times: ['09:00 AM', '10:00 AM', '11:00 AM']
        },
        {
          day: 'Thursday',
          times: ['02:00 PM', '03:00 PM', '04:00 PM']
        }
      ]
    }
  ];

  const handleSearch = () => {
    setLoading(true);
    // Filter mock doctors based on search term
    const filteredDoctors = mockDoctors.filter(doctor => 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDoctors(filteredDoctors);
    setLoading(false);
  };

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setFormData(prev => ({ ...prev, doctorId: doctor.id }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.doctorId || !formData.date || !formData.timeSlot || !formData.symptoms) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Log the appointment data (replace with your actual booking logic)
    console.log('Appointment Data:', formData);
    alert('Appointment booked successfully!');
    router.push('/appointments');
  };

  const getAvailableSlots = () => {
    if (!selectedDoctor || !formData.date) return [];
    const dayOfWeek = new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long' });
    return selectedDoctor.availableSlots.find(slot => slot.day === dayOfWeek)?.times || [];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Book an Appointment</h1>
        
        {/* Doctor Search */}
        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search doctors by name or specialization"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>

          {/* Doctor List */}
          {doctors.length > 0 && (
            <div className="mt-4 space-y-2">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedDoctor?.id === doctor.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => handleDoctorSelect(doctor)}
                >
                  <h3 className="font-semibold">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.specialization}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Appointment Form */}
        {selectedDoctor && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-1">
                Select Time
              </label>
              <select
                id="timeSlot"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a time slot</option>
                {getAvailableSlots().map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-1">
                Symptoms
              </label>
              <textarea
                id="symptoms"
                name="symptoms"
                value={formData.symptoms}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Please describe your symptoms"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
            >
              Book Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;
