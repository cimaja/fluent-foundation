import React from 'react';
import ReactDOM from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import App from './App';

const root = document.getElementById('root');

if (!root) {
  console.error('Root element not found');
} else {
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <FluentProvider theme={webLightTheme}>
          <App />
        </FluentProvider>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Error rendering app:', error);
  }
}
