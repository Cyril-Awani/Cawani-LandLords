'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Disclosure, DisclosureButton } from '@headlessui/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IosShareIcon from '@mui/icons-material/IosShare';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FlagIcon from '@mui/icons-material/Flag';
import { CheckCircleOutline } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ElevatorIcon from '@mui/icons-material/Elevator';
import SecurityIcon from '@mui/icons-material/Security';
import PetsIcon from '@mui/icons-material/Pets';
import WifiIcon from '@mui/icons-material/Wifi';
import BalconyIcon from '@mui/icons-material/Balcony';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import GardenIcon from '@mui/icons-material/Yard';
import SoapIcon from '@mui/icons-material/Soap';
import AccessibleIcon from '@mui/icons-material/Accessible';
import SpaIcon from '@mui/icons-material/Spa';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ToysIcon from '@mui/icons-material/Toys';
import BusinessIcon from '@mui/icons-material/Business';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import StoreIcon from '@mui/icons-material/Store';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import PowerIcon from '@mui/icons-material/Power';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import PropertyInquiry from '../components/proprtyinquiryform';

const brief = {
	description: `This individually owned and managed property is a clean and
	  well-kept 3 bedroom, 2 bathroom house in Bixby is 1527 sq. ft and
	  has a 2 car garage with electric garage door opener. Backyard has
	  a covered patio where you could enjoy breakfast on your days off.
	  The back of the house is on the east so the yard receives morning
	  sun, but has shade in hot afternoons. The spacious living room has
	  plenty of space for two large couches or a sectional plus
	  comfortable chairs, a coffee table and a desk and chair for a home
	  office space.`,
};

const interiorFeatures = [
	'Beds: 4',
	'Baths: 3',
	'Floor: Tiled Floors',
	'Kitchen-Top: Granite Countertops',
	'Wardrobe',
];

const basicDetails = [
	{
		icon: <OtherHousesIcon className='w-5 h-5 text-txt' />,
		label: 'Duplex',
		description: 'Property Type',
	},
	{
		icon: <BedIcon className='w-5 h-5 text-txt' />,
		label: '2',
		description: 'Bedroom',
	},
	{
		icon: <ShowerIcon className='w-5 h-5 text-txt' />,
		label: '3',
		description: 'Bathroom',
	},
	{
		icon: <AvTimerIcon className='w-5 h-5 text-txt' />,
		label: '3rd April',
		description: 'Available From',
	},
	{
		icon: <PetsIcon className='w-5 h-5 text-txt' />,
		label: 'Yes',
		description: 'Pets',
	},
];

const exteriorFeatures = [
	'Garage',
	'Swimming Pool',
	'Large Backyard',
	'Outdoor Kitchen',
];
const monthlyPayments = [
	{
		name: 'Security Fee',
		amount: '100',
		description: 'Monthly security service fee',
	},
	{
		name: 'Garbage and Trash',
		amount: '50',
		description: 'Monthly waste management fee',
	},
	{ name: 'Gas', amount: '70', description: 'Average monthly gas bill' },
	{
		name: 'Electricity',
		amount: '120',
		description: 'Average monthly electricity bill',
	},
	{ name: 'Water', amount: '40', description: 'Monthly water bill' },
];
const landlordPolicies = [
	{
		policy: 'Pets Allowed',
		description: 'Small pets are welcome. Extra deposit required.',
	},
	{
		policy: 'Smoking Policy',
		description: 'No smoking allowed inside the property.',
	},
	{
		policy: 'Deposit Required',
		description: "One month's rent as a security deposit.",
	},
	{
		policy: 'Subletting',
		description: 'Subletting is permitted with prior approval.',
	},
	{
		policy: 'Parking',
		description:
			'One parking space included. Additional space available for rent.',
	},
	{
		policy: 'Renovation',
		description: 'Renovation and hanging is considered destructive to property',
	},
];
const propertyTabs = [
	{ label: '1 Bed', properties: ['Property A', 'Property E'] },
	{ label: '2 Beds', properties: ['Property B', 'Property G', 'Property H'] },
	{ label: '3 Beds', properties: ['Property J'] },
	{
		label: '4+ Beds',
		properties: ['Property F', 'Property D', 'Property J', 'Property K'],
	},
];

const allProperties = propertyTabs.reduce(
	(acc, tab) => acc.concat(tab.properties),
	[],
);
const updatedPropertyTabs = [
	{ label: 'All', properties: allProperties },
	...propertyTabs,
];

