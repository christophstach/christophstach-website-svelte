<script lang="ts">
	import { page } from '$app/stores';

	const data = $derived($page.data);
</script>

<svelte:head>
	<title>Christoph Stach - Projects</title>
	<meta property="og:title" content="Christoph Stach - Projects" />
</svelte:head>

<div class="prose prose-indigo mx-auto dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl">
	Projects

	<pre>{JSON.stringify(data, null, 2)}</pre>
</div>
