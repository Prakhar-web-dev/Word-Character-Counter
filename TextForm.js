import React, { useState } from "react";

// const [text,setText] = usestate('Enter Text here');

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into Upper case","success")
    }
    const handleLoClick = () => {
        // console.log("UpperCase was Clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAler("converted into Lower Case","success")
    }
    const handleclearClick = (event) => {
      let newText = " "
      setText(newText);
    }
    const handleOnchange = (event) => {
        // console.log("OnChange was Clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //   setText("new Text");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
            <h3>{props.heading}</h3>
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnchange}
             style={{backgroundColor:props.mode==='dark'?'#6c757d':'white',color:props.mode==='dark'?'white':'black'}} 
             ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary btn-sm  mx-1 my-1" onClick={handleUpClick} >Convert to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-dark btn-sm  mx-1 my-1" onClick={handleLoClick} >Convert to Lower Case</button>
            <button disabled={text.length===0} className="btn btn-danger btn-sm  mx-1 my-1" onClick={handleclearClick} >Clear All</button>
        
        </div>
        <div className="className" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <p>{0.0008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h3>Preview</h3>
            <h5>{text.lenght>0?text:"Nothing to preview!!"}</h5>
        </div>
        </>
    );
}
