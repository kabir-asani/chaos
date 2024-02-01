<script>
	import Header from '$lib/routes/home/header/Header.svelte';
	import About from '$lib/routes/home/about/About.svelte';
	import Showcase from '$lib/routes/home/showcase/Showcase.svelte';
	import Experience from '$lib/routes/home/developer/Developer.svelte';
	import Entrepreneur from '$lib/routes/home/entrepreneur/Entrepreneur.svelte';
	import Education from '$lib/routes/home/education/Education.svelte';
	import Creator from '$lib/routes/home/creator/Creator.svelte';
	import Contact from '$lib/routes/home/contact/Contact.svelte';
	import Footer from '$lib/routes/home/footer/Footer.svelte';
</script>

<div class="col gap-16">
	<div class="col responsive-x-container gap-16 mt-16">
		<Header />
		<About />
		<Showcase />
		<Entrepreneur />
		<Experience />
		<Creator />
		<Education />
		<Contact />
	</div>
	<Footer />
</div>
