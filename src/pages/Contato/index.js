import './Contato.styles.css';

import profilepic from '../../images/profilepic.png';
import email from '../../images/email-icon.svg';
import linkedin from '../../images/linkedin-icon.svg';
import github from '../../images/github-icon.svg';

import Section from '../../components/Section';
import ContactLink from '../../components/ContactLink';
import SectionMarker from '../../components/SectionMarker';

export default function Contato() {
   const sendMail = () => {
      window.open('mailto:alexandrelima.send@gmail.com');
   };

   const toLinkedIn = () => {
      window.open('https://www.linkedin.com/in/alefrrlima/', '-blank');
   };

   const toGitHub = () => {
      window.open('https://github.com/alefrrlima', '-blank');
   };

   return (
      <Section>
         <SectionMarker title="CONTATO" />
         <div className="contato">
            <img src={profilepic} alt="Minha foto de perfil" />
            <div className="linksContainer">
               <ContactLink
                  onClick={sendMail}
                  src={email}
                  title="Email"
                  complement="alexandrelima.send@gmail.com"
                  alt="Email"
               />
               <ContactLink
                  onClick={toLinkedIn}
                  src={linkedin}
                  title="LinkedIn"
                  complement="/alefrrlima"
                  alt="LinkedIn"
               />
               <ContactLink
                  onClick={toGitHub}
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
