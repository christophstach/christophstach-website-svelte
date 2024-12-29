<script lang="ts">
	import { browser } from '$app/environment';

	async function handleToggleColorScheme() {
		if (browser) {
			document.documentElement.dataset.colorScheme =
				document.documentElement.dataset.colorScheme === 'dark' ? 'light' : 'dark';

			await fetch(`/api/color-scheme`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					colorScheme: document.documentElement.dataset.colorScheme
				})
			});
			// document.cookie = `${PUBLIC_COOKIE_COLOR_SCHEME}=${document.documentElement.dataset.colorScheme}; path=/; SameSite=Lax; Secure`;
		}
	}
</script>

<button
	type="button"
	class="rounded-lg p-2.5 text-sm text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
	on:click={handleToggleColorScheme}
	aria-label="Change the color scheme"
>
	<span class="block w-6 h-6 iconify animate-in fade-in zoom-in tabler--sun dark:hidden"></span>
	<span class="hidden w-6 h-6 iconify animate-in fade-in zoom-in tabler--moon dark:block"></span>
</button>
