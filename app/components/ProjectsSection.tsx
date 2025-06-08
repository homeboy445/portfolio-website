'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import data from '../data';

interface Project {
    title: string;
    description: string;
    link: string;
    github: string;
    imageId: string;
    imageAlt: string;
    frontend: {
        title: string;
        features: string[];
    };
    backend: {
        title: string;
        features: string[];
    };
}

export default function ProjectsSection() {
    const projects = data.projects || [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0.3
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0.3
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex >= projects.length) newIndex = 0;
            if (newIndex < 0) newIndex = projects.length - 1;
            return newIndex;
        });
    };

    return (
        <section className="py-20 px-4 relative" aria-label="Projects">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    id="projects-section"
                    className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
                >
                    Full Stack Projects
                </motion.h2>

                <div className="relative h-[900px] md:h-[800px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.article
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "tween", duration: 0 },
                                opacity: { duration: 0 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/30"
                        >
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row gap-8 h-full">
                                    <div className="flex-1">
                                        <header>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
                                                {projects[currentIndex].title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-lg">
                                                {projects[currentIndex].description}
                                            </p>
                                        </header>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                            <div className="bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-900/20">
                                                <h4 className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-3 transition-colors duration-300">
                                                    {projects[currentIndex].frontend.title}
                                                </h4>
                                                <ul className="space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
                                                    {projects[currentIndex].frontend.features.map((feature: string, i: number) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="mr-2 mt-1.5 text-blue-500">•</span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-purple-50/50 dark:bg-purple-900/10 p-6 rounded-lg border border-purple-100 dark:border-purple-900/20">
                                                <h4 className="text-base font-semibold text-purple-600 dark:text-purple-400 mb-3 transition-colors duration-300">
                                                    {projects[currentIndex].backend.title}
                                                </h4>
                                                <ul className="space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
                                                    {projects[currentIndex].backend.features.map((feature: string, i: number) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="mr-2 mt-1.5 text-purple-500">•</span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-8 bg-teal-50/50 dark:bg-teal-900/10 p-6 rounded-lg border border-teal-100 dark:border-teal-900/20">
                                            <h4 className="text-base font-semibold text-teal-600 dark:text-teal-400 mb-4 transition-colors duration-300">
                                                Links
                                            </h4>
                                            <div className="flex gap-4">
                                                {projects[currentIndex].link && (
                                                    <a 
                                                        href={projects[currentIndex].link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline"
                                                    >
                                                        <span>Live Demo</span>
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {projects[currentIndex].github && (
                                                    <a 
                                                        href={projects[currentIndex].github} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline"
                                                    >
                                                        <span>GitHub</span>
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                        </svg>
                                                    </a>
                                                )}
                                                {
                                                    Array.isArray(projects[currentIndex].advancedLinks) &&
                                                    projects[currentIndex].advancedLinks.map((link, index) => (
                                                        <a
                                                            key={index}
                                                            href={link.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline border border-teal-200 dark:border-teal-700 rounded px-2 py-1 bg-white dark:bg-gray-900 shadow-sm transition-all duration-200"
                                                            style={{ minWidth: 'max-content' }}
                                                        >
                                                            <span>{link.title}</span>
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                        aria-label="Previous project"
                    >
                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                        aria-label="Next project"
                    >
                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Progress Indicators */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 pb-4">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    const direction = index > currentIndex ? 1 : -1;
                                    setDirection(direction);
                                    setCurrentIndex(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-blue-600 dark:bg-blue-400 w-4'
                                        : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
