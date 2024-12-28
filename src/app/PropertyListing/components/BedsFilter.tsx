import React, { useState, useEffect, useRef } from 'react';
import BedIcon from '@mui/icons-material/Bed';
import { IoIosArrowDown } from 'react-icons/io';

const bedOptions = [
	{ label: 'Any', value: 0 },
	{ label: '1', value: 1 },
	{ label: '2', value: 2 },
	{ label: '3', value: 3 },
	{ label: '4', value: 4 },
	{ label: '5+', value: 5 },
];

interface BedsFilterProps {
	onFilterChange: (minBeds: number, maxBeds: number) => void;
}

const BedsFilter: React.FC<BedsFilterProps> = ({ onFilterChange }) => {
	const [minBeds, setMinBeds] = useState<number>(0);
	const [maxBeds, setMaxBeds] = useState<number>(0);
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsDropdownOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleReset = () => {
		setMinBeds(0);
		setMaxBeds(0);
		onFilterChange(0, 0);
		setIsDropdownOpen(false);
	};

	const handleApply = () => {
		onFilterChange(minBeds, maxBeds);
		setIsDropdownOpen(false);
	};

	const handleBedsChange = (min: number, max: number) => {
		setMinBeds(min);
		setMaxBeds(max);
	};

	return (
		<div className='hidden md:flex items-center gap-2 relative'>
			<div
				className='flex items-center gap-2 cursor-pointer border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition duration-200'
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
				<BedIcon className='text-lg font-semibold' />
				<p className='text-md font-semibold'>Beds</p>
				<IoIosArrowDown
					style={{
						fontSize: 15,
						stroke: 'currentColor',
						strokeWidth: 2,
					}}
					className={`text-lg font-bold text-gray-600 transition-transform duration-300 transform ${
						isDropdownOpen ? 'rotate-180' : ''
					}`}
				/>
			</div>

			{isDropdownOpen && (
				<div
					ref={dropdownRef}
					className='absolute flex flex-col top-0 mt-10 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-auto'>
					<div className='px-4 py-2'>
						<span className='font-semibold'>Min Beds</span>
						<div className='flex flex-row justify-start items-start'>
							{bedOptions.map((option) => (
								<button
									key={option.value}
									className={`w-full px-4 py-2 text-xs border rounded hover:bg-gray-200 active:bg-gray-300 ${
										option.value === minBeds
											? 'bg-blue-500 text-white'
											: 'text-black'
									}`}
									onClick={() => handleBedsChange(option.value, maxBeds)}>
									{option.label}
								</button>
							))}
						</div>
					</div>

					<div className='px-4 py-2'>
						<span className='font-semibold'>Max Beds</span>
						<div className='flex flex-row justify-start items-start'>
							{bedOptions.map((option) => (
								<button
									key={option.value}
									className={`w-full px-4 py-2 text-xs border rounded hover:bg-gray-200 active:bg-gray-300 ${
										option.value === maxBeds
											? 'bg-blue-500 text-white'
											: 'text-black'
									}`}
									onClick={() => handleBedsChange(minBeds, option.value)}>
									{option.label}
								</button>
							))}
						</div>
					</div>

					<div className='flex gap-2 px-4 py-2'>
						<button
							className='w-full py-2 px-4 text-xs bg-gray-300 rounded hover:bg-gray-400'
							onClick={handleReset}>
							Reset
						</button>
						<button
							className='w-full py-2 px-4 text-xs bg-blue-500 text-white rounded hover:bg-blue-600'
							onClick={handleApply}>
							Apply
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default BedsFilter;
