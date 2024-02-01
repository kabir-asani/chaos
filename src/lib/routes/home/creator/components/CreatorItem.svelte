<script lang="ts">
	export let text: String;
	export let tag: String;
	export let url: String;

	import Linkable from '$lib/components/linkable/Linkable.svelte';
</script>

<div class="row gap-4 items-center">
	<div class="col gap-2 items-start">
		<Linkable href={url.valueOf()}>
			<div class="text-primary">{text}</div>
		</Linkable>

		<div class="text-neutral">{tag}</div>
	</div>

	<div class="grow border-neutral-light" />

	<div class="h-5 w-5 fill-base-content">
		<slot />
	</div>
</div>
