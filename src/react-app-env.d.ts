/// <reference types="react-scripts" />

declare type AppEnv = {
  REACT_APP_MAP_ACCESS: string;
  REACT_APP_MAP_CENTER: [number, number];
  REACT_APP_MAP_STYLE: string;
  REACT_APP_MAP_DEFAULT_ZOOM: number;
  REACT_APP_MAP_MAX_ZOOM: number;
  REACT_APP_MAP_MAX_PITCH: number;
};

declare global {
  interface Window {
    env: AppEnv;
  }
}
