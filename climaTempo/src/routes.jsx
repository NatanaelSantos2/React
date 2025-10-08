import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Filme from "./pages/Filme";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Footer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme" element={<Filme/>}/>

                <Route path="*" element={<Erro />}/>
            </Routes>
            <Header />
        </BrowserRouter>
    )
}

export default RoutesApp