import React from 'react';
import './App.css';
import {Nav} from "../components/nav/Nav";
import {Header} from "../components/header/Header";
import {Catalog} from "../components/catalog/Catalog";
import {Main} from "../components/main/Main";
import {About} from "../components/about/About";
import {Sale} from "../components/sale/Sale";
import {Footer} from "../components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <Catalog/>
            <Main/>
            <About/>
            <Sale/>
            <Footer/>
        </div>
    );
}

export default App;
