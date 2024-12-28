'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import AgentCard from './components/AgentCard'; // Path to AgentCard component
import { agents } from './data'; // Import your agents data
import AgentHero from './components/AgentHero';
import FaqAccordion from '../components/FaqAccordion';
import { faqDataAgent } from '../Data/faqData';

const AgentListPage: React.FC = () => {
	const router = useRouter();

	const handleCardClick = (id: string) => {
		router.push(`/agent/${id}`); // Navigate to the individual agent page
	};

	return (
		<div className='mx-auto my-2 p-4 max-w-[1920px]'>
			<AgentHero />
			<h1 className='text-3xl font-semibold my-6'>Meet Our Agents</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 px-4 gap-6 mb-6'>
				{agents.map((agent) => (
					<div
						key={agent.id}
						className='cursor-pointer'
						onClick={() => handleCardClick(agent.id)}>
						<AgentCard
							key={agent.id}
							id={agent.id}
							name={agent.name}
							agency={agent.agency}
							location={agent.location}
							profileImage={agent.profileImage}
							specialties={agent.specialties}
							bio={agent.bio}
							listings={agent.listings}
							lowestPrice={agent.priceRange.lowest} // Pass correct lowest price
							highestPrice={agent.priceRange.highest} // Pass correct highest price
							rating={agent.rating} // Pass rating
							reviewsCount={agent.reviewsCount} // Pass reviews count
						/>
					</div>
				))}
			</div>

			{/* Help Section with Adjusted Height */}
			<div
				className='relative w-full h-[250px] bg-cover bg-center mb-6 p-4'
				style={{
					backgroundImage:
						'url(https://delivery.digitalassets.zillowgroup.com/api/public/content/ZG_Brand_CHI_0822_LvlUp_BackExt_Tour_0291_1280x4502x_CMS_Full.webp)',
				}} // Replace with your image path
			>
				{/* Dark Overlay */}
				<div className='absolute inset-0 bg-black bg-opacity-40'></div>

				{/* Content */}
				<div className='absolute inset-0 flex flex-col justify-center items-start text-white p-4 md:p-6'>
					<h2 className='text-2xl md:text-3xl font-semibold mb-3'>
						Get help finding an agent
					</h2>
					<p className='text-base md:text-lg mb-4'>
						We`ll pair you with an Awani Agent who has the inside scoop on your
						market.
					</p>
					<button className='px-5 py-2 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-600 transition'>
						Get Connected
					</button>
				</div>
			</div>
			<FaqAccordion faqData={faqDataAgent} />
		</div>
	);
};

export default AgentListPage;
