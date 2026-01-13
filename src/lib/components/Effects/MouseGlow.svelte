<script lang="ts">
  import type { MouseGlowProps } from './types';

  interface Props extends MouseGlowProps {}
  let { glowX, glowY }: Props = $props();
</script>

<!-- Mouse Follower Glow - Hidden on mobile -->
<div
  class="fixed pointer-events-none z-50 transition-all duration-300 ease-out hidden md:block"
  style="
    left: {glowX}px;
    top: {glowY}px;
    width: 400px;
    height: 400px;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(10, 132, 255, 0.15) 0%, rgba(191, 90, 242, 0.1) 30%, transparent 70%);
    filter: blur(40px);
  "
></div>
