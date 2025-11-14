import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/utils/toast-store';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Replace with actual API call
      console.log('Form data:', data);

      toast.success('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5 md:space-y-6">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-heading">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="Your name"
            className={`w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-2 rounded-lg focus:outline-none transition-colors ${
              errors.name
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-primary'
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-heading">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            placeholder="your@email.com"
            className={`w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-2 rounded-lg focus:outline-none transition-colors ${
              errors.email
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-primary'
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-heading">
          Phone <span className="text-gray-500 font-normal text-xs">(optional)</span>
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          placeholder="+1 (234) 567-890"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-heading">
          Subject *
        </label>
        <input
          {...register('subject')}
          type="text"
          id="subject"
          placeholder="How can we help?"
          className={`w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-2 rounded-lg focus:outline-none transition-colors ${
            errors.subject
              ? 'border-red-500 focus:border-red-600'
              : 'border-gray-300 focus:border-primary'
          }`}
        />
        {errors.subject && (
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-heading">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          placeholder="Your message..."
          className={`w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-2 rounded-lg focus:outline-none transition-colors resize-none ${
            errors.message
              ? 'border-red-500 focus:border-red-600'
              : 'border-gray-300 focus:border-primary'
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-full md:w-auto relative touch-manipulation"
      >
        {isSubmitting ? (
          <>
            <span className="opacity-0">Send Message</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 text-white"
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
          'Send Message'
        )}
      </button>
    </form>
  );
};

export default ContactForm;
