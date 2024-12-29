import { eq } from 'drizzle-orm';
import { db } from '../../db/client';
import { curriculumItemsTable } from '../../db/schema/curriculumItems';

export async function load() {
	const professionalCurriculumItems = await db
		.select()
		.from(curriculumItemsTable)
		.where(eq(curriculumItemsTable.type, 'PROFESSIONAL'));

	const educationCurriculumItems = await db
		.select()
		.from(curriculumItemsTable)
		.where(eq(curriculumItemsTable.type, 'EDUCATION'));

	return {
		professionalCurriculumItems,
		educationCurriculumItems
	};
}
