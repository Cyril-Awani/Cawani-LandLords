import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
	id: string;
	title: string;
	category: string;
	minutesRead: number;
	author: string;
	description: string;
	imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
	title,
	category,
	minutesRead,
	author,
	description,
	imageUrl,
}) => {
	// Utility function to truncate the description
	const truncateText = (text: string, maxLength: number) => {
		return text.length > maxLength
			? text.substring(0, maxLength) + '...'
			: text;
	};

	return (
		<div className='group border rounded-lg shadow-md hover:shadow-lg transition-shadow'>
			<Image
				src={imageUrl}
				alt={title}
				width={500}
				height={300}
				className='rounded-t-lg mb-4'
				objectFit='cover'
				loading='lazy'
			/>

			<div className='p-4'>
				<h2 className='text-xl font-semibold transition-all group-hover:underline'>
					{title}
				</h2>
				<p className='text-sm text-gray-500'>
					By {author} | {category} | {minutesRead} min read
				</p>
				<p className='text-gray-700 mt-2'>{truncateText(description, 70)}</p>
			</div>
		</div>
	);
};

export default BlogCard;
