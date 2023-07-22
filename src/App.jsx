import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

export default function App() {
  const greeting = 'Hola! Bienvenido a MORO Urban Clothing';

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </>
  );
}
