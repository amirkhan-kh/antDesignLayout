import {createBrowserRouter} from 'react-router-dom';
import {Home, Products, Users} from '../pages/index';
import {Dashboard} from '../layouts/dashboard/Dashboard'

const router = [
    {
        path: '/',
        element: <Dashboard/>,
        children:[
            { path: '/', element: <Home/>},
            { path: '/users', element: <Users/> },
            { path: '/products', element: <Products/>}
        ]
    }
]

export const appRouter = createBrowserRouter(router)