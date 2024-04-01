<script>
	let portfolio = [
		// {
		// 	name: "ASICS Runkeeper",
		// 	url: "https://runkeeper.com/cms/",
		// 	imageUrl: "/asics-runkeeper.webp"
		// },
		{
			name: "DBINEX",
			url: "https://dbinex.ca",
			imageUrl: "/dbinex.webp"
		},
		// {
		// 	name: "London Research and Care Partners",
		// 	url: "https://londonresearchandcarepartners.com/",
		// 	imageUrl: "/health-sciences.webp"
		// },
		// {
		// 	name: "Covent Garden Market",
		// 	url: "https://coventmarket.com/",
		// 	imageUrl: "/cgm.webp"
		// },
		// {
		// 	name: "Running USA",
		// 	url: "https://runningusa.org/",
		// 	imageUrl: "/runningusa.webp"
		// },
		// {
		// 	name: "Elemex<sup>®</sup>",
		// 	url: "https://elemex.ca/",
		// 	imageUrl: "/elemex.webp"
		// },
		// {
		// 	name: "KoruK9<sup>®</sup>",
		// 	url: "https://www.koruk9.com/",
		// 	imageUrl: "/koruk9.webp"
		// },
		// {
		// 	name: "Brain Tumour Foundation of Canada",
		// 	url: "https://www.braintumour.ca/",
		// 	imageUrl: "/btf.webp"
		// },
		{
			name: "Cowbell Brewery",
			url: "https://cowbellbrewing.com/",
			imageUrl: "/cowbell.webp"
		},
	];
</script>
<div class="relative  hero-pattern pt-16 px-8 overflow-hidden bg-blue-200">
	<!-- <div class="bg-gradient-to-b from-blue-950 to-blue-800 absolute -z-10 w-full h-full top-0 left-0" /> -->
	<section id="hero" class="container mx-auto flex justify-center items-center text-center relative z-10">
		<div class="max-w-4xl">
			<h1>
				<span class="block text-5xl md:text-7xl leading-none font-header font-bold text-blue-800">Brandon Slaa</span>
				<div class="relative h-4">
					<span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl leading-none font-cursive text-yellow-500 drop-shadow-lg z-10">is</span>
				</div>
				<span class="block text-4xl md:text-5xl leading-none font-header font-bold text-blue-800">the Third Developer</span>
			</h1>
			<p class="text-blue-900 mt-4 max-w-lg mx-auto">
				The first developer focuses on the problem.<br class="hidden md:block">
				The second developer focuses on the solution.<br class="hidden md:block">
				I look through the surface to peer into the true meaning.<br class="hidden md:block">
				I am the Third Developer, finding answers that best fit your needs.
			</p>
		</div>
	</section>
	<div class='container mx-auto max-w-xl mt-16 flex gap-8 flex-col justify-center items-center relative z-10'>
		<div>
			<h2 class='relative text-center mx-auto md:mx-0 md:text-left text-3xl w-fit font-header font-bold text-blue-800 mb-2 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-4 after:w-full after:bg-yellow-500 after:-z-10'>Website Development</h2>
			<p class="text-blue-900 text-center md:text-left">With a wealth of experience gained from London's top agencies, I've honed my skills in website development, catering to a diverse clientele ranging from local startups to global enterprises. My approach emphasizes not only creating visually captivating websites but also ensuring they are accessible to all users and fully optimized for seamless operation on mobile devices. By prioritizing accessibility standards and employing responsive design techniques, I ensure that your website reaches a wider audience and delivers an exceptional user experience across all devices.</p>
		</div>
		<div>
			<h2 class='relative text-center mx-auto md:mx-0 md:text-left text-3xl w-fit font-header font-bold text-blue-800 mb-2 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-4 after:w-full after:bg-yellow-500 after:-z-10'>Process Automation</h2>
			<p class="text-blue-900 text-center md:text-left">Utilizing cutting-edge technologies and customized solutions, I specialize in streamlining your workflows through process automation. From repetitive tasks to complex procedures, I develop automated systems tailored to your specific needs, allowing you to save time, reduce errors, and focus on what matters most - growing your business.</p>
		</div>
		<div>
			<h2 class='relative text-center mx-auto md:mx-0 md:text-left text-3xl w-fit font-header font-bold text-blue-800 mb-2 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-4 after:w-full after:bg-yellow-500 after:-z-10'>Consultation</h2>
			<p class="text-blue-900 text-center md:text-left">Embarking on your journey to establish a powerful online presence can be daunting. That's where I come in. As a dedicated web development professional, I offer comprehensive consultation services tailored to meet the unique needs of your business. Whether you're a budding startup or a growing enterprise, I provide personalized guidance and strategic insights to help you navigate the complexities of website development. From defining your project goals to selecting the right technologies and refining your user experience, I'll be there every step of the way to ensure your vision becomes a reality. Let's collaborate to build a website that not only captures your brand essence but also drives tangible results for your business.</p>
		</div>
	</div>
	<div class="container mx-auto pt-16">
		<section id="portfolio" class="portfolio-section">
			<h2 class="text-5xl text-blue-800 font-bold text-center mb-8">Portfolio</h2>
			<div class="grid md:grid-cols-3 gap-8">
				{#each portfolio as piece}
					<a href={piece.url} target="_blank" class='block'>
						<img class="w-full rounded-lg border-4 border-yellow-500 hover:shadow-lg" src={piece?.imageUrl} alt={piece?.name} />
						<div class='block text-blue-900 font-header font-bold mt-4 text-xl w-full text-center'>{@html piece?.name}</div>
					</a>
				{/each}
			</div>
			<p class="text-center text-2xl mt-8 text-blue-900 font-header">and over 100 more.</p>
		</section>
	</div>
	<section id="contact" class="container mx-auto pt-16 pb-8 max-w-5xl">
		<div class="flex gap-8 justify-center items-center">
			<div class="max-w-1/2 text-center">
				<h2 class="text-blue-900 font-header text-4xl mb-4">I'd love to hear from you</h2>
				<a href="mailto:branslaa@gmail.com" class="text-blue-900 text-center font-bold text-xl hover:border-b-4  hover:border-yellow-500">branslaa@gmail.com</a>
			</div>
		</div>
	</section>
</div>
