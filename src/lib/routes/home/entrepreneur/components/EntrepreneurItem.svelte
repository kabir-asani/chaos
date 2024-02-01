<script lang="ts">
	export let role: String;

	export let company: String;
	export let companyUrl: String | undefined | null = undefined;
	export let period: String;
	export let onelineDescription: String;

	import Linkable from '$lib/components/shared/linkable/Linkable.svelte';
</script>

<div class="card bg-base-200 shadow-2xl border-neutral-light md:sticky-10">
	<div class="card-body">
		<div class="col md:row gap-2 items-start md:items-center">
			<h1 class="text-xl">
				{role}
			</h1>

			<div class="wrap items-center gap-2">
				<Linkable
					href={companyUrl || '/'}
					external={companyUrl !== undefined && companyUrl !== null}
				>
					<div class="badge badge-primary text-sm">
						{company}
					</div>
				</Linkable>

				<div class="badge badge-neutral text-sm">
					{period}
				</div>
			</div>
		</div>

		<p class="text-neutral">{onelineDescription}</p>
	</div>
</div>
