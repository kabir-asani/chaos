<script>
	import SectionTitle from '$lib/components/shared/section/section-title/SectionTitle.svelte';
	import SectionContent from '$lib/components/shared/section/section-content/SectionContent.svelte';
	import SectionItem from '$lib/components/shared/section/section-item/SectionItem.svelte';
	import Column from '$lib/components/shared/layouts/column/Column.svelte';
</script>

<SectionItem id="header">
	<SectionTitle slot="title" text="About" />
	<SectionContent slot="content" variant="sole">
		<Column class="grow gap-4">
			<p>I'm Kabir Asani. I'm an entrepreneur, developer, content creator, and experimentalist.</p>

			<p>
				While professionally specialised in minimalist, aesthetic and functional experiences, I
				extend these principles to my personal life and beyond.
			</p>

			<p>
				With a degree in Computer Science, I started in an early-age startup and grew into senior
				roles at various tech companies thereafter.
			</p>

			<p>
				I'm now on my entrepreneurial journey, whilst creating content with an aim and intent to
				give back to the society.
			</p>
		</Column>
	</SectionContent>
</SectionItem>
