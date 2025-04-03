import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'larafly',
  icon: '/larafly.png',
  logo: {
    light: '/larafly.png',
    dark: '/larafly.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/larafly/larafly.github.io',
      },
    ],
  },
});
