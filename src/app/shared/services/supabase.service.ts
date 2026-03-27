import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {
    private client: SupabaseClient | null = null;

    private readonly platformId = inject(PLATFORM_ID);
    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            this.client = createClient(
                environment.supabaseUrl,
                environment.supabaseKey
            );
        }
    }

    getClient(): SupabaseClient {
        if (!this.client) {
            throw new Error('Supabase not initialized (SSR)');
        }
        return this.client;
    }
}
