import { useEffect, useState } from "react";

function Filme() {
    const [clima, setClima] = useState();

    useEffect(() => {
        function loadAPI() {
            let url = "https://api.disneyapi.dev/character"

            fetch(url)
                .then((res) => res.json())
                .then((data) => { setClima(data) });
        }
        loadAPI()
    }, [])



    if (!clima) return <p>Carregando...</p>;
    return (

        <div>
            <ul>
                {clima.data.map((personagem) => (
                    <li key={personagem._id}>
                        {personagem.films.length > 0 ? (
                            <h1>Nome do Filme: {personagem.films}</h1>
                        ) : (
                            <h1>Nome do Filme: Sem filme</h1>
                        )}
                        <p><strong>videoGames:</strong> {personagem.videoGames}</p>
                        <p><strong>Nome:</strong> {personagem.name}</p>
                        <img src={personagem.imageUrl} alt={personagem.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Filme