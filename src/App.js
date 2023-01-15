import React, { useState } from "react";
import "./App.css";

function App() {
  const [afficher, setAfficher] = useState("")


  const Display = (event) => {
    setAfficher(afficher + event.target.value)
  }
  
  const calculat = () =>{
    setAfficher(eval(afficher))
  }

  const del = () =>{
    setAfficher(afficher.slice(0, -1))
  }




  const show = (
    <div className="flex">
      <div className="thecalc">     
      <input type="text" name="input" size="16" value={afficher} id="answer"/>
      <input type="button" id="clear" name="clear" value=" C " onClick={event=>{setAfficher("")}}/>
        <input type="button" name="one" value="1" onClick={Display}/>
        <input type="button" name="two" value="2" onClick={Display}/>
        <input type="button" name="three" value="3" onClick={Display}/>
        <input type="button" className="operator" name="plus" value="+" onClick={Display}/>
        <br/>
        <input type="button" name="four" value="4" onClick={Display}/>
        <input type="button" name="five" value="5" onClick={Display}/>
        <input type="button" name="six" value="6" onClick={Display}/>
        <input type="button" className="operator" name="minus" value="-" onClick={Display}/>
        <br/>
        <input type="button" name="seven" value="7" onClick={Display}/>
        <input type="button" name="eight" value="8" onClick={Display}/>
        <input type="button" name="nine" value="9" onClick={Display}/> 
        <input type="button" className="operator" name="times" value="*" onClick={Display}/>
        <br/>
        
        <input type="button" id="del" name="del" value=" <- " onClick={del}/>
        <input type="button" name="zero" value="0" onClick={Display}/>
        <input type="button" name="doit" value=" = " onClick={calculat}/>
        <input type="button" className="operator" name="div" value="/" onClick={Display}/>
        <br/>
      </div>
    </div>
  )

  return (
    <div>
      {show}
    </div>
    
  );
}

export default App;
