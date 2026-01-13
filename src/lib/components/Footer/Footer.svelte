<script lang="ts">
  import type { FooterProps } from './types';

  let { year = new Date().getFullYear(), name }: FooterProps = $props();
</script>

<!-- Footer -->
<footer class="py-12 px-4 border-t border-white/5 relative">
  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-white/40 text-sm">
        {year} {name}
      </p>
      <p class="text-white/30 text-sm flex items-center gap-2">
        Hecho con
        <span class="text-red-400 animate-pulse">❤</span>
        usando SvelteKit & Tailwind CSS
      </p>
    </div>
  </div>
</footer>
