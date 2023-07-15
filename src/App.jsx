import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

export default function App() {
  const greeting = 'Hola! Bienvenido a MORO Urban Clothing';
  return (
    <div className="flex flex-col">
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}
