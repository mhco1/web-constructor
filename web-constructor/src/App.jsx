import React from 'react'
import { useState } from 'react'
import * as bootstrap from 'bootstrap'

import '/src/css/normalize.css';

import wc_loadScss from '/src/tools/load-scss.jsx'
//import Tree from '/src/components/tree/comp.jsx'
import Box from '/src/components/box/comp.jsx'

function App() {
    var [darkmode, setDarkmode] = React.useState(true);

    wc_loadScss(darkmode);
    // onClick={() => setDarkmode(!darkmode)}
    webconstructor.classList.add('h-100');

    return (
        <div className="d-flex fcol-lol frow-lol h-100" >
            <Box></Box>
        </div>
    )
}

export default App