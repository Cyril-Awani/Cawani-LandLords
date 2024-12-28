// BlogListPage.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import BlogCard from './components/BlogCard'; // Path to BlogCard component
import { blogPosts } from './data'; // Import your blog data
import BlogHero from './components/BlogHero';

const BlogListPage: React.FC = () => {
	const router = useRouter();

	const handleCardClick = (id: string) => {
		router.push(`/blog/${id}`); // Navigate to the individual blog post page
	};

	return (
		<div className='max-w-6xl mx-auto p-4'>
			{/* Navbar Section */}
			<div className='bg-gray-800 text-white p-4 mb-10'>
				<div className='flex items-center justify-between'>
					{/* Links on the left */}
					<div className='flex space-x-8'>
						<a href='#buying' className='hover:text-gray-400'>
							Buying
						</a>
						<a href='#selling' className='hover:text-gray-400'>
							Selling
						</a>
						<a href='#renting' className='hover:text-gray-400'>
							Renting
						</a>
						<a href='#diys' className='hover:text-gray-400'>
							DIYs
						</a>
						<a href='#celebrity-homes' className='hover:text-gray-400'>
							Celebrity Homes
						</a>
						<a href='#design-trends' className='hover:text-gray-400'>
							Design Trends
						</a>
					</div>

					{/* Search Bar on the right */}
					<div className='flex items-center'>
						<input
							type='text'
							placeholder='Search articles...'
							className='p-2 rounded-md bg-gray-700 text-white focus:outline-none'
						/>
					</div>
				</div>
			</div>

			{/* Hero Section */}
			<BlogHero />

			{/* Blog Posts Section */}
			<h1 className='text-3xl font-semibold mb-6'>Blog Posts</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{blogPosts.map((post) => (
					<div
						key={post.id}
						className='cursor-pointer'
						onClick={() => handleCardClick(post.id)}>
						<BlogCard
							id={post.id}
							imageUrl={post.imageUrl}
							title={post.title}
							category={post.category}
							minutesRead={post.minutesRead}
							author={post.author}
							description={post.description}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogListPage;
