import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/utils/toast-store';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const NewsletterSubscribe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Replace with actual API call
      console.log('Newsletter subscription:', data);

      toast.success('Success! You\'re now subscribed to our newsletter.');
      reset();
    } catch (error) {
      toast.error('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-secondary font-bold text-white mb-4">Newsletter</h3>
      <p className="text-gray-400 text-sm mb-4">
        Subscribe to get special offers, recipes, and coffee tips
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your email"
            className={`w-full px-4 py-3 rounded-lg bg-secondary-800 border-2 focus:outline-none transition-colors text-white placeholder-gray-500 ${
              errors.email
                ? 'border-red-500 focus:border-red-600'
                : 'border-secondary-700 focus:border-primary'
            }`}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary px-6 py-3 rounded-lg font-secondary font-semibold whitespace-nowrap relative"
        >
          {isSubmitting ? (
            <>
              <span className="opacity-0">Subscribe</span>
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
            'Subscribe'
          )}
        </button>
      </form>

      <p className="text-gray-500 text-xs mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSubscribe;
