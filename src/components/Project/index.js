import './Project.styles.css';

import TechnologyText from '../../components/TechnologyText';

export default function Project(props) {
   return (
      <div className="project">
         <h1>{props.title}</h1>
         <div className="technologiesArea">
            {props.html && <TechnologyText content="HTML" />}
            {props.css && <TechnologyText content="CSS" />}
            {props.javascript && <TechnologyText content="JAVASCRIPT" />}
            {props.react && <TechnologyText content="REACT" />}
         </div>
         <img src={props.src} alt={`${props.title} Homepage`}/>
      </div>
   );
}
