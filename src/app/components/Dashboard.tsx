'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
	const [role, setRole] = useState<string>('serviceProvider'); // Set the default role, e.g., 'admin'

	return (
		<div>
			<div className='flex'>
				<Sidebar role={role} /> {/* Pass the role to Sidebar */}
				<div className='flex-1'>
					<main className='p-6'>
						<header className='bg-white shadow-md p-4'>
							<h1 className='text-xl font-bold'>Welcome to the Dashboard</h1>
						</header>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
