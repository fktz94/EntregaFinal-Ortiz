import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>page not found!</h1>
      <Link to=".">Volver al home!</Link>
    </div>
  );
}
