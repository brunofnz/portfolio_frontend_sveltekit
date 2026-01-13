<script lang="ts">
  import type { ContactProps } from './types';

  interface Props extends ContactProps {}
  let { contactInfo }: Props = $props();
</script>

<!-- Contact Section -->
<section id="contacto" class="py-16 px-4 relative">
  <div class="max-w-4xl mx-auto">
    <h2 class="section-title text-center mb-12">
      <span class="relative">
        Contacto
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </span>
    </h2>

    <div class="relative overflow-hidden rounded-[32px] border border-white/20 p-8 md:p-12 group" style="background: linear-gradient(160deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%); backdrop-filter: blur(50px) saturate(180%); -webkit-backdrop-filter: blur(50px) saturate(180%); box-shadow: 0 16px 64px rgba(0, 0, 0, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1); transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);">
      <div class="text-center mb-8">
        <p class="text-white/70 text-lg max-w-xl mx-auto">
          Estoy disponible para nuevas oportunidades. No dudes en contactarme!
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 mb-8">
        <!-- Email -->
        <a href="mailto:{contactInfo.email}" class="flex items-center gap-4 px-6 py-5 bg-white/5 border border-white/10 rounded-[20px] transition-all duration-400 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 group" style="box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2); transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">
          <div class="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-500/40 flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110 group-hover:-rotate-[5deg]" style="box-shadow: 0 4px 20px rgba(10, 132, 255, 0.3);">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-white/50 text-sm mb-1">Email</p>
            <p class="text-white font-semibold group-hover:text-blue-400 transition-colors">{contactInfo.email}</p>
          </div>
          <svg class="w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>

        <!-- Phone -->
        <a href="tel:{contactInfo.phone}" class="flex items-center gap-4 px-6 py-5 bg-white/5 border border-white/10 rounded-[20px] transition-all duration-400 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 group" style="box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2); transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">
          <div class="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-cyan-400/40 to-green-500/40 flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110 group-hover:-rotate-[5deg]" style="box-shadow: 0 4px 20px rgba(100, 210, 255, 0.3);">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-white/50 text-sm mb-1">Telefono</p>
            <p class="text-white font-semibold group-hover:text-cyan-400 transition-colors">{contactInfo.phoneDisplay}</p>
          </div>
          <svg class="w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>

        <!-- LinkedIn -->
        <a href="{contactInfo.linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 px-6 py-5 bg-white/5 border border-white/10 rounded-[20px] transition-all duration-400 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 group" style="box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2); transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">
          <div class="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-[#0077b5]/50 to-blue-500/40 flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110 group-hover:-rotate-[5deg]" style="box-shadow: 0 4px 20px rgba(0, 119, 181, 0.3);">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-white/50 text-sm mb-1">LinkedIn</p>
            <p class="text-white font-semibold group-hover:text-[#0077b5] transition-colors">{contactInfo.linkedinDisplay}</p>
          </div>
          <svg class="w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>

        <!-- GitHub -->
        <a href="{contactInfo.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 px-6 py-5 bg-white/5 border border-white/10 rounded-[20px] transition-all duration-400 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 group" style="box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2); transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">
          <div class="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110 group-hover:-rotate-[5deg]" style="box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-white/50 text-sm mb-1">GitHub</p>
            <p class="text-white font-semibold group-hover:text-white/80 transition-colors">{contactInfo.githubDisplay}</p>
          </div>
          <svg class="w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div class="text-center">
        <a href="mailto:{contactInfo.email}" class="relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-br from-blue-500/80 to-purple-500/80 backdrop-blur-[10px] border border-white/30 rounded-[20px] text-white font-semibold overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:scale-[1.02]" style="box-shadow: 0 4px 20px rgba(10, 132, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3); transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);">
          <span class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          <svg class="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
          <span class="relative z-10">Enviar Mensaje</span>
        </a>
      </div>
      <div class="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none transition-[left] duration-800 ease-out group-hover:left-full"></div>
    </div>
  </div>
</section>
