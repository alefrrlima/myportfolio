import './Experiencia.styles.css';
import Section from '../../components/Section';
import Experience from '../../components/Experience';
import SectionMarker from '../../components/SectionMarker';

export default function Experiencia() {
   return (
      <Section>
         <SectionMarker title="EXPERIÊNCIA" />
         <div className="experiencia">
            <h4>Profissional</h4>
            <div className="experiences">
               <Experience
                  title="Estagiário em Administração"
                  subtitle="Empresas"
                  date="2017 - 2019"
                  paragraph="Suporte, Organização, Análise de Dados, Comunicação e Aprendizado."
               />
               <Experience
                  title="Analista de Mídias Sociais"
                  subtitle="Dr. Online - Equipamentos"
                  date="2020 - 2022"
                  paragraph="Planejamento Estratégico, Monitoramento, Análise de Dados, Produção de Conteúdo, Gerenciamento, Interação e Engajamento."
               />
            </div>
            <h4>Acadêmico</h4>
            <div className="experiences">
               <Experience
                  title="Administração"
                  subtitle="Universidade Estadual do Paraná"
                  date="2017 - 2020"
               />
               <Experience
                  title="Análise e Des. de Sistemas"
                  subtitle="Centro Universitário Integrado"
                  date="2021 - Trancado"
               />
            </div>
         </div>
      </Section>
   );
}
