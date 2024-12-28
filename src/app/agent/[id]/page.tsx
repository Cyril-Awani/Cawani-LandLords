'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { agents } from '../data'; // Import the data from data.ts
import { sampleReviews } from '../sampleReviews ';
import Image from 'next/image';
import ContactsIcon from '@mui/icons-material/Contacts';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StarIcon from '@mui/icons-material/Star';
import ReviewCard from '../components/ReviewCard'; // Import ReviewCard component

const AgentDetailPage: React.FC = () => {
	const { id } = useParams();
	const agent = agents.find((agent) => agent.id === id);

	if (!agent) {
		return <p>Agent not found.</p>;
	}

	const formatPrice = (price: number): string => {
		if (price >= 1000000) {
			return `₦${(price / 1000000).toFixed(1)}M`;
		} else if (price >= 1000) {
			return `₦${(price / 1000).toFixed(0)}k`;
		} else {
			return `₦${price.toLocaleString()}`;
		}
	};

	return (
		<div className='max-w-4xl mx-auto p-8'>
			{/* Profile Section */}
			<div className='grid grid-cols-12 gap-6 border p-6 rounded-lg'>
				<div className='col-span-5 relative border-r pr-6'>
					<Image
						src={agent.profileImage}
						alt={`${agent.name} profile`}
						layout='fill'
						objectFit='cover'
						className='w-full h-full rounded-lg'
					/>
					<div className='absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg'>
						<h1 className='text-2xl font-semibold'>{agent.name}</h1>
					</div>
				</div>
				<div className='col-span-7 pl-6'>
					<h3 className='text-lg font-semibold mt-4'>About {agent.name}</h3>
					<p className='text-sm text-gray-500'>{agent.agency}</p>
					<p className='text-sm text-gray-500'>{agent.location}</p>
					<p className='text-gray-700 mt-2'>{agent.bio}</p>
				</div>
			</div>

			{/* Contact Info and Listings Section */}
			<div className='grid grid-cols-12 gap-6 border p-6 rounded-lg mt-6'>
				<div className='col-span-8'>
					{/* Contact Info */}
					<div>
						<h3 className='text-lg font-semibold'>Contact Info:</h3>
						<div className='flex flex-row gap-4 justify-start items-center'>
							<p className='text-gray-700 mt-2 flex items-center'>
								<ContactsIcon className='mr-2' /> {agent.contactInfo.phone}
							</p>
							<p className='text-gray-700 flex items-center'>
								<AlternateEmailIcon className='mr-2' />{' '}
								{agent.contactInfo.email}
							</p>
						</div>
					</div>

					{/* Additional Details */}
					<div className='mt-6'>
						<p className='text-gray-700'>
							<strong>Price Range:</strong>{' '}
							{formatPrice(agent.priceRange.lowest)} -{' '}
							{formatPrice(agent.priceRange.highest)}
						</p>
						<p className='text-gray-700'>
							<strong>Language:</strong> {agent.language.join(', ')}
						</p>
						<p className='text-gray-700'>
							<strong>Experience:</strong> {agent.experience} years
						</p>

						{/* Reviews Section */}
						<div>
							<div className='flex flex-row items-center justify-between'>
								<div className='text-gray-700 items-center'>
									<strong>{agent.name} Reviews</strong>
									<p className='ml-1 text-sm text-gray-500'>
										about ({agent.reviewsCount} reviews)
									</p>
								</div>
								<p>
									<StarIcon className='ml-2 text-yellow-500' /> {agent.rating}★
								</p>
							</div>

							{/* Render reviews */}
							{sampleReviews.map((review, index) => (
								<ReviewCard key={index} {...review} />
							))}
						</div>
					</div>

					{/* Listings */}
					<div className='mt-6'>
						<h3 className='text-lg font-semibold'>Listings:</h3>
						<ul className='list-disc pl-5'>
							{agent.listings.map((listing, index) => (
								<li key={index}>{listing}</li>
							))}
						</ul>
					</div>
				</div>

				{/* Right Section */}
				<div className='col-span-4'>
					<div className='border p-4 rounded-lg h-full flex items-center justify-center bg-gray-100'>
						<p>Right Content Here</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AgentDetailPage;
