
import { Link } from "react-router-dom";

function Erro(){
    return (

        <div>
            <h2>Ops parece que essa pagina nao existe! </h2>

            <span>Encontramos essas paginas aqui:</span><br/>
            <Link to = "/">Pagina Home</Link><br/><br/>
            <Link to = "/sobre">Sobre</Link><br/><br/>
            <Link to = "/contato">Contato</Link>
        </div>
    )
}

export default Erro;