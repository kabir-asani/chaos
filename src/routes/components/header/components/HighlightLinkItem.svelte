<script lang="ts">
	export let text: String;
	export let url: String;
</script>

<a href={url.valueOf()}>
	<div
		class="bg-primary rounded-lg border border-primary px-2 py-1 text-sm font-medium hover:opacity-75"
	>
		{text}
	</div>
</a>
