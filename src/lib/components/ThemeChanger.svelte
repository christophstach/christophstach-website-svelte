<script lang="ts">
	import { browser } from '$app/environment';

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
	<span class="iconify tabler--sun block h-6 w-6 animate-in fade-in zoom-in dark:hidden"></span>
	<span class="iconify tabler--moon hidden h-6 w-6 animate-in fade-in zoom-in dark:block"></span>
</button>
