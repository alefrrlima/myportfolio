import { Routes, Route } from 'react-router-dom';

import './AppRoutes.styles.css';

import Sobre from '../../pages/Sobre';
import Projetos from '../../pages/Projetos';
import Experiencia from '../../pages/Experiencia';
import Contato from '../../pages/Contato';

export default function AppRoutes({ stacked }) {
   return (
      <div className={stacked ? 'stacked-pages' : ''}>
         <Routes>
            <Route path="/" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/contato" element={<Contato />} />
         </Routes>
      </div>
   );
}
