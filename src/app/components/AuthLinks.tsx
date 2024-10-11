'use client'; // Mark this component as a Client Component

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import pic from '@/app/asset/images/pic.jpg';

const userNavigation = [
	{ name: 'My Profile', href: '#' },
	{ name: 'Messages', href: '#' },
	{ name: 'Dashboard', href: '#' },
	{ name: 'Saves', href: '#' },
	{ name: 'Support', href: '#' },
	{ name: 'Sign out', href: '#' },
];

const guestNavigation = [
	{ name: 'Login', href: '#' },
	{ name: 'Sign Up', href: '#' },
];

const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	image: pic,
};

const AuthLinks = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(true); // Default to guest (not authenticated)

	const navigation = isAuthenticated ? userNavigation : guestNavigation;

	return (
		<div>
			<Menu as='div' className='relative'>
				<div className='flex items-center'>
					{isAuthenticated && (
						<button
							type='button'
							className='relative rounded-full  p-1 text-txt hover:text-txt hover:border-2 border-txt focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-2'>
							<span className='sr-only'>View notifications</span>
							<NotificationsActiveRoundedIcon
								aria-hidden='true'
								className='h-6 w-6'
							/>
						</button>
					)}
					<MenuButton className='flex shrink-0 rounded-full shadow text-sm transition duration-300 ease-in-out hover:shadow-xl hover:scale-110  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
						<span className='sr-only'>Open user menu</span>
						{isAuthenticated && (
							<Image
								className='w-8 h-8 rounded-full'
								src={user.image}
								alt='Profile picture'
								width={40}
								height={40}
							/>
						)}
						{!isAuthenticated && (
							<AccountCircleIcon
								sx={{
									fontSize: 30,
									color: 'txt',
									transition: 'color 0.3s ease',
									'&:hover': {
										color: 'gray',
									},
								}}
							/>
						)}
					</MenuButton>
				</div>
				<MenuItems className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-bck shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
					{navigation.map((item, index) => (
						<React.Fragment key={item.name}>
							<MenuItem>
								<a
									href={item.href}
									className='block px-4 py-2 text-sm text-txt font-normal hover:font-semibold'>
									{item.name}
								</a>
							</MenuItem>
							{index === 3 && <div className='my-1 h-px bg-gray-200 shadow' />}
						</React.Fragment>
					))}
				</MenuItems>
			</Menu>
		</div>
	);
};

export default AuthLinks;
