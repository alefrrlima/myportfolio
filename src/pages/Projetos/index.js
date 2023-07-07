import './Projetos.styles.css';

import Section from '../../components/Section';
import Project from '../../components/Project'

export default function Projetos() {
   return (
      <Section>
         <div className="projetos">
            <Project title='BudgetBuddy' html='true' css='true' javascript='true' react='true'/>
         </div>
      </Section>
   );
}
