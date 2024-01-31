<script lang="ts">
	import { writable } from 'svelte/store';
	import CopyAfterIcon from '$lib/assets/svg/CopyAfterIcon.svelte';
	import CopyBeforeIcon from '$lib/assets/svg/CopyBeforeIcon.svelte';

	export let text: String;

	const copied = writable(false);

	const copyText = async () => {
		try {
			$copied = true;
			await navigator.clipboard.writeText(text.valueOf());
			setTimeout(() => ($copied = false), 2000);
		} catch (err) {
			// Do nothing
		}
	};
</script>

<button
	class="btn btn-sm bg-base-200 hover:border-neutral-light {$copied ? 'border-neutral-light' : ''}"
	on:click={copyText}
>
	<div class="flex flex-row gap-1 items-center text-sm text-neutral">
		{$copied ? 'Copied' : 'Copy'}

		{#if $copied}
			<CopyAfterIcon class="h-4 w-4 fill-neutral" />
		{:else}
			<CopyBeforeIcon class="h-4 w-4 fill-neutral" />
		{/if}
	</div>
</button>
