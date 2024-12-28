import React from 'react';
import Image from 'next/image';
import { Star } from '@mui/icons-material';

interface AgentCardProps {
	id: string;
	name: string;
	agency: string;
	location: string;
	profileImage: string;
	specialties: string[];
	bio: string;
	listings: string[];
	lowestPrice: number;
	highestPrice: number;
	rating: number;
	reviewsCount: number; // Add reviewsCount to hold the review count
}

// Helper function to format prices with k for thousands
const formatPrice = (price: number): string => {
	if (price >= 1000000) {
		return `₦${(price / 1000000).toFixed(1)}M`; // Format as millions (e.g., ₦1.2M)
	} else if (price >= 1000) {
		return `₦${(price / 1000).toFixed(0)}k`; // Format as thousands (e.g., ₦100k)
	} else {
		return `₦${price.toLocaleString()}`; // Format as normal if below 1000
	}
};

const AgentCard: React.FC<AgentCardProps> = ({
	name,
	agency,
	location,
	profileImage = '/placeholder.jpg', // Default placeholder image
	specialties = [],
	lowestPrice = 0,
	highestPrice = 0,
	rating = 0,
	reviewsCount = 0,
}) => {
	const formattedLowestPrice = !isNaN(lowestPrice) ? lowestPrice : 0;
	const formattedHighestPrice = !isNaN(highestPrice) ? highestPrice : 0;

	return (
		<div className='agent-card grid grid-cols-10 gap-6 p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow'>
			{/* Image Section */}
			<div className='col-span-4 flex justify-center items-center'>
				<div className='relative w-24 h-24 rounded-full overflow-hidden border border-gray-300 flex justify-center items-center'>
					<Image
						src={profileImage}
						alt={`Profile picture of ${name}`}
						layout='fill'
						objectFit='cover'
						className='rounded-full'
					/>
				</div>
			</div>

			{/* Details Section */}
			<div className='col-span-6'>
				<div className='flex items-center justify-between'>
					<div>
						<h3 className='text-2xl font-semibold text-gray-800'>{name}</h3>
						<p className='text-sm text-gray-500'>{agency}</p>
						<p className='text-sm text-gray-400'>{location}</p>
					</div>
					<div className='mt-4 flex items-center'>
						<div
							className='flex items-center text-yellow-500'
							aria-label={`${rating} stars from ${reviewsCount} reviews`}>
							<Star fontSize='small' className='text-yellow-500' />
							<span className='ml-1 text-sm text-gray-500'>
								{rating.toFixed(1)}★ ({reviewsCount.toLocaleString()})
							</span>
						</div>
					</div>
				</div>

				{/* Specialties Section */}
				<div className='mt-4'>
					<p className='font-medium text-gray-700'>Specialties:</p>
					<div className='flex flex-wrap gap-2'>
						{specialties.length > 0 ? (
							specialties.map((specialty, index) => (
								<span
									key={index}
									className='px-3 py-1 bg-gray-200 text-sm text-gray-700 rounded-full'>
									{specialty}
								</span>
							))
						) : (
							<span className='text-sm text-gray-500'>
								No specialties listed
							</span>
						)}
					</div>
				</div>

				{/* Price Range Section */}
				<div className='mt-4'>
					<p className='font-medium text-gray-700'>Price Range:</p>
					<p className='text-sm text-gray-600'>
						{lowestPrice === highestPrice
							? formatPrice(formattedLowestPrice)
							: `${formatPrice(formattedLowestPrice)} - ${formatPrice(
									formattedHighestPrice,
							  )}`}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AgentCard;
