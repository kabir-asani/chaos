<script>
	import HighlightItem from './components/HighlightItem.svelte';
	import HighlightLinkItem from './components/HighlightLinkItem.svelte';
	import SocialLinkItem from './components/SocialLinkItem.svelte';
	import XIcon from '$lib/assets/svg/XIcon.svelte';
	import InstagramIcon from '$lib/assets/svg/InstagramIcon.svelte';
	import RedditIcon from '$lib/assets/svg/RedditIcon.svelte';
	import GitHubIcon from '$lib/assets/svg/GitHubIcon.svelte';
	import LinkedInIcon from '$lib/assets/svg/LinkedInIcon.svelte';
</script>

<div class="col md:row gap-4 items-stretch md:items-center">
	<div class="avatar self-center md:w-36">
		<div class="w-32 rounded-full border border-base-content">
			<img src="/images/profile-picture.png" alt="Kabir Asani's close up shot" />
		</div>
	</div>

	<div class="grow col gap-4 md:gap-2 items-center md:items-stretch justify-center">
		<div class="col md:row gap-4 md:gap-2 items-center justify-center md:justify-normal">
			<h1 class="text-2xl md:text-3xl font-semibold">Kabir Asani (Fullstack Developer)</h1>
		</div>

		<div class="wrap md:row gap-4 md:gap-2 items-center justify-center md:justify-normal">
			<HighlightItem text="Developer" sectionId="experience" />
			<HighlightItem text="Creator" sectionId="creator" />
		</div>

		<div class="wrap md:row gap-4 items-center justify-center md:justify-normal">
			<SocialLinkItem text="LinkedIn" url="https://linkedin.com/in/kabirasani/">
				<LinkedInIcon />
			</SocialLinkItem>

			<SocialLinkItem text="X / Twitter" url="https://x.com/KabirAsani">
				<XIcon />
			</SocialLinkItem>

			<SocialLinkItem text="GitHub" url="https://github.com/kabir-asani">
				<GitHubIcon />
			</SocialLinkItem>

			<SocialLinkItem text="Instagram" url="https://instagram.com/kabirstack">
				<InstagramIcon />
			</SocialLinkItem>

			<SocialLinkItem text="Reddit" url="https://reddit.com/u/kabirasani">
				<RedditIcon />
			</SocialLinkItem>
		</div>
	</div>
</div>
