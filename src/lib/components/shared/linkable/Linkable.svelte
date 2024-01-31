<script lang="ts">
	export let href: String;
	export let external: Boolean = true;
</script>

<a
	href={href.valueOf()}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="hover:opacity-60"
>
	<slot />
</a>
