<script lang="ts">
	export let text: String;
	export let url: String;

	import Row from '$lib/components/shared/layouts/row/Row.svelte';
	import Linkable from '$lib/components/shared/linkable/Linkable.svelte';
</script>

<Linkable href={url.valueOf()} class="font-medium">
	<Row class="items-center gap-2">
		<div class="h-54 w-5 fill-base-content">
			<slot />
		</div>
		{text}
	</Row>
</Linkable>
