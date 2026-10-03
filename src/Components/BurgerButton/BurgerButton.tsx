'use client';

import { useEffect, useRef } from 'react';
import type { BurgerButtonProps } from '@/Types/BurgerButtonProps';

export function BurgerButton({
	isOpenMobile,
	setIsOpenMobile,
	mobileMenuRef,
}: BurgerButtonProps) {
	const buttonRef = useRef<HTMLButtonElement>(null);

	// Close mobile menu on desktop screen
	useEffect(() => {
		const media = window.matchMedia('(min-width: 768px)');

		if (media.matches) {
			setIsOpenMobile(false);
		}

		const listener = (e: MediaQueryListEvent) => {
			if (e.matches) {
				setIsOpenMobile(false);
			}
		};

		media.addEventListener('change', listener);

		return () => {
			media.removeEventListener('change', listener);
		};
	}, [setIsOpenMobile]);

	// Close menu when clicking outside
	useEffect(() => {
		if (!isOpenMobile) return;

		const handlePageClick = (event: MouseEvent): void => {
			const target = event.target;

			if (!(target instanceof Node)) return;

			if (mobileMenuRef.current?.contains(target)) return;

			if (buttonRef.current?.contains(target)) return;

			setIsOpenMobile(false);
		};

		document.addEventListener('mousedown', handlePageClick);

		return () => {
			document.removeEventListener('mousedown', handlePageClick);
		};
	}, [isOpenMobile, mobileMenuRef, setIsOpenMobile]);

	return (
		<button
			ref={buttonRef}
			type='button'
			aria-label={isOpenMobile ? 'Close menu' : 'Open menu'}
			aria-expanded={isOpenMobile}
			onClick={() => setIsOpenMobile(!isOpenMobile)}
			className='flex items-center justify-center group'>
			<div
				className={`flex flex-col ${isOpenMobile ? 'items-center' : 'items-end'} justify-center w-5 h-5 relative`}>
				{/* Top Line */}
				<span
					className={`
						block h-0.5 bg-foreground mb-1
						rounded-full
						transition-all duration-300 ease-in-out
						${isOpenMobile ? 'w-3/4 rotate-45 translate-y-1.5' : 'w-3/4 group-hover:w-full'}
					`}
				/>

				{/* Middle Line */}
				<span
					className={`
						block h-0.5 bg-foreground mb-1
						rounded-full
						transition-all duration-300 ease-in-out
						${isOpenMobile ? 'opacity-0' : 'w-full group-hover:w-3/5'}
					`}
				/>

				{/* Bottom Line */}
				<span
					className={`
						block h-0.5 bg-foreground rounded-full
						transition-all duration-300 ease-in-out
						${
							isOpenMobile
								? 'w-3/4 -rotate-45 -translate-y-1.5'
								: 'w-3/5 group-hover:w-4/5'
						}
					`}
				/>
			</div>
		</button>
	);
}
