import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/index.jsx';
import Sobre from './pages/Sobre/index.jsx';
import Contato from "./pages/Contato/index.jsx";
import Header from "./components/Header/index.jsx";
import Erro from "./pages/Erro/index.jsx";
import Produto from "./pages/Produto/index.jsx";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/sobre" element={ <Sobre />}/>
                <Route path="/contato" element={ <Contato />}/>
                <Route path="/produto/:id" element={ <Produto/> }/>

                <Route path="*" element={ <Erro/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
