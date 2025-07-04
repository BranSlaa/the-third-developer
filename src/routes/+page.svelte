<script>
	import Hero from '$lib/components/Hero.svelte';
	import Offerings from '$lib/components/Offerings.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import MagnetLines from '$lib/components/MagnetLines.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { onMount } from 'svelte';
	import { scrollFadeIn } from '$lib/actions/scrollFadeIn.js';
	import Reviews from '$lib/components/Reviews.svelte';
	let magnetLinesContainer;

	onMount(async () => {
		if (typeof window !== 'undefined') {
			const gsap = (await import('gsap')).default;
			const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
			gsap.registerPlugin(ScrollTrigger);

			const tiles = document.querySelectorAll('.project-tile');
			gsap.set(tiles, {
				y: 50,
				opacity: 0,
				scale: 0.96,
				filter: 'blur(8px)',
			});
			gsap.to(tiles, {
				y: 0,
				opacity: 1,
				scale: 1,
				filter: 'blur(0px)',
				stagger: 0.15,
				duration: 0.9,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '#portfolio-grid',
					start: 'top 80%',
					toggleActions: 'play none none reverse',
				},
			});
		}
	});
</script>

<div class="relative pt-16 overflow-hidden bg-ink-500">
	<section
		id="hero"
		class="container mx-auto flex justify-center items-center relative z-10 pb-16 md:pb-48 px-8"
	>
		<Hero />
	</section>
	<section
		class="container mx-auto max-w-2xl px-8"
		use:scrollFadeIn={{ threshold: 1, y: 40, duration: 600 }}
	>
		<h2
			class="text-offwhite-500 text-left md:text-justify text-2xl font-emphasis"
		>
			In a world obsessed with '<span class="text-blue-500">what</span>'
			and '<span class="text-blue-500">how</span>',
		</h2>
		<p class="text-offwhite-500 mt-4 text-left md:text-justify">
			In a world obsessed with "what" and "how", I bring the "why". Having
			honed my craft working with London's leading agencies, I don't just
			build websites and automate tasks - <span class="text-blue-300"
				>I unearth the deeper needs of your business</span
			>. Leveraging my experience with diverse clientele, from startups to
			global corporations, I craft solutions that resonate with your
			target audience and empower your team to focus on what truly matters
			- <span class="text-blue-300">growth</span>. Let's chat and discover
			how I can become your secret weapon.
		</p>
	</section>
	<section
		class="container mx-auto pt-16 px-8 pb-8 max-w-5xl"
		use:scrollFadeIn={{ threshold: 1, y: 40, duration: 600 }}
	>
		<Offerings />
	</section>
	<section
		id="portfolio"
		class="relative text-offwhite-500 px-6 py-24 max-w-7xl mx-auto"
	>
		<Projects />
	</section>
	<section class="container mx-auto pt-16 px-8 pb-8 max-w-5xl">
		<Reviews />
	</section>
	<div class="relative flex items-center justify-center overflow-hidden">
		<div
			bind:this={magnetLinesContainer}
			class="absolute inset-0 w-full h-full"
		>
			<MagnetLines />
		</div>
		<section class="container mx-auto py-16 relative text-center z-10">
			<Contact />
		</section>
	</div>
	<section
		class="container mx-auto pt-16 pb-8 max-w-5xl text-center text-offwhite-500"
	>
		<p>Based out of St Thomas, Ontario.</p>
		<a
			href="mailto:iam@thethird.dev"
			class="text-yellow-500 mt-4 text-emphasis hover:underline"
			>iam@thethird.dev</a
		>
	</section>
</div>
