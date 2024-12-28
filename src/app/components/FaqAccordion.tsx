// components/FaqAccordion.tsx
import React, { useState } from 'react';

interface FaqAccordionProps {
	faqData: { id: string; question: string; answer: string }[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqData }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAnswer = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className='max-w-6xl mx-auto px-4 py-6'>
			<h2 className='text-3xl font-semibold mb-6'>
				Frequently Asked Questions
			</h2>
			<div className='space-y-4'>
				{faqData.map((faq, index) => (
					<div key={faq.id} className='border-b'>
						<div
							className='cursor-pointer flex justify-between items-center py-4 text-lg font-medium text-gray-800'
							onClick={() => toggleAnswer(index)}>
							<span>{faq.question}</span>
							<span>{openIndex === index ? '-' : '+'}</span>
						</div>
						{openIndex === index && (
							<div className='py-2 pl-4 text-gray-600'>{faq.answer}</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FaqAccordion;
