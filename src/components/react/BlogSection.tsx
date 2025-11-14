import { blogPosts } from '@/data/blog';

interface BlogSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export const BlogSection = ({ limit = 3, showViewAll = true }: BlogSectionProps) => {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-gsap="stagger-children">
        {posts.map((post) => (
          <article
            key={post.id}
            className="card-hover group flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden bg-gray-200">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Category and Read Time */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 text-xs font-secondary font-semibold text-primary bg-primary/10 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-body flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-h5 font-primary mb-3 group-hover:text-primary transition-colors">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h3>

              {/* Excerpt */}
              <p className="text-body text-sm mb-4 flex-grow line-clamp-3">
                {post.excerpt}
              </p>

              {/* Author and Date */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex-grow">
                  <p className="font-secondary font-semibold text-heading text-sm">
                    {post.author.name}
                  </p>
                  <p className="text-body text-xs">
                    {formatDate(post.publishedAt)}
                  </p>
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:text-primary-600 transition-colors"
                  aria-label="Read more"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View All Button */}
      {showViewAll && (
        <div className="text-center mt-12">
          <a href="/blog" className="btn-primary btn-lg">
            View All Articles
          </a>
        </div>
      )}

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogSection;
