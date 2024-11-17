import { db } from '../../db/client';
import { projectsTable } from '../../db/schema/projects';

export const prerender = false;

export async function load() {
	const projects = await db.select().from(projectsTable);

	return {
		projects
	};
}
