import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import About from './components/pages/About';
import Cart from './components/cart/Cart';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import ItemListContainer from './components/products/ItemListContainer';
import ItemDetailContainer from './components/products/ItemDetailContainer';
import Layout from './components/Layout';
import NotFound from './components/pages/NotFound';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import CartForm from './components/cart/CartForm';
import Thanks from './components/pages/Thanks';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA26Jt38DHJ-aPRratnbeRfa6H8S-WRUxE',
  authDomain: 'coderhouse-moro.firebaseapp.com',
  projectId: 'coderhouse-moro',
  storageBucket: 'coderhouse-moro.appspot.com',
  messagingSenderId: '928638519277',
  appId: '1:928638519277:web:b8770ba5195323214b89e4'
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cartform" element={<CartForm />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<ItemListContainer />} />
            <Route path="products/:id" element={<ItemDetailContainer />} />
            <Route path="thanks" element={<Thanks />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}
