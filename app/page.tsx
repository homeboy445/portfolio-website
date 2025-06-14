'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { isMobile } from "./utils/index";

export default function FullStackPortfolio() {
	return (
		<main className={`min-h-screen bg-background text-foreground ${isMobile(typeof window !== 'undefined' ? window : { innerWidth: 0 }) ? 'mt-32' : 'mt-22'}`}>
			<HeroSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
