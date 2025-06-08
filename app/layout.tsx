import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import MenuBar from './components/MenuBar';
import ThemeToggle from './components/ThemeToggle';
import Script from 'next/script';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '[Your Name] - Full-Stack Developer',
	description:
		'Welcome to my portfolio! I am a passionate full-stack developer who bridges the gap between frontend and backend development. Specializing in creating complete web solutions, from beautiful user interfaces to robust server architectures.',
	keywords: [
		'Full-Stack Developer',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'React',
		'Next.js',
		'Node.js',
		'TypeScript',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'DevOps',
		'System Architecture',
		'Web Development',
		'[Your Name]',
	],
	authors: [{ name: '[Your Name]' }],
	creator: '[Your Name]',
	openGraph: {
		title: '[Your Name] - Full-Stack Developer Portfolio',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		url: 'https://your-domain.com',
		siteName: '[Your Name] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Your Name] - Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Your Name] - Full-Stack Developer',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
			<head>
				<Script id="theme-switcher" strategy="beforeInteractive">
					{`
						try {
							let isDark = window.localStorage.getItem('theme') === 'dark' ||
								(!window.localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
							document.documentElement.classList.toggle('dark', isDark);
							document.documentElement.classList.add('no-transitions');
							window.addEventListener('load', () => {
								document.documentElement.classList.remove('no-transitions');
							});
						} catch (e) {}
					`}
				</Script>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors`}>
				<MenuBar />
				<ThemeToggle />
				{children}
			</body>
		</html>
	);
}
