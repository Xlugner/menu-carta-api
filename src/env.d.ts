// src/env.d.ts
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_BASE_URL: string;
  readonly API_USERNAME: string;
  readonly API_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}