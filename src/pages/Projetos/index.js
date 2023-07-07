import './Projetos.styles.css';

import Section from '../../components/Section';
import Project from '../../components/Project';

import budgetbuddy from '../../images/budgetbuddy.png';
import idgen from '../../images/idgen.png';
import firstportfolio from '../../images/firstportfolio.png';
import linkspage from '../../images/linkspage.png';
import restaurantmenu from '../../images/restaurantmenu.png';

export default function Projetos() {
   return (
      <Section>
         <div className="projetos">
            <Project
               title="BudgetBuddy"
               html="true"
               css="true"
               javascript="true"
               react="true"
               src={budgetbuddy}
               subtitle="Meu quinto projeto. Um gerenciador de orçamentos com sistema de cadastro e login, com localStorage."
            />
            <Project
               title="Página de Links"
               html="true"
               css="true"
               src={linkspage}
               subtitle="Meu quarto projeto. Uma página de links para minhas redes e projetos."
            />
            <Project
               title="ID Gen"
               html="true"
               css="true"
               javascript="true"
               src={idgen}
               subtitle="Meu terceiro projeto. Um gerador de carteirinhas personalizadas."
            />
            <Project
               title="Primeiro Portfólio"
               html="true"
               css="true"
               src={firstportfolio}
               subtitle="Meu segundo projeto. A primeira versão do meu portfólio."
            />
            <Project
               title="Restaurante Lima"
               html="true"
               css="true"
               src={restaurantmenu}
               subtitle="Meu primeiro projeto. Um simples cardápio para um restaurante fictício."
            />
         </div>
      </Section>
   );
}
