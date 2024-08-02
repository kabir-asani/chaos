<script>
	import SectionTitle from '$lib/components/section/section-title/SectionTitle.svelte';
	import SectionContent from '$lib/components/section/section-content/SectionContent.svelte';
	import SectionItem from '$lib/components/section/section-item/SectionItem.svelte';
	import Column from '$lib/layouts/column/Column.svelte';
</script>

<SectionItem id="header">
	<SectionTitle slot="title" text="About" />
	<SectionContent slot="content" variant="sole">
		<Column class="grow gap-4">
			<p>I'm Kabir Asani. I'm a full-stack mobile developer and tech-content creator.</p>

			<p>
				While professionally specialised in minimalist, aesthetic and functional experiences, I
				extend these principles to my personal life and beyond.
			</p>

			<p>
				With a degree in Computer Science, I started in an early-age startup and grew into senior
				roles at various tech companies thereafter.
			</p>

			<p>I recently ventured into enterpreneurship with AI Shorts and failed!</p>
		</Column>
	</SectionContent>
</SectionItem>
