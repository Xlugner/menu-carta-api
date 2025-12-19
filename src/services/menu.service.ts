// src/services/menu.service.ts

import { apiClient, API_ENDPOINTS } from '../config/api';
import { AuthService } from './auth.service';
import type { Menu } from '../types/type';

export class MenuService {
    /**
     * Obtiene todos los menús disponibles (con login automático)
     */
    static async getAll(): Promise<Menu[] | null> {
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

            const response = await apiClient.get<{
                count: number;
                next: string | null;
                previous: string | null;
                results: Menu[]
            }>(API_ENDPOINTS.menus);
            return response.results;
        } catch (error) {
            console.error('❌ Error obteniendo menús:', error);
            return null;
        }
    }

    
}
