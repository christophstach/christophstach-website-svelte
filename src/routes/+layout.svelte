<script lang="ts">
	import '../app.css';

	import { format } from 'date-fns';

	import MainNav from '$lib/components/MainNav.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import Hero from '$lib/components/Hero.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Christoph Stach</title>
	<meta
		name="description"
		content="Christoph Stach is a software engineer with a passion for webtechnologies, especially frontend development"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Christoph Stach" />
	<meta
		property="og:description"
		content="Christoph Stach is a software engineer with a passion for webtechnologies, especially frontend development"
	/>
	<meta property="og:url" content="https://christophstach.me" />
</svelte:head>

<MainNav />

<div class="mt-20">
	<Hero />
</div>

<main class="my-12 px-4">
	{@render children()}
</main>

<footer class="bg-neutral-50 p-2.5 dark:bg-neutral-900">
	<div class="mx-auto flex max-w-screen-lg items-center">
		<div class="flex-1">
			<small>
				Copyright &copy; 2022 - {format(new Date(), 'yyyy')} Christoph Stach
			</small>
		</div>
		<div class="flex justify-end gap-2.5">
			<SocialLink
				aria-label="LinkedIn Profile"
				href="https://www.linkedin.com/in/christoph-stach-7586b958"
			>
				<span class="iconify block h-6 w-6 tabler--brand-linkedin"></span>
			</SocialLink>
			<SocialLink aria-label="Github Profile" href="https://github.com/christophstach">
				<span class="iconify block h-6 w-6 tabler--brand-github"></span>
			</SocialLink>
		</div>
	</div>
</footer>
