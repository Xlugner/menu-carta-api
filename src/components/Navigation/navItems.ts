// src/components/Navigation/navItems.ts
// Configuración principal
export const siteConfig = {
  companyName: 'Tu Empresa',
  logoUrl: 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600',
  logoAlt: 'Logo de Tu Empresa',
  phone: '+34 912 345 678',
  mobile: '+34 600 123 456',
  
  // Horario para el badge
  schedule: {
    openTime: '09:00',
    closeTime: '18:00',
    workingDays: [1, 2, 3, 4, 5] // Lunes a Viernes
  }
};

// Datos de contacto para el header
export const contactItems = [
  {
    type: 'phone',
    label: 'Teléfono',
    value: siteConfig.phone,
    
  },
  {
    type: 'mobile',
    label: 'Móvil',
    value: siteConfig.mobile,
  }
];

