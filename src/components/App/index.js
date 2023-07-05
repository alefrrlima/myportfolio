import './App.styles.css';

import AppRoutes from '../AppRoutes';
import Nav from '../Nav';

export default function App() {
   return (
      <div className="app">
         <Nav />
         <AppRoutes />
      </div>
   );
}
