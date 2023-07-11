import { Routes, Route } from 'react-router-dom';

import './AppRoutes.styles.css';

import ScrollTopButton from '../ScrollTopButton';

import Sobre from '../../pages/Sobre';
import Projetos from '../../pages/Projetos';
import Experiencia from '../../pages/Experiencia';
import Contato from '../../pages/Contato';

// export default function AppRoutes({ stacked }) {
//    if (stacked) {
//       return (
//          <div className="stacked-pages">
//             <ScrollTopButton />
//             <Sobre />
//             <Projetos />
//             <Experiencia />
//             <Contato />
//          </div>
//       );
//    }

//    return (
//       <Routes>
//          <Route path="/" element={<Sobre />} />
//          <Route path="/projetos" element={<Projetos />} />
//          <Route path="/experiencia" element={<Experiencia />} />
//          <Route path="/contato" element={<Contato />} />
//       </Routes>
//    );
// }

export default function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Sobre />} />
         <Route path="/projetos" element={<Projetos />} />
         <Route path="/experiencia" element={<Experiencia />} />
         <Route path="/contato" element={<Contato />} />
      </Routes>
   );
}
