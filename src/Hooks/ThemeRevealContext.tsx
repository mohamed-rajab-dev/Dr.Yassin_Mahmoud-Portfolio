'use client';
import { Theme } from '@/Types/Theme';
import { createContext, useContext } from 'react';

export interface ThemeRevealContextValue {
	theme: Theme;
	toggleTheme: (x: number, y: number) => Promise<void>;
	isAnimating: boolean;
}

export const ThemeRevealContext = createContext<ThemeRevealContextValue | null>(
	null,
);

export function useThemeReveal(): ThemeRevealContextValue {
	const context = useContext(ThemeRevealContext);

	if (!context) {
		throw new Error('useThemeReveal must be used within ThemeRevealProvider');
	}

	return context;
}
