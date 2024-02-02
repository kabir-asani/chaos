<script>
	import DiscordIcon from '$lib/assets/svg/DiscordIcon.svelte';
	import GitHubIcon from '$lib/assets/svg/GitHubIcon.svelte';
	import InstagramIcon from '$lib/assets/svg/InstagramIcon.svelte';
	import RedditIcon from '$lib/assets/svg/RedditIcon.svelte';
	import XIcon from '$lib/assets/svg/XIcon.svelte';
	import YouTubeIcon from '$lib/assets/svg/YouTubeIcon.svelte';
	import AttributionItem from './components/attribution-item/AttributionItem.svelte';
</script>

<div class="col gap-4 responsive-x-container my-16">
	<div class="text-sm breadcrumbs">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/attributions">Attributions</a></li>
		</ul>
	</div>

	<h1 class="text-xl">Attributions</h1>

	<div class="col gap-4 items-stretch">
		<AttributionItem
			resource="GitHub Icon"
			resourceLink="https://icons8.com/icon/ARy6tFUfwclb/github"
			provider="Icons8"
			providerLink="https://icons8.com"
		>
			<GitHubIcon />
		</AttributionItem>

		<AttributionItem
			resource="X (formerly Twitter) Icon"
			resourceLink="https://icons8.com/icon/zWrz2bjEiP4D/twitterx"
			provider="Icons8"
			providerLink="https://icons8.com"
		>
			<XIcon />
		</AttributionItem>

		<AttributionItem
			resource="Instagram Icon"
			resourceLink="https://icons8.com/icon/ZOFC5nSr215Y/instagram"
			provider="Icons8"
			providerLink="https://icons8.com"
		>
			<InstagramIcon />
		</AttributionItem>

		<AttributionItem
			resource="YouTube Icon"
			resourceLink="https://icons8.com/icon/NgVx6SS0Wbjb/youtube"
			provider="Icons8"
			providerLink="https://icons8.com"
		>
			<YouTubeIcon />
		</AttributionItem>

		<AttributionItem
			resource="Reddit Icon"
			resourceLink="https://icons8.com/icon/BYV9op3GaySd/reddit"
			provider="Icons8"
			providerLink="https://icons8.com"
		>
			<RedditIcon />
		</AttributionItem>

		<AttributionItem
			resource="Discord Icon"
			resourceLink="https://icons8.com/icon/RwPuYSPwyY7d/discord-new"
			provider="Icons8"
			providerLink="https://icons8.com"
		>
			<DiscordIcon />
		</AttributionItem>
	</div>
</div>
