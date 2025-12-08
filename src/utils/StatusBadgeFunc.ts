import { siteConfig } from "../components/Navigation/navItems";

// Función para saber si está abierto
export function isBusinessOpen(): boolean {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay();
  
  // Solo lunes a viernes
  if (!siteConfig.schedule.workingDays.includes(currentDay)) {
    return false;
  }
  
  // Entre 9:00 y 18:00
  return currentHour >= 9 && currentHour < 18;
}

// Texto y color del badge
export function getStatusBadge() {
  const isOpen = isBusinessOpen();
  return {
    text: isOpen ? 'Abierto' : 'Cerrado',
    colorClass: isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  };
}