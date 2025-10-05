import { Link } from "react-router-dom"

function Erro(){
    return(
        <div>
            <h2>Ops parece que ess apagina não existe</h2>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Erro