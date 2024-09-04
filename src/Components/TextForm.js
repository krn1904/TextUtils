import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");
  
  const handleUpclick = ()=>{
    // console.log("button clicked");
    let NewText = text.toUpperCase();
    setText(NewText);
    props.showAlert("converted to Uppercase!","success");
  }
  
  const handleloclick = ()=>{
    // console.log("button clicked");
    let NewText = text.toLowerCase();
    setText(NewText);
    props.showAlert("converted to Lowercase!","success");

  }
  
  const handleClear = ()=>{
    // console.log("button clicked");
    let NewText = "";
    setText(NewText);
    props.showAlert("Text Cleared!","success");

  }

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  return (
    <>
    <div className='mt-5'>
        <h1  style ={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control my-2" value = {text} onChange={handleOnChange} style ={{backgroundColor: props.mode==='light'?'white':'#042743', color: props.mode === 'light'?'black':'white'}} id="myBox" rows="7" ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpclick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleloclick} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={handleClear} >Clear Text</button>
      </div>
    <div className="container my-3"  style ={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Summary of Text</h2>
      <p> <b>{text.split(' ').length}</b> Words and <b>{text.length}</b> Character</p>
      <p><b>{0.008 * text.split(' ').length } </b>Minutes to read Text </p>
      <h2>Preview:</h2>
      <p>{text}</p>
    </div>
    
    </>
  )
}
