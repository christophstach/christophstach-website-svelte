<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Christoph Stach - Projects</title>
	<meta property="og:title" content="Christoph Stach - Projects" />
</svelte:head>

<div class="prose prose-indigo mx-auto dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl">
	Projects

	{#each data.projects as project}
		<pre>{JSON.stringify(project, null, 2)}</pre>
	{/each}
</div>
