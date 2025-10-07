import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState('');
  const [tarefa,setTarefa] = useState([
    'Pagar a conta de luz',
    'Estudar React 35'
  ]);

  useEffect(()=>{
    const tarefaStorage = localStorage.getItem('@tarefa');

    if(tarefaStorage){
      setTarefa(JSON.parse(tarefaStorage))
    }

  }, [])

  useEffect(()=>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefa))
  }, []);

  function handleRegister(e){
    e.preventDefault();
    setTarefa([...tarefa, input])
    setInput('')
  }

  return (
    <div>
      <h1>Cadastrando Tarefa</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label>
        <input placeholder="Digite uma tarefa" value={input} onChange={(e) => setInput(e.target.value)}/><br/>

        <button type="submit">Registrar</button>
      </form>

      <ul>
        {tarefa.map( tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );

}

export default App
