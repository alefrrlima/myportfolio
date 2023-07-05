import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sobre from '../../pages/Sobre';
import Projetos from '../../pages/Projetos';
import Experiencia from '../../pages/Experiencia';
import Contato from '../../pages/Contato';

export default function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/experiecia" element={<Experiencia />} />
            <Route path="/contato" element={<Contato />} />
         </Routes>
      </BrowserRouter>
   );
}
