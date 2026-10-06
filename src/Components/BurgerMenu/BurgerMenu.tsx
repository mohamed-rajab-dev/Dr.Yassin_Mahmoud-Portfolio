import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import type { BurgerMenuProps } from '@/Types/BurgerMenuProps';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export function BurgerMenu({
	isOpenMobile,
	mobileMenuRef,
	isHidden,
	setHidden,
	links,
}: BurgerMenuProps) {
	return (
		<div
			ref={mobileMenuRef as React.RefObject<HTMLDivElement>}
			onTransitionEnd={(e) => {
				if (
					e.target === e.currentTarget &&
					e.propertyName === 'opacity' &&
					!isOpenMobile
				) {
					setHidden(true);
				}
			}}
			className={`transition-all duration-300  ${
				isOpenMobile ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
			} ${isHidden ? 'hidden' : 'flex'} w-77 h-fit p-4 rounded-xl bg-background/30 flex-col gap-2 items-center fixed z-101 top-14 right-5 sm:hidden backdrop-blur-md shadow-lg`}>
			<div className='relative w-35 h-35 rounded-full overflow-hidden mt-4'>
				<Image
					src='/images/burgerMenu.png'
					alt='Menu'
					fill
					className='object-cover'
				/>
				{/* <div className='absolute inset-0 blur-sm bg-gradient-to-t from-background via-background/50 via-transparent  to-transparent' /> */}
			</div>

			<ul className='flex w-full items-center justify-center gap-4 mt-4'>
				<li className='rounded-xl border border-primary/20 bg-primary/5 p-2'>
					<a
						href='#'
						className=''>
						<FaFacebook className='w-7 h-7 text-foreground hover:text-primary/70 transition-colors duration-300' />
					</a>
				</li>
				<li className='rounded-xl border border-primary/20 bg-primary/5 p-2'>
					<a
						href='#'
						className=''>
						<FaInstagram className='w-7 h-7 text-foreground hover:text-primary/70 transition-colors duration-300' />
					</a>
				</li>
				<li className='rounded-xl border border-primary/20 bg-primary/5 p-2'>
					<a
						href='#'
						className=''>
						<FaLinkedinIn className='w-7 h-7 text-foreground hover:text-primary/70 transition-colors duration-300' />
					</a>
				</li>
				<li className='rounded-xl border border-primary/20 bg-primary/5 p-2'>
					<a
						href='#'
						className=''>
						<FaXTwitter className='w-7 h-7 text-foreground hover:text-primary/70 transition-colors duration-300' />
					</a>
				</li>
			</ul>

			<ul className='flex flex-col items-center justify-center gap-4 my-4 w-full'>
				{links.map((link, index) => (
					<li key={index}>
						<a
							href='#'
							className='text-foreground text-md font-medium  hover:text-primary/70 transition-colors duration-300 py-1 px-2 rounded-lg gap-2'>
							{link}
						</a>
					</li>
				))}
				<li>
					<ThemeSwitcher />
				</li>
			</ul>
		</div>
	);
}
