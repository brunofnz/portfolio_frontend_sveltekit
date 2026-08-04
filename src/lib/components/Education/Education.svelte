<script lang="ts">
  import type { EducationProps } from './types';
  import { GlassCard } from '$lib/components/Shared';
  import { reveal } from '$lib/actions/reveal';

  let { education }: EducationProps = $props();
</script>

<!-- Education Section -->
<section id="educacion" class="py-16 px-4 relative">
  <div class="max-w-6xl mx-auto">
    <h2 class="section-title text-center mb-12" use:reveal={{ delay: 0 }}>
      <span class="relative">
        Formacion
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-ink-dim rounded-full"></div>
      </span>
    </h2>

    <div class="grid md:grid-cols-2 gap-6">
      {#each education as edu, i}
        <GlassCard class="p-6" delay={Math.min(i * 100, 400)}>
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 rounded-[18px] bg-veil-strong flex items-center justify-center shrink-0 transition-all duration-400" style="box-shadow: 0 4px 20px rgba(var(--glow-rgb), 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1); transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">
              <svg class="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
              </svg>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <span class="inline-flex px-4 py-2 bg-veil backdrop-blur-[10px] border border-veil-border rounded-[30px] text-ink-soft whitespace-nowrap text-xs">{edu.period}</span>
                <span class="text-xs px-2 py-0.5 rounded-full border {edu.status === 'Graduado' ? 'bg-ink/15 text-ink border-ink-dim' : 'bg-veil text-ink-soft border-veil-border'}">{edu.status}</span>
              </div>
              <h3 class="text-lg font-bold text-ink mb-1">{edu.title}</h3>
              <p class="text-ink-soft font-medium text-sm">{edu.institution}</p>
              {#if edu.faculty}
                <p class="text-ink-faint text-xs">{edu.faculty}</p>
              {/if}
              <p class="text-ink-dim text-xs mt-1 flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
                {edu.location}
              </p>
              {#if edu.highlight}
                <p class="text-ink-faint text-xs mt-2 italic">{edu.highlight}</p>
              {/if}
            </div>
          </div>
        </GlassCard>
      {/each}
    </div>
  </div>
</section>
