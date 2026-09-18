import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eatabananapodcast.github.io',
  output: 'static',
  build: {
    format: 'directory'
  }
});
