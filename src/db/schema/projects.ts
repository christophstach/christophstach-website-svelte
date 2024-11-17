import { pgTable, timestamp, varchar, text, jsonb } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';

export const projectsTable = pgTable('projects', {
	id: varchar()
		.$defaultFn(() => createId())
		.primaryKey(),
	title: varchar().notNull(),
	description: text().notNull(),
	website: varchar(),
	repository: varchar(),
	tags: jsonb().$type<string[]>().notNull(),
	createdAt: timestamp()
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: timestamp()
		.notNull()
		.$onUpdateFn(() => new Date())
});

export type SelectProject = typeof projectsTable.$inferSelect;
export type InsertProject = typeof projectsTable.$inferInsert;

export const projectsTableSeed: InsertProject[] = [
	{
		title: 'Crowds UI',
		description: `
			At Dericon GmbH, my latest project involves developing a responsive, intuitive workflow editor featuring a specialized view that displays tasks from the backend as a graph. The UI converts tasks into nodes and edges, and an auto-layout function optimizes their positions. Additionally, the project incorporates dynamic form generation based on backend-provided structures.
		`,
		tags: [
			'TypeScript',
			'React',
			'Remix.run',
			'TailwindCSS',
			'DaisyUI',
			'reactflow',
			'react-hook-form'
		]
		// website: "https://christophstach.me",
		// repository: "https://github.com/christophstach/christophstach-website",
	},
	{
		title: 'Personal website',
		description: `
			Redesign website with a dark mode option, replacing the previous Angular with Bootstrap iteration.
		`,
		tags: ['TypeScript', 'React', 'Next.js', 'React Server Components', 'TailwindCSS'],
		website: 'https://christophstach.me',
		repository: 'https://github.com/christophstach/christophstach-website'
	},
	{
		title: 'Finance Check',
		description: `
			This web application presents an interactive questionnaire featuring a variety of categories. Each category contains a finite number of questions accompanied by their respective answers. The questionnaire supports both standard and multiple-choice questions. Upon completing each category, the user is prompted to decide whether they wish to proceed with any remaining categories. All responses are stored and ultimately transmitted to a backend service for further analysis. I designed this tool to cater to the requirements of a friend who operates a financial consulting website, <a href="https://andreasjansen.com/">andreasjansen.com</a>.
		`,
		tags: ['TypeScript', 'React', 'Jotai', 'TailwindCSS'],
		website: 'https://andreasjansen.com/finanzcheck-starten',
		repository: 'https://github.com/christophstach/jansen-quiz-react'
	},
	{
		title: 'Covid SpiNGS - Realtime Variant Caller',
		description: `
			A variant caller for next-generation sequencing, designed to analyze incoming BAM files in real-time. This sophisticated tool efficiently stores intermediate results in memory, and upon user request, seamlessly calculates vital statistics. Developed in the Kotlin programming language, the variant caller harnesses the capabilities of the JVM platform.
		`,
		tags: ['Kotlin', 'Java', 'JVM', 'NGS', 'SAMtools', 'HTSJDK'],
		website:
			'https://www.htw-berlin.de/forschung/online-forschungskatalog/projekte/projekt/?eid=3100',
		repository: 'https://github.com/COVID-SpiNGS/realtime-variant-caller'
	},
	{
		title: 'Covid SpiNGS - Realtime pipeline',
		description: `
			The Nextflow pipeline employs Nextflow to process data by monitoring a designated folder for incoming fastq files. These files are subsequently aligned to a reference sequence using <a href="https://github.com/lh3/minimap2">minimap2</a>. The results from various files are collected, combined, and then passed to the variant caller, <a href="https://github.com/kishwarshafin/pepper">PEPPER-Margin-DeepVariant</a>, which generates the final VCF outcome.
		`,
		tags: ['Nextflow', 'NGS', 'SAMtools', 'Minimap2', 'DeepVariant'],
		website:
			'https://www.htw-berlin.de/forschung/online-forschungskatalog/projekte/projekt/?eid=3100',
		repository: 'https://github.com/COVID-SpiNGS/covid-spings-pipeline'
	}
];
