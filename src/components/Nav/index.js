import "./Nav.styles.css"

import { Navigate } from "react-router-dom"

export default function Nav(){
   return(
      <nav className="nav">
         <button>Sobre</button>
         <button>Projetos</button>
         <button>Experiência</button>
         <button>Contato</button>
      </nav>
   )
}