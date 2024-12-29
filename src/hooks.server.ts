import { PUBLIC_COOKIE_COLOR_SCHEME } from '$env/static/public';

export async function handle({ event, resolve }) {
	const { locals, cookies } = event;

	locals.colorScheme = (cookies.get(PUBLIC_COOKIE_COLOR_SCHEME) ?? 'system') as
		| 'light'
		| 'dark'
		| 'system';

	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%cookie-color-scheme%', event.locals.colorScheme)
	});

	return response;
}
