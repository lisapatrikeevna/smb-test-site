import React from "react";
import './App.css';
import araba from "./image/araba.png";
import consalting from "./image/consalting.png";
import rosshina from "./image/rosshina.png";
import skv from "./image/skv.png";
import {Header} from "./component/header/Header";
import {Navbar} from "./component/navbar/navbar";
import {FormBlock} from "./component/formBlock/formBlock ";
import {RouteMainBlock} from "./component/route/RouteMainBlock";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className='offer'>
                {/*<FormBlock/>*/}
                <RouteMainBlock/>
            </div>
        </div>
    )
}

export default App;

