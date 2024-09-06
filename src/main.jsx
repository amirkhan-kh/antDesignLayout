import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './lang/lang.config.js'
import { appRouter } from './router/router';
import './index.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
