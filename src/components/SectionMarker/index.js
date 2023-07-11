import './SectionMarker.styles.css';

export default function SectionMarker(props) {
   return (
      <div className="sectionMarker">
         <span>{props.title}</span>
      </div>
   );
}
