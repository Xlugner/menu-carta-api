// src/utils/businessStatusBadge.ts

import type { BusinessResponse, WorkingHour } from '../types/type';


export function isBusinessOpen(business: BusinessResponse | null): boolean {
  if (!business || !business.working_hours) {
    return false;
  }

  const now = new Date();
  const jsDay = now.getDay();
  const apiDay = jsDay === 0 ? 7 : jsDay;

  const todayWorkingHours: WorkingHour | undefined = business.working_hours.find(
    (wh) => wh.week_day === apiDay
  );

  if (!todayWorkingHours || todayWorkingHours.schedules.length === 0) {
    return false;
  }

  return false;
}

export function getStatusBadge(isOpen: boolean) {
  return {
    text: isOpen ? 'Abierto' : 'Cerrado',
    colorClass: isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  };
}
