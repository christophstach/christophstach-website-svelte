<script lang="ts">
	import type { HTMLAnchorAttributes, AriaAttributes } from 'svelte/elements';

	type BrandProps = HTMLAnchorAttributes & AriaAttributes;

	let { href = '/', ...restProps }: BrandProps = $props();
</script>

<a {href} class="whitespace-nowrap text-xl font-semibold dark:text-white" {...restProps}>
	C. Stach
</a>
