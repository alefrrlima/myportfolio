import './Projetos.styles.css';

import Section from '../../components/Section';
import Project from '../../components/Project';
import SessionMarker from '../../components/SessionMarker';

import budgetbuddy from '../../images/budgetbuddy.png';
import idgen from '../../images/idgen.png';
import firstportfolio from '../../images/firstportfolio.png';
import linkspage from '../../images/linkspage.png';
import restaurantmenu from '../../images/restaurantmenu.png';

export default function Projetos() {
   const toBudgetBuddy = () => {
      window.open('https://alefrrlima.github.io/budgetbuddy/', '-blank');
   };
   const toLinksPage = () => {
      window.open('https://alefrrlima.github.io/links-page/', '-blank');
   };
   const toIdGen = () => {
      window.open('https://alefrrlima.github.io/id-gen/', '-blank');
   };
   const toFirstPortfolio = () => {
      window.open('https://alefrrlima.github.io/personal-portfolio/', '-blank');
   };
   const toRestaurantMenu = () => {
      window.open(
         'https://alefrrlima.github.io/limas-restaurant-menu/',
         '-blank'
      );
   };

   return (
      <Section>
         <SessionMarker title="PROJETOS" />

         <div className="projetos">
            <Project
               onClick={toBudgetBuddy}
               title="BudgetBuddy"
               html="true"
               css="true"
               javascript="true"
               react="true"
               src={budgetbuddy}
               subtitle="Meu quinto projeto. Um gerenciador de orçamentos com sistema de cadastro e login, com localStorage."
            />
            <Project
               onClick={toLinksPage}
               title="Página de Links"
               html="true"
               css="true"
               src={linkspage}
               subtitle="Meu quarto projeto. Uma página de links para minhas redes e projetos."
            />
            <Project
               onClick={toIdGen}
               title="ID Gen"
               html="true"
               css="true"
               javascript="true"
               src={idgen}
               subtitle="Meu terceiro projeto. Um gerador de carteirinhas personalizadas."
            />
            <Project
               onClick={toFirstPortfolio}
               title="Primeiro Portfólio"
               html="true"
               css="true"
               src={firstportfolio}
               subtitle="Meu segundo projeto. A primeira versão do meu portfólio."
            />
            <Project
               onClick={toRestaurantMenu}
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
