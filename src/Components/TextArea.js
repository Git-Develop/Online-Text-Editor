import { useState } from "react";

export default function TextArea(props) {

const UpperCase= ()=>{
    const newText=text.toUpperCase();
    setText(newText);
}
    
const LowerCase= ()=>{
    const newText=text.toLowerCase();
    setText(newText);
}
       
 const changeOnTyping= (event)=>{
    setText(event.target.value);
 }

  const [text, setText]=useState('');
  return (
    <>
    <div className="mb-3 mx-4 " >
      <label htmlFor="exampleFormControlTextarea1" className="form-label">  
      </label>
      <textarea className="form-control border border-2 border-dark" value={text} id="exampleFormControlTextarea1" rows="16" onChange={changeOnTyping} >
      </textarea>
    </div>
    <div className="btn-group mx-4" role="group" aria-label="Basic mixed styles example">
    <button type="button" className="btn btn-danger" onClick={UpperCase}>
      {props.left}
   </button>
   
    <button type="button" className="btn btn-success" onClick={LowerCase}>
      {props.right}
    </button>
  </div>
  </>
  );
}
