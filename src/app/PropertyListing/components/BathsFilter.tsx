import React, { useState, useEffect, useRef } from 'react';
import { Bathtub } from '@mui/icons-material';
import { IoIosArrowDown } from 'react-icons/io';

interface Filters {
	minBaths: number;
	maxBaths: number;
}

const bathOptions = [
	{ label: 'Any', value: 0 },
	{ label: '1', value: 1 },
	{ label: '2', value: 2 },
	{ label: '3', value: 3 },
	{ label: '4', value: 4 },
	{ label: '5+', value: 5 },
];

interface BathsFilterProps {
	filters: Filters;
	onFilterChange: (minBaths: number, maxBaths: number) => void;
}

const BathsFilter: React.FC<BathsFilterProps> = ({
	filters,
	onFilterChange,
}) => {
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
		onFilterChange(0, 0);
		setIsDropdownOpen(false);
	};

	const handleApply = () => {
		setIsDropdownOpen(false);
	};

	const handleBathsChange = (type: 'min' | 'max', value: number) => {
		if (type === 'min') {
			onFilterChange(value, Math.max(filters.maxBaths, value));
		} else {
			onFilterChange(Math.min(filters.minBaths, value), value);
		}
	};

	return (
		<div className='hidden md:flex items-center gap-2 relative'>
			<div
				className='flex items-center gap-2 cursor-pointer border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition duration-200'
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
				<Bathtub className='text-lg font-semibold' />
				<p className='text-md font-semibold'>Baths</p>
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
						<span className='font-semibold'>Min Baths</span>
						<div className='flex flex-row justify-start items-start'>
							{bathOptions.map((option) => (
								<button
									key={option.value}
									className={`w-full px-4 py-2 text-xs border rounded hover:bg-gray-200 active:bg-gray-300 ${
										option.value === filters.minBaths
											? 'bg-blue-500 text-white'
											: 'text-black'
									}`}
									onClick={() => handleBathsChange('min', option.value)}>
									{option.label}
								</button>
							))}
						</div>
					</div>

					<div className='px-4 py-2'>
						<span className='font-semibold'>Max Baths</span>
						<div className='flex flex-row justify-start items-start'>
							{bathOptions.map((option) => (
								<button
									key={option.value}
									className={`w-full px-4 py-2 text-xs border rounded hover:bg-gray-200 active:bg-gray-300 ${
										option.value === filters.maxBaths
											? 'bg-blue-500 text-white'
											: 'text-black'
									}`}
									onClick={() => handleBathsChange('max', option.value)}>
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
							View properties
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default BathsFilter;
