// components/ReviewCard.tsx
import React from 'react';
import { Avatar } from '@mui/material'; // To show a profile image
import StarIcon from '@mui/icons-material/Star'; // For rating stars

interface ReviewCardProps {
	name: string;
	profileImage: string;
	rating: number;
	date: string;
	comment: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
	name,
	profileImage,
	rating,
	date,
	comment,
}) => {
	return (
		<div className='border p-4 rounded-lg my-4'>
			<div className='flex flex-row items-center justify-between'>
				<div className='flex items-center'>
					<Avatar alt={name} src={profileImage} className='mr-4' />
					<div>
						<h4 className='font-semibold'>{name}</h4>
						<p className='text-sm text-gray-500'>{date}</p>
					</div>
				</div>
				<div className='flex items-center mt-2'>
					{[...Array(5)].map((_, index) => (
						<StarIcon
							key={index}
							className={`text-yellow-500 ${
								index < rating ? '' : 'opacity-50'
							}`}
						/>
					))}
				</div>
			</div>

			<p className='mt-2 text-gray-700'>{comment}</p>
		</div>
	);
};

export default ReviewCard;
