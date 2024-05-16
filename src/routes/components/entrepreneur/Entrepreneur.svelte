<script>
	import SectionItem from '$lib/components/section/section-item/SectionItem.svelte';
	import SectionTitle from '$lib/components/section/section-title/SectionTitle.svelte';
	import SectionContent from '$lib/components/section/section-content/SectionContent.svelte';
	import EntrepreneurshipItem from './components/EntrepreneurItem.svelte';
</script>

<SectionItem id="entrepreneurship">
	<SectionTitle slot="title" text="Entrepreneur" />
	<SectionContent slot="content">
		<EntrepreneurshipItem
			role="Founder & CEO"
			company="AI Shorts"
			period="2024 - Present"
			companyUrl="https://aishorts.club"
			onelineDescription="AI Shorts -- Delivers latest AI news in under 60 words"
		/>

		<EntrepreneurshipItem
			role="Co-founder"
			company="Async Bay"
			companyUrl="https://asyncbay.com"
			period="2023 - 2024"
			onelineDescription="Leading a software studio being run ground up by engineers (frontend & backend) with over 5+ years of experience each"
		/>
	</SectionContent>
</SectionItem>
