import './TechnologyIcon.styles.css';

import { useState, useEffect } from 'react';

export default function TechnologyIcon(props) {
   const [subtitle, setSubtitle] = useState(false);

   const [displayMobile, setDisplayMobile] = useState(
      window.innerWidth <= 1000
   );

   const handleMouseEnter = () => {
      setSubtitle(true);
   };

   const handleMouseLeave = () => {
      setSubtitle(false);
   };

   useEffect(() => {
      const handleResize = () => {
         setDisplayMobile(window.innerWidth <= 1080);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   if (!displayMobile) {
      return (
         <div
            className="technologyIcon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         >
            <img src={props.src} alt={props.alt} />
            {subtitle && <span>{props.subtitle}</span>}
         </div>
      );
   }

   return (
      <div
         className="technologyIcon"
      >
         <img src={props.src} alt={props.alt} />
         <span>{props.subtitle}</span>
      </div>
   );
}
