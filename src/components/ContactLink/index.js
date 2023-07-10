import './ContactLink.styles.css';

export default function ContactLink(props) {
   return (
      <div className='contactLink'>
         <img src={props.src} alt={props.alt} />
         <div>
            <button onClick={props.onClick}>{props.title}</button>
            <span>{props.complement}</span>
         </div>
      </div>
   );
}
