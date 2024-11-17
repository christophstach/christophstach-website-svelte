<script lang="ts">
	import { browser } from '$app/environment';
	import { PUBLIC_COOKIE_COLOR_SCHEME } from '$env/static/public';

	function handleToggleColorScheme() {
		if (browser) {
			document.documentElement.dataset.colorScheme =
				document.documentElement.dataset.colorScheme === 'dark' ? 'light' : 'dark';

			document.cookie = `${PUBLIC_COOKIE_COLOR_SCHEME}=${document.documentElement.dataset.colorScheme}; path=/; SameSite=Lax; Secure`;
		}
	}
</script>

<button
	type="button"
	class="rounded-lg p-2.5 text-sm text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
	on:click={handleToggleColorScheme}
	aria-label="Change the color scheme"
>
	<span class="iconify block h-6 w-6 animate-in fade-in zoom-in tabler--sun dark:hidden"></span>
	<span class="iconify hidden h-6 w-6 animate-in fade-in zoom-in tabler--moon dark:block"></span>
</button>
