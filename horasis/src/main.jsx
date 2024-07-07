import React from 'react'
import ReactDOM from 'react-dom/client' 
// import App from './App.jsx'
import './index.css'
import Router from './routes/router';
import { AuthProvider } from './components/hooks/auth';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router></Router>
    </AuthProvider>
    {/* <App></App> */}
    
  </React.StrictMode>
)
