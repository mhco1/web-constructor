import React from 'react'
import { useState , useEffect } from 'react'
import * as bootstrap from 'bootstrap'

import '/src/css/normalize.css';

import wc_loadScss from '/src/tools/load-scss.jsx'
//import Tree from '/src/components/tree/comp.jsx'
import Box from '/src/components/box/comp.jsx'

var laterLoad = [
    Box,
];

function App() {
    var [darkmode, setDarkmode] = useState(true);

    wc_loadScss(darkmode);
    // onClick={() => setDarkmode(!darkmode)}
    webconstructor.classList.add('h-100');

    useEffect(() => {
        laterLoad.forEach(el => el());
    }, [])
    

    return (
        <div className="d-flex fcol-lol frow-lol h-100" >
            <div>
                <div style={{width:'300px',height:'100px'}} className="c-box-b-warning"></div>
                <div style={{width:'300px',height:'100px'}} className="c-box-b-primary"></div>
                <div style={{width:'300px',height:'100px'}} className="c-box"></div>
                <div style={{width:'300px',height:'100px'}} className="c-box-b-secondary"></div>
                <button className="btn btn-sm btn-dark" onClick={() => setDarkmode(!darkmode)}>Change Mode</button>
            </div>
        </div>
    )
}

export default App