'use client';

import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { flushSync } from 'react-dom';

import { ThemeRevealContext } from '@/Hooks/ThemeRevealContext';
import type { Theme } from '@/Types/Theme';

interface ThemeRevealProviderProps {
	children: ReactNode;
	initialTheme: Theme;
}

// function getInitialTheme(): Theme {
// 	if (typeof window === 'undefined') {
// 		return 'dark';
// 	}

// 	const savedTheme = localStorage.getItem('theme');

// 	return savedTheme === 'light' ? 'light' : 'dark';
// }

function getMaxRadius(x: number, y: number): number {
	const corners: [number, number][] = [
		[0, 0],
		[window.innerWidth, 0],
		[0, window.innerHeight],
		[window.innerWidth, window.innerHeight],
	];

	return Math.max(...corners.map(([cx, cy]) => Math.hypot(cx - x, cy - y)));
}

function prefersReducedMotion(): boolean {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function ThemeRevealProvider({
	children,
	initialTheme,
}: ThemeRevealProviderProps) {
	const [theme, setTheme] = useState<Theme>(initialTheme);
	const [isAnimating, setIsAnimating] = useState(false);

	/**
	 * Keep the DOM and localStorage synchronized
	 * with the React theme state.
	 */
	useEffect(() => {
		document.documentElement.dataset.theme = theme;

		document.cookie = `theme=${theme}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
	}, [theme]);

	const toggleTheme = useCallback(
		async (x: number, y: number): Promise<void> => {
			if (isAnimating) return;

			const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

			const root = document.documentElement;

			const finalRadius = getMaxRadius(x, y);

			root.style.setProperty('--x', `${x}px`);
			root.style.setProperty('--y', `${y}px`);
			root.style.setProperty('--final-radius', `${finalRadius}px`);

			/**
			 * If animations are disabled or View Transition API
			 * is not supported, simply change the theme.
			 */
			if (prefersReducedMotion() || !document.startViewTransition) {
				setTheme(nextTheme);
				return;
			}

			root.dataset.transition = nextTheme === 'dark' ? 'reveal' : 'collapse';

			setIsAnimating(true);

			try {
				const transition = document.startViewTransition(() => {
					flushSync(() => {
						setTheme(nextTheme);
					});
				});

				await transition.ready;

				const animation =
					nextTheme === 'dark'
						? root.animate(
								[
									{
										clipPath: `circle(0px at ${x}px ${y}px)`,
									},
									{
										clipPath: `circle(${finalRadius}px at ${x}px ${y}px)`,
									},
								],
								{
									duration: 450,
									easing: 'ease-in-out',
									pseudoElement: '::view-transition-new(root)',
								},
							)
						: root.animate(
								[
									{
										clipPath: `circle(${finalRadius}px at ${x}px ${y}px)`,
									},
									{
										clipPath: `circle(0px at ${x}px ${y}px)`,
									},
								],
								{
									duration: 450,
									easing: 'ease-in-out',
									pseudoElement: '::view-transition-old(root)',
								},
							);

				await animation.finished;
			} finally {
				delete root.dataset.transition;
				setIsAnimating(false);
			}
		},
		[theme, isAnimating],
	);

	return (
		<ThemeRevealContext.Provider
			value={{
				theme,
				toggleTheme,
				isAnimating,
			}}>
			{children}
		</ThemeRevealContext.Provider>
	);
}
