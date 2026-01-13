<script lang="ts">
  import type { BackgroundEffectsProps } from './types';

  interface Props extends BackgroundEffectsProps {}
  let { orbs, isMobile }: Props = $props();
</script>

<!-- Animated Background Orbs -->
<div class="fixed inset-0 pointer-events-none overflow-hidden">
  {#each orbs as orb}
    <div
      class="absolute rounded-full blur-3xl opacity-30 animate-float-orb"
      style="
        width: {orb.size}px;
        height: {orb.size}px;
        left: {orb.x}%;
        top: {orb.y}%;
        background: radial-gradient(circle, rgba(10, 132, 255, 0.4) 0%, rgba(191, 90, 242, 0.2) 50%, transparent 70%);
        animation-duration: {orb.duration}s;
        animation-delay: {orb.delay}s;
      "
    ></div>
  {/each}
</div>

<!-- Floating Particles - Reduced on mobile -->
<div class="fixed inset-0 pointer-events-none">
  {#each Array(isMobile ? 10 : 30) as _, i}
    <div
      class="absolute w-1 h-1 bg-white/30 rounded-full animate-particle"
      style="
        left: {Math.random() * 100}%;
        top: {Math.random() * 100}%;
        animation-delay: {Math.random() * -20}s;
        animation-duration: {10 + Math.random() * 20}s;
      "
    ></div>
  {/each}
</div>

<style>
  @keyframes float-orb {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(50px, -50px) scale(1.1);
    }
    50% {
      transform: translate(-30px, 30px) scale(0.9);
    }
    75% {
      transform: translate(20px, 50px) scale(1.05);
    }
  }

  .animate-float-orb {
    animation: float-orb 20s ease-in-out infinite;
  }

  @keyframes particle {
    0%, 100% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(-100vh) translateX(50px);
      opacity: 0;
    }
  }

  .animate-particle {
    animation: particle 20s linear infinite;
  }
</style>
