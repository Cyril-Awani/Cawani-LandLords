import React, { useState, useRef, useEffect } from 'react';
import { PropertyType } from '../../types/propertyTypes';
import { IoIosArrowDown } from 'react-icons/io';

interface PropertyTypeFilterProps {
	selectedTypes: PropertyType[];
	onFilterChange: (propertyTypes: PropertyType[]) => void;
}

const PropertyTypeFilter: React.FC<PropertyTypeFilterProps> = ({
	selectedTypes,
	onFilterChange,
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close the dropdown when clicking outside
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

	const toggleType = (type: PropertyType) => {
		let newSelectedTypes: PropertyType[];
		if (selectedTypes.includes(type)) {
			newSelectedTypes = selectedTypes.filter((item) => item !== type);
		} else {
			newSelectedTypes = [...selectedTypes, type];
		}
		onFilterChange(newSelectedTypes);
	};

	const handleReset = () => {
		onFilterChange([]);
		setIsDropdownOpen(false);
	};

	const handleApply = () => {
		setIsDropdownOpen(false);
	};

	return (
		<div className='relative flex items-center gap-2 cursor-pointer border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition duration-200'>
			<div
				className='flex items-center md:gap-2'
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
				<p className='text-sm md:text-md whitespace-nowrap font-semibold'>
					Property Types
				</p>
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
					className='absolute top-full left-0 bg-white rounded-lg shadow-md z-10 w-[1000px] max-w-sm max-h-60 overflow-y-auto'>
					<div className='p-4'>
						<p className='my-2 font-semibold'>Types</p>
						<div className='grid grid-cols-2 gap-4'>
							{Object.values(PropertyType)
								.sort() // Sort the property types alphabetically
								.map((type) => (
									<div key={type} className='flex items-center'>
										<label className='label'>
											<input
												type='checkbox'
												checked={selectedTypes.includes(type)}
												onChange={() => toggleType(type)}
												className='form-checkbox'
											/>
											<span>
												{type.charAt(0).toUpperCase() + type.slice(1)}
											</span>
										</label>
									</div>
								))}
						</div>

						{/* Sticky buttons */}
						<div className='sticky bottom-0 flex gap-2 px-4 py-2 bg-white'>
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
				</div>
			)}
		</div>
	);
};

export default PropertyTypeFilter;
