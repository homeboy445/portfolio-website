'use client';

import { motion } from 'framer-motion';
import portfolioData from '../data.js';

export default function ContactSection() {
	return (
		<section className="py-20 px-4 transition-colors duration-300">
			<div className="max-w-4xl mx-auto text-center">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">Let&apos;s Build Something Amazing</h2>
					<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
						Code Craftsman & Problem Solver - Let&apos;s discuss your project and make something impactful together.
					</p>

					{/* Location */}
					<div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span>{portfolioData.contact.location}</span>
					</div>

					{/* Contact Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<a
							href={`mailto:${portfolioData.contact.email}`}
							className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							Get in Touch
						</a>
						<a
							href={portfolioData.contact.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M15 2H5a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zM8 14H6V8h2v6zM7 7a1 1 0 110-2 1 1 0 010 2zm7 7h-2v-3c0-1.1-.9-2-2-2h0v5H8V8h2v1c.7-.6 1.5-1 2.5-1 1.9 0 3.5 1.6 3.5 3.5V14z"/>
							</svg>
							Connect on LinkedIn
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
