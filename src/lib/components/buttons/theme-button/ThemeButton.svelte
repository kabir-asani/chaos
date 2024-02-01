<script>
	import MoonIcon from '$lib/assets/svg/MoonIcon.svelte';
	import SunIcon from '$lib/assets/svg/SunIcon.svelte';
</script>

<label class="swap swap-rotate">
	<input type="checkbox" class="theme-controller" value="light" />

	<MoonIcon class="swap-off fill-current h-4 w-4" />

	<SunIcon class="swap-on fill-current h-4 w-4" />
</label>
