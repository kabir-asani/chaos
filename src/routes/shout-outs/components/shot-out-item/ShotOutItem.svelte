<script lang="ts">
	export let receiver: String;
	export let receiverLink: String;

	import ChevronRightIcon from '$lib/assets/svg/ChevronRightIcon.svelte';
	import Linkable from '$lib/components/linkable/Linkable.svelte';
</script>

<div class="row gap-4 items-center">
	<ChevronRightIcon class="fill-neutral h-4 w-4" />
	<Linkable href={receiverLink.valueOf()}>
		<div class="text-primary">{receiver}</div>
	</Linkable>
</div>
