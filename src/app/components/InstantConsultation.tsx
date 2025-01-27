"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  isAvailableForInstantConsultation: boolean;
}

export default function InstantConsultation() {
  const router = useRouter();
  const [availableDoctors, setAvailableDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);

  useEffect(() => {
    fetchAvailableDoctors();
  }, []);

  const fetchAvailableDoctors = async () => {
    try {
      const response = await fetch('/api/doctors/available');
      const data = await response.json();
      setAvailableDoctors(data);
    } catch (error) {
      console.error('Error fetching available doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInstantConsultation = async () => {
    if (!selectedDoctor || !symptoms.trim()) {
      alert('Please select a doctor and describe your symptoms');
      return;
    }

    try {
      setBooking(true);
      const response = await fetch('/api/appointments/instant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doctorId: selectedDoctor._id,
          symptoms,
        }),
      });

      if (response.ok) {
        alert('Instant consultation request sent successfully!');
        router.push('/appointments');
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to request consultation');
      }
    } catch (error) {
      console.error('Error booking instant consultation:', error);
      alert('Failed to request consultation');
    } finally {
      setBooking(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Instant Consultation</h2>

      {availableDoctors.length === 0 ? (
        <p className="text-center text-gray-500">No doctors available for instant consultation</p>
      ) : (
        <>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Doctors
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                {availableDoctors.map((doctor) => (
                  <div
                    key={doctor._id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedDoctor?._id === doctor._id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedDoctor(doctor)}
                  >
                    <h3 className="font-semibold">{doctor.name}</h3>
                    <p className="text-sm text-gray-600">{doctor.specialization}</p>
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                      Available Now
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Describe Your Symptoms
              </label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Please describe your symptoms and concerns..."
                required
              />
            </div>

            <button
              onClick={handleInstantConsultation}
              disabled={booking || !selectedDoctor || !symptoms.trim()}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
            >
              {booking ? 'Requesting Consultation...' : 'Start Instant Consultation'}
            </button>

            <p className="text-sm text-gray-500 text-center">
              Note: Instant consultation connects you with available doctors immediately for urgent medical advice.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
