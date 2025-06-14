'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import portfolioData from '../data.js';

type SkillColor = 'yellow' | 'blue' | 'cyan' | 'green' | 'orange' | 'purple';
interface Skill {
    name: string;
    color: SkillColor;
}

const gradientMap: Record<SkillColor, string> = {
    yellow: "from-amber-400 to-yellow-500",
    blue: "from-blue-400 to-blue-600",
    cyan: "from-cyan-400 to-cyan-600",
    green: "from-emerald-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
    purple: "from-purple-400 to-purple-600"
};

export default function HeroSection() {
    const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);
    
    const skills: Skill[] = [
        { name: 'JavaScript', color: 'yellow' },
        { name: 'TypeScript', color: 'blue' },
        { name: 'React', color: 'cyan' },
        { name: 'Node.js', color: 'green' },
        { name: 'GCP', color: 'orange' },
        { name: 'PostgreSQL', color: 'purple' }
    ];

    return (
        <section className="min-h-screen relative overflow-hidden py-[2px] md:py-0">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            </div>

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-2 pt-2 md:pt-0">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
                    <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                        <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
                            {portfolioData.name}
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{portfolioData.title}</h2>
                        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">{portfolioData.bio}</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:mb-8">
                        {portfolioData.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 shadow hover:scale-105 transition-transform"
                            >
                                <svg 
                                    className="w-5 h-5" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    {getIconPath(item.icon)}
                                </svg>
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-2 mt-5">
                        {skills.map((skill, i) => (
                            <span
                                key={`${skill.name}-${i}`}
                                className={`
                                    relative px-4 md:px-5 py-1.5 md:py-2 
                                    rounded-full text-xs md:text-sm 
                                    text-white font-medium 
                                    bg-gradient-to-r ${gradientMap[skill.color]}
                                    shadow-md hover:shadow-xl 
                                    transition-all duration-300 
                                    hover:scale-105 cursor-default
                                    before:absolute before:inset-0 
                                    before:bg-white before:rounded-full 
                                    before:opacity-0 before:transition-opacity
                                    hover:before:opacity-10
                                    cursor-pointer
                                `}
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Interactive System Architecture */}
                <div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-4 md:p-8 shadow-lg"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            {/* Frontend Layer */}
                            <div
                                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                                    selectedStack === 'frontend' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
                                }`}
                                onMouseEnter={() => setSelectedStack('frontend')}
                                onMouseLeave={() => setSelectedStack(null)}
                            >
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-600">Frontend Development</h3>
                                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        Modern React Architectures
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        Performance Optimization
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        Responsive & Interactive UIs
                                    </li>
                                </ul>
                            </div>

                            {/* Backend Layer */}
                            <div
                                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                                    selectedStack === 'backend' ? 'bg-purple-50 border-purple-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
                                }`}
                                onMouseEnter={() => setSelectedStack('backend')}
                                onMouseLeave={() => setSelectedStack(null)}
                            >
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-600">Backend Development</h3>
                                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                        API Design & Development
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                        Database Architecture
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                        Real-time Systems
                                    </li>
                                </ul>
                            </div>

                            {/* DevOps Layer */}
                            <div
                                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                                    selectedStack === 'devops' ? 'bg-teal-50 border-teal-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
                                }`}
                                onMouseEnter={() => setSelectedStack('devops')}
                                onMouseLeave={() => setSelectedStack(null)}
                            >
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-600">DevOps & Cloud</h3>
                                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                        Google Cloud Platform
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                        CI/CD Pipelines
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                        Scalable Architecture
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
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
			// "Book a meeting" calendar with checkmark icon
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
