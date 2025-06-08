'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import data from '../data';

interface Project {
    title: string;
    description: string;
    frontend: {
        title: string;
        features: string[];
    };
    backend: {
        title: string;
        features: string[];
    };
    metrics: string[];
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
                                <header>
                                    <h3 
                                        className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300"
                                    >
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
                                        Performance Metrics
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
                                        {projects[currentIndex].metrics.map((metric: string, i: number) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2 mt-1.5 text-teal-500">•</span>
                                                <span>{metric}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 transition-colors duration-300">
                                    <h4 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                                        System Architecture
                                    </h4>
                                    <div className="overflow-x-auto pb-2">
                                        <div className="min-w-[400px] lg:w-full aspect-[4/3] bg-white dark:bg-gray-800/50 rounded-lg p-4 shadow-inner transition-colors duration-300">
                                            <svg 
                                                className="w-full h-full transition-colors duration-300" 
                                                viewBox="0 0 400 300"
                                                role="img"
                                                aria-labelledby={`arch-title-${currentIndex}`}
                                            >
                                                <title id={`arch-title-${currentIndex}`}>System architecture diagram for {projects[currentIndex].title}</title>
                                                {/* Client Layer */}
                                                <g>
                                                    <rect 
                                                        x="20" 
                                                        y="20" 
                                                        width="360" 
                                                        height="40" 
                                                        rx="4" 
                                                        className="fill-blue-100 dark:fill-blue-900/30 stroke-blue-400 dark:stroke-blue-500 transition-colors duration-300" 
                                                        strokeWidth="1" 
                                                    />
                                                    <text 
                                                        x="200" 
                                                        y="45" 
                                                        textAnchor="middle" 
                                                        className="fill-gray-600 dark:fill-gray-300 text-[12px] transition-colors duration-300"
                                                    >
                                                        Next.js Frontend (SSR + Client Components)
                                                    </text>
                                                </g>

                                                {/* API Layer */}
                                                <g>
                                                    <rect 
                                                        x="20" 
                                                        y="80" 
                                                        width="170" 
                                                        height="40" 
                                                        rx="4" 
                                                        className="fill-purple-100 dark:fill-purple-900/30 stroke-purple-400 dark:stroke-purple-500 transition-colors duration-300" 
                                                        strokeWidth="1" 
                                                    />
                                                    <text 
                                                        x="105" 
                                                        y="105" 
                                                        textAnchor="middle" 
                                                        className="fill-gray-600 dark:fill-gray-300 text-[12px] transition-colors duration-300"
                                                    >
                                                        API Gateway
                                                    </text>
                                                    <rect 
                                                        x="210" 
                                                        y="80" 
                                                        width="170" 
                                                        height="40" 
                                                        rx="4" 
                                                        className="fill-purple-100 dark:fill-purple-900/30 stroke-purple-400 dark:stroke-purple-500 transition-colors duration-300" 
                                                        strokeWidth="1" 
                                                    />
                                                    <text 
                                                        x="295" 
                                                        y="105" 
                                                        textAnchor="middle" 
                                                        className="fill-gray-600 dark:fill-gray-300 text-[12px] transition-colors duration-300"
                                                    >
                                                        Authentication
                                                    </text>
                                                </g>

                                                {/* Service Layer */}
                                                <g>
                                                    <rect 
                                                        x="20" 
                                                        y="140" 
                                                        width="170" 
                                                        height="40" 
                                                        rx="4" 
                                                        className="fill-teal-100 dark:fill-teal-900/30 stroke-teal-400 dark:stroke-teal-500 transition-colors duration-300" 
                                                        strokeWidth="1" 
                                                    />
                                                    <text 
                                                        x="105" 
                                                        y="165" 
                                                        textAnchor="middle" 
                                                        className="fill-gray-600 dark:fill-gray-300 text-[12px] transition-colors duration-300"
                                                    >
                                                        {currentIndex === 0 ? "Cart Service" : "Event Stream"}
                                                    </text>
                                                    <rect 
                                                        x="210" 
                                                        y="140" 
                                                        width="170" 
                                                        height="40" 
                                                        rx="4" 
                                                        className="fill-teal-100 dark:fill-teal-900/30 stroke-teal-400 dark:stroke-teal-500 transition-colors duration-300" 
                                                        strokeWidth="1" 
                                                    />
                                                    <text 
                                                        x="295" 
                                                        y="165" 
                                                        textAnchor="middle" 
                                                        className="fill-gray-600 dark:fill-gray-300 text-[12px] transition-colors duration-300"
                                                    >
                                                        {currentIndex === 0 ? "Product Service" : "Analytics Service"}
                                                    </text>
                                                </g>

                                                {/* Database Layer */}
                                                <g>
                                                    <rect 
                                                        x="20" 
                                                        y="200" 
                                                        width="170" 
                                                        height="40" 
                                                        rx="4" 
                                                        className="fill-amber-100 dark:fill-amber-900/30 stroke-amber-400 dark:stroke-amber-500 transition-colors duration-300" 
                                                        strokeWidth="1" 
                                                    />
                                                    <text 
                                                        x="105" 
                                                        y="225" 
                                                        textAnchor="middle" 
                                                        className="fill-gray-600 dark:fill-gray-300 text-[12px] transition-colors duration-300"
                                                    >
                                                        {currentIndex === 0 ? "Redis Cache" : "Time Series DB"}
                                                    </text>
                                                    <rect 
                                                        x="210" 
                                                        y="200" 
                                                        width="170" 
                                                        height="40" 
                                                        rx="4" 
                                                        className="fill-amber-100 dark:fill-amber-900/30 stroke-amber-400 dark:stroke-amber-500 transition-colors duration-300" 
                                                        strokeWidth="1" 
                                                    />
                                                    <text 
                                                        x="295" 
                                                        y="225" 
                                                        textAnchor="middle" 
                                                        className="fill-gray-600 dark:fill-gray-300 text-[12px] transition-colors duration-300"
                                                    >
                                                        PostgreSQL
                                                    </text>
                                                </g>

                                                {/* Infrastructure Layer */}
                                                <rect 
                                                    x="20" 
                                                    y="260" 
                                                    width="360" 
                                                    height="30" 
                                                    rx="4" 
                                                    className="fill-gray-100 dark:fill-gray-700 stroke-gray-400 dark:stroke-gray-500 transition-colors duration-300" 
                                                    strokeWidth="1" 
                                                />
                                                <text 
                                                    x="200" 
                                                    y="280" 
                                                    textAnchor="middle" 
                                                    className="fill-gray-600 dark:fill-gray-300 text-[12px] transition-colors duration-300"
                                                >
                                                    AWS Cloud Infrastructure
                                                </text>

                                                {/* Connecting Lines */}
                                                <g className="stroke-gray-400 dark:stroke-gray-500 transition-colors duration-300" strokeWidth="1">
                                                    <line x1="200" y1="60" x2="200" y2="80" />
                                                    <line x1="105" y1="120" x2="105" y2="140" />
                                                    <line x1="295" y1="120" x2="295" y2="140" />
                                                    <line x1="105" y1="170" x2="105" y2="190" />
                                                    <line x1="295" y1="170" x2="295" y2="190" />
                                                    <line x1="200" y1="230" x2="200" y2="250" />
                                                </g>
                                            </svg>
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
