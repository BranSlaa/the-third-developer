<script>
	const packages = [
		{
			title: 'Dynamic Page Count',
			description: 'From one impactful homepage to multi-topic blogs.',
		},
		{
			title: 'Content Management',
			description:
 				'Choose from WordPress or any JAM Stack CMS you prefer.',
		},
		{
			title: 'E-commerce Platform',
			description: 'Beautiful Ecommerce stores, Woocommerce or integration with your platform of choice.',
		},
		{
			title: 'Custom Development',
			description: 'Have an idea that\'s not your typical website? I would love to hear it.',
		},
		{
			title: 'Maintenance and Support Package',
			description: 'Provides ongoing support and maintenance services post-launch.',
		},
		{
			title: 'One-Time Consultation',
			description: 'Do you have code you\'re need help with or need advice for your business\s online presence?',
		},
	];
</script>

<div class="relative bg-gray-100 hero-pattern py-64 overflow-hidden">
	<img
		src="https://picsum.photos/800"
		alt=""
		class="absolute object-cover w-full h-full top-0 left-0"
	/>
	<div class="bg-gradient-to-r from-black to-transparent absolute w-full h-full top-0 left-0" />
	<section id="hero" class="container mx-auto flex items-center relative z-10">
		<div class="w-1/2">
			<h1 class="text-white text-7xl leading-snug">The Third Developer</h1>
			<p class="text-gray-400 mt-4">
				The first developer focuses on the problem. The second developer focuses on the solution. I
				look through the surface to peer into the true meaning. I am the Third Developer, finding
				answers that best fit your needs.
			</p>
			<a
				href="#pricing"
				class="bg-gray-700 text-white px-6 py-2 block w-fit mt-6 rounded uppercase text-sm"
				>Lets begin</a
			>
		</div>
	</section>
</div>
<section id="about" class="container mx-auto flex gap-8 items-center">
	<div class="w-1/2">
		<h2 class="text-5xl font-bold mb-4">Who am I?</h2>
		<p class="mb-8 text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat incididunt ut laboret.
		</p>
		<div class="flex">
			<div class="point">
				<img class="mb-2" src="https://picsum.photos/100" alt="" />
				<h3 class="mb-1">Wisdom</h3>
				<p class="text-gray-400 leading-tight text-sm">Lorem ipsum dolor sit amet, consectetur</p>
			</div>
			<div class="point">
				<img class="mb-2" src="https://picsum.photos/100" alt="" />
				<h3 class="mb-1">Knowledge</h3>
				<p class="text-gray-400 leading-tight text-sm">Lorem ipsum dolor sit amet, consectetur</p>
			</div>
			<div class="point">
				<img class="mb-2" src="https://picsum.photos/100" alt="" />
				<h3 class="mb-1">Truth</h3>
				<p class="text-gray-400 leading-tight text-sm">Lorem ipsum dolor sit amet, consectetur</p>
			</div>
		</div>
	</div>
	<div class="w-1/2 py-24">
		<img src="https://picsum.photos/400" alt="" class="w-full" />
	</div>
</section>
<div class="container mx-auto px-16 py-24">
	<section id="process" class="flex gap-8">
		<div class="w-1/2">
			<h2 class="text-5xl font-bold">How it Works</h2>
			<h3 class="mt-12 text-2xl text-gray-400 font-medium">It's insanely easy to get started</h3>
			<p class="mt-2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna.
			</p>
			<a
				href="#pricing"
				class="bg-gray-700 text-white px-6 py-2 block w-fit mt-16 rounded uppercase text-sm"
				>Start Now</a
			>
		</div>
		<ol class="w-1/2 flex flex-col gap-12">
			<li>
				<h3 class="font-medium text-2xl mb-4">Concept</h3>
				<p class="text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna.
				</p>
			</li>
			<li>
				<h3 class="font-medium text-2xl mb-4">Design</h3>
				<p class="text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna.
				</p>
			</li>
			<li>
				<h3 class="font-medium text-2xl mb-4">Development</h3>
				<p class="text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna.
				</p>
			</li>
		</ol>
	</section>
</div>

