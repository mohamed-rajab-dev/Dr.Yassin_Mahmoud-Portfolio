import Image from 'next/image';

type Variant = 'primary' | 'danger';

const variantStyles: Record<Variant, string> = {
	primary: 'md:bg-primary/10 border-primary/20 border-l-primary',
	danger: 'md:bg-red-500/10 border-red-500/20 border-l-red-500',
};

const items: { title: string; text: string; variant: Variant }[] = [
	{
		title: 'Positioning',
		text: 'A clinical platform designed to reflect real vascular decision-making, emphasizing structured reasoning, disciplined evaluation, and case-based thinking instead of promotional or generic medical website language',
		variant: 'primary',
	},
	{
		title: 'What the platform is:',
		text: 'I approach this website as an extension of my clinical identity: precise, calm, premium, and intellectually grounded. Every section should reinforce judgment, teaching, and structured vascular work.',
		variant: 'primary',
	},
	{
		title: 'What it is not:',
		text: 'I avoid stock claims, generic service language, and decorative filler. My focus is on expertise, clinical thinking, and making difficult decisions explicit.',
		variant: 'danger',
	},
];

export function Positioning() {
	return (
		<section className='relative min-h-screen  md:h-screen md:max-h-[700px] w-full overflow-hidden bg-background font-sans'>
			{/* Image layer */}
			<div className='absolute h-full inset-y-0 left-0 w-full md:w-[45%]'>
				<div className='absolute h-full md:h-[98%] w-full'>
					<Image
						src='/images/position.png'
						alt='Positioning'
						fill
						sizes='(min-width: 768px) 45vw, 100vw'
						className='object-cover'
					/>
					<div className='absolute inset-0 from-background via-transparent to-transparent md:bg-linear-to-r' />
				</div>

				{/* Soft blurred edges */}
				<div className='absolute -left-2 -top-2 h-10 w-[105%] bg-linear-to-b from-background via-background to-transparent blur-xs' />
				<div className='absolute -bottom-2 -left-2 h-10 w-[105%] bg-linear-to-t from-background via-background to-transparent blur-xs' />
				<div className='absolute -right-7 top-0 hidden h-full w-24 bg-linear-to-l from-background via-background to-transparent blur-md sm:block' />
			</div>

			{/* Content layer */}
			<div className='absolute inset-x-0 bottom-6 z-10 flex flex-col justify-center px-5 py-2 md:inset-y-0 md:left-auto md:w-[55%]'>
				<div className='grid grid-cols-1 gap-4'>
					{items.map(({ title, text, variant }) => (
						<div
							key={title}
							className={`mt-2 flex flex-col gap-2 rounded-lg border border-l-4 bg-navbar-background/60 p-4 backdrop-blur-xs ${variantStyles[variant]}`}>
							<span className='text-lg font-bold text-foreground md:text-foreground/80'>
								{title}
							</span>
							<p className='text-sm font-semibold tracking-wider text-foreground md:text-base md:text-foreground/80 lg:text-lg'>
								{text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
