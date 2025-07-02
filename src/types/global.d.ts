export {};

declare global {
  interface Window {
    grecaptcha: any;
    gtag?: (...args: any[]) => void;
  }
}