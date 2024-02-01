<script context="module" lang="ts">
	export type Variant = 'grid' | 'column' | 'sole';
</script>

<script lang="ts">
	export let variant: Variant = 'column';
</script>

{#if variant === 'grid'}
	<div class="grow col md:grid-col-2 gap-4">
		<slot />
	</div>
{/if}

{#if variant === 'column'}
	<div class="grow col gap-4">
		<slot />
	</div>
{/if}

{#if variant === 'sole'}
	<slot />
{/if}
