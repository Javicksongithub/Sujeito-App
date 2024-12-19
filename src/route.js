import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import HeaderComponent from "./Components/Header";
import Produto from "./pages/Produto";
import Erro from "./pages/Erro";

function RoutesApp(){

    return(
      <BrowserRouter>

        <HeaderComponent/>
      <Routes>
         <Route path="/"element={<Home/>} />
         <Route path="/sobre"element={<Sobre/>} />
         <Route path="/contato"element={<Contato/>} />
         <Route path="/produto/:id"element={<Produto/>}/> 
         <Route path="*" element={<Erro />} />

      </Routes>
      </BrowserRouter>  


    )

}

export default RoutesApp;