import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    let theme = event.cookies.get('theme');
    // console.log('Handling request:', event.url);
    // console.log('Theme cookie:', theme);

    if(!theme) {
        theme = 'light';
        console.log('No theme cookie found. Setting to light.');


        event.cookies.set('theme', theme, {
            path: '/',
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 365,
        })
    }

    const response = await resolve(event, {
        transformPageChunk: ({ html }) => {
            // Match the <html> tag and all its attributes, without extra characters.
            // Used GPT for the regex as I'm simply not trying to deal with that.
            const transformedHtml = html.replace(/<html(\s[^>]*)?>/, (match, attributes) => {
                return `<html${attributes} class="theme-${theme}">`;
            });

            return transformedHtml;
        }
    });

    return response;
};
