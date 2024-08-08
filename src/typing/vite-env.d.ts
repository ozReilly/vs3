/// <reference types="vite/client" />
declare interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_MODE: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
