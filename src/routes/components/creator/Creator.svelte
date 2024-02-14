<script>
	import SectionItem from '$lib/components/section/section-item/SectionItem.svelte';
	import SectionTitle from '$lib/components/section/section-title/SectionTitle.svelte';
	import SectionContent from '$lib/components/section/section-content/SectionContent.svelte';
	import CreatorItem from './components/CreatorItem.svelte';
	import InstagramIcon from '$lib/assets/svg/InstagramIcon.svelte';
	import YouTubeIcon from '$lib/assets/svg/YouTubeIcon.svelte';
</script>

<SectionItem id="creator">
	<SectionTitle slot="title" text="Creator" />
	<SectionContent slot="content">
		<CreatorItem
			text="@kabirstack"
			tag="Developer • AI • Python • System Design"
			url="https://instagram.com/kabirstack"
		>
			<InstagramIcon />
		</CreatorItem>

		<CreatorItem
			text="@kstacklive"
			tag="Open Source • Build In Public"
			url="https://www.instagram.com/kstacklive"
		>
			<InstagramIcon />
		</CreatorItem>
	</SectionContent>
</SectionItem>
