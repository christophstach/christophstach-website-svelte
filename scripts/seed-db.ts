import { db } from '../src/db/client';
import { projectsTable, projectsTableSeed } from '../src/db/schema/projects';
import { curriculumItemsTable, curriculumItemsTableSeed } from '../src/db/schema/curriculumItems';

const emptyDatabase = false;

if (emptyDatabase) {
	await db.delete(projectsTable);
	await db.delete(curriculumItemsTable);
}

for (const project of projectsTableSeed) {
	await db.insert(projectsTable).values(project);
}

for (const curriculumItem of curriculumItemsTableSeed) {
	await db.insert(curriculumItemsTable).values(curriculumItem);
}
