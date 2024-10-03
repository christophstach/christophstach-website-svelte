<script lang="ts">
	import type { HTMLAnchorAttributes, AriaAttributes } from 'svelte/elements';

	type SocialLinkProps = HTMLAnchorAttributes & AriaAttributes;

	let { target = '_blank', children, ...restProps }: SocialLinkProps = $props();
</script>

<a
	class="rounded-lg p-2.5 text-sm text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
	{target}
	{...restProps}
>
	{@render children?.()}
</a>
