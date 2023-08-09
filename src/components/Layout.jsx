import { Outlet } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavBar />
      <main className="flex grow justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
