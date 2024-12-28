import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { blogPosts } from '../data'; // Assuming the data file is named "data.ts"

export default function BlogHero() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const router = useRouter();

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1,
		);
	};

	const handleNavigation = (id: string) => {
		router.push(`/blog/${id}`);
	};

	return (
		<div className='relative w-full h-full grid grid-cols-12 gap-4 md:pt-0'>
			{/* Carousel Section */}
			<div className='col-span-12 md:col-span-8 relative w-full h-full max-h-[300px] md:max-h-[500px]'>
				<AnimatePresence>
					{blogPosts.map(
						(post, index) =>
							index === currentIndex && (
								<motion.div
									key={post.id}
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.95 }}
									transition={{ duration: 0.8 }}
									className='absolute inset-0 w-full h-full min-h-[250px]'
									style={{
										backgroundImage: `url(${post.imageUrl})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}
									onClick={() => handleNavigation(post.id)}
									role='button'>
									<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'>
										<div className='absolute bottom-3 md:bottom-8 left-8 text-white max-w-lg'>
											<p className='text-xs sm:text-sm md:text-base bg-gray-900 bg-opacity-50 px-2 py-1 inline-block rounded-md'>
												{post.category}
											</p>
											<h2 className='text-sm sm:text-base md:text-2xl font-bold'>
												{post.title}
											</h2>
											<p className='text-sm sm:text-base md:text-lg'>
												{post.description}
											</p>
											<div className='flex items-center text-xs sm:text-sm md:text-base text-gray-300'>
												<span className='mr-2'>{post.author}</span> ·
												<span className='ml-2'>{post.postDate}</span> ·
												<span className='ml-2'>
													{post.minutesRead} mins read
												</span>
											</div>
										</div>
									</div>
								</motion.div>
							),
					)}
				</AnimatePresence>
				{/* Navigation Buttons */}
				<button
					onClick={prevSlide}
					className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-800 hover:text-white transition-colors duration-300 w-8 h-8 flex items-center justify-center'>
					&#10094;
				</button>
				<button
					onClick={nextSlide}
					className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-800 hover:text-white transition-colors duration-300 w-8 h-8 flex items-center justify-center'>
					&#10095;
				</button>
				{/* Dots Navigation */}
				<div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2'>
					{blogPosts.map((_, index) => (
						<div
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-2 h-2 rounded-full cursor-pointer ${
								index === currentIndex
									? 'bg-white'
									: 'bg-gray-500 opacity-50 hover:opacity-100'
							}`}></div>
					))}
				</div>
			</div>

			{/* Sidebar Section */}
			<div className='col-span-12 md:col-span-4 h-full p-4'>
				<h2 className='text-xl sm:text-2xl font-bold text-gray-900'>
					Latest Articles
				</h2>
				{blogPosts.slice(0, 3).map((post) => (
					<div
						key={post.id}
						className='space-y-2 cursor-pointer'
						onClick={() => handleNavigation(post.id)}>
						<h3 className='text-lg sm:text-xl font-semibold text-gray-800'>
							{post.title}
						</h3>
						<p className='text-sm sm:text-base text-gray-600'>
							{post.description}
						</p>
						<div className='text-xs sm:text-sm text-gray-500'>
							<span>{post.author}</span> · <span>{post.postDate}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
