import { useParams } from "react-router-dom"

function Produto(){
    const {id} = useParams()

    return(
        <div>
            <h1>Produtos</h1>
            <span>Meu produto: {id}</span>
        </div>
    )
}

export default Produto