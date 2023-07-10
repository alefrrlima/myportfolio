import './ScrollTopButton.styles.css';

import arrowIcon from '../../images/arrow-icon.svg';
import { useEffect, useState } from 'react';

export default function ScrollTopButton() {
   const [showButton, setShowButton] = useState(false);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         setShowButton(scrollY > 0);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <button className="scrollTopButton" onClick={scrollTop}>
         <img src={arrowIcon} alt="Para o topo" />
      </button>
   );
}
