/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_JOBS_API_URL?: string;
  readonly VITE_JOB_APPLICATION_API_URL?: string;
  readonly VITE_HR_EMAIL?: string;
  readonly VITE_BLOG_ADMIN_PASSWORD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  __lenis?: {
    stop: () => void;
    start: () => void;
  };
}