const PropertyDetails = ({ params }) => {
	const amenities = [
		{ name: 'Air Conditioning', icon: CheckCircleOutlineIcon },
		{ name: 'Swimming Pool', icon: PoolIcon },
		{ name: 'Fitness Center', icon: FitnessCenterIcon },
		{ name: 'Parking Garage', icon: LocalParkingIcon },
		{ name: 'Elevator', icon: ElevatorIcon },
		{ name: '24/7 Security', icon: SecurityIcon },
		{ name: 'Pet Friendly', icon: PetsIcon },
		{ name: 'High-Speed Internet', icon: WifiIcon },
		{ name: 'Balcony', icon: BalconyIcon },
		{ name: 'Fireplace', icon: FireplaceIcon },
		{ name: 'Garden', icon: GardenIcon },
		{ name: 'Washer/Dryer', icon: SoapIcon },
		{ name: 'Wheelchair Accessible', icon: AccessibleIcon },
		{ name: 'Spa', icon: SpaIcon },
		{ name: 'Tennis Court', icon: SportsTennisIcon },
		{ name: 'Playground', icon: ToysIcon },
		{ name: 'Business Center', icon: BusinessIcon },
		{ name: 'Conference Room', icon: MeetingRoomIcon },
		{ name: 'Storage Units', icon: StoreIcon },
		{ name: 'BBQ Area', icon: OutdoorGrillIcon },
		{ name: 'Prepaid', icon: PowerIcon },
	];
	const sortedAmenities = amenities.sort((a, b) =>
		a.name.localeCompare(b.name),
	);
	const [visibleItems, setVisibleItems] = useState(10); // Initially show 10 items

	const showMoreItems = () => {
		setVisibleItems((prev) => prev + 10); // Show 10 more items on click
	};
	type Category = 'kitchen' | 'living' | 'bathroom' | 'exterior';
	const images: Record<Category, string[]> = {
		kitchen: [
			'https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
		living: [
			'https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
		bathroom: [
			'https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
		exterior: [
			'https://images.unsplash.com/photo-1725776339684-30dda601552e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
		],
	};
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([
		'kitchen',
	]); // Default selected categories

	// Create a flat array of all images across all categories
	const allImages = Object.values(images).flat();

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => {
			const newIndex = (prevIndex + 1) % allImages.length; // Navigate through all images
			return newIndex; // Return the new index
		});
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => {
			const newIndex = (prevIndex - 1 + allImages.length) % allImages.length; // Navigate through all images
			return newIndex; // Return the new index
		});
	};

	const handleCategoryClick = (category: string) => {
		setSelectedCategories((prev) => {
			if (prev.includes(category)) {
				// If the category is already selected, remove it
				return prev.filter((cat) => cat !== category);
			} else {
				// Otherwise, add the category
				return [...prev, category];
			}
		});
		setCurrentIndex(0); // Reset index when categories change
	};

	// Effect to handle keyboard events
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowRight') {
				nextSlide();
			} else if (event.key === 'ArrowLeft') {
				prevSlide();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [allImages.length]); // Dependency array includes the number of images

	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className='container mx-auto px-4'>
			<h1 className='text-xl font-extrabold'>
				Property Detail: {params.propertyid}
			</h1>
			<header className='flex items-center justify-between w-full py-4'>
				<div className='flex items-center space-x-4'>
					<button
						aria-label='Go back'
						className='flex items-center text-hvr hover:text-btn transition group'>
						<ArrowForwardIosIcon className='transform rotate-180' />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Back
						</span>
					</button>
				</div>
				<div className='flex-grow flex justify-center'>
					<img
						src='/path/to/logo.png'
						alt='Company Logo'
						className='h-auto max-w-lg'
					/>
				</div>
				<div className='flex items-center space-x-4'>
					<button
						aria-label='Share property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<IosShareIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Share
						</span>
					</button>
					<button
						aria-label='Save property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<SaveAltIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Save
						</span>
					</button>
					<button
						aria-label='Report property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<FlagIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Report
						</span>
					</button>
				</div>
			</header>

			<main className='py-4'>
				<section className='flex justify-between items-center m-2 '>
					<div>
						<h1 className='text-xl sm:text-3xl  font-bold'>Property Title</h1>
						<p className='text-gray-600 capitalize'>
							Location: No, street,lga, State.
						</p>
					</div>
					<div>
						<h1 className='text-xl sm:text-3xl font-bold mr-8 sm:ml:auto'>
							3,500,000
						</h1>
					</div>
				</section>

				{/* Carousel Container */}
				<section className='bg-white rounded-lg overflow-hidden'>
					<div className='px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-2'>
						<div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
							<div className='col-span-3 md:col-span-3 flex flex-col'>
								<div className='relative mx-auto overflow-hidden rounded-lg'>
									<div
										className='flex transition-transform duration-500'
										style={{
											transform: `translateX(-${currentIndex * 100}%)`,
										}}>
										{allImages.map((image, index) => (
											<div key={index} className='min-w-full'>
												<img
													src={image}
													alt={`Slide ${index}`}
													className='w-full rounded-lg'
													style={{
														height: '400px',
														width: '100%',
														objectFit: 'cover',
													}}
												/>
											</div>
										))}
									</div>

									<button
										className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-800 hover:text-white transition-colors duration-300 w-8 h-8 flex items-center justify-center'
										onClick={prevSlide}>
										&#10094;
									</button>
									<button
										className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-800 hover:text-white transition-colors duration-300 w-8 h-8 flex items-center justify-center'
										onClick={nextSlide}>
										&#10095;
									</button>
								</div>
							</div>

							{/* Category Grid */}
							<div className='hidden col-span-3 md:col-span-2 md:flex flex-col rounded-lg'>
								<div
									className='grid gap-1 grid-cols-2'
									style={{ height: '400px' }}>
									{['kitchen', 'living', 'bathroom', 'exterior'].map(
										(category, index) => (
											<a
												key={index}
												href='#'
												onClick={() => handleCategoryClick(category)}
												className={`group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 ${
													selectedCategories.includes(category)
														? 'border border-blue-500'
														: ''
												}`}>
												<img
													src={images[category][0]} // Display first image of each category
													alt={`${category} Image`}
													className='absolute inset-0 h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-in-out'
												/>
												<div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 rounded-lg'></div>
												<p className='z-10 text-base font-medium text-white absolute bottom-0 right-0 p-2 lg:text-xl'>
													{category.charAt(0).toUpperCase() + category.slice(1)}
												</p>
											</a>
										),
									)}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='flex flex-col lg:flex-row max-w-screen-xl mx-auto justify-between rounded-md border border-gray-100 text-gray-700 shadow-md mb-4'>
					<div className='w-full lg:w-2/3'>
						<p className='text-xl font-semibold mx-4 my-2'>Overview</p>

						<p className='text-sm text-gray-700 capitalize ml-4'>
							{brief.description}
						</p>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 mt-5'>
							{basicDetails.map((detail, index) => (
								<div key={index} className='flex items-center'>
									<div>{detail.icon}</div>
									<div className='ml-2'>
										<p className='text-base font-semibold'>{detail.label}</p>
										<p className='text-sm text-gray-500'>
											{detail.description}
										</p>
									</div>
								</div>
							))}
						</div>

						<ul className='max-w-full mx-auto mt-5 divide-y rounded-xl'>
							<li>
								<Disclosure>
									{({ open }) => (
										<>
											<Disclosure.Button className='accordion-button flex items-center justify-between w-full px-6 py-4 font-medium text-left text-btn hover:cursor-pointer hover:border-b-2 border-btn'>
												<span className='text-base font-semibold text-gray-900'>
													Features
												</span>
												<ArrowForwardIosIcon
													className={`w-5 h-5 text-btn transition-transform  duration-300 ${
														open ? 'rotate-90' : ''
													}`}
												/>
											</Disclosure.Button>
											<Disclosure.Panel className='accordion-panel px-6 py-4 border-x border-b border-btn text-gray-700 text-base'>
												<div className='flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0 justify-center m-4'>
													{/* Interior Features */}
													<div className='sm:w-1/2'>
														<h3 className='text-sm font-bold text-gray-500 border border-gray-700 p-3 rounded-md mb-4'>
															Interior Features
														</h3>
														<ul className='list-none space-y-2'>
															{interiorFeatures.map((feature, index) => (
																<li
																	key={index}
																	className='text-sm text-gray-700'>
																	<CheckCircleOutline className='h-5 w-5 text-txt mr-2' />
																	{feature}
																</li>
															))}
														</ul>
													</div>

													{/* Exterior Features */}
													<div className='sm:w-1/2'>
														<h3 className='text-sm font-bold text-gray-500 border border-gray-600 p-3 rounded-md mb-4'>
															Exterior Features
														</h3>
														<ul className='list-none pl-5 space-y-2'>
															{exteriorFeatures.map((feature, index) => (
																<li
																	key={index}
																	className='text-sm text-gray-700'>
																	<CheckCircleOutline className='h-5 w-5 text-txt mr-2' />
																	{feature}
																</li>
															))}
														</ul>
													</div>
												</div>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</li>

							<li>
								<Disclosure>
									{({ open }) => (
										<>
											<DisclosureButton className='accordion-button flex items-center justify-between w-full px-6 py-4 font-medium text-left text-btn hover:cursor-pointer hover:border-b-2 border-btn'>
												<span className='text-base font-semibold text-gray-900'>
													Amenities
												</span>
												<ArrowForwardIosIcon
													className={`w-5 h-5 text-btn transition-transform  duration-300 ${
														open ? 'rotate-90' : ''
													}`}
												/>
											</DisclosureButton>
											<Disclosure.Panel className='accordion-panel px-6 pb-4 border-x border-b border-btn text-gray-700 text-base'>
												<div className='max-w-4xl mx-auto my-2'>
													<ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
														{sortedAmenities
															.slice(0, visibleItems)
															.map((amenity, index) => {
																const IconComponent = amenity.icon; // Assign icon dynamically
																return (
																	<li
																		key={index}
																		className='text-sm text-gray-700 flex items-center'>
																		<IconComponent className='h-5 w-5 text-txt mr-2' />{' '}
																		{/* Display the icon */}
																		{amenity.name}
																	</li>
																);
															})}
													</ul>
													{visibleItems < sortedAmenities.length && (
														<div className='relative'>
															<button
																className='text-sm text-txt font-semibold hover:underline absolute right-2/4 bottom-2'
																onClick={showMoreItems}>
																Show More
															</button>
														</div>
													)}
												</div>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</li>

							<li>
								<Disclosure>
									{({ open }) => (
										<>
											<DisclosureButton className='accordion-button flex items-center justify-between w-full px-6 py-2 font-medium text-left text-gray-900 hover:cursor-pointer hover:border-b-2 hover:border-btn'>
												<span className='text-base font-semibold text-gray-900'>
													Monthly Payments
												</span>
												<ArrowForwardIosIcon
													className={`w-5 h-5 text-btn transition-transform  duration-300 ${
														open ? 'rotate-90' : ''
													}`}
												/>
											</DisclosureButton>
											<Disclosure.Panel className='accordion-panel px-4 pb-1 border-x border-b border-btn text-gray-700 text-base'>
												<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4'>
													{monthlyPayments.map((payment, index) => (
														<div
															key={index}
															className='bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
															<div className='p-4'>
																<h4 className='text-sm font-bold text-gray-600'>
																	{payment.name}
																</h4>
																<p className='text-lg font-semibold text-txt'>
																	₦{payment.amount}
																</p>
																<p className='text-xs text-gray-600 mt-2'>
																	{payment.description}
																</p>
															</div>
														</div>
													))}
												</div>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</li>
							<li>
								<Disclosure>
									{({ open }) => (
										<>
											<DisclosureButton className='accordion-button flex items-center justify-between w-full px-6 py-4 font-medium text-left text-gray-900 hover:cursor-pointer  hover:border-b-2 border-btn'>
												<span className='text-base font-semibold text-gray-900'>
													Policies
												</span>
												<ArrowForwardIosIcon
													className={`w-5 h-5 text-btn transition-transform  duration-300 ${
														open ? 'rotate-90' : ''
													}`}
												/>
											</DisclosureButton>
											<Disclosure.Panel className='accordion-panel border-x border-b px-4 pb-4 text-gray-700 text-base'>
												<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 m-4'>
													{landlordPolicies.map((policy, index) => (
														<div
															key={index}
															className='bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
															<div className='p-4'>
																<h4 className='text-sm font-bold text-txt'>
																	{policy.policy}
																</h4>
																<p className='text-xs text-gray-600 mt-2'>
																	{policy.description}
																</p>
															</div>
														</div>
													))}
												</div>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</li>
						</ul>

						{/* Property Tabs Section */}
						<div className='m-6'>
							<p className='text-sm font-semibold border-y border-gray-300'>
								Available Properties
							</p>
							<div className='tabs justify-between flex p-2 border-y-txt'>
								{updatedPropertyTabs.map((tab, index) => (
									<button
										key={index}
										className={`tab-button px-4 py-2 rounded-md ${
											activeTab === index
												? 'border border-btn text-btn'
												: 'bg-bck'
										} ${index < 4 ? '' : ''}`}
										onClick={() => setActiveTab(index)}
										aria-selected={activeTab === index}>
										{tab.label}
									</button>
								))}
							</div>
							<ul className='mt-2'>
								{updatedPropertyTabs[activeTab].properties.map(
									(property, index) => (
										<li key={index} className='py-1 px-4'>
											{property}
										</li>
									),
								)}
							</ul>
						</div>
					</div>
					<div className='w-full lg:w-1/3 p-4'>
						<PropertyInquiry />
					</div>
				</section>
			</main>
			<div>
				<p className='font-bold text-lg leading-1 text-gray-900 leading-10 pb-1 border-b border-gray-200 cursor-pointer'></p>
			</div>
		</div>
	);
};

export default PropertyDetails;
