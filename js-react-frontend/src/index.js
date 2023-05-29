import 'core-js/es/array';
import 'core-js/es/object';
import 'core-js/es/promise';
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime';
import Router from './routes/Router';

const container = document.getElementById('js-react-frontend');

const root = createRoot(container);

// eslint-disable-next-line react/jsx-filename-extension
root.render(<Router />);
