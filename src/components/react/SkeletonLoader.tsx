interface SkeletonLoaderProps {
  variant?: 'text' | 'circle' | 'rectangular' | 'card';
  width?: string;
  height?: string;
  className?: string;
  count?: number;
}

export const SkeletonLoader = ({
  variant = 'rectangular',
  width,
  height,
  className = '',
  count = 1
}: SkeletonLoaderProps) => {
  const baseClasses = 'animate-pulse bg-gray-200';

  const variantClasses = {
    text: 'h-4 rounded',
    circle: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-2xl',
  };

  const skeletonElement = (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        width: width || (variant === 'circle' ? height : '100%'),
        height: height || (variant === 'text' ? '1rem' : '200px'),
      }}
    />
  );

  if (count === 1) {
    return skeletonElement;
  }

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="mb-2">
          {skeletonElement}
        </div>
      ))}
    </>
  );
};

// Pre-built skeleton patterns
export const SkeletonCard = () => (
  <div className="card p-6 space-y-4">
    <SkeletonLoader variant="rectangular" height="200px" />
    <SkeletonLoader variant="text" width="60%" />
    <SkeletonLoader variant="text" width="80%" />
    <SkeletonLoader variant="text" width="40%" />
  </div>
);

export const SkeletonBlogPost = () => (
  <div className="card overflow-hidden">
    <SkeletonLoader variant="rectangular" height="250px" className="rounded-none" />
    <div className="p-6 space-y-3">
      <SkeletonLoader variant="text" width="30%" height="20px" />
      <SkeletonLoader variant="text" width="90%" height="24px" />
      <SkeletonLoader variant="text" width="100%" />
      <SkeletonLoader variant="text" width="100%" />
      <div className="flex items-center gap-3 pt-4">
        <SkeletonLoader variant="circle" width="40px" height="40px" />
        <div className="flex-1 space-y-2">
          <SkeletonLoader variant="text" width="40%" />
          <SkeletonLoader variant="text" width="30%" />
        </div>
      </div>
    </div>
  </div>
);

export const SkeletonTestimonial = () => (
  <div className="bg-white rounded-2xl p-8 space-y-4">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <SkeletonLoader key={i} variant="circle" width="20px" height="20px" />
      ))}
    </div>
    <SkeletonLoader variant="text" count={3} />
    <div className="flex items-center gap-4 pt-4">
      <SkeletonLoader variant="circle" width="56px" height="56px" />
      <div className="flex-1 space-y-2">
        <SkeletonLoader variant="text" width="50%" />
        <SkeletonLoader variant="text" width="30%" />
      </div>
    </div>
  </div>
);

export default SkeletonLoader;
