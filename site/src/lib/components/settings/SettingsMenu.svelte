<script lang="ts">
    import { Settings } from "lucide-svelte";
    import ThemeToggle from "../theme/theme-toggle.svelte";
    import { onMount } from "svelte";

    let isOpen = false;

    function toggleSettingsModal(event: MouseEvent) {
        isOpen = !isOpen;
    }

    let modalRef: HTMLDivElement | null = null;

    function handleOutsideClick(event: MouseEvent) {
        if (modalRef && !modalRef.contains(event.target as Node)) {
            isOpen = false;
        }
    }

    onMount(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    });
</script>

<div class="user-actions" bind:this={modalRef}>
    <button data-open={isOpen ? 'true' : 'false'} onclick={toggleSettingsModal}>
        <Settings size={20} color="unset"/>
    </button>
    
    {#if isOpen}
        <div class="settings-modal">
            <ThemeToggle />
        </div>
    {/if}
</div>

<style>
    .user-actions {
        display: flex;
        align-items: center;
        gap: 18px;
        position: relative;
    }

    button[data-open="true"] {
        stroke: var(--brand-red);
    }

    .settings-modal {
        position: absolute;
        top: 50px;
        right: 0;
        width: max-content;
        background: var(--container-bg-secondary);
        padding: 14px;
        border-radius: 8px;
        border: var(--container-bd-secondary);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
</style>
