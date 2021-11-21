import * as React from "react";
import { Container } from '@material-ui/core'

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";

export default App;

function App() {

    return (
        <BrowserRouter>
            <Container maxWidth={"lg"}>
                <Navbar/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/auth'} element={<Auth/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}
