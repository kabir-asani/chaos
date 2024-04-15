<script>
	import GitHubIcon from '$lib/assets/svg/GitHubIcon.svelte';
	import InstagramIcon from '$lib/assets/svg/InstagramIcon.svelte';
	import XIcon from '$lib/assets/svg/XIcon.svelte';
	import Linkable from '$lib/components/linkable/Linkable.svelte';
	import ThemeButton from '$lib/components/buttons/theme-button/ThemeButton.svelte';
	import RedditIcon from '$lib/assets/svg/RedditIcon.svelte';
	import LinkedInIcon from '$lib/assets/svg/LinkedInIcon.svelte';
</script>

<footer class="footer items-center p-4 text-base-content bg-base-200">
	<aside class="items-center grid-flow-col">
		<p>Copyright © 2024 - All rights reserved by Kabir Asani</p>
	</aside>
	<nav class="grid-flow-col gap-4 items-center">
		<Linkable href="/attributions" class="link" external={false}>Attributions</Linkable>
		<Linkable href="/affiliates" class="link" external={false}>Affiliates</Linkable>
		<Linkable href="/shout-outs" class="link" external={false}>Shout Outs</Linkable>
	</nav>
	<nav class="grid-flow-col gap-4 items-center md:place-self-center md:justify-self-end">
		<ThemeButton />

		<Linkable href="https://linkedin.com/in/kabirasani/">
			<LinkedInIcon class="h-5 w-5 fill-base-content" />
		</Linkable>

		<Linkable href="https://x.com/KabirAsani">
			<XIcon class="h-5 w-5 fill-base-content" />
		</Linkable>

		<Linkable href="https://instagram.com/kabir.asani">
			<InstagramIcon class="h-5 w-5 fill-base-content" />
		</Linkable>

		<Linkable href="https://github.com/kabir-asani">
			<GitHubIcon class="h-5 w-5 fill-base-content" />
		</Linkable>

		<Linkable href="https://reddit.com/u/kabirasani">
			<RedditIcon class="h-5 w-5 fill-base-content" />
		</Linkable>
	</nav>
</footer>
