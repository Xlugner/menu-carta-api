// src/services/auth.service.ts

import { apiClient, API_ENDPOINTS } from '../config/api';

interface LoginResponse {
  access: string;
  refresh: string;
}

export class AuthService {
  /**
   * Hace login y retorna el token de acceso
   */
  static async login(username: string, password: string): Promise<string | null> {
    try {
      const response = await apiClient.post<LoginResponse>(
        API_ENDPOINTS.login,
        { username, password }
      );

      // Guardar token en el cliente
      apiClient.setToken(response.access);

      return response.access;
    } catch (error) {
      console.error('❌ Error en login:', error);
      return null;
    }
  }
}