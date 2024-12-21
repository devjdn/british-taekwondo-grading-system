<script>
    import { theme, toggleTheme } from '$lib/stores/theme-store';
    import { MoonStar, Sun } from 'lucide-svelte';
</script>

<button data-theme={$theme === 'light' ? 'theme-light' : 'theme-dark'} onclick={toggleTheme}>
    {#if $theme === 'light'}
        <MoonStar size={20}/>
        Dark theme
    {:else}
        <Sun size={20}/>
        Light theme
    {/if}
</button>