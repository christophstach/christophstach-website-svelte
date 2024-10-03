<script lang="ts">
	import { page } from '$app/stores';

	const data = $derived($page.data);
</script>

<svelte:head>
	<title>Christoph Stach - Curriculum</title>
	<meta property="og:title" content="Christoph Stach - Curriclum" />
</svelte:head>

<div class="prose prose-indigo mx-auto dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl">
	Curriculum

	{JSON.stringify(data)}
</div>