<div class="bg-gray-100">
	<div class="max-w-5xl mx-auto py-32">
		<h1 class="text-3xl font-semibold mb-6 text-center">Our Offerings</h1>

		<div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each packages as p (p.title)}
				<div class="bg-white p-6 rounded-md shadow-md mb-4">
					<h2 class="text-xl font-semibold mb-4">{p.title}</h2>
					<p class="mb-4">{p.description}</p>
					{#if p.features && p.features.length > 0}
						<ul class="list-disc ml-6">
							{#each p.features as feature (feature)}
								<li>{feature}</li>
							{/each}
						</ul>
					{/if}
					{#if p.customization}
						<p class="mt-4 text-gray-600">{p.customization}</p>
					{/if}
					{#if p.button}
						<button class="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md">{p.button}</button>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- TODO Add CTA for "anything not here. Icluding custom, consulting and landing pagesx" -->

<div class="container mx-auto">
	<section id="portfolio" class="portfolio-section py-24">
		<h2 class="text-5xl font-bold text-center mb-24">Portfolio</h2>
		<ul class="flex gap-1 border border-gray-700 rounded w-fit mx-auto mb-24 p-1">
			<li class="py-2 px-8 rounded bg-gray-700 text-white">All</li>
			<li class="py-2 px-8 rounded hover:bg-gray-700 hover:text-white">Brochure</li>
			<li class="py-2 px-8 rounded hover:bg-gray-700 hover:text-white">Ecommerce</li>
			<li class="py-2 px-8 rounded hover:bg-gray-700 hover:text-white">Blog</li>
		</ul>
		<div class="grid grid-cols-3 gap-8">
			<img class="w-full" src="https://picsum.photos/200" alt="" />
			<img class="w-full" src="https://picsum.photos/200" alt="" />
			<img class="w-full" src="https://picsum.photos/200" alt="" />
			<img class="w-full" src="https://picsum.photos/200" alt="" />
			<img class="w-full" src="https://picsum.photos/200" alt="" />
			<img class="w-full" src="https://picsum.photos/200" alt="" />
			<img class="w-full" src="https://picsum.photos/200" alt="" />
			<img class="w-full" src="https://picsum.photos/200" alt="" />
			<img class="w-full" src="https://picsum.photos/200" alt="" />
		</div>
	</section>
</div>
<section id="testimonials" class="bg-gray-100">
	<div class="container mx-auto py-32 max-w-4xl">
		<h2 class="text-5xl font-bold text-center mb-16">Testimonials</h2>
		<div class="flex gap-16 mt-8">
			<img src="https://picsum.photos/100" alt="" />
			<div class="content-wrapper">
				<p class="text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat labore et dolore.
				</p>
				<div class="flex gap-4 mt-4">
					<h3 class="attestant">Bruce Wayne</h3>
					<h4 class="text-gray-400">Escentric Billionaire</h4>
				</div>
			</div>
		</div>
		<div class="flex gap-16 mt-8">
			<img src="https://picsum.photos/100" alt="" />
			<div class="content-wrapper">
				<p class="text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat labore et dolore.
				</p>
				<div class="flex gap-4 mt-4">
					<h3 class="attestant">Barry Allen</h3>
					<h4 class="text-gray-400">Athlete</h4>
				</div>
			</div>
		</div>
		<div class="flex gap-16 mt-8">
			<img src="https://picsum.photos/100" alt="" />
			<div class="content-wrapper">
				<p class="text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat labore et dolore.
				</p>
				<div class="flex gap-4 mt-4">
					<h3 class="attestant">Clark Kent</h3>
					<h4 class="text-gray-400">News Reporter</h4>
				</div>
			</div>
		</div>
	</div>
</section>
<section id="contact" class="container mx-auto py-16 max-w-5xl">
	<h2 class="text-5xl font-bold text-center mb-16">Contact Brandon</h2>
	<div class="flex gap-8 items-center">
		<div class="w-1/2">
			<h3 class="text-2xl font-medium mb-4">I'd love to hear from you</h3>
			<p class="text-gray-600 mb-8">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua.
			</p>
			<a href="mailto:branslaa@gmail.com" class="text-gray-400 text-xl">branslaa@gmail.com</a>
		</div>
		<form class="w-1/2 flex flex-col gap-4">
			<input type="email" placeholder="email address" class="border border-gray-400 p-2" />
			<select name="" id="" class="border border-gray-400 p-2">
				<option>value</option>
			</select>
			<textarea name="" id="" cols="30" rows="5" class="border border-gray-400 p-2" />
			<button
				class="bg-gray-700 text-white px-6 py-2 block w-full mt-4 mx-auto rounded uppercase text-sm"
				>Submit</button
			>
		</form>
	</div>
</section>

<style>
	ol {
		counter-reset: list-counter;
		margin-left: 3rem;
		border-left: 1px solid black;
	}
	ol li {
		position: relative;
		counter-increment: list-counter;
		padding-left: 3rem;
	}
	ol li:last-child::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
		transform: translateX(-50%);
		background-color: white;
		width: 2px;
		height: 100%;
	}
	ol li::before {
		content: counter(list-counter);
		position: absolute;
		top: -0.5rem;
		left: 0;
		z-index: 3;
		transform: translateX(-50%);
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		width: 3rem;
		height: 3rem;
		border: 1px solid black;
		border-radius: 100%;
	}
</style>
