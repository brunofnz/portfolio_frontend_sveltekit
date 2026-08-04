<script lang="ts">
  import type { AboutProps } from './types';
  import { GlassCard } from '$lib/components/Shared';
  import { reveal } from '$lib/actions/reveal';

  interface Props extends AboutProps {}
  let { yearsOfExperience }: Props = $props();
</script>

<section id="sobre-mi" class="py-12 sm:py-16 px-3 sm:px-4 relative">
  <div class="max-w-6xl mx-auto">
    <h2 class="section-title text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl" use:reveal={{ delay: 0 }}>
      <span class="relative">
        Sobre Mi
        <div class="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-1 bg-ink-dim rounded-full"></div>
      </span>
    </h2>

    <!-- Main intro -->
    <GlassCard class="p-5 sm:p-8 mb-6 sm:mb-8" delay={0}>
      <p class="text-ink-soft text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
        <strong class="text-ink">Desarrollador Full Stack</strong> con +{yearsOfExperience} años de experiencia
        construyendo aplicaciones web y APIs en producción. Participo en todo el ciclo de vida
        de los proyectos: desde la <strong class="text-ink">definición técnica</strong> hasta el
        <strong class="text-ink">deploy y mantenimiento</strong>. Me gusta resolver problemas
        reales y entregar soluciones que funcionen.
      </p>
    </GlassCard>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      <GlassCard class="p-4 sm:p-6" delay={100}>
        <div class="flex items-center gap-3 mb-3 sm:mb-4">
          <div class="w-11 h-11 rounded-md bg-veil-strong flex items-center justify-center shadow-[0_4px_20px_rgba(var(--glow-rgb),0.15),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all duration-[400ms] flex-shrink-0 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_8px_32px_rgba(var(--glow-rgb),0.3),inset_0_1px_0_rgba(255,255,255,0.4)]" style="transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="text-base sm:text-lg font-bold text-ink">Ubicación</h3>
        </div>
        <p class="text-ink-soft text-xs sm:text-sm">Resistencia, Chaco, Argentina</p>
        <p class="text-ink-faint text-xs mt-1">Disponible para trabajo remoto</p>
      </GlassCard>

      <GlassCard class="p-4 sm:p-6" delay={200}>
        <div class="flex items-center gap-3 mb-3 sm:mb-4">
          <div class="w-11 h-11 rounded-md bg-veil-strong flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110 group-hover:rotate-[5deg]" style="box-shadow: 0 4px 20px rgba(var(--glow-rgb), 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3); transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          <h3 class="text-base sm:text-lg font-bold text-ink">Metodología</h3>
        </div>
        <p class="text-ink-soft text-xs sm:text-sm">Scrum & Agile</p>
        <p class="text-ink-faint text-xs mt-1">Entregas iterativas y mejora continua</p>
      </GlassCard>

      <GlassCard class="p-4 sm:p-6 sm:col-span-2 md:col-span-1" delay={300}>
        <div class="flex items-center gap-3 mb-3 sm:mb-4">
          <div class="w-11 h-11 rounded-md bg-veil-strong flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110 group-hover:rotate-[5deg]" style="box-shadow: 0 4px 20px rgba(var(--glow-rgb), 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1); transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-base sm:text-lg font-bold text-ink">Experiencia</h3>
        </div>
        <p class="text-ink-soft text-xs sm:text-sm">{yearsOfExperience}+ años en desarrollo</p>
        <p class="text-ink-faint text-xs mt-1">Productos propios y clientes externos</p>
      </GlassCard>
    </div>
  </div>
</section>
