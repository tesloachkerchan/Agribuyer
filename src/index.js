import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from './context/AuthContext';
import '../src/components/i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <ToastContainer theme='dark' position='top-right' autoClose={3000}
    closeOnClick pauseOnHover={false}/>
    <Provider store={store}>
    <App />
    </Provider>
    </AuthContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();
