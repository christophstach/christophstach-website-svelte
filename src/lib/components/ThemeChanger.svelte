<script lang="ts">
	import { browser } from '$app/environment';
	import { IconMoon, IconSun } from '@tabler/icons-svelte';

	let theme: 'dark' | 'light' = 'light';

	function handleToggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';

		if (browser) {
			document.documentElement.classList.toggle('dark', theme === 'dark');
			document.documentElement.style.colorScheme = theme;
			localStorage.setItem('theme', theme);
		}
	}

	if (browser) {
		theme = (localStorage.getItem('theme') as 'dark' | 'light' | undefined) ?? 'light';
		document.documentElement.classList.toggle('dark', theme === 'dark');
		document.documentElement.style.colorScheme = theme;
	}
</script>

<button
	type="button"
	class="rounded-lg p-2.5 text-sm text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
	on:click={handleToggleTheme}
	aria-label="Change the color scheme"
>
	<IconSun class="animate-in fade-in zoom-in block dark:hidden" />
	<IconMoon class="animate-in fade-in zoom-in hidden h-5 w-5 dark:block" />
</button>
