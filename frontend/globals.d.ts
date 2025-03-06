declare module "*.css";

declare global {
  interface Window {
    Ya: any; 
    yaContextCb: any[]; 
  }
}

export {}; 