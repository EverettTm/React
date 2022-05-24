import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Main from "./pages/Main"
import VerSenha from "./pages/VerSenha"


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/password" element={<VerSenha/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;