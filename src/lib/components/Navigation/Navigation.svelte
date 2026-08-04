<script lang="ts">
  import { onMount } from 'svelte';
  import type { NavItem } from './types';
  import { ThemeToggle } from '$lib/components/ThemeToggle';

  let mobileMenuOpen = $state(false);
  let activeId = $state('inicio');

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

  onMount(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeId = entry.target.id;
        }
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-3 sm:py-4">
  <div class="max-w-6xl mx-auto">
    <div class="liquid-glass px-4 sm:px-6 py-3 flex justify-between items-center">
      <span class="text-lg sm:text-xl font-bold text-ink">
        BF
      </span>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-6">
        {#each navItems as item}
          <a
            href={item.href}
            class="nav-link text-sm text-ink-faint hover:text-ink transition-all duration-300 relative"
            class:active={activeId === item.href.slice(1)}
          >
            {item.label}
          </a>
        {/each}
        <ThemeToggle />
      </div>

      <!-- Mobile controls -->
      <div class="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          class="flex flex-col justify-center items-center w-10 h-10 rounded-md bg-veil border border-veil-border gap-1.5"
          onclick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span class="w-5 h-0.5 bg-ink rounded-full transition-all duration-300 {mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
          <span class="w-5 h-0.5 bg-ink rounded-full transition-all duration-300 {mobileMenuOpen ? 'opacity-0' : ''}"></span>
          <span class="w-5 h-0.5 bg-ink rounded-full transition-all duration-300 {mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden liquid-glass mt-2 p-4 animate-[slide-down_0.3s_ease_forwards]">
        <div class="flex flex-col gap-2">
          {#each navItems as item}
            <a
              href={item.href}
              class="block py-3 px-4 text-ink-soft hover:text-ink hover:bg-veil rounded-lg transition-all"
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
