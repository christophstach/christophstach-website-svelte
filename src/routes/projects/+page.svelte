<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Christoph Stach - Projects</title>
	<meta property="og:title" content="Christoph Stach - Projects" />
</svelte:head>

<div
	class="prose prose-indigo mx-auto max-w-screen-lg sm:prose-sm lg:prose-lg xl:prose-xl dark:prose-invert"
>
	<h2>Projects</h2>
</div>

<div class="mx-auto mt-8 grid max-w-screen-lg grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
	{#each data.projects as project}
		<div class="prose prose-sm prose-indigo border p-4 dark:prose-invert">
			<h3>{project.title}</h3>
			<div>
				<div>{@html project.description}</div>
				<div class="mt-5 flex w-full flex-wrap gap-1 overflow-hidden">
					{#each project.tags as tag}
						<div class="rounded bg-indigo-500 px-1 py-0.5 text-xs text-white">
							{tag}
						</div>
					{/each}
				</div>
				<div class="mt-5">
					{#if project.website}
						<div class="flex gap-2">
							<div>
								<span class="iconify mt-1.5 size-4 tabler--link"></span>
							</div>
							<a href={project.website} target="_blank" rel="noopener noreferrer">
								{project.website}
							</a>
						</div>
					{/if}
					{#if project.repository}
						<div class="flex gap-2">
							<div>
								<span class="iconify mt-1.5 size-4 tabler--brand-github"></span>
							</div>
							<a
								href={project.repository}
								target="_blank"
								class="overflow-hidden break-words"
								rel="noopener noreferrer"
							>
								{project.repository}
							</a>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>
