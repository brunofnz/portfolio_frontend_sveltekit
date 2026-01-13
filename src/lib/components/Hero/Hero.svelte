<script lang="ts">
  import type { HeroProps } from './types';

  interface Props extends HeroProps {}
  let { yearsOfExperience, stats }: Props = $props();
</script>

<section id="inicio" class="py-16 md:py-24 flex items-center justify-center px-4 sm:px-6 relative">
  <div class="max-w-5xl mx-auto w-full">
    <div
      class="bg-gradient-to-br from-white/12 via-white/5 to-white/8 backdrop-blur-[30px] backdrop-saturate-[180%] border border-white/20 rounded-3xl shadow-[0_16px_60px_rgba(0,0,0,0.3)] shadow-[inset_0_2px_0_rgba(255,255,255,0.2)] p-6 sm:p-8 md:p-10 relative overflow-hidden"
      role="presentation"
      style="transform-style: preserve-3d; transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);"
    >
      <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        <!-- Profile Image with 3D effect -->
        <div class="flex-shrink-0" style="perspective: 1000px;">
          <div class="relative animate-[float_6s_ease-in-out_infinite]" style="transform-style: preserve-3d;">
            <!-- Glow Ring 1 -->
            <div class="absolute -inset-3 rounded-full border-2 border-transparent bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-cyan-400/40 opacity-50 animate-[ring-pulse_3s_ease-in-out_infinite] hidden sm:block"
                 style="background-clip: border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude;"></div>

            <!-- Glow Ring 2 -->
            <div class="absolute -inset-5 rounded-full border-2 border-transparent bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-cyan-400/40 opacity-30 animate-[ring-pulse_3s_ease-in-out_infinite] hidden md:block"
                 style="background-clip: border-box; animation-delay: 0.5s; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude;"></div>

            <div class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/30 relative z-10 shadow-[0_0_40px_rgba(10,132,255,0.3),0_0_80px_rgba(191,90,242,0.15)] shadow-[inset_0_0_40px_rgba(255,255,255,0.1)]">
              <img
                src="/images/perfil.png"
                alt="Bruno Fernandez"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20"></div>
            </div>
          </div>
        </div>

        <!-- Hero Content -->
        <div class="flex-1 text-center lg:text-left">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-xs sm:text-sm font-semibold mb-2 tracking-widest uppercase opacity-0 animate-[slide-up_0.6s_ease_forwards]">
            Full-Stack Developer
          </p>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-black mb-3 leading-tight">
            <span class="block text-white drop-shadow-2xl opacity-0 animate-[slide-up_0.6s_ease_forwards_0.1s]">
              Bruno Ulises
            </span>
            <span class="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-0 animate-[slide-up_0.6s_ease_forwards_0.2s] bg-[length:200%_200%] animate-[gradient-shift_4s_ease_infinite]">
              Fernandez
            </span>
          </h1>
          <p class="text-white/70 text-sm sm:text-base max-w-xl mb-4 leading-relaxed opacity-0 animate-[slide-up_0.6s_ease_forwards_0.3s] mx-auto lg:mx-0">
            Desarrollador Full-Stack con <strong class="text-white">{yearsOfExperience}+ años de experiencia</strong> construyendo
            aplicaciones web escalables. Especializado en SvelteKit, NestJS y arquitecturas modernas.
          </p>

          <!-- Stats mini inline -->
          <div class="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-4 opacity-0 animate-[slide-up_0.6s_ease_forwards_0.3s]">
            {#each stats.slice(0, 3) as stat}
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span class="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</span>
                <span class="text-white/50 text-xs">{stat.label}</span>
              </div>
            {/each}
          </div>

          <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center lg:justify-start opacity-0 animate-[slide-up_0.6s_ease_forwards_0.4s]">
            <a href="#contacto" class="relative inline-flex items-center justify-center py-2.5 px-5 bg-gradient-to-br from-blue-500/90 to-purple-500/90 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(10,132,255,0.5),0_4px_20px_rgba(191,90,242,0.3)] shadow-[0_4px_20px_rgba(10,132,255,0.4)] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] overflow-hidden">
              <span class="relative z-10 flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Contactame
              </span>
            </a>
            <a href="#experiencia" class="relative inline-flex items-center justify-center py-2.5 px-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/30 hover:shadow-[0_6px_24px_rgba(255,255,255,0.1)]">
              <span class="relative z-10">Ver Experiencia</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Decorative elements -->
  <div class="absolute -bottom-10 -left-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-blue-500/10 rounded-full blur-3xl animate-[pulse-slow_4s_ease-in-out_infinite] pointer-events-none"></div>
  <div class="absolute -top-10 -right-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" style="animation: pulse-slow 4s ease-in-out infinite 1s;"></div>
</section>
