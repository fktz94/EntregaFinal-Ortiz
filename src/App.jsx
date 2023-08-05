import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Cart from './components/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ItemListContainer from './components/item/ItemListContainer';
import ItemDetailContainer from './components/item/ItemDetailContainer';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
// import Products from './pages/Products';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<ItemListContainer />} />
          <Route path="products/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
