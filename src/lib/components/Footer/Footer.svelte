<script lang="ts">
  import type { FooterProps } from './types';

  let { year = new Date().getFullYear(), name }: FooterProps = $props();
</script>

<!-- Footer -->
<footer class="py-12 px-4 border-t border-veil-border relative">
  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row justify-center items-center gap-4">
      <p class="text-ink-dim text-sm">
        {year} {name}
      </p>
    </div>
  </div>
</footer>
