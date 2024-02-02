<script lang="ts">
	export let name: String;
	export let url: String;
	export let emoji: String;
	export let onelineDescription: String;
	export let highlight: Boolean = false;

	import Linkable from '$lib/components/linkable/Linkable.svelte';
</script>

<Linkable href={url}>
	<div class="card bg-base-200 border-neutral-light shadow-2xl">
		<div class="card-body">
			<h1 class="card-title">{emoji}</h1>

			<div class="row gap-2 items-center">
				<h1 class="card-title">{name}</h1>
				{#if highlight}
					<div class="badge badge-accent text-sm">NEW</div>
				{/if}
			</div>

			<p>{onelineDescription}</p>
		</div>
	</div>
</Linkable>
