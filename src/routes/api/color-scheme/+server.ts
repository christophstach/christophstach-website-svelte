import { PUBLIC_COOKIE_COLOR_SCHEME } from '$env/static/public';
import { error } from '@sveltejs/kit';
import z from 'zod';

export async function POST({ request, cookies }) {
	const json = await request.json();
	const schema = z.object({
		colorScheme: z.string()
	});

	const result = schema.safeParse(json);

	console.error(result);

	if (result.success) {
		const { colorScheme } = result.data;
		cookies.set(PUBLIC_COOKIE_COLOR_SCHEME, colorScheme, { path: '/' });

		return new Response(colorScheme);
	} else {
		return error(400, result.error.toString());
	}
}
