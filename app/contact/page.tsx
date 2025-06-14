'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import portfolioData from '../data.js';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            // Clear form
            event.currentTarget.reset();
            alert('Message sent successfully!');
        } catch (error) {
            alert('Failed to send message. Please try again.');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <section className="min-h-screen relative overflow-hidden py-24">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80 dark:via-gray-900/30 dark:to-gray-900/80" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="relative z-10 max-w-4xl mx-auto px-4 pt-8"
            >
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block">
                        <motion.h1 
                            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 mb-4"
                            initial={{ backgroundPosition: "0% 50%" }}
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            Let&apos;s Connect
                        </motion.h1>
                        <motion.div 
                            className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 96, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </div>
                    <motion.p 
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </motion.p>
                </motion.div>

                {/* Social Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {portfolioData.social.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.02,
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center space-x-4 w-full">
                                <motion.div 
                                    className="p-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <svg 
                                        className="w-6 h-6 text-white" 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        {getIconPath(item.icon)}
                                    </svg>
                                </motion.div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {getContactDescription(item.icon)}
                                    </p>
                                </div>
                                <motion.div 
                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    initial={{ x: -10 }}
                                    whileHover={{ x: 0 }}
                                >
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    className="relative flex flex-col items-center justify-center my-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 mb-2 z-10"
                        initial={{ backgroundPosition: "0% 50%" }}
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                        OR
                    </motion.h2>
                    <motion.div 
                        className="h-1 w-12 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 48, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />
                </motion.div>

                {/* Contact Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-2xl mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-8 shadow-xl mt-[5%]"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center mb-[10%]">Send Me a Message [THIS IS WIP]</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="John Doe"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="john@example.com"
                                />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="Job Opportunity / Project Collaboration"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                placeholder="Tell me about the opportunity..."
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center justify-end"
                        >
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : 'Send Message'}
                            </button>
                        </motion.div>
                    </form>
                </motion.div>

                {/* Location Info */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-center mt-12"
                >
                    <motion.div 
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                                />
                            </svg>
                        </motion.div>
                        <span className="text-gray-600 dark:text-gray-300">Based in {portfolioData.contact.location}</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

function getIconPath(iconName: string) {
    switch (iconName) {
        case 'github':
            return (
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            );
        case 'linkedin':
            return (
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            );
        case 'x':
            return (
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            );
        case 'email':
            return (
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
            );
        case 'calendar':
            return (
                <>
                    <rect x="2" y="4" width="20" height="16" rx="4" fill="currentColor" />
                    <rect x="6" y="2" width="2" height="4" rx="1" fill="#fff" />
                    <rect x="16" y="2" width="2" height="4" rx="1" fill="#fff" />
                    <path
                        d="M8 13l2.5 2.5L16 10"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </>
            );
        default:
            return null;
    }
}

function getContactDescription(icon: string) {
    switch (icon) {
        case 'github':
            return 'Check out my projects and contributions';
        case 'linkedin':
            return 'Connect with me professionally';
        case 'x':
            return 'Follow me for updates';
        case 'email':
            return 'Send me a message';
        case 'calendar':
            return 'Schedule a meeting with me';
        default:
            return '';
    }
}
