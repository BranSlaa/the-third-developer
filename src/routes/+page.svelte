<script>
	let statements = [
		{
			title: "Crafting Websites with Character",
			statement: "Drawing from my experience with London's top agencies, I've honed my skills in website development. From local startups to global enterprises, I've catered to diverse clientele. My approach goes beyond aesthetics; I prioritize accessibility and seamless mobile functionality, ensuring your website reaches and resonates with a wider audience.",
		},
		{
			title: "Streamlining Operations with Automation",
			statement: "As a Computer Programmer Analyst, I specialize in simplifying operations. Whether it's basic email automation or complex procedures, I tailor systems to fit your exact needs. This frees up your time to focus on what matters - driving business growth.",
		},
		{
			title: "Personalized Consultation for Your Journey",
			statement: "Embarking on your online journey can feel overwhelming. That's where I step in. Offering personalized consultation services, I guide you through every step of the development process. From defining goals to selecting the right technologies, I'll ensure your vision comes to life. Whether you're a startup or a growing enterprise, let's collaborate to build a website that truly reflects your brand and drives tangible results.",
		},
	];
	let portfolio = [
		// {
		// 	name: "ASICS Runkeeper",
		// 	url: "https://runkeeper.com/cms/",
		// 	imageUrl: "/asics-runkeeper.webp"
		// },
		{
			name: "DB Interiors Exteriors",
			url: "https://dbinex.ca",
			imageUrl: "/dbinex.webp"
		},
		{
			name: "London Research and Care Partners",
			url: "https://londonresearchandcarepartners.com/",
			imageUrl: "/health-sciences.webp"
		},
		// {
		// 	name: "Running USA",
		// 	url: "https://runningusa.org/",
		// 	imageUrl: "/runningusa.webp"
		// },
		{
			name: "Covent Garden Market",
			url: "https://coventmarket.com/",
			imageUrl: "/cgm.webp"
		},
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
			name: "Elemex<sup>®</sup>",
			url: "https://elemex.ca/",
			imageUrl: "/elemex.webp"
		},
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
					<span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl leading-none font-cursive text-yellow-500 drop-shadow-yeller z-10">is</span>
				</div>
				<span class="block text-4xl md:text-5xl leading-none font-header font-bold text-blue-800">the Third Developer</span>
			</h1>
			<p class="text-blue-900 mt-4 max-w-lg mx-auto">
				The first developer focuses on the problem.<br class="hidden md:block">
				The second developer focuses on the solution.<br class="hidden md:block">
				I look through the surface to peer into the true meaning.<br class="hidden md:block">
				I am the Third Developer, finding answers that best fit your needs.
			</p>
			<p class="text-blue-900 mt-8 max-w-lg mx-auto">
				In a world obsessed with "what" and "how", I bring the "why".  Having honed my craft working with London's leading agencies, I don't just build websites and automate tasks - I unearth the deeper needs of your business.  Leveraging my experience with diverse clientele, from startups to global corporations, I craft solutions that resonate with your target audience and empower your team to focus on what truly matters - growth.  Let's chat and discover how I can become your secret weapon.
			</p>
		</div>
	</section>
	<div class='container mx-auto max-w-xl mt-16 flex gap-8 flex-col justify-center items-center relative z-10'>
		{#each statements as statement}
			<div>
				<h2 class='relative text-center mx-auto md:mx-0 md:text-left text-3xl w-fit font-header font-bold text-blue-800 mb-2 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-4 after:w-full after:bg-yellow-500 after:-z-10'>{statement.title}</h2>
				<p class="text-blue-900 text-center md:text-left">{statement.statement}</p>
			</div>
		{/each}
	</div>
	<div class="container mx-auto pt-16">
		<section id="portfolio" class="portfolio-section">
			<h2 class="text-4xl text-blue-800 font-bold text-center mb-8">Check Out My Portfolio</h2>
			<div class="grid md:grid-cols-3 gap-4">
				{#each portfolio as piece}
					<a href={piece.url} target="_blank" class='block'>
						<img class="w-full rounded-lg border-4 border-yellow-500 hover:shadow-lg" src={piece?.imageUrl} alt={piece?.name} />
						<div class='block text-blue-900 font-header font-bold mt-4 text-xl w-full text-center hover:underline'>{@html piece?.name}</div>
					</a>
				{/each}
			</div>
			<p class="text-center text-2xl mt-8 text-blue-900 font-header">and over 100 more.</p>
		</section>
	</div>
	<section id="contact" class="container mx-auto pt-16 pb-8 max-w-5xl">
		<div class="flex gap-8 justify-center items-center">
			<div class="max-w-1/2 text-center">
				<h2 class="text-blue-900 font-header text-4xl mb-4">Get in Touch</h2>
				<p>Ready to elevate your online presence?<br>Shoot me an email at <a href="mailto:branslaa@gmail.com" class="text-blue-900 text-center font-bold text-lg hover:border-b-4 hover:border-yellow-500">branslaa@gmail.com</a>. I can't wait to hear from you.</p>
				
			</div>
		</div>
	</section>
	<section class="container mx-auto pt-16 pb-8 max-w-5xl text-center">
		<p>Based out of St Thomas, Ontario.</p>
	</section>
</div>
