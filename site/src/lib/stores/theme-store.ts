import { writable } from 'svelte/store';

// REMEMBER: writable is a function that creates a new store 
// with values that can be set from outside components.
// Writable has two methods: .set() and .update().
export const theme = writable<'light' | 'dark'>('light');

// This is initializing the store with the current theme from the HTML tag
// that was set via SSR
if(typeof document !== 'undefined') {
    const currentTheme = document.documentElement.classList.contains('theme-dark') ? 'dark' : 'light';
    // REMEMBER: .set() takes one argument, 
    // that being the value that is to be set to the store.
    theme.set(currentTheme);
}

export function toggleTheme() {
    // REMEMBER: .update() takes a callback argument containing the existing store value.
    // In this .update(), the callback argument is `current`.
    theme.update((current) => {
        const newTheme = current === 'light' ? 'dark' : 'light';

        // This is updating the HTML class name
        // Removing the current theme
        document.documentElement.classList.remove(`theme-${current}`);
        // Applying the new theme
        document.documentElement.classList.add(`theme-${newTheme}`);

        // This is setting a new cookie with the new theme, the path, and the maximum age of the cookie.
        document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;

        return newTheme;
    });
}
