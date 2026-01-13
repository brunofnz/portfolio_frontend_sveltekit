<script lang="ts">
  import type { NavItem } from './types';

  let mobileMenuOpen = $state(false);

  const navItems: NavItem[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Mi', href: '#sobre-mi' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' }
  ];

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-3 sm:py-4">
  <div class="max-w-6xl mx-auto">
    <div class="liquid-glass px-4 sm:px-6 py-3 flex justify-between items-center">
      <span class="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
        BF
      </span>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-6">
        {#each navItems as item}
          <a
            href={item.href}
            class="nav-link text-sm text-white/70 hover:text-white transition-all duration-300 relative"
          >
            {item.label}
          </a>
        {/each}
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 gap-1.5"
        onclick={toggleMobileMenu}
        aria-label="Menu"
      >
        <span class="w-5 h-0.5 bg-white rounded-full transition-all duration-300 {mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
        <span class="w-5 h-0.5 bg-white rounded-full transition-all duration-300 {mobileMenuOpen ? 'opacity-0' : ''}"></span>
        <span class="w-5 h-0.5 bg-white rounded-full transition-all duration-300 {mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden liquid-glass mt-2 p-4 animate-[slide-down_0.3s_ease_forwards]">
        <div class="flex flex-col gap-2">
          {#each navItems as item}
            <a
              href={item.href}
              class="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              onclick={closeMobileMenu}
            >
              {item.label}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</nav>
