//import react -> for component and reactdom -> manuplating dom 
import React from 'react';
import ReactDom from 'react-dom';

//get refrence to div for id root present index.html
const el = document.getElementById("root");
//tell react to take control of element 
const root = ReactDom.createRoot(el)
// create a react component
function App(){
return <h1>Hi creating react app from start </h1>;
}
//show the component on screen
root.render(<App/>)