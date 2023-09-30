import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes,Route } from 'react-router-dom';
import {App1} from "./payment";
import { Home } from './pages/home/home';
import { Register } from './pages/reg/reg';
import { Login } from './pages/login/login';
import { Cart } from './pages/cart/cart';
import { Success } from './pages/success/success';
import { Proddet } from './pages/product_details/proddet';
import { Prod_list } from './pages/prodlist/prodlist';
import { ProtectRoute } from './ProtectRoutes';
import { Users } from './pages/users/users';
import { Proddddd } from './pages/prodddd/prodddd';
import { Orders } from './pages/orders/orders';



function App() {
 
  return (
    <div>
     <Routes>
		<Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/prod_list/:category" element={<Prod_list/>}/>
    <Route element={<ProtectRoute/>}>
               <Route path="/cart" element={<Cart/>}/>
               <Route path="/success" element={<Success/>}/>
               <Route path="/prod/:id" element={<Proddet/>}/>
               <Route path="/orders" element={<Orders/>}/>
               <Route path="/users" element={<Users/>}/>
               <Route path="/products" element={<Proddddd/>}/>
         </Route>
	 </Routes>
    </div>
  );
}
export default App;
