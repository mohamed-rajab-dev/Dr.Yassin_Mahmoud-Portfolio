import Image from 'next/image';
import { FiActivity } from 'react-icons/fi';
import { FaDatabase, FaGlobe } from 'react-icons/fa';
import { LuBuilding2, LuBriefcaseMedical } from 'react-icons/lu';

// import {
// 	Activity,
// 	BriefcaseMedical,
// 	Building2,
// 	Database,
// 	Globe,
// } from 'lucide-react';
export function Hero() {
	return (
		<div className='h-screen  max-h-[700px] font-sans w-full bg-background relative'>
			<div className='h-full w-full z-20 relative'>
				<FiActivity className='absolute hidden sm:block top-1/2 sm:-left-10 md:-left-20 lg:-left-30 xl:-left-50 transform w-1/2 h-1/2 -translate-y-1/2  text-primary/20' />
				<div
					className='absolute h-fit w-[90%] left-1/2 -translate-x-1/2 bottom-0 flex flex-col
                sm:left-0 sm:translate-x-0 sm:top-0 sm:h-full sm:w-[55%]
                bg-background/30 border border-background/10 rounded-lg
                backdrop-blur-sm sm:border-0 sm:backdrop-blur-none sm:bg-transparent sm:ps-4'>
					<span className='text-base p-4 sm:text-lg lg:text-xl  text-foreground/80 font-extrabold xl:text-xl sm:mt-18 md:mt-16 lg:mt-15 uppercase'>
						Vascular Surgery
					</span>

					<h1 className=' px-4 flex items-center gap-2 sm:mt-13 md:mt-11 lg:mt-10 '>
						<span
							className='text-foreground/80 relative w-fit
												after:content-[""] after:absolute
												after:-bottom-2 after:left-0
												after:w-full after:h-2
												after:bg-gradient-to-r
												after:rounded-lg
												after:from-primary/80 after:to-transparent text-[26.5px] sm:text-[30px] md:text-[37px] lg:text-[50px]  xl:text-[65px] font-extrabold'>
							Dr.
						</span>
						<span className='flex-1 text-[26.5px] sm:text-[29.5px] md:text-[36.5px] lg:text-[50px]  xl:text-[65px] font-extrabold text-primary/80   '>
							Yassin Mahmoud
						</span>
					</h1>

					<p className=' text-foreground/70  text-sm  px-4 my-5 sm:text-base md:text-lg lg:text-lg xl:text-xl/9 font-medium  sm:mt-13 md:mt-11 lg:mt-10 sm:w-[90%]'>
						Consultant Vascular & Endovascular Surgeon dedicated to clinical
						excellence and surgical innovation. Exploring complex vascular cases
						through evidence-based insights and modern treatment strategies.
					</p>

					<ul className='grid grid-cols-2  xl:grid-cols-4 gap-2 px-4 py-2'>
						<li className='rounded-xl border border-primary/20 bg-primary/5 p-2'>
							<div className='flex gap-2 items-center'>
								<LuBriefcaseMedical className='w-4 h-4 md:w-6 md:h-6  text-primary/80 mb-1' />
								<p className='text-lg font-bold text-foreground/80'>10+</p>
							</div>
							<p className='text-[10px] md:text-xs lg:text-base font-medium text-foreground/80'>
								Years in open & endovascular practice
							</p>
						</li>

						<li className='rounded-xl border border-primary/20 bg-primary/5 p-2'>
							<div className='flex gap-2 items-center '>
								<LuBuilding2 className='w-4 h-4 md:w-6 md:h-6 text-primary/80 mb-1' />
								<p className='text-lg font-bold text-foreground/80'>4</p>
							</div>
							<p className='text-[10px] md:text-xs font-medium lg:text-base text-foreground/80'>
								Principal vascular training centers
							</p>
						</li>

						<li className='rounded-xl border border-primary/20 bg-primary/5 p-2'>
							<div className='flex gap-2 items-center '>
								<FaDatabase className='w-4 h-4 md:w-6 md:h-6 text-primary/80 mb-1' />
								<p className='text-lg font-bold text-foreground/80'>1</p>
							</div>
							<p className='text-[10px] md:text-xs font-medium lg:text-base text-foreground/80'>
								Structured vascular case database
							</p>
						</li>

						<li className='rounded-xl border border-primary/20 bg-primary/5 p-2'>
							<div className='flex gap-2 items-center '>
								<FaGlobe className='w-4 h-4 md:w-6 md:h-6 text-primary/80 mb-1' />
								<p className='text-lg font-bold text-foreground/80'>2</p>
							</div>
							<p className='text-[10px] md:text-xs font-medium lg:text-base text-foreground/80'>
								Healthcare systems across Egypt & Bahrain
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className=' h-full absolute w-full z-10 top-0 right-0 overflow-hidden '>
				<div className='absolute w-full sm:w-[45%] md:w-[55%] lg:w-[45%] right-0 top-0 h-[75%] sm:h-[98%]'>
					<Image
						src='/images/hero.webp'
						alt='Hero'
						fill
						className='object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-background via-background/50 via-transparent  to-transparent' />

					<div className=' hidden sm:block absolute -left-8 -top-5  w-25 h-[120%] blur-md bg-gradient-to-r from-background via-background  to-transparent' />

					<div className='  absolute  left-0 h-16  -bottom-4 w-full bg-gradient-to-t from-background via-background to-transparent blur-sm' />
				</div>
			</div>
		</div>
	);
}
