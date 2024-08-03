import { defineConfig } from '@pandacss/dev';
import preset from '@/theme/preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  eject: true,
  presets: [preset],
  exclude: [],
  outdir: 'styled-system',
});
