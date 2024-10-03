<script lang="ts">
	import { IconMenu, IconX } from '@tabler/icons-svelte';

	import Brand from '$lib/components/Brand.svelte';
	import ThemeChanger from '$lib/components/ThemeChanger.svelte';

	import { cn } from '$lib/utils';
	import { page } from '$app/stores';

	interface MainNavLink {
		href: string;
		text: string;
		exact?: boolean;
	}

	const links: MainNavLink[] = [
		{
			href: '/',
			text: 'Home',
			exact: true
		},
		{
			href: '/about-me',
			text: 'About me'
		},
		{
			href: '/curriculum',
			text: 'Curriculum'
		},
		{
			href: '/projects',
			text: 'Projects'
		}
	];

	let open = $state(false);
	let pathname = $derived($page.url.pathname);

	function handleToggleOpen() {
		open = !open;
	}
</script>

<nav>
	<div
		class="fixed left-0 top-0 z-20 w-full border-b border-gray-300 bg-white/30 px-4 backdrop-blur dark:border-gray-600 dark:bg-gray-900/30"
	>
		<div class="container mx-auto flex h-20 items-center justify-between">
			<div>
				<Brand />
			</div>
			<div class="hidden md:block">
				<ul class="flex gap-4">
					{#each links as link}
						{@const isActive = link.exact ? pathname === link.href : pathname.startsWith(link.href)}

						<li>
							<a
								href={link.href}
								class={isActive
									? 'block rounded px-3 py-2 text-sm font-medium text-indigo-700 dark:text-white'
									: 'block rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
							>
								{link.text}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<div class="flex gap-4">
					<div>
						<ThemeChanger />
					</div>
					<div class="block md:hidden">
						<button
							class="rounded-lg p-2.5 text-sm text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
							type="button"
							onclick={handleToggleOpen}
							aria-label="Open the menu"
						>
							{#if open}
								<IconX class="animate-in fade-in zoom-in" />
							{:else}
								<IconMenu class="animate-in fade-in zoom-in" />
							{/if}
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class={cn(open && 'animate-in slide-in-from-top-20 container mx-auto', !open && 'hidden')}>
			<ul class="flex flex-col gap-4 py-4">
				{#each links as link, index}
					{@const isActive = link.exact ? pathname === link.href : pathname.startsWith(link.href)}
					<li>
						<a
							href={link.href}
							onclick={() => {
								open = false;

								setTimeout(() => {
									window.scrollTo({
										top: 420,
										behavior: 'smooth'
									});
								}, 500);
							}}
							class={isActive
								? 'block rounded px-3 py-2 text-sm font-medium text-indigo-700 dark:text-white'
								: 'block rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
						>
							{link.text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
