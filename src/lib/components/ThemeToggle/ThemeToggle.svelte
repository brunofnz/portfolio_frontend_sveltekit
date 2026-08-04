<script lang="ts">
  import { onMount } from 'svelte';

  let theme = $state<'dark' | 'light'>('dark');

  onMount(() => {
    theme = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
  });

  function toggle() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
</script>

<button
  onclick={toggle}
  class="w-9 h-9 flex items-center justify-center rounded-lg bg-veil border border-veil-border text-ink-soft hover:text-ink transition-colors shrink-0"
  aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
  title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
>
  {#if theme === 'dark'}
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
    </svg>
  {:else}
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
    </svg>
  {/if}
</button>
