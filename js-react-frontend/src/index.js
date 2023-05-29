import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes/Router';

const container = document.getElementById('js-react-frontend');

const root = createRoot(container);

// eslint-disable-next-line react/jsx-filename-extension
root.render(<Router />);
