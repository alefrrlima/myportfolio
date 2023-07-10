import './SessionMarker.styles.css';

export default function SessionMarker(props) {
   return (
      <div className="sessionMarker">
         <div />
         <span>{props.title}</span>
         <div />
      </div>
   );
}
