//import react -> for component and reactdom -> manuplating dom 
import React from 'react';
import ReactDom from 'react-dom/client';
import MyApp from './App'

//get refrence to div for id root present index.html
const el = document.getElementById("root");
//tell react to take control of element 
const root = ReactDom.createRoot(el)


//show the component on screen
root.render(<MyApp/>)