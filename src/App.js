import React from "react";


function App(){
    const message="hi";
    return  <input
    type="number"
    min={0}
    max={10}
    list={[10,2,3]}
    style={{color:"black",border:"3px solid red",backgroundColor:"yellow"}}
    alt={message}/>
   ;


}
export default App;