import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

router.on('navigate', () => document.getElementById('scroll-area')?.scrollTo(0, 0));
import Layout from './Layouts/Layout';
import { LanguageProvider } from './contexts/LanguageContext';

// Grab the element where the app will mount
const app = document.getElementById('app');

createInertiaApp({
  resolve: (name: string) =>
    resolvePageComponent(
      `./pages/${name}.tsx`,                 // atau ./Pages/ kalau foldernya P besar
      import.meta.glob('./pages/**/*.tsx')   // sesuaikan juga kalau pakai Pages
    ).then((page: any) => {
      // kalau mau pakai layout global:
      page.default.layout ??= (pageEl: React.ReactNode) => (
        <Layout>{pageEl}</Layout>
      );
      return page;
    }),
  setup({ el, App, props }) {
    createRoot(el).render(
      <LanguageProvider>
        <App {...props} />
      </LanguageProvider>
    );
  },
});
