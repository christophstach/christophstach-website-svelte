<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Christoph Stach - Curriculum</title>
	<meta property="og:title" content="Christoph Stach - Curriclum" />
</svelte:head>

<div class="prose prose-indigo mx-auto dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl">
	Curriculum
</div>

<div class="grid-col-2 grid">
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
