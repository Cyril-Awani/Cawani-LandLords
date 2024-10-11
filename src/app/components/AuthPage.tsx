'use client';
import React, { useState } from 'react';
import {
	FaCheckCircle,
	FaEyeSlash,
	FaEye,
	FaGoogle,
	FaFacebookF,
	FaTwitter,
	FaGithub,
	FaEnvelope,
	FaKey,
} from 'react-icons/fa';

const AuthPage = () => {
	const [activeTab, setActiveTab] = useState('login');
	const [fullName, setFullName] = useState('');
	const [userName, setUserName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleTabSwitch = (tab: string) => {
		setActiveTab(tab);
	};

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-blue-600 px-4'>
			<div className='bg-white shadow-lg rounded-lg w-md max-w-lg p-8 md:max-w-2xl'>
				<div className='flex justify-between items-center mb-8'>
					<img
						src='/eye-protect-logo.png'
						alt='EyeProtect Logo'
						className='w-10 h-10'
					/>
					<div className='flex space-x-4'>
						<button
							onClick={() => handleTabSwitch('login')}
							className={`text-lg font-semibold ${
								activeTab === 'login'
									? 'text-blue-600 border-b-2 border-blue-600'
									: 'text-gray-400'
							}`}>
							Log in
						</button>
						<button
							onClick={() => handleTabSwitch('signup')}
							className={`text-lg font-semibold ${
								activeTab === 'signup'
									? 'text-blue-600 border-b-2 border-blue-600'
									: 'text-gray-400'
							}`}>
							Sign up
						</button>
					</div>
				</div>

				{/* Login Form */}
				{activeTab === 'login' && (
					<form className='space-y-6'>
						<div>
							<label className='block text-sm font-medium text-gray-700'>
								Username
							</label>
							<input
								type='text'
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
								className='w-full px-5 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
								placeholder='Username'
							/>
						</div>
						<div className='relative mt-1'>
							<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
								<FaKey />
								<div className='border-r border-gray-300 h-5 ml-2'></div>
							</span>
							<input
								type={showPassword ? 'text' : 'password'}
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className='w-full px-10 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
								placeholder='••••••••'
							/>
							<span className='absolute inset-y-0 right-0 flex items-center pr-3'>
								<button
									type='button'
									onClick={handleTogglePassword}
									className='focus:outline-none'>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</button>
							</span>
						</div>
						<div className='flex justify-between items-center'>
							<a href='#' className='text-blue-500 text-sm'>
								Forgot password?
							</a>
						</div>
						<button className='w-full bg-blue-600 text-white p-2 rounded-lg font-semibold'>
							Log In
						</button>
						<div className='flex items-center justify-center mt-6'>
							<div className='border-t border-gray-300 w-24'></div>
							<p className='text-gray-600 px-4'>or</p>
							<div className='border-t border-gray-300 w-24'></div>
						</div>
						<div className='flex justify-center space-x-4 mt-4'>
							<button className='bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition-colors'>
								<FaGoogle />
							</button>
							<button className='bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors'>
								<FaFacebookF />
							</button>
							<button className='bg-blue-400 p-2 rounded-full text-white hover:bg-blue-500 transition-colors'>
								<FaTwitter />
							</button>
							<button className='bg-gray-800 p-2 rounded-full text-white hover:bg-gray-900 transition-colors'>
								<FaGithub />
							</button>
							<button className='bg-red-600 p-2 rounded-full text-white hover:bg-red-700 transition-colors'>
								<FaEnvelope />
							</button>
						</div>
						<p className='text-sm text-center mt-4'>
							By signing up, you agree to the{' '}
							<a href='#' className='text-blue-600'>
								Terms of Service
							</a>
							.
						</p>
					</form>
				)}

				{/* Sign Up Form */}
				{activeTab === 'signup' && (
					<form className='space-y-6'>
						<div>
							<label className='block text-sm font-medium text-gray-700'>
								Full Name
							</label>
							<input
								type='text'
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								className='w-full px-5 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
								placeholder='Enter your full name'
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700'>
								Phone Number
							</label>
							<div className='relative mt-1'>
								<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
									<span className='text-sm'>(+234)</span>
									<div className='border-r border-gray-300 h-5 ml-2'></div>
								</span>
								<input
									type='tel'
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
									className='w-full pl-16 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
									placeholder='Enter your phone number'
								/>
							</div>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700'>
								Password
							</label>
							<div className='relative mt-1'>
								<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
									<FaKey />
									<div className='border-r border-gray-300 h-5 ml-2'></div>
								</span>
								<input
									type={showPassword ? 'text' : 'password'}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className='w-full px-10 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
									placeholder='••••••••'
								/>
								<span className='absolute inset-y-0 right-0 flex items-center pr-3'>
									<button
										type='button'
										onClick={handleTogglePassword}
										className='focus:outline-none'>
										{showPassword ? <FaEyeSlash /> : <FaEye />}
									</button>
								</span>
							</div>
						</div>
						<button className='w-full bg-blue-600 text-white p-2 rounded-lg font-semibold'>
							Sign Up
						</button>
						<div className='flex items-center justify-center mt-6'>
							<div className='border-t border-gray-300 w-24'></div>
							<p className='text-gray-600 px-4'>or</p>
							<div className='border-t border-gray-300 w-24'></div>
						</div>
						<div className='flex justify-center space-x-4 mt-4'>
							<button className='bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition-colors'>
								<FaGoogle />
							</button>
							<button className='bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors'>
								<FaFacebookF />
							</button>
							<button className='bg-blue-400 p-2 rounded-full text-white hover:bg-blue-500 transition-colors'>
								<FaTwitter />
							</button>
							<button className='bg-gray-800 p-2 rounded-full text-white hover:bg-gray-900 transition-colors'>
								<FaGithub />
							</button>
							<button className='bg-red-600 p-2 rounded-full text-white hover:bg-red-700 transition-colors'>
								<FaEnvelope />
							</button>
						</div>
						<p className='text-sm text-center mt-4'>
							By signing up, you agree to the{' '}
							<a href='#' className='text-blue-600'>
								Terms of Service
							</a>
							.
						</p>
					</form>
				)}
			</div>
		</div>
	);
};

export default AuthPage;
