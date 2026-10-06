'use client';
import { FiSun } from 'react-icons/fi';
import { LuMoon } from 'react-icons/lu';
import { useThemeReveal } from '@/Hooks/ThemeRevealContext';
import { useRef } from 'react';
export function ThemeSwitcher() {
	const { theme, toggleTheme, isAnimating } = useThemeReveal();
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		let x = event.clientX;
		let y = event.clientY;

		if ((!x && !y) || x == null || y == null) {
			const rect = buttonRef.current?.getBoundingClientRect();

			if (rect) {
				x = rect.left + rect.width / 2;
				y = rect.top + rect.height / 2;
			} else {
				x = window.innerWidth / 2;
				y = window.innerHeight / 2;
			}
		}

		toggleTheme(x, y);
	};

	return (
		<button
			ref={buttonRef}
			onClick={handleClick}
			disabled={isAnimating}
			aria-label='Toggle theme'>
			{theme === 'dark' ? (
				<FiSun className='w-10 h-6 text-foreground' />
			) : (
				<LuMoon className='w-10 h-6 text-foreground' />
			)}
		</button>
	);
}
