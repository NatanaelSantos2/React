import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../../services/api";
import "./filme-info.css"
import { toast } from "react-toastify";

function Filmes(){
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();

    useEffect(()=>{
        async function loadFilmes() {
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "c78cc8d0686b9e5a245dd6cb99798d35",
                    language: "pt-BR",                    
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigation("/", { replace: true })
                return;
            })
        }

        loadFilmes();

        return () =>{
            console.log("Desconectado!")
        }           

    },[navigation, id])

    function salvarfilme(){
        const minhaLista = localStorage.getItem("@primeflix");

        let filmeSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmeSalvos.some((filmeSalvo)=>filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme ja esta na sua lista!")
            return
        }

        filmeSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmeSalvos));
        toast.success("Filmes salvo com sucesso!")
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando filmes...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} /10</strong>

            <div className="area-buttons">
                <button onClick={salvarfilme}>Salvar</button>
                <button>
                    <a target="_blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title}`}>Treiler</a>
                </button>
            </div>
        </div>
    )
}

export default Filmes