import './Contato.styles.css';

import profilepic from '../../images/profilepic.png';
import email from '../../images/email-icon.svg';
import linkedin from '../../images/linkedin-icon.svg';
import github from '../../images/github-icon.svg';

import Section from '../../components/Section';
import ContactLink from '../../components/ContactLink';

export default function Contato() {
   return (
      <Section>
         <div className="contato">
            <img src={profilepic} alt="Minha foto de perfil" />
            <div>
               <ContactLink
                  src={email}
                  title="Email"
                  complement="alexandrelima.send@gmail.com"
                  alt="Email"
               />
               <ContactLink
                  src={linkedin}
                  title="LinkedIn"
                  complement="/alefrrlima"
                  alt="LinkedIn"
               />
               <ContactLink
                  src={github}
                  title="GitHub"
                  complement="/alefrrlima"
                  alt="GitHub"
               />
            </div>
         </div>
      </Section>
   );
}
