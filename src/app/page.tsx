import { Clinical } from '@/Pages/Home/Clinical/Clinical';
import { Hero } from '@/Pages/Home/Hero/Hero';
import { Positioning } from '@/Pages/Home/Positioning/Positioning';
export default function Home() {
	return (
		<main className=' min-h-screen'>
			<Hero />
			<Positioning />
			<Clinical />
		</main>
	);
}
