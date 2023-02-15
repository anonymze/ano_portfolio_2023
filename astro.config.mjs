import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://anonymze.github.io',
  base: '/ano_portfolio_2023',
    // output: 'server',
    integrations: [
        react(), tailwind(
            // {
            //     config: { path: './tailwind.config.cjs' },
            // }
        )]
});
