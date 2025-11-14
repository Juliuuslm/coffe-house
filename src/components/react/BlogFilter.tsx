import { useState, useMemo } from 'react';
import { blogPosts } from '@/data/blog';
import type { BlogPost } from '@/data/blog';

interface BlogFilterProps {
  initialCategory?: string;
  initialTag?: string;
}

export const BlogFilter = ({ initialCategory, initialTag }: BlogFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [selectedTag, setSelectedTag] = useState<string>(initialTag || 'All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Get unique categories and tags
  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map((post) => post.category)));
    return ['All', ...cats.sort()];
  }, []);

  const tags = useMemo(() => {
    const allTags = blogPosts.flatMap((post) => post.tags);
    const uniqueTags = Array.from(new Set(allTags));
    return ['All', ...uniqueTags.sort()];
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6" data-gsap="fade-up">
        {/* Search */}
        <div>
          <label htmlFor="search" className="block text-sm font-secondary font-semibold mb-2">
            Search Articles
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              placeholder="Search by title, content, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-secondary font-semibold mb-3">
            Filter by Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-secondary font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tag Filter */}
        <div>
          <label className="block text-sm font-secondary font-semibold mb-3">Filter by Tag</label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-secondary font-semibold transition-all ${
                  selectedTag === tag
                    ? 'bg-primary text-white'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-body">
            Showing <span className="font-semibold text-heading">{filteredPosts.length}</span> of{' '}
            <span className="font-semibold text-heading">{blogPosts.length}</span> articles
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-gsap="stagger-children">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="card-hover group flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden bg-gray-200 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                {post.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-secondary font-bold">
                    Featured
                  </div>
                )}
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
                <p className="text-body text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-primary bg-primary/5 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

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
                    <p className="text-body text-xs">{formatDate(post.publishedAt)}</p>
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
      ) : (
        <div className="text-center py-16" data-gsap="fade-up">
          <svg
            className="w-16 h-16 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-h5 font-primary text-heading mb-2">No articles found</p>
          <p className="text-body mb-6">Try adjusting your filters or search query</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedTag('All');
              setSearchQuery('');
            }}
            className="btn-primary"
          >
            Clear All Filters
          </button>
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

export default BlogFilter;
