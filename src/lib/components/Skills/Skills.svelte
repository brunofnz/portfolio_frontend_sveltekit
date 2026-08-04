<script lang="ts">
  import type { SkillsProps } from './types';
  import { GlassCard } from '$lib/components/Shared';
  import { reveal } from '$lib/actions/reveal';

  let { skills, learning }: SkillsProps = $props();
</script>

<!-- Skills Section -->
<section id="habilidades" class="py-12 sm:py-16 px-3 sm:px-4 relative">
  <div class="max-w-6xl mx-auto">
    <h2 class="section-title text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl" use:reveal={{ delay: 0 }}>
      <span class="relative">
        Stack Tecnológico
        <div class="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-1 bg-ink-dim rounded-full"></div>
      </span>
    </h2>

    <!-- Skills Grid -->
    <div class="relative overflow-hidden rounded-3xl border border-veil-border p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 group" style="background: linear-gradient(160deg, var(--color-veil-strong) 0%, var(--color-veil-soft) 50%, var(--color-veil) 100%); backdrop-filter: blur(50px) saturate(180%); -webkit-backdrop-filter: blur(50px) saturate(180%); box-shadow: 0 16px 64px rgba(0, 0, 0, 0.2), inset 0 2px 0 var(--color-veil-strong), inset 0 0 0 1px var(--color-veil); transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {#each Object.entries(skills) as [category, items], idx}
          <div use:reveal={{ delay: idx * 80 }}>
            <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4 uppercase tracking-wider text-ink-soft">
              {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : category === 'ia' ? 'IA & Automatización' : category === 'databases' ? 'Bases de Datos' : 'DevOps & Testing'}
            </h4>
            <div class="flex flex-wrap gap-1.5 sm:gap-2">
              {#each items as skill}
                <span class="inline-flex px-5 py-2.5 bg-veil backdrop-blur-[10px] border border-veil-border rounded-md font-medium text-ink transition-all duration-400 cursor-default hover:bg-veil-strong hover:-translate-y-1 hover:scale-105 text-xs sm:text-sm" style="transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">{skill}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
      <div class="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[rgba(var(--glow-rgb),0.12)] to-transparent pointer-events-none transition-[left] duration-800 ease-out group-hover:left-full"></div>
    </div>

    <!-- Learning Section -->
    <GlassCard class="p-4 sm:p-6" delay={0}>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-md bg-veil-strong flex items-center justify-center shrink-0 transition-all duration-400" style="box-shadow: 0 4px 20px rgba(var(--glow-rgb), 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3); transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-ink">Aprendiendo actualmente</h3>
            <p class="text-ink-faint text-xs sm:text-sm">Tecnologías en las que estoy profundizando</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          {#each learning as item}
            <span class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-veil text-ink-soft border border-veil-border text-xs sm:text-sm font-medium">{item}</span>
          {/each}
        </div>
      </div>
    </GlassCard>
  </div>
</section>
