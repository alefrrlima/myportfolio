import { useEffect, useState } from 'react';
import './Nav.styles.css';

import { useNavigate, useLocation } from 'react-router-dom';

export default function Nav() {
   const [currentPage, setCurrentPage] = useState('/');

   const navigate = useNavigate();
   const location = useLocation();

   const handleRoute = (path) => {
      navigate(path);
      setCurrentPage(path);
   };

   useEffect(() => {
      const handleScroll = () => {
         const pageBotton =
            window.innerHeight + window.scrollY >= document.body.offsetHeight;
      };
   }, []);

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
