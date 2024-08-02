<script>
	import SectionItem from '$lib/components/section/section-item/SectionItem.svelte';
	import SectionTitle from '$lib/components/section/section-title/SectionTitle.svelte';
	import SectionContent from '$lib/components/section/section-content/SectionContent.svelte';
	import DeveloperItem from './components/DeveloperItem.svelte';
</script>

<SectionItem id="experience">
	<SectionTitle slot="title" text="Work Experience" />
	<SectionContent slot="content">
		<DeveloperItem
			role="Founder"
			company="AI Shorts"
			companyUrl="https://aishorts.club"
			period="2024"
			onelineDescription="Developed a short-form news app delivering byte-sized updates on AI, everyday"
		/>
		<DeveloperItem
			role="Senior Software Engineer"
			company="INDMoney"
			companyUrl="https://indmoney.com"
			period="2022 - 2023"
			onelineDescription="Developed key features of INDMoney's flag-ship app and contributed across several verticals"
		/>
		<DeveloperItem
			role="Software Engineer"
			company="Qoohoo"
			companyUrl="https://qoohoo.in"
			period="2021 - 2022"
			onelineDescription="Developed Qoohoo's flag-ship app ground up and led deployement efforts across the platforms"
		/>
		<DeveloperItem
			role="Software Engineer"
			company="Go Nuclei"
			companyUrl="https://gonuclei.com"
			period="2019 - 2021"
			onelineDescription="Developed several key frameworks that were critical to core business outcomes for the organisation"
		/>
	</SectionContent>
</SectionItem>
