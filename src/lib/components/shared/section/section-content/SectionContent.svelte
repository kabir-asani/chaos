{#if $$slots.grid}
	<div class="grow col md:grid-col-2 gap-4">
		<slot name="grid" />
	</div>
{/if}

{#if $$slots.column}
	<div class={'grow col gap-4'}>
		<slot name="column" />
	</div>
{/if}
