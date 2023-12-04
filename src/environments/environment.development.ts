declare global {
  interface Window {
    env: {
      URL: string;
    }
  }
}


export const environment = {
  url: window.env.URL || ''
};
