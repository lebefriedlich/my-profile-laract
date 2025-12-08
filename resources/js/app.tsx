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
import Layout from './Layouts/Layout';

// Grab the element where the app will mount
const app = document.getElementById('app');

createInertiaApp({
  resolve: (name: string) => import(`./pages/${name}`).then((module) => module.default),
  setup({ el, App, props }: { el: HTMLElement; App: React.ComponentType<any>; props: any }) {
    createRoot(el).render(<App {...props} />);
  },
});
