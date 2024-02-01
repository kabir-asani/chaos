<script lang="ts">
	export let text: String;
	export let url: String;

	import Linkable from '$lib/components/shared/linkable/Linkable.svelte';
</script>

<Linkable href={url.valueOf()}>
	<div class="row items-center gap-2">
		<div class="h-54 w-5 fill-base-content">
			<slot />
		</div>
		{text}
	</div>
</Linkable>
