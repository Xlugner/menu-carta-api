// src/services/business.service.ts

import { apiClient, API_ENDPOINTS } from '../config/api';
import { AuthService } from './auth.service';
import type { BusinessResponse } from '../types/type';

export class BusinessService {
  /**
   * Obtiene un business por ID (con login automático)
   */
  static async getById(id: number): Promise<BusinessResponse | null> {
    try {
      const username = import.meta.env.API_USERNAME;
      const password = import.meta.env.API_PASSWORD;

      if (!username || !password) {
        throw new Error('Credenciales no configuradas en .env');
      }

      const token = await AuthService.login(username, password);
      
      if (!token) {
        throw new Error('Login falló');
      }

      const business = await apiClient.get<BusinessResponse>(
        API_ENDPOINTS.business(id)
      );

      return business;
    } catch (error) {
      console.error(`❌ Error obteniendo business ${id}:`, error);
      return null;
    }
  }
}