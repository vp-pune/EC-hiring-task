
import {createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom';
import Login from '../components/Login';
import RootLayout from './Layout/RootLayout';
import Register from '../components/Register';
import Products from '../components/Products';


export const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Login/>}></Route>
            <Route path='registration' element={<Register/>}></Route>
            <Route path='products' element={<Products/>}></Route>
        </Route>
    )
)