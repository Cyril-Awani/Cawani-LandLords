'use client';

import React from 'react';
import Image from 'next/image';

interface CategoryCard {
	id: string | number;
	title: string;
	imageSrc: string;
	count: number;
}

interface CategoryCardsProps {
	categories: CategoryCard[];
	sectionTitle: string;
}

const CategoryCards: React.FC<CategoryCardsProps> = ({
	categories,
	sectionTitle,
}) => {
	return (
		<div className='category-cards-section py-10'>
			<h2 className='text-2xl font-bold text-left mb-6'>{sectionTitle}</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
				{categories.map((category) => (
					<div
						key={category.id}
						className='relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group'>
						<div className='relative h-48'>
							<Image
								src={category.imageSrc}
								alt={category.title}
								fill
								className='object-cover group-hover:scale-110 transition-transform duration-300'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</div>
						<div className='absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300' />
						<div className='absolute inset-0'>
							<h3 className='absolute text-white top-4 left-4 text-lg font-bold'>
								{category.title}
							</h3>
							<p className='absolute bottom-4 right-4 text-sm font-bold bg-white rounded-full text-black p-4 flex items-center justify-center w-7 h-7'>
								{category.count.toLocaleString()}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryCards;
