import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <div style={{ backgroundColor: '#2E40C1', color: '#ffffff', minHeight: '100vh', padding: '20px' }}>
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);

