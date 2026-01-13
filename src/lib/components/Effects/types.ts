export interface Orb {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export interface BackgroundEffectsProps {
  orbs: Orb[];
  isMobile: boolean;
}

export interface MouseGlowProps {
  glowX: number;
  glowY: number;
}
