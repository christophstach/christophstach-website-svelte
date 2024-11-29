import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL is not defined');
}

export const db = drizzle({
	connection: process.env.DATABASE_URL,
	logger: true,
	casing: 'snake_case'
});