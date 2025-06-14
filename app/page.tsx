'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-background text-foreground mt-22">
			<HeroSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
