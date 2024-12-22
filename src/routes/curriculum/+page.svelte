<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Christoph Stach - Curriculum</title>
	<meta property="og:title" content="Christoph Stach - Curriclum" />
</svelte:head>

<div
	class="max-w-screen-lg mx-auto prose prose-indigo sm:prose-sm lg:prose-lg xl:prose-xl dark:prose-invert"
>
	<h2>Curriculum</h2>
</div>

<div class="grid max-w-screen-lg mx-auto mt-8 grid-col-2">
	<div>
		{(JSON.stringify(data.professionalCurriculumItems), null, 2)}
		{#each data.professionalCurriculumItems as item}
			<div>
				<div>
					{item.type}
				</div>
				<div>
					<div>{item.type}</div>
					<div>{item.type}</div>
				</div>
			</div>
		{/each}
	</div>
	<div>
		{(JSON.stringify(data.educationCurriculumItems), null, 2)}
	</div>
</div>
