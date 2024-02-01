<script lang="ts">
	export let id: String;
</script>

<div class="col md:row gap-4" id={id.valueOf()}>
	<slot name="title" />
	<slot name="content" />
</div>
