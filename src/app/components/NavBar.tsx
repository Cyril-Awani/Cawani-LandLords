'use client'; // Mark this component as a Client Component

import React from 'react';
import Link from 'next/link';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import Image from 'next/image';
import AuthLinks from '@/app/components/AuthLinks';
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CottageIcon from '@mui/icons-material/Cottage';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import TourIcon from '@mui/icons-material/Tour';
import CalculateIcon from '@mui/icons-material/Calculate';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SearchComponent from './SearchComponent';

interface ChildItem {
	label: string;
	link: string;
	iconImage?: string; // optional
}

interface NavItem {
	label: string;
	link: string;
	children?: ChildItem[]; // optional
	current?: boolean; // optional
}

const navItems: NavItem[] = [
	{
		label: 'Buy',
		link: '#',
		children: [
			{ label: 'Properties For Sale', link: '#', iconImage: 'buy' },
			{ label: 'My Properties', link: '#', iconImage: 'myrental' },
			{ label: 'Mortgage', link: '#', iconImage: 'calculator' },
			{ label: 'Guide', link: '#', iconImage: 'guide' },
		],
	},
	{
		label: 'Rent',
		link: '#',
		children: [
			{ label: 'Available for Rent', link: '#', iconImage: 'rent' },
			{ label: 'My Rental', link: '#', iconImage: 'myrental' },
			{ label: 'Affordability', link: '#', iconImage: 'calculator' },
			{ label: 'Guide', link: '#', iconImage: 'guide' },
		],
	},
	{ label: "Cawani's Blog", link: '/Blog' },
	{ label: 'Career', link: '#' },
	{ label: 'Advertise', link: 'Advertise' },
];

const iconMap: Record<string, React.ReactNode> = {
	rent: <CottageIcon />,
	myrental: <MapsHomeWorkIcon />,
	calculator: <CalculateIcon />,
	guide: <TourIcon />,
	buy: <LocationCityIcon />,
};

const getIcon = (iconName?: string) => {
	return iconName ? iconMap[iconName] : null;
};

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
	return (
		<Disclosure as='nav' className='bg-bck border-b border-gray-300 space-x-4 '>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-5 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='relative inset-y-0 left-0 flex items-center md:hidden'>
								<DisclosureButton className='group relative inline-flex items-center justify-center rounded-md bg-txt p-2 mr-2 text-white hover:bg-txt hover:text-white focus:outline-none focus:ring-1 focus:ring-inset'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<CloseRoundedIcon className='block h-5 w-5' />
									) : (
										<SegmentRoundedIcon className='block h-5 w-5' />
									)}
								</DisclosureButton>
							</div>

							{/* Center items */}
							<div className=' hidden md:flex flex-shrink-0 items-center'>
								<div className=' flex-shrink-0 mr-5'>
									<Image
										src='https://www.reshot.com/preview-assets/icons/NVQ647DYCA/lastfm-NVQ647DYCA.svg' // Update this path with your logo image path
										alt='Your Company Logo'
										width={50} // Adjust the width of your logo
										height={50} // Adjust the height of your logo
										className='h-8 w-auto'
									/>
								</div>
								<div className='hidden md:flex flex-shrink-0 items-center'></div>
								<div className='hidden sm:block'>
									<div className='flex sp'>
										{navItems.map((item) => (
											<div key={item.label} className='relative group'>
												<a
													href={item.link}
													className={classNames(
														item.current
															? 'bg-txt text-white'
															: 'text-txt hover:border-b-2 border-btn hover:text-btn',
														'px-3 py-2 text-sm font-medium',
													)}>
													{item.label}
												</a>
												{item.children && (
													<div className='absolute left-0 z-10 hidden w-48 bg-white shadow-lg group-hover:block'>
														{item.children.map((child) => (
															<a
																key={child.label}
																href={child.link}
																className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>
																{child.iconImage && getIcon(child.iconImage)}
																{child.label}
															</a>
														))}
													</div>
												)}
											</div>
										))}
									</div>
								</div>
							</div>

							<SearchComponent />
							<AuthLinks />
						</div>
					</div>

					<Disclosure.Panel className='md:hidden'>
						{/* Mobile menu items */}
						<div className='px-2 pt-2 pb-2 space-y-1'>
							{navItems.map((item) => (
								<div key={item.label} className='relative group'>
									<a
										href={item.link}
										className='text-txt hover:font-extrabold block rounded-md px-3 py-2 text-base font-medium'>
										{item.label}
									</a>
									{item.children && (
										<div className='ml-4'>
											{item.children.map((child) => (
												<a
													key={child.label}
													href={child.link}
													className='block py-1 text-sm text-gray-600 hover:text-black hover:font-bold'>
													<span className='mr-4'>
														{child.iconImage &&
															React.cloneElement(getIcon(child.iconImage), {
																sx: { color: 'txt' },
															})}{' '}
													</span>

													{child.label}
												</a>
											))}
										</div>
									)}
								</div>
							))}
						</div>

						{/* Centered logo */}
						<div className='flex justify-center border-t-2 items-center pt-1'>
							<Image
								src='https://www.reshot.com/preview-assets/icons/NVQ647DYCA/lastfm-NVQ647DYCA.svg' // Update this path with your logo image path
								alt='Cawani Logo'
								width={50}
								height={50}
								className='h-8 w-auto'
							/>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
