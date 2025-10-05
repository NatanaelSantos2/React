
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem vindo ao vim na pagina home</h1>
      <span>Sujeito programador</span> <br />
      <Link to="/sobre">Sobre</Link><br />
      <Link to="/contato">Contato</Link>
      <hr />
      <Link>Produto</Link>
    </div>
  )
}

export default Home
