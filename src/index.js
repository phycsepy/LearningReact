//import react -> for component and reactdom -> manuplating dom 
import React from 'react';
import ReactDom from 'react-dom';

//get refrence to div for id root present index.html
const el = document.getElementById("root");
//tell react to take control of element 
const root = ReactDom.createRoot(el)
// create a react component
function App(){
    const message = "Enter ur age";
return (<input 
    type="number"
    min={0}
    max={10}
    list={[10,2,3]}
    style={{color:"blue",border:"3px solid red",backgroundColor:"blue"}}
    alt={message}/>);
return(<input placeholder='hi'/>);
}
//show the component on screen
root.render(<App/>)