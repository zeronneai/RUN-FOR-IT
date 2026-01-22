import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Borramos la línea de index.css porque está causando el error de "Could not resolve"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
