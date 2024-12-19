//minha pagina de contato criado dentro d pages
import { Link } from "react-router-dom";
function Contato(){

    return(
        <div>
          <h1>Pagina Contato</h1>sub titulos 
          <span>Contato da empresa (dd) xxxx-xxxx</span> <br/><br/>
          <Link to = "/"> Home</Link><br/><br/>
          <Link to = "/sobre">Sobre</Link><br/><br/>

        </div>

    )

}

export default Contato;