import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/utils/toast-store';

const reservationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  guests: z.string().min(1, 'Please select number of guests'),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM',
];

const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

export const ReservationSystem = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Replace with actual API call
      console.log('Reservation data:', data);

      toast.success('Reservation confirmed! We\'ll send you a confirmation email shortly.');
      reset();
    } catch (error) {
      toast.error('Failed to create reservation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
      <div className="mb-8">
        <h3 className="text-h3 mb-3">Reserve a Table</h3>
        <p className="text-body">
          Book your table in advance and enjoy a seamless dining experience
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-heading mb-2">
              Full Name *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                errors.name
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-300 focus:border-primary'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-heading mb-2">
              Email Address *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                errors.email
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-300 focus:border-primary'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-heading mb-2">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
              errors.phone
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-primary'
            }`}
            placeholder="+1 (234) 567-890"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Date, Time, Guests Row */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-heading mb-2">
              Date *
            </label>
            <input
              {...register('date')}
              type="date"
              id="date"
              min={today}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                errors.date
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-300 focus:border-primary'
              }`}
            />
            {errors.date && (
              <p className="mt-2 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-semibold text-heading mb-2">
              Time *
            </label>
            <select
              {...register('time')}
              id="time"
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors appearance-none bg-white ${
                errors.time
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-300 focus:border-primary'
              }`}
            >
              <option value="">Select time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="mt-2 text-sm text-red-600">{errors.time.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm font-semibold text-heading mb-2">
              Guests *
            </label>
            <select
              {...register('guests')}
              id="guests"
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors appearance-none bg-white ${
                errors.guests
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-300 focus:border-primary'
              }`}
            >
              <option value="">Select guests</option>
              {guestOptions.map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
            {errors.guests && (
              <p className="mt-2 text-sm text-red-600">{errors.guests.message}</p>
            )}
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label htmlFor="specialRequests" className="block text-sm font-semibold text-heading mb-2">
            Special Requests (Optional)
          </label>
          <textarea
            {...register('specialRequests')}
            id="specialRequests"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors resize-none"
            placeholder="Any dietary restrictions, accessibility needs, or special occasions..."
          />
        </div>

        {/* Info Box */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-body">
              Reservations are held for 15 minutes. Please arrive on time or contact us if you're running late.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary btn-lg relative"
        >
          {isSubmitting ? (
            <>
              <span className="opacity-0">Confirm Reservation</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="animate-spin h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            </>
          ) : (
            'Confirm Reservation'
          )}
        </button>
      </form>
    </div>
  );
};

export default ReservationSystem;
