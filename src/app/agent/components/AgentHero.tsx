import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const AgentHero = () => {
	// State to track selected option
	const [searchType, setSearchType] = useState('Agent');

	return (
		<div
			className='relative flex flex-col rounded-lg items-center justify-center bg-cover bg-center min-h-[60vh] p-6'
			style={{
				backgroundImage:
					'url(https://img.freepik.com/free-photo/come-my-arms-portrait-joyful-friendly-happy-handsome-african-american-man-with-beard-s_1258-115233.jpg?t=st=1735228505~exp=1735232105~hmac=90bc02c41a2a9492a68e5294dcc38298a362fa4bfdc7336211b5c9c65f529142&w=1060)',
			}}>
			{/* Overlay */}
			<div className='absolute rounded inset-0 bg-black opacity-50'></div>

			{/* Content */}
			<div className='relative z-10 text-black text-left max-w-[90%] w-full sm:max-w-[540px] md:max-w-[720px]'>
				<h1 className='text-2xl sm:text-3xl md:text-7xl text-white font-bold mb-4'>
					Find an Agent®
				</h1>
				<p className='text-sm sm:text-base md:text-xl text-white mb-6'>
					Search for your agent from more than 1 million REALTORS® nationwide
				</p>

				<div>
					<p className='text-left text-white text-sm mb-2'>Enter Search</p>
					<div className='flex flex-col gap-4 sm:flex-row sm:gap-4 pt-0 rounded w-full'>
						{/* Dropdown to select Agent or Company */}
						<div className='relative w-full sm:flex-1'>
							<select
								className='w-full border text-lg roundeds p-2 border-gray-300 appearance-none bg-white pr-10'
								value={searchType}
								onChange={(e) => setSearchType(e.target.value)}>
								<option value='Agent'>Agent</option>
								<option value='Company'>Company</option>
							</select>
							<KeyboardArrowDownIcon className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500' />
						</div>

						{/* Conditional rendering of input fields */}
						<div className='flex gap-2 sm:flex-row sm:gap-4 sm:py-0'>
							<input
								type='text'
								placeholder='Search Area'
								className='w-full p-2 border border-gray-300 rounded'
							/>
							{searchType === 'Agent' && (
								<input
									type='text'
									placeholder='Agent name'
									className='w-full p-2 border border-gray-300 rounded'
								/>
							)}
							{searchType === 'Company' && (
								<input
									type='text'
									placeholder='Company name'
									className='w-full p-2 border border-gray-300 rounded'
								/>
							)}
						</div>

						{/* Search Button */}
						<button className='bg-blue-500 rounded-full text-white px-4 py-2  hover:bg-blue-600'>
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AgentHero;
