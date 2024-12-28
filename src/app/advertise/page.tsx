'use client'; // Mark this component as a Client Component

import React from 'react';
import Image from 'next/image';

import CtaBtn from '../PropertyListing/components/CtaBtn';
import FaqAccordion from '../components/FaqAccordion'; // Adjust the import path if necessary

const cardData = [
	{
		id: 1,
		users: '600 Users',
		imageUrl:
			'https://img.freepik.com/free-photo/real-estate-accommodation-property-investment-graphic-word_53876-121003.jpg?t=st=1735382310~exp=1735385910~hmac=b1e1a62cb9b46b10d2de7c139e8fff25d6f4c727d3d6e41ff3744382d5382f56&w=900',
		title: 'Real Estate Marketing Pro',
		description:
			'Maximize your outreach with advanced email marketing strategies designed for real estate agents and agencies. Drive engagement and close more deals.',
	},
	{
		id: 2,
		users: '400 Users',
		imageUrl:
			'https://img.freepik.com/free-photo/young-couple-moving-new-home-together-african-american-couple-with-cardboard-boxes_1157-40331.jpg?t=st=1735382684~exp=1735386284~hmac=df4a0fd9cff44aa5e74090d2c4dc5499203b6d68d72cc1ce5bb0c3a8b7fe4019&w=900',
		title: 'Relocation Services',
		description:
			'Support homebuyers and renters in transitioning seamlessly with relocation services. Enhance your client experience with hassle-free solutions.',
	},
	{
		id: 3,
		users: '200 Users',
		imageUrl:
			'https://img.freepik.com/free-photo/safety-tools-painting-work_23-2148908402.jpg?t=st=1735388259~exp=1735391859~hmac=53e2803a841cf73f31c6439449fe94b5fde2d8f1374dbd1a705e09cb5be1cfc0&w=900',
		title: 'Home Improvement Contractors',
		description:
			'Connect clients with trusted contractors for home improvements. Elevate your real estate offering by providing renovation and upgrade services.',
	},
	{
		id: 4,
		users: '300 Users',
		imageUrl:
			'https://img.freepik.com/premium-photo/selective-focus-microchip-credit-card-debit-card-calculator-financial-concept_38172-78.jpg?w=740',
		title: 'Mortgaging and Financing',
		description:
			'Guide your clients through financing options with personalized mortgage and financing solutions. Streamline the home buying process with tailored advice.',
	},
	{
		id: 5,
		users: '500 Users',
		imageUrl:
			'https://img.freepik.com/free-photo/court-hammer-books-judgment-law-concept_144627-30457.jpg?t=st=1735382904~exp=1735386504~hmac=d81cfde18eba8d6ca57d5fc3476428a63310c814bb747cba4539f163a2697b41&w=900',
		title: 'Legal and Insurance',
		description:
			'Ensure your clients’ assets are protected with reliable legal and insurance services. Secure their peace of mind with expert guidance.',
	},
	{
		id: 6,
		users: '100 Users',
		imageUrl:
			'https://img.freepik.com/free-photo/location-symbol-beautiful-city_23-2149764128.jpg?t=st=1735382983~exp=1735386583~hmac=8a5ba74e1a4c7bd022aacfe2e267779d81c2e16b9c5aa3fb2a9fea43b677dd0e&w=740',
		title: 'Brand and Local Advertisement',
		description:
			'Boost visibility for your real estate brand with tailored local advertising. Attract more clients by strategically placing your business in front of the right audience.',
	},
];

const faqData = [
	{
		id: '1',
		question: 'How to create an account?',
		answer:
			"To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
	},
	{
		id: '2',
		question: 'Have any trust issue?',
		answer:
			'Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence and achieve your content marketing goals with ease.',
	},
	{
		id: '3',
		question: 'How can I reset my password?',
		answer:
			'To reset your password, go to the login page and click on the "Forgot Password?" link. Follow the prompts to receive a password reset email and create a new password.',
	},
	{
		id: '4',
		question: 'What is the payment process?',
		answer:
			'Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence and achieve your content marketing goals with ease.',
	},
];

const Advertise = () => {
	return (
		<div className='relative mx-auto my-2 p-4 bg-white rounded-lg max-w-7xl'>
			{/* Hero Background */}
			<div
				className='absolute inset-0 -z-10'
				style={{
					background:
						'linear-gradient(180deg, #000, transparent 50%), linear-gradient(90deg, #17d1c6, #336aea 19.84%, #8d639e 39.68%, #eb644c 59.52%, #ea7e11 79.36%, #44b678 99.2%), linear-gradient(0deg, transparent, #000 40%)',
					height: '40%',
					top: '60%',
				}}></div>

			{/* Hero Section */}
			<div className='relative flex items-center justify-center lg:h-[300px]'>
				{/* Hero Image */}
				<Image
					src='https://img.freepik.com/free-photo/sassy-stylish-african-american-hipster-girl-pink-hoodie-pointing-left-blank-white-space_176420-44312.jpg?ga=GA1.1.331490712.1724411926&semt=ais_hybrid'
					alt='Ad Hero Img'
					width={1200}
					height={400}
					className='w-full h-full object-cover rounded-lg'
					priority={true} // Ensures the hero image loads quickly
				/>

				{/* Hero Text */}
				<div className='absolute inset-0 flex flex-col justify-center items-start p-8 lg:p-16 text-white'>
					<h4 className='text-3xl md:text-4xl xl:text-6xl font-bold leading-tight'>
						Transform millions of curious visitors at Cawani.com®
					</h4>
					<p className='text-base lg:text-md mt-2 font-medium'>
						Free landing page template to promote your business startup and
						generate leads for the offered services.
					</p>
					<p className='mt-4'>
						<CtaBtn
							text='Get Started'
							className='py-4 px-12 bg-violet-600 hover:bg-violet-700 text-white rounded-md'
						/>
					</p>
				</div>
			</div>

			<div className='flex flex-col items-center justify-center'>
				<h1 className='text-center text-xl lg:text-2xl font-semibold '>
					What Category Soothes Your Niche?
				</h1>
				<p className='text-center'>
					Let`s help the millions of visitors find what you have
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
				{cardData.map((card) => (
					<div
						key={card.id}
						className='relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105'>
						<div className='relative h-48 w-full'>
							{/* User Badge */}
							<div className='absolute text-xs md:text-base p-2 top-3 right-3 rounded-full bg-violet-600 text-white shadow z-10'>
								{card.users}
							</div>
							<a href='#'>
								<Image
									className='rounded-t-lg'
									src={card.imageUrl}
									alt={`Image for ${card.title}`}
									loading='lazy'
									fill
									style={{ objectFit: 'cover' }}
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</a>
						</div>

						<div className='p-4'>
							<div>
								<a href='#'>
									<h5 className='text-md md:text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white'>
										{card.title}
									</h5>
								</a>
								<p className='antialiased text-xs md:text-sm text-gray-600 dark:text-gray-400 break-all'>
									{card.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='py-24'>
				<FaqAccordion faqData={faqData} />
			</div>
		</div>
	);
};

export default Advertise;
