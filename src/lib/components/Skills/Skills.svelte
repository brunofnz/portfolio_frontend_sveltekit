<script lang="ts">
  import type { SkillsProps } from './types';

  let { skills, learning }: SkillsProps = $props();
</script>

<!-- Skills Section -->
<section id="habilidades" class="py-12 sm:py-16 px-3 sm:px-4 relative">
  <div class="max-w-6xl mx-auto">
    <h2 class="section-title text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl">
      <span class="relative">
        Stack Tecnológico
        <div class="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </span>
    </h2>

    <!-- Skills Grid -->
    <div class="relative overflow-hidden rounded-[32px] border border-white/20 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 group" style="background: linear-gradient(160deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%); backdrop-filter: blur(50px) saturate(180%); -webkit-backdrop-filter: blur(50px) saturate(180%); box-shadow: 0 16px 64px rgba(0, 0, 0, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1); transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {#each Object.entries(skills) as [category, items], idx}
          <div>
            <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : category === 'ia' ? 'IA & Automatización' : category === 'databases' ? 'Bases de Datos' : 'DevOps & Testing'}
            </h4>
            <div class="flex flex-wrap gap-1.5 sm:gap-2">
              {#each items as skill}
                <span class="inline-flex px-5 py-2.5 bg-gradient-to-br from-white/12 to-white/5 backdrop-blur-[10px] border border-white/15 rounded-[14px] font-medium text-white/90 transition-all duration-400 cursor-default opacity-0 animate-[fade-in-up_0.6s_ease_forwards] hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-purple-500/20 hover:border-blue-500/40 hover:-translate-y-1 hover:scale-105 text-xs sm:text-sm" style="box-shadow: 0 8px 24px rgba(10, 132, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2); transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">{skill}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
      <div class="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none transition-[left] duration-800 ease-out group-hover:left-full"></div>
    </div>

    <!-- Learning Section -->
    <div class="liquid-glass-card p-4 sm:p-6 card-3d hover-lift relative overflow-hidden group">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-[14px] bg-gradient-to-br from-cyan-400/40 to-green-500/40 flex items-center justify-center shrink-0 transition-all duration-400" style="box-shadow: 0 4px 20px rgba(100, 210, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3); transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-white">Aprendiendo actualmente</h3>
            <p class="text-white/50 text-xs sm:text-sm">Tecnologías en las que estoy profundizando</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          {#each learning as item}
            <span class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs sm:text-sm font-medium">{item}</span>
          {/each}
        </div>
      </div>
      <div class="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none transition-[left] duration-800 ease-out group-hover:left-full"></div>
    </div>
  </div>
</section>
