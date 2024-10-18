import React from 'react';

interface SidebarProps {
	role: string; // Define the prop type for role
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
	const menuItems: { [key: string]: string[] } = {
		admin: ['Manage Users', 'Settings', 'Reports'],
		landLord: [
			'My Profile',
			'Properties',
			'Tenants',
			'Maintenance Requests',
			'Notifications',
			'Support',
			'Log Out',
		],
		tenant: [
			'Profile',
			'Payments',
			'Maintenance Requests',
			'',
			'Notifications',
			'Settings',
			'Help',
		],
		serviceProvider: [
			'Overview',
			'My Sericecs',
			'Appointments',
			'Notifications',
			'Profile Settings',
			'Transactions',
			'Reports',
		],
		// Add more roles and their respective menu items as needed
	};

	return (
		<div className='w-64 bg-gray-800 text-white h-screen p-4'>
			<h2 className='text-lg font-bold mb-4'>
				{role
					? `${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard`
					: 'Dashboard'}
			</h2>
			<ul>
				{menuItems[role]?.map((item, index) => (
					<li key={index} className='mb-2'>
						{item}
					</li>
				)) || <li>No menu items available</li>}{' '}
				{/* Handle undefined role case */}
			</ul>
		</div>
	);
};

export default Sidebar;
