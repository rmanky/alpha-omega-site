<script>
	import IconPhone from '~icons/carbon/phone';
	import IconEmail from '~icons/carbon/email';
	import IconMap from '~icons/carbon/map';
</script>

<svelte:head>
	<title>Alpha Omega Engineering</title>
</svelte:head>

<div class="title">
	<h1 bg="blue-600" p="x-4" m="b-2">Alpha<br />Omega</h1>
	<h2 class="slide">
		<div class="sled">
			<div>Civil Engineering</div>
			<div>Sanitation Engineering</div>
			<div>Environmental Engineering</div>
		</div>
	</h2>
	<div class="info">
		<span class="entry"><IconPhone /><a href="tel:508-865-9551">508-865-9551</a></span>
		<span class="entry"
			><IconEmail />
			<a href="mailto:info@alphaomegaeng.net">info@alphaomegaeng.net​</a>
		</span>
		<span class="entry"
			><IconMap />
			<a href="mailto:info@alphaomegaeng.net">25 Highland View Dr,<br />Sutton, MA 01590</a>
		</span>
	</div>
</div>

<style>
	.title {
		@apply flex;
		@apply flex-col;
		@apply gap-4;
		@apply w-lg;
	}

	.slide {
		@apply px-4;
		@apply h-8;
		@apply overflow-hidden;
	}

	@keyframes slide {
		0% {
			margin-top: -6rem;
		}
		14.3% {
			margin-top: -4rem;
		}
		28.6% {
			margin-top: -4rem;
		}
		42.8% {
			margin-top: -2rem;
		}
		57.1% {
			margin-top: -2rem;
		}
		71.4% {
			margin-top: 0rem;
		}
		85.7% {
			margin-top: 0rem;
		}
		100% {
			margin-top: 2rem;
		}
	}

	.sled {
		animation: slide 10s ease infinite;
		position: relative;
		margin-top: -2rem;
	}

	.info {
		@apply flex;
		@apply flex-col;
		@apply gap-2;
		@apply px-4;
	}

	.entry {
		@apply flex;
		@apply gap-2;
		@apply items-center;
	}
</style>
