import { pgTable, timestamp, varchar, text, jsonb, pgEnum, PgTimestamp } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';

export const curriculumItemTypeEnum = pgEnum('curriculum_item_type', ['PROFESSIONAL', 'EDUCATION']);

export const curriculumItemsTable = pgTable('curriculumItems', {
	id: varchar()
		.$defaultFn(() => createId())
		.primaryKey(),
	type: curriculumItemTypeEnum().notNull(),
	title: varchar().notNull(),
	site: varchar().notNull(),
	description: text(),
	dateFrom: timestamp().notNull(),
	dateTo: timestamp(),
	bullets: jsonb().$type<string[]>().notNull(),
	createdAt: timestamp()
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: timestamp()
		.notNull()
		.$onUpdateFn(() => new Date())
});

export type SelectCurriculumItem = typeof curriculumItemsTable.$inferSelect;
export type InsertCurriculumItem = typeof curriculumItemsTable.$inferInsert;

export const curriculumItemsTableSeed: InsertCurriculumItem[] = [
	{
		type: 'EDUCATION',
		title: 'M.Sc. Applied Computer Science',
		site: 'HTW Berlin',
		bullets: [
			"Currently working on Master's thesis",
			'Focus on Web, AI, Bio Informatics, Deep Learning and Data Science',
			'Generate human face images using generative adversarial networks',
			'Contribute to Covid-SpiNGS project, developing an on-demand next-generation sequencing pipeline for COVID-19 detection',
			'Participate in exchange program at National Taiwan University of Science and Technology (NTUST) in Taipei, Taiwan'
		],
		dateFrom: new Date(2019, 11, 1),
		dateTo: new Date()
	},
	{
		type: 'EDUCATION',
		title: 'B.Sc. Applied Computer Science',
		site: 'HTW Berlin',
		bullets: [
			'Complete Bachelor thesis on transferring painting styles to photos using Deep Learning techniques, Grade: 1.6',
			'Participate in exchange semester at Universidad Internacional (UNINTER) in Cuernavaca, Mexico'
		],
		dateFrom: new Date(2016, 3, 1),
		dateTo: new Date(2019, 8, 30)
	},
	{
		type: 'EDUCATION',
		title: 'IT Management Assistant (IHK)',
		site: 'KBS Nordhorn',
		bullets: [
			'Apprenticeship at Kortmann Beton alongside KBS Nordhorn theoretical studies, Grade: 2.0'
		],
		dateFrom: new Date(2009, 8, 1),
		dateTo: new Date(2011, 6, 30)
	},
	{
		type: 'EDUCATION',
		title: 'Information Technology Assistant',
		site: 'Berufskolleg Rheine',
		bullets: [
			'Dual degree in Information Technology, covering programming, database management, and more, including university eligibility, Grade: 2.9'
		],
		dateFrom: new Date(2004, 8, 1),
		dateTo: new Date(2008, 6, 30)
	},
	{
		type: 'PROFESSIONAL',
		title: 'Frontend Engineer',
		site: 'DERICON GmbH',
		bullets: [
			'Develop user interfaces using ReactJS and Remix for internal software',
			'Enhance web-based software frontend with Angular (v2+)',
			'Create PHP Symfony middleware to integrate AngularJS (v1) frontend with REST API',
			'Set up a monorepo architecture for multiple Vue.js (Nuxt) projects'
		],
		dateFrom: new Date(2016, 11, 1)
	},
	{
		type: 'PROFESSIONAL',
		title: 'Fullstack Developer',
		site: 'SLH GmbH',
		bullets: [
			'Implement new features for a web-based software in PHP',
			'Create a new frontend using Sencha ExtJS',
			'Debug and resolve PHP-based business logic issues',
			'Develop features with ASP.NET MVC and Entity Framework',
			'Utilize GIT SCM workflows for version control'
		],
		dateFrom: new Date(2011, 9, 1),
		dateTo: new Date(2014, 10, 30)
	},
	{
		type: 'PROFESSIONAL',
		title: 'Fullstack Developer',
		site: 'CREAVIVA GmbH & Co. KG',
		bullets: [
			'Manage and create content for websites using PHP, MySQL, CSS, and JavaScript',
			'Develop websites with TYPO3 CMS, including custom TYPO3 extension creation'
		],
		dateFrom: new Date(2011, 6, 1),
		dateTo: new Date(2011, 9, 30)
	},
	{
		type: 'PROFESSIONAL',
		title: 'IT Management Assistant',
		site: 'Kortmann Beton GmbH & Co. KG',
		bullets: ['Develop and maintain the company website'],
		dateFrom: new Date(2011, 6, 1),
		dateTo: new Date(2011, 9, 30)
	}
];
