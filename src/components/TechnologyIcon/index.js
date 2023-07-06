import './TechnologyIcon.styles.css';

import { useState } from 'react';

export default function TechnologyIcon(props) {
   const [subtitle, setSubtitle] = useState(false);

   const handleMouseEnter = () => {
      setSubtitle(true);
   };

   const handleMouseLeave = () => {
      setSubtitle(false);
   };
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
