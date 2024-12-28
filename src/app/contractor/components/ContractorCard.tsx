import React from 'react';
import Image from 'next/image';

interface ContractorCardProps {
	profileImage: string; // Path or URL to the profile image
	name: string;
	job: string;
	position?: string;
	company?: string; // Optional company field
	location: string;
	stars: number; // Number of stars (0 to 5)
	status: 'active' | 'inactive'; // Status type
	joinedYear: string; // Year the contractor joined
}

const ContractorCard: React.FC<ContractorCardProps> = ({
	profileImage,
	name,
	job,
	position,
	company,
	location,
	status,
	stars,
	joinedYear,
}) => {
	const statusColor =
		status === 'active'
			? 'bg-green-100 text-green-700'
			: 'bg-red-100 text-red-700';
	const starsArray = React.useMemo(() => [...Array(5)], []);

	return (
		<div className='max-w-lg flex flex-row md:flex-col w-full p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all'>
			{/* Image Section */}
			<div className='flex flex-col items-center justify-center gap-2 md:bg-gray-100 md:p-6 md:rounded-xl'>
				<div className='relative w-24 h-24 rounded-full overflow-hidden border border-gray-300 flex justify-center items-center'>
					<Image
						src={profileImage}
						alt={name}
						layout='fill'
						objectFit='cover'
						className='rounded-full'
					/>
				</div>
				{/* Buttons */}
				<div className='mt-4 flex gap-2'>
					<button className='flex whitespace-nowrap items-center justify-center px-2 py-1 text-[10px] font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition-all cursor-pointer'>
						View Profile
					</button>
					<button className='flex items-center justify-center px-2 py-1 text-[10px] font-medium text-blue-500 border border-blue-500 hover:bg-blue-100 rounded-lg shadow-md transition-all cursor-pointer'>
						Contact
					</button>
				</div>
			</div>

			{/* Horizontal Line on Small Screens */}
			<div className='md:hidden'>
				<hr className='border-t-2 border-gray-200 my-4' />
			</div>

			{/* Details Section */}
			<div className='flex-1 text-left mt-4 md:text-center pl-4 md:pl-0'>
				<p className='text-sm text-gray-500'>{job}</p>
				<div>
					<h3 className='text-xl font-semibold'>{name}</h3>
				</div>
				<p className='text-sm text-gray-600'>
					{position}{' '}
					{company && <span className='font-medium'>@ {company}</span>}
				</p>
				<p className='text-sm text-gray-500'>{location}</p>

				{/* Stars and Status */}
				<div className='mt-4 flex items-center justify-between'>
					<div className='flex items-center'>
						{/* Render Stars */}
						{starsArray.map((_, index) => (
							<svg
								key={index}
								className={`w-4 h-4 ${
									index < stars ? 'text-yellow-500' : 'text-gray-300'
								}`}
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'>
								<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
							</svg>
						))}
					</div>
					<div
						className={`flex items-center gap-2 text-xs md:text-sm px-1 py-1 rounded-full ${statusColor}`}>
						<span className='w-2 h-2 rounded-full bg-current'></span>
						{status
							? status.charAt(0).toUpperCase() + status.slice(1)
							: 'Unknown'}
					</div>
				</div>

				{/* Joined Year */}
				<div className='mt-4 text-sm text-left text-gray-500'>
					<p>
						<span className='font-medium'>Joined:</span> {joinedYear}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContractorCard;
