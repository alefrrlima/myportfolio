import './App.styles.css';

import AppRoutes from '../AppRoutes';
import Nav from '../Nav';

import { BrowserRouter } from 'react-router-dom';

export default function App() {
   return (
      <BrowserRouter>
         <div className="app">
            <Nav />
            <AppRoutes />
         </div>
      </BrowserRouter>
   );
}
