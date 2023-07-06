import './Nav.styles.css';

import { useNavigate } from 'react-router-dom';

export default function Nav() {
   const navigate = useNavigate();

   const handleRoute = (path) => {
      navigate(path);
   };

   return (
      <nav className="nav">
         <button onClick={() => handleRoute('/')}>Sobre</button>
         <button onClick={() => handleRoute('/projetos')}>Projetos</button>
         <button onClick={() => handleRoute('/experiencia')}>Experiência</button>
         <button onClick={() => handleRoute('/contato')}>Contato</button>
      </nav>
   );
}
