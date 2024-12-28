'use client';

import React from 'react';
import Hero from './components/Hero';
import Featured from './components/Featured';
import FeaturedPropertyCard from './PropertyListing/components/FeaturedPropertyCard';
import CategoryCards from './components/CategoryCards';
import propertyData from '@/app/Data/propertyData'; // Assuming you have the property data
import Image from 'next/image';

// Define the type with id as string
interface FeaturedProperty {
	id: string; // id as a string
	images: string[];
	price: number;
	address: string;
}

const Home = () => {
	const categories = [
		{
			id: 1,
			title: 'Recommended Homes',
			imageSrc:
				'https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?t=st=1735153070~exp=1735156670~hmac=e9dede83ac71fd22064c860d3fdff765567b0ec39b434481749bf06c43967959&w=1060',
			count: 7,
		},
		{
			id: 2,
			title: 'New Listings',
			imageSrc:
				'https://img.freepik.com/free-photo/young-couple-moving-new-home-together-african-american-couple-with-cardboard-boxes_1157-40316.jpg?t=st=1735154852~exp=1735158452~hmac=56170940473965c4abfbbef69ecce6b8e1d2300f1bf888121d03f4dc4077664e&w=826',
			count: 700,
		},
		{
			id: 3,
			title: 'Price Reduced',
			imageSrc:
				'https://img.freepik.com/free-photo/close-up-house-near-coins_23-2147797561.jpg?t=st=1735153171~exp=1735156771~hmac=1452989d862c9d78b93831a555275cc8dfc7a5e19513fec0092772319ebe5239&w=740',
			count: 897,
		},
		{
			id: 4,
			title: 'New Listings',
			imageSrc:
				'https://img.freepik.com/free-photo/young-male-adult-taking-pictures-building_23-2148638746.jpg?t=st=1735153298~exp=1735156898~hmac=1cecc13c7cc761201f4922f75f412acdc3fd61f3b5475255929b5a03fffcf631&w=900',
			count: 700,
		},
		// ...more categories
	];

	// Select only the necessary data to pass to Featured component
	const featuredProperties: FeaturedProperty[] = propertyData
		.slice(0, 5)
		.map((property) => ({
			id: property.id.toString(), // Convert id to string
			images: property.images.livingRoom, // Assuming you want to use living room images
			price: property.price,
			address: property.address,
		}));

	return (
		<div className='mx-auto my-2 p-4 max-w-[1920px]'>
			<Hero />
			<div>
				{/* Featured component with required props */}
				<Featured
					title='Featured Properties'
					items={featuredProperties} // Pass the selected properties
					CardComponent={FeaturedPropertyCard} // Pass the card component to render properties
				/>
			</div>
			<div>
				<CategoryCards
					categories={categories}
					sectionTitle='Browse homes in Los Angeles, CA'
				/>
			</div>
			<section className='relative w-full grid grid-cols-12 gap-2'>
				{/* Left Content */}
				<div className='col-span-12 lg:col-span-5 flex flex-col justify-center items-start text-left p-3 md:p-6 lg:p-4'>
					<h2 className='text-2xl md:text-4xl lg:text-2xl font-bold text-gray-900 mb-3'>
						List Your Property, Earn More Today
					</h2>
					<p className='text-sm md:text-base lg:text-sm text-gray-900 mb-3'>
						Turn your property into a top-earning investment. List with us and
						showcase your space to thousands of buyers and renters ready to move
						in.
					</p>
					<div className='block md:flex items-center gap-4'>
						<button
							onClick={() => (window.location.href = '/get-started')}
							className='bg-blue-600 text-white py-2 px-5 rounded-md text-sm font-semibold md:text-base hover:bg-blue-700 transition-all'>
							Get Started
						</button>
						<p className=' cursor-pointer text-base mt-2 md:mt-0 text-gray-600 hover:underline transition-all'>
							Already have an account?{' '}
							<a href='/sign-in' className='text-blue-600'>
								Sign In
							</a>
						</p>
					</div>
				</div>

				{/* Right Image */}
				<div className='col-span-12 lg:col-span-6 relative'>
					<div className='relative w-full h-0 pb-[60%]'>
						<Image
							src='https://img.freepik.com/free-photo/toy-house-copyspace_23-2148144856.jpg?t=st=1735062700~exp=1735066300~hmac=43669de30ff1165e9121b396a54b81f8481baa7940455983541fe23f176596bc&w=1060'
							alt='List Your Property'
							layout='fill'
							objectFit='cover'
							className='rounded-lg'
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
