<script>
	import SectionItem from '$lib/components/section/section-item/SectionItem.svelte';
	import SectionTitle from '$lib/components/section/section-title/SectionTitle.svelte';
	import SectionContent from '$lib/components/section/section-content/SectionContent.svelte';
	import EducationItem from './components/EducationItem.svelte';
</script>

<SectionItem id="education">
	<SectionTitle slot="title" text="Education" />
	<SectionContent slot="content">
		<EducationItem
			degree="Bachelor of Engineering"
			field="Computer Science"
			institution="Siddaganga Institute Of Technology"
			period="2016-2020"
			score="9.32 CGPA"
		/>
	</SectionContent>
</SectionItem>
