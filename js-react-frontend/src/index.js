import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes/Router';

const container = document.getElementById('js-react-frontend-root');

const root = createRoot(container);

// eslint-disable-next-line react/jsx-filename-extension
root.render(<Router />);

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('./service-worker.js')
			.then((registration) => {
				// eslint-disable-next-line no-console
				console.log('SW registered: ', registration);
			})
			.catch((registrationError) => {
				// eslint-disable-next-line no-console
				console.log('SW registration failed: ', registrationError);
			});
	});
}
