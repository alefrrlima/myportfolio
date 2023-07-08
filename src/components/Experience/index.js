import './Experience.styles.css';

export default function Experience(props) {
   return (
      <div className='experience'>
         <h1>{props.title}</h1>
         <span>{props.subtitle}</span>
         <span>{props.date}</span>
         {props.paragraph && <p>{props.paragraph}</p>}
      </div>
   );
}
