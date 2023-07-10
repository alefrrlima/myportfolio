import './ContactLink.styles.css';

export default function ContactLink(props) {
   return (
      <div>
         <img src={props.src} alt={props.alt} />
         <div>
            <button>{props.title}</button>
            <span>{props.complement}</span>
         </div>
      </div>
   );
}
