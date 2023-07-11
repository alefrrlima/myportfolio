import './App.styles.css';

import AppRoutes from '../AppRoutes';
import Nav from '../Nav';

import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function App() {
   const [displayMobile, setDisplayMobile] = useState(window.innerWidth <= 550);

   useEffect(() => {
      const handleResize = () => {
         setDisplayMobile(window.innerWidth <= 550);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <BrowserRouter>
         <div className="app">
            {!displayMobile && <Nav />}
            <AppRoutes stacked={displayMobile} />
         </div>
      </BrowserRouter>
   );
}
