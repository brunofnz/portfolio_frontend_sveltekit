<script lang="ts">
  import type { ExperienceProps } from './types';

  interface Props extends ExperienceProps {}
  let { experiences }: Props = $props();
</script>

<section id="experiencia" class="py-12 sm:py-16 px-3 sm:px-4 relative">
  <div class="max-w-6xl mx-auto">
    <h2 class="section-title text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl">
      <span class="relative">
        Experiencia Profesional
        <div class="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </span>
    </h2>

    <div class="space-y-4 sm:space-y-6">
      {#each experiences as exp}
        <div class="liquid-glass-card p-4 sm:p-6 md:p-8 card-3d hover-lift relative overflow-hidden group">
          <!-- Header -->
          <div class="flex flex-col gap-3 mb-4">
            <div>
              <div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                <h3 class="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                {#if exp.type}
                  <span class="text-xs px-2 py-0.5 sm:py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">{exp.type}</span>
                {/if}
              </div>
              <p class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold text-sm sm:text-base">{exp.company}</p>
              <p class="text-white/50 text-xs sm:text-sm mt-1">{exp.description}</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="inline-flex px-4 py-2 bg-white/10 backdrop-blur-[10px] border border-white/15 rounded-[30px] text-white/70 whitespace-nowrap text-xs sm:text-sm">{exp.period}</span>
              <span class="text-white/40 text-xs">({exp.duration})</span>
            </div>
          </div>

          <!-- Achievements -->
          <div class="space-y-2 sm:space-y-3 mb-4">
            {#each exp.achievements as achievement}
              <div class="flex items-start gap-2 sm:gap-3 group/item">
                <span class="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover/item:scale-150 transition-transform shrink-0"></span>
                <div>
                  <p class="text-white font-medium text-xs sm:text-sm">{achievement.title}</p>
                  <p class="text-white/60 text-xs sm:text-sm">{achievement.description}</p>
                </div>
              </div>
            {/each}
          </div>

          <!-- Tech stack -->
          <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/10">
            {#each exp.tech as tech}
              <span class="inline-flex px-3.5 py-1.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 rounded-[20px] text-white/80 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/40 hover:to-purple-500/40 hover:scale-105 text-xs sm:text-sm">{tech}</span>
            {/each}
          </div>
          <div class="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none transition-[left] duration-800 ease-out group-hover:left-full"></div>
        </div>
      {/each}
    </div>
  </div>
</section>
