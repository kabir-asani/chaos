<script lang="ts">
	export let resource: String;
	export let resourceLink: String;
	export let provider: String;
	export let providerLink: String;

	import Linkable from '$lib/components/linkable/Linkable.svelte';
</script>

<div class={'row gap-4 items-center' + ' ' + ($$restProps.class || '')}>
	<div class="h-5 w-5 fill-base-content">
		<slot />
	</div>

	<div class="row gap-1 items-center">
		<Linkable href={resourceLink.valueOf()}>
			<div class="text-primary">{resource}</div>
		</Linkable>

		<div class="text-base-content">by</div>

		<Linkable href={providerLink.valueOf()}>
			<div class="text-primary">{provider}</div>
		</Linkable>
	</div>
</div>
