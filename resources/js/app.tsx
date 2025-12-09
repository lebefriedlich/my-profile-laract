import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/flaticon.css';
import "../styles/font-awesome.min.css";
import '../styles/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Layout from './Layouts/Layout';

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
    createRoot(el).render(<App {...props} />);
  },
});
