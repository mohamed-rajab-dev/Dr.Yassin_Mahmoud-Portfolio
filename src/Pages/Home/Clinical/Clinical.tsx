const cards = [
	{
		number: '01',
		title: 'Clinical Practice',
		tagline: 'Complex care. Structured decisions.',
		items: [
			'Arterial reconstruction',
			'Vascular access',
			'Endovascular',
			'Limb salvage',
		],
	},
	{
		number: '02',
		title: 'Clinical Approach',
		tagline: 'Evidence guides. Judgment decides.',
		items: [
			'Evidence-based decisions',
			'Perioperative reasoning',
			'Treatment plans',
		],
	},
	{
		number: '03',
		title: 'Teaching & Improvement',
		tagline: 'Structured. Teachable. Reviewable.',
		items: [
			'M&M review',
			'Case databases',
			'Clinical audit',
			'Surgical teaching',
		],
	},
];

export function Clinical() {
	return (
		<section className='relative flex w-full flex-col items-center bg-background font-sans text-foreground lg:h-screen lg:max-h-[760px]'>
			<div className='flex w-full flex-1 flex-col gap-10 px-6 py-16 md:px-12 lg:gap-14 lg:px-24 lg:py-20'>
				{/* Heading */}
				<header className='flex max-w-3xl flex-col gap-5'>
					<h2 className='text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-[56px]'>
						Clinical <span className='text-primary'>Focus</span>
					</h2>
					<p className='text-base leading-relaxed text-foreground/70 md:text-lg'>
						A focused view of my clinical practice — combining surgical
						expertise, structured decision-making, and continuous learning to
						deliver thoughtful, evidence-informed vascular care.
					</p>
				</header>

				{/* Cards */}
				<div className='grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7'>
					{cards.map((card) => (
						<article
							key={card.number}
							className='flex flex-col gap-5 rounded-2xl border border-primary/20 bg-navbar-background p-8 lg:p-9'>
							<span className='text-sm font-semibold tracking-[0.12em] text-primary'>
								{card.number}
							</span>

							<h3 className='text-2xl font-semibold leading-tight lg:text-[28px]'>
								{card.title}
							</h3>

							<p className='text-base text-foreground/70'>{card.tagline}</p>

							<div className='h-px bg-primary/20' />

							<ul className='flex flex-col gap-3.5 text-base'>
								{card.items.map((item) => (
									<li
										key={item}
										className='flex items-center gap-3'>
										<span className='size-1.5 shrink-0 rounded-full bg-primary' />
										{item}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
