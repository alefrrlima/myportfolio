import './Sobre.styles.css';
import Section from '../../components/Section';
import TechnologyIcon from '../../components/TechnologyIcon';

import html from '../../images/html-icon.svg';
import css from '../../images/css-icon.svg';
import javascript from '../../images/javascript-icon.svg';
import react from '../../images/react-icon.svg';
import figma from '../../images/figma-icon.svg';
import github from '../../images/github-icon.svg';

export default function Sobre() {
   const showResume = () => {
      const resume = '/resume.pdf';
      window.open(resume, '-blank');
   };

   return (
      <Section>
         <div className="sobre">
            <div>
               <h4>Olá, me chamo</h4>
               <span>Alexandre Ferreira Lima</span>
               <span>Eu idealizo e desenvolvo aplicações para a web</span>
            </div>
            <div>
               <h1>Desenvolvedor Front-End</h1>
               <h2>Florianópolis - SC</h2>
               <h2>24 anos</h2>
            </div>
            <div>
               <h4>Tecnologias utilizadas:</h4>
               <div>
                  <TechnologyIcon src={html} alt="html" subtitle="HTML" />
                  <TechnologyIcon src={css} alt="css" subtitle="CSS" />
                  <TechnologyIcon
                     src={javascript}
                     alt="javascript"
                     subtitle="JavaScript"
                  />
                  <TechnologyIcon src={react} alt="react" subtitle="React" />
                  <TechnologyIcon src={figma} alt="figma" subtitle="Figma" />
                  <TechnologyIcon src={github} alt="github" subtitle="GitHub" />
               </div>
            </div>
            <button onClick={showResume}>Meu Currículo</button>
         </div>
      </Section>
   );
}
