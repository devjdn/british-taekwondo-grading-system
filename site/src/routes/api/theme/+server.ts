import { json } from "@sveltejs/kit";

export async function POST({ request, cookies }) {
    const { theme } = await request.json();

    if (!['light', 'dark'].includes(theme)) {
        return json({ error: 'Invalid theme' }, { status: 400 });
    }

    cookies.set('theme', theme, {
        path: '/',
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 365
    });

    return json({ success: true });
}
