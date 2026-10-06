import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import type { Theme } from '@/Types/Theme';
import { Inter, Merriweather, Cairo } from 'next/font/google';

import { ThemeRevealProvider } from '@/Components/ThemeRevealProvider/ThemeRevealProvider';
// import { ThemeScript } from '@/Components/ThemeScript/ThemeScript';
import { Navbar } from '@/Components/Navbar/Navbar';
import './globals.css';

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'My portfolio',
};

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const merriweather = Merriweather({
	subsets: ['latin'],
	variable: '--font-merriweather',
});

const cairo = Cairo({
	subsets: ['arabic', 'latin'],
	variable: '--font-cairo',
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();

	const theme = (cookieStore.get('theme')?.value ?? 'dark') as Theme;
	return (
		<html
			lang='en'
			data-theme={theme}>
			<body
				className={`${inter.variable} ${merriweather.variable} ${cairo.variable} bg-background `}>
				<ThemeRevealProvider initialTheme={theme}>
					<Navbar />
					<div className='w-full max-w-site mx-auto scrollbar h-screen overflow-y-auto '>
						{children}
					</div>
				</ThemeRevealProvider>
			</body>
		</html>
	);
}
