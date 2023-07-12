import { useState } from 'react';
import './Nav.styles.css';

import { useNavigate } from 'react-router-dom';

export default function Nav() {
   const [currentPage, setCurrentPage] = useState('');

   const navigate = useNavigate();

   const handleRoute = (path) => {
      console.log(currentPage);
      navigate(path);
      setCurrentPage(path);
   };

   return (
      <nav className="nav">
         <button
            className={currentPage == '/' ? 'active' : 'inactive'}
            onClick={() => handleRoute('/')}
         >
            Sobre
         </button>
         <button
            className={currentPage == '/projetos' ? 'active' : 'inactive'}
            onClick={() => handleRoute('/projetos')}
         >
            Projetos
         </button>
         <button
            className={currentPage == '/experiencia' ? 'active' : 'inactive'}
            onClick={() => handleRoute('/experiencia')}
         >
            Experiência
         </button>
         <button
            className={currentPage == '/contato' ? 'active' : 'inactive'}
            onClick={() => handleRoute('/contato')}
         >
            Contato
         </button>
      </nav>
   );
}
