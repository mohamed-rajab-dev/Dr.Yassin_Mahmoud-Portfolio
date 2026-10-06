'use client';
import { ThemeSwitcher } from '@/Components/ThemeSwitcher/ThemeSwitcher';
// import { TextAlignStart } from 'lucide-react';
import { BurgerButton } from '@/Components/BurgerButton/BurgerButton';
import { BurgerMenu } from '@/Components/BurgerMenu/BurgerMenu';
import { useState, useRef } from 'react';
export function Navbar() {
	const mobileMenuRef = useRef<HTMLElement>(null!);
	const [isOpenMobile, setIsOpenMobile] = useState(false);
	const [isHidden, setHidden] = useState(true);

	return (
		<>
			<header className=' right-5 flex sm:block items-center justify-center  w-10 h-10 font-sans fixed top-3 sm:left-1/2 sm:-translate-x-1/2  sm:max-w-[600px] sm:w-3/7 sm:min-w-[395px] z-[100] bg-navbar-background/60 backdrop-blur-sm sm:h-14 rounded-full shadow-xl '>
				<nav className=' hidden sm:flex items-center justify-between h-full px-4'>
					<div className='text-foreground font-bold text-lg hover:text-primary/70 transition-colors duration-300'>
						<a
							href=''
							className=''>
							Dr. Yassin
						</a>
					</div>
					<div className='flex gap-5'>
						<a
							href='#'
							className="
    relative text-foreground
    hover:text-primary/70
    transition-colors duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:rounded-full
    after:bg-gradient-to-l after:from-primary after:to-primary/10
    after:transition-all after:duration-300
    hover:after:w-full
  ">
							Home
						</a>

						<a
							href='#'
							className="
    relative text-foreground
    hover:text-primary/70
    transition-colors duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:rounded-full
    after:bg-gradient-to-l after:from-primary after:to-primary/10
    after:transition-all after:duration-300
    hover:after:w-full
  ">
							Home
						</a>

						<a
							href='#'
							className="
    relative text-foreground
    hover:text-primary/70
    transition-colors duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:rounded-full
    after:bg-gradient-to-l after:from-primary after:to-primary/10
    after:transition-all after:duration-300
    hover:after:w-full
  ">
							Home
						</a>
					</div>
					<ThemeSwitcher />
				</nav>
				<div className='sm:hidden'>
					<BurgerButton
						isOpenMobile={isOpenMobile}
						setIsOpenMobile={setIsOpenMobile}
						setIsHidden={setHidden}
						mobileMenuRef={mobileMenuRef}
					/>
				</div>
			</header>
			<BurgerMenu
				isOpenMobile={isOpenMobile}
				mobileMenuRef={mobileMenuRef}
				isHidden={isHidden}
				setHidden={setHidden}
				links={['Home', 'About', 'Contact']}
			/>
		</>
	);
}
