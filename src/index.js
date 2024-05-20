import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { UserProvider } from "./contexts/user.context";
import { CartProvider } from './contexts/cart.context';
import { ProductProvider } from './contexts/shop.context';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

// add Context wrapper

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
