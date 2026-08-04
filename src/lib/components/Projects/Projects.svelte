<script lang="ts">
  import type { ProjectsProps } from './types';
  import { GlassCard } from '$lib/components/Shared';
  import { reveal } from '$lib/actions/reveal';
  import { groupByCategory } from '$lib/utils/groupByCategory';

  let { projects, githubUrl }: ProjectsProps = $props();

  const groups = $derived(groupByCategory(projects));
</script>

<!-- Projects Section -->
<section id="proyectos" class="py-16 px-4 relative">
  <div class="max-w-6xl mx-auto">
    <h2 class="section-title text-center mb-12" use:reveal={{ delay: 0 }}>
      <span class="relative">
        Proyectos Destacados
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-ink-dim rounded-full"></div>
      </span>
    </h2>

    {#each groups as [category, items], gi}
      <div class="mb-10 last:mb-0">
        <h3 class="text-ink-soft text-xs font-semibold uppercase tracking-wider mb-4" use:reveal={{ delay: gi * 80 }}>
          {category}
        </h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each items as project, i}
            <GlassCard class="p-6" delay={gi * 80 + i * 100}>
              {#if project.url}
                <div class="flex items-center justify-end mb-4">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" class="text-ink-dim hover:text-ink transition-colors" title="Ver proyecto">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              {/if}
              <h4 class="text-lg font-bold text-ink mb-2 group-hover:text-ink transition-colors">{project.title}</h4>
              <p class="text-ink-faint text-sm mb-4 leading-relaxed">{project.description}</p>
              <div class="flex flex-wrap gap-2 pt-4 border-t border-veil-border">
                {#each project.tech as tech}
                  <span class="text-xs px-2 py-1 rounded-md bg-veil text-ink-soft border border-veil-border">{tech}</span>
                {/each}
              </div>
            </GlassCard>
          {/each}
        </div>
      </div>
    {/each}

    <!-- GitHub CTA -->
    <div class="mt-4 text-center">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-ink-faint hover:text-ink transition-colors group"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <span class="text-sm">Ver mas proyectos en GitHub</span>
        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>
