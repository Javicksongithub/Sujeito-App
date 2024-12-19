
import { useParams } from "react-router-dom";//esse cara nos permite pegar qualquer id que digitamos na bara de pesquisa 
function Produto(){
    const {id} = useParams();
    // importo la em cima e chamo aqui o metodo useparams recebendo pelo id(vai ser os posiveis numeros digitados ) que declarei la na minha router.

    return(
    <div>
        <h2>Pagina detalhes do Produto</h2>
        <span>
            Meu produto é :{id}
         </span>
    </div>
    );
}

export default Produto;