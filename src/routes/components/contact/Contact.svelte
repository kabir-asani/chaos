<script>
	const now = new Date();
	const currentTime = now.toLocaleTimeString('en-US', {
		timeZone: 'Asia/Kolkata',
		timeStyle: 'short'
	});
	const currentDate = now.toLocaleDateString('en-US', {
		timeZone: 'Asia/Kolkata',
		dateStyle: 'long'
	});

	import CopyButton from '$lib/components/buttons/copy-button/CopyButton.svelte';
	import SectionItem from '$lib/components/section/section-item/SectionItem.svelte';
	import SectionTitle from '$lib/components/section/section-title/SectionTitle.svelte';
	import SectionContent from '$lib/components/section/section-content/SectionContent.svelte';
</script>

<SectionItem id="contact">
	<SectionTitle slot="title" text="Contact" />
	<SectionContent slot="content">
		<p class="text-neutral">{currentTime} • {currentDate} IST</p>

		<div class="row items-center gap-2">
			<a
				href="https://tally.so/r/wgGBxl"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-primary btn-sm shrink">Connect</a
			>
		</div>
	</SectionContent>
</SectionItem>
