<script lang="ts">
	export let text: String;
	export let sectionId: String;

	const scrollToSection = (event: MouseEvent): void => {
		event.preventDefault();
		const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href');

		console.log(targetId);

		if (targetId) {
			const targetElement = document.querySelector(targetId);
			console.log(targetElement);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth', inline: 'end' });
			}
		}
	};
</script>

<a href="#{sectionId.valueOf()}" on:click={scrollToSection}>
	<div class="bg-base-100 rounded-lg border border-primary px-2 py-1 text-sm text-primary">
		{text}
	</div>
</a>
