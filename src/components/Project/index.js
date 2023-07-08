import './Project.styles.css';

import TechnologyText from '../../components/TechnologyText';

export default function Project(props) {
   return (
      <div className="project">
         <button onClick={props.onClick} className='projectTitle'>{props.title}</button>
         <div>
            {props.html && <TechnologyText content="HTML" />}
            {props.css && <TechnologyText content="CSS" />}
            {props.javascript && <TechnologyText content="JAVASCRIPT" />}
            {props.react && <TechnologyText content="REACT" />}
         </div>
         <img src={props.src} alt={`${props.title} Homepage`}/>
         <span className='subtitle'>{props.subtitle}</span>
      </div>
   );
}
