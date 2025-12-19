// src/config/api.ts

import { ApiClient } from '../utils/api-client';

const API_BASE_URL = import.meta.env.API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error('❌ API_BASE_URL no está definida en .env');
}

export const apiClient = new ApiClient(API_BASE_URL);

export const API_ENDPOINTS = {
  login: '/login/',
  business: (id: number) => `/businesses/${id}/`,
  menus: '/menus/',
  menuForWebQr: '/menus/menu_for_web_qr/'
};