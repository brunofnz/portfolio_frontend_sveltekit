<script lang="ts">
  import type { ProjectsProps } from './types';

  let { projects, githubUrl }: ProjectsProps = $props();
</script>

<!-- Projects Section -->
<section id="proyectos" class="py-16 px-4 relative">
  <div class="max-w-6xl mx-auto">
    <h2 class="section-title text-center mb-12">
      <span class="relative">
        Proyectos Destacados
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </span>
    </h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project, i}
        <div class="liquid-glass-card p-6 card-3d hover-lift group relative overflow-hidden">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">{project.category}</span>
            {#if project.url}
              <a href={project.url} target="_blank" rel="noopener noreferrer" class="text-white/40 hover:text-cyan-400 transition-colors" title="Ver proyecto">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            {/if}
          </div>
          <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
          <p class="text-white/60 text-sm mb-4 leading-relaxed">{project.description}</p>
          <div class="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {#each project.tech as tech}
              <span class="text-xs px-2 py-1 rounded bg-white/5 text-white/70 border border-white/10">{tech}</span>
            {/each}
          </div>
          <div class="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none transition-[left] duration-800 ease-out group-hover:left-full"></div>
        </div>
      {/each}
    </div>

    <!-- GitHub CTA -->
    <div class="mt-8 text-center">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
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
