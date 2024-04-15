<script>
	import Advertisement from './components/advertisement/Avertisement.svelte';
	import Header from './components/header/Header.svelte';
	import About from './components/about/About.svelte';
	import Showcase from './components/showcase/Showcase.svelte';
	import Experience from './components/developer/Developer.svelte';
	import Entrepreneur from './components/entrepreneur/Entrepreneur.svelte';
	import Education from './components/education/Education.svelte';
	import Creator from './components/creator/Creator.svelte';
	import Contact from './components/contact/Contact.svelte';
	import Footer from './components/footer/Footer.svelte';
</script>

<div class="col gap-16">
	<Advertisement />
	<div class="col responsive-x-container gap-16 mt-4">
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
