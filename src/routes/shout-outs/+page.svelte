<script>
	import ShotOutItem from './components/shot-out-item/ShotOutItem.svelte';
</script>

<div class="col gap-4 responsive-x-container my-16">
	<div class="text-sm breadcrumbs">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/shout-outs">Shout Outs</a></li>
		</ul>
	</div>

	<h1 class="text-xl">Shout Outs</h1>

	<div class="col gap-4 items-stretch">
		<ShotOutItem receiver="Svelte" receiverLink="https://svelte.dev" />
		<ShotOutItem receiver="SvelteKit" receiverLink="https://kit.svelte.dev" />
		<ShotOutItem receiver="Tailwind CSS" receiverLink="https://tailwindcss.com" />
		<ShotOutItem receiver="Daisy UI" receiverLink="https://daisyui.com" />
		<ShotOutItem receiver="Vite" receiverLink="https://vitejs.dev" />
		<ShotOutItem receiver="Vercel" receiverLink="https://vercel.com" />
		<ShotOutItem receiver="Prettier" receiverLink="https://prettier.io" />
		<ShotOutItem receiver="ES Lint" receiverLink="https://eslint.org" />
		<ShotOutItem receiver="VS Code" receiverLink="https://code.visualstudio.com" />
		<ShotOutItem receiver="Git" receiverLink="https://git-scm.com" />
		<ShotOutItem receiver="GitHub" receiverLink="https://github.com" />
	</div>
</div>
