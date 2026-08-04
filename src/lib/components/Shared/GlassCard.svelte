<script lang="ts">
  import type { Snippet } from 'svelte';
  import { reveal } from '$lib/actions/reveal';

  interface Props {
    children: Snippet;
    delay?: number;
    class?: string;
  }

  let { children, delay = 0, class: className = '' }: Props = $props();
</script>

<div
  class="liquid-glass-card card-3d hover-lift relative overflow-hidden group {className}"
  use:reveal={{ delay }}
>
  {@render children()}
  <div class="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[rgba(var(--glow-rgb),0.12)] to-transparent pointer-events-none transition-[left] duration-800 ease-out group-hover:left-full"></div>
</div>
