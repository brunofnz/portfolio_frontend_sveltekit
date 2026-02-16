<script lang="ts">
  import { onMount } from 'svelte';

  // Import all modular components
  import BackgroundEffects from '$lib/components/Effects/BackgroundEffects.svelte';
  import MouseGlow from '$lib/components/Effects/MouseGlow.svelte';
  import Navigation from '$lib/components/Navigation/Navigation.svelte';
  import Hero from '$lib/components/Hero/Hero.svelte';
  import About from '$lib/components/About/About.svelte';
  import Experience from '$lib/components/Experience/Experience.svelte';
  import Skills from '$lib/components/Skills/Skills.svelte';
  import Education from '$lib/components/Education/Education.svelte';
  import Projects from '$lib/components/Projects/Projects.svelte';
  import Contact from '$lib/components/Contact/Contact.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';

  // Import portfolio data
  import {
    yearsOfExperience,
    stats,
    skills,
    learning,
    experiences,
    education,
    featuredProjects,
    contactInfo
  } from '$lib/data/portfolio';

  // State variables
  let mouseX = $state(0);
  let mouseY = $state(0);
  let isMobile = $state(false);

  // Mouse follower glow
  let glowX = $state(0);
  let glowY = $state(0);

  // Handle mouse movement
  function handleMouseMove(event: MouseEvent) {
    if (isMobile) return;
    mouseX = event.clientX;
    mouseY = event.clientY;
    glowX = mouseX;
    glowY = mouseY;
  }

  // Floating orbs data
  const orbs = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 100 + Math.random() * 300,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * -20
  }));

  onMount(() => {
    isMobile = window.innerWidth < 768;

    const handleResize = () => {
      isMobile = window.innerWidth < 768;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<svelte:head>
  <!-- SEO basico -->
  <title>Bruno Fernandez - Full Stack Developer | NestJS, SvelteKit, React</title>
  <meta name="description" content="Desarrollador Full Stack con experiencia en NestJS, SvelteKit, React y Docker. Aplicaciones web y APIs en producción." />
  <meta name="author" content="Bruno Ulises Fernandez" />
  <meta name="keywords" content="desarrollador full stack, NestJS, SvelteKit, React, Node.js, Docker, PostgreSQL, Argentina, Chaco, Resistencia, developer, portfolio" />
  <link rel="canonical" href="https://brunofernandez.dev" />

  <!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://brunofernandez.dev" />
  <meta property="og:title" content="Bruno Fernandez - Full Stack Developer" />
  <meta property="og:description" content="Desarrollador Full Stack con experiencia en NestJS, SvelteKit, React y Docker. Aplicaciones web y APIs en producción." />
  <meta property="og:image" content="https://brunofernandez.dev/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Bruno Fernandez - Full Stack Developer" />
  <meta property="og:locale" content="es_AR" />
  <meta property="og:site_name" content="Bruno Fernandez Portfolio" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Bruno Fernandez - Full Stack Developer" />
  <meta name="twitter:description" content="Desarrollador Full Stack con experiencia en NestJS, SvelteKit, React y Docker. Aplicaciones web y APIs en producción." />
  <meta name="twitter:image" content="https://brunofernandez.dev/og-image.png" />
  <meta name="twitter:image:alt" content="Bruno Fernandez - Full Stack Developer" />

  <!-- JSON-LD Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bruno Ulises Fernandez",
    "jobTitle": "Desarrollador Full Stack",
    "url": "https://brunofernandez.dev",
    "image": "https://brunofernandez.dev/images/perfil.png",
    "email": "brunofnz28@gmail.com",
    "telephone": "+5493624519254",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Resistencia",
      "addressRegion": "Chaco",
      "addressCountry": "AR"
    },
    "sameAs": [
      "https://www.linkedin.com/in/bruno-fernandez-developer/",
      "https://github.com/brunofnz"
    ],
    "knowsAbout": ["NestJS", "SvelteKit", "React", "Node.js", "Docker", "PostgreSQL", "TypeScript", "OpenAI", "Blockchain"]
  })}</script>`}
</svelte:head>

<svelte:window onmousemove={handleMouseMove} />

<main class="min-h-screen relative overflow-hidden">
  <BackgroundEffects {orbs} {isMobile} />
  {#if !isMobile}<MouseGlow {glowX} {glowY} />{/if}
  <Navigation />
  <Hero {yearsOfExperience} {stats} />
  <About {yearsOfExperience} />
  <Experience {experiences} />
  <Skills {skills} {learning} />
  <Education education={education} />
  <Projects projects={featuredProjects} githubUrl="https://github.com/brunofnz" />
  <Contact {contactInfo} />
  <Footer name="Bruno Fernandez" year={new Date().getFullYear()} />
</main>
