<script>
	import ShowcaseItem from './components/ShowcaseItem.svelte';
	import SectionItem from '$lib/components/section/section-item/SectionItem.svelte';
	import SectionTitle from '$lib/components/section/section-title/SectionTitle.svelte';
	import SectionContent from '$lib/components/section/section-content/SectionContent.svelte';
</script>

<SectionItem id="projects">
	<SectionTitle slot="title" text="Projects" />
	<SectionContent slot="content" variant="grid">
		<ShowcaseItem
			emoji="🚀"
			name="Intellecto"
			onelineDescription="Inference Wrapper"
			highlight={true}
			highlightContent="Open Source"
			url="https://github.com/kabir-asani/intellecto-python"
		/>

		<ShowcaseItem
			emoji="😎"
			name="Chaos"
			onelineDescription="Curated Portfolio"
			url="https://github.com/kabir-asani/chaos"
		/>
		<ShowcaseItem
			emoji="🎄"
			name="TwitterX"
			onelineDescription="Clone"
			url="https://github.com/kabir-asani/TonyStark"
		/>
	</SectionContent>
</SectionItem>
