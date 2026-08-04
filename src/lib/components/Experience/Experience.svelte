<script lang="ts">
  import type { ExperienceProps } from './types';
  import { GlassCard } from '$lib/components/Shared';
  import { reveal } from '$lib/actions/reveal';
  import { groupByCategory } from '$lib/utils/groupByCategory';

  interface Props extends ExperienceProps {}
  let { experiences }: Props = $props();
</script>

<section id="experiencia" class="py-12 sm:py-16 px-3 sm:px-4 relative">
  <div class="max-w-6xl mx-auto">
    <h2 class="section-title text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl" use:reveal={{ delay: 0 }}>
      <span class="relative">
        Experiencia Profesional
        <div class="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-ink-dim rounded-full"></div>
      </span>
    </h2>

    <div class="space-y-4 sm:space-y-6">
      {#each experiences as exp, ei}
        <GlassCard class="p-4 sm:p-6 md:p-8" delay={ei * 100}>
          <!-- Header -->
          <div class="flex flex-col gap-3 mb-4">
            <div>
              <div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                <h3 class="text-lg sm:text-xl font-bold text-ink">{exp.role}</h3>
                {#if exp.type}
                  <span class="text-xs px-2 py-0.5 sm:py-1 rounded-full bg-veil text-ink-soft border border-veil-border">{exp.type}</span>
                {/if}
              </div>
              <p class="text-ink-soft font-semibold text-sm sm:text-base">{exp.company}</p>
              <p class="text-ink-faint text-xs sm:text-sm mt-1">{exp.description}</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="inline-flex px-4 py-2 bg-veil backdrop-blur-[10px] border border-veil-border rounded-full text-ink-soft whitespace-nowrap text-xs sm:text-sm">{exp.period}</span>
              <span class="text-ink-dim text-xs">({exp.duration})</span>
            </div>
          </div>

          <!-- Achievements, grouped by area when there's more than one -->
          {#if exp.achievements.length > 1}
            <div class="space-y-4 mb-4">
              {#each groupByCategory(exp.achievements) as [category, items]}
                <div>
                  {#if category !== 'General'}
                    <p class="text-ink-dim text-[11px] font-semibold uppercase tracking-wider mb-1.5">{category}</p>
                  {/if}
                  <div class="space-y-2 sm:space-y-3">
                    {#each items as achievement}
                      <div class="flex items-start gap-2 sm:gap-3 group/item">
                        <span class="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-ink-dim group-hover/item:scale-150 transition-transform shrink-0"></span>
                        <div>
                          <p class="text-ink font-medium text-xs sm:text-sm">{achievement.title}</p>
                          <p class="text-ink-faint text-xs sm:text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    {/each}
                  </div>
                </div>
              {/each}
            </div>
          {:else}
            <div class="space-y-2 sm:space-y-3 mb-4">
              {#each exp.achievements as achievement}
                <div class="flex items-start gap-2 sm:gap-3 group/item">
                  <span class="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-ink-dim group-hover/item:scale-150 transition-transform shrink-0"></span>
                  <div>
                    <p class="text-ink font-medium text-xs sm:text-sm">{achievement.title}</p>
                    <p class="text-ink-faint text-xs sm:text-sm">{achievement.description}</p>
                  </div>
                </div>
              {/each}
            </div>
          {/if}

          <!-- Tech stack -->
          <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-veil-border">
            {#each exp.tech as tech}
              <span class="inline-flex px-3.5 py-1.5 bg-veil border border-veil-border rounded-full text-ink-soft transition-all duration-300 hover:bg-veil-strong hover:scale-105 text-xs sm:text-sm">{tech}</span>
            {/each}
          </div>
        </GlassCard>
      {/each}
    </div>
  </div>
</section>
