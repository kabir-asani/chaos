<script>
	import SectionItem from '$lib/components/section/section-item/SectionItem.svelte';
	import SectionTitle from '$lib/components/section/section-title/SectionTitle.svelte';
	import SectionContent from '$lib/components/section/section-content/SectionContent.svelte';
	import CreatorItem from './components/CreatorItem.svelte';
	import InstagramIcon from '$lib/assets/svg/InstagramIcon.svelte';
</script>

<SectionItem id="creator">
	<SectionTitle slot="title" text="Creator" />
	<SectionContent slot="content">
		<CreatorItem
			text="@kabirstack"
			tag="Computer Science • English"
			url="https://instagram.com/kabirstack"
		>
			<InstagramIcon />
		</CreatorItem>

		<CreatorItem
			text="@kstackdev"
			tag="Computer Science • Hindi"
			url="https://www.instagram.com/kstackdev"
		>
			<InstagramIcon />
		</CreatorItem>
	</SectionContent>
</SectionItem>
