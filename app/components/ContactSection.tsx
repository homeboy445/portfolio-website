'use client';

import { motion } from 'framer-motion';
import portfolioData from '../data.js';
import { isMobile } from '../utils/index.js';

export default function ContactSection() {
	return (
		<section className={`${isMobile(typeof window === 'undefined' ? {} : window) ? "py-[50%]" : "py-[5%]"} px-4 transition-colors duration-300 mt-[1%]`}>
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
							className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl relative overflow-hidden group"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="relative z-10 flex items-center gap-2">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
								<span>Get in Touch</span>
							</div>
						</a>
						<a
							href={portfolioData.contact.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl relative overflow-hidden group"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="relative z-10 flex items-center gap-2">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
								</svg>
								<span>Connect on LinkedIn</span>
							</div>
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
