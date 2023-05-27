import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Peripherals from './components/Peripherals';
import NotFound from './components/NotFound';
import Hardware from './components/Hardware';
import Header from './components/Header';
import Footer from './components/Footer';
import CartProductsProvider from './components/CartProductsContext';
import Cart from './components/Cart';

function App() {
  return <>
    <CartProductsProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/peripherals" element={<Peripherals/>}/>
        <Route path="/hardware" element={<Hardware/>}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </CartProductsProvider>
  </>
}

export default App;
