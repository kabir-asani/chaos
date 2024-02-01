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

	import CopyButton from '$lib/components/shared/buttons/copy-button/CopyButton.svelte';
	import SectionItem from '$lib/components/shared/section/section-item/SectionItem.svelte';
	import SectionTitle from '$lib/components/shared/section/section-title/SectionTitle.svelte';
	import SectionContent from '$lib/components/shared/section/section-content/SectionContent.svelte';
</script>

<SectionItem id="contact">
	<SectionTitle slot="title" text="Contact" />
	<SectionContent slot="content">
		<p class="text-neutral">{currentTime} • {currentDate} IST</p>

		<div class="flex flex-row items-center gap-2">
			<p class="link text-neutral">iamkabirasani@gmail.com</p>
			<CopyButton text="iamkabirasani@gmail.com" />
		</div>
	</SectionContent>
</SectionItem>
