<script>
	import 'virtual:windi.css';
</script>

<div class="warning">In Development</div>

<slot />

<style>
	.warning {
		@apply bg-yellow-400;
		@apply text-dark-200;
		@apply text-lg;
		@apply font-bold;
		@apply w-full;
		@apply absolute;
		@apply top-0;
		@apply py-2;
		@apply flex;
		@apply justify-center;
	}

	:global(html, body, #svelte) {
		@apply h-full;
		@apply w-full;
	}
	:global(#svelte) {
		@apply bg-dark-600;
		@apply text-light-200;
		@apply flex;
		@apply items-center;
		@apply justify-center;
	}

	:global(h1) {
		@apply text-6xl;
		@apply font-bold;
	}

	:global(h2) {
		@apply text-2xl;
	}

	:global(p, a) {
		@apply text-xl;
	}

	:global(a) {
		@apply font-mono;
		@apply underline;
	}
</style>
