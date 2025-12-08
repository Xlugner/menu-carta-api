// src/components/Footer/socialConfig.ts

export type SocialNetwork = {
  name: string;
  url: string;
  icon: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube';
  ariaLabel: string;
};

// Datos centralizados de redes sociales
export const socialNetworks: SocialNetwork[] = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/tuempresa', // Cambia esto
    icon: 'facebook',
    ariaLabel: 'Visita nuestra página de Facebook'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/tuempresa', // Cambia esto
    icon: 'instagram',
    ariaLabel: 'Visita nuestro perfil de Instagram'
  }
];

// Configuración por defecto para el footer
export const defaultSocialConfig = {
  facebookUrl: '#',
  instagramUrl: '#'
};

