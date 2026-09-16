import PropTypes from 'prop-types'
import React, {useState} from 'react'


export default function TextForm(props) {
  const [text,setText] = useState("")
  function handleOnClick () {
  let newText = text.toUpperCase();
  setText(newText);
  setTimeout(() => {})                                                         
  props.showAlert("Text has been converted to Uppercase","success");
  }
  function handleLoClick () {
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Text has been converted to Lowercase","success");
  }
  function clearOnClick () {
  let newText = "";
  setText(newText);
  props.showAlert("Text has been cleared","success");
  }
  function handleOnChange (event) {
  setText(event.target.value);
  }
  function handleExtraSpaces () {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Removed Extra Spaces ","success");
  }
  function check (para){  
  let t = para.trim().split(" ");
  if(t==0){
  return t.length-1;
  }
  return t.length ;
  }
  function time (para){  
  let t = para.trim().split(" ");
  if(t==0){
  return 0;
  }
  return 0.008*para.split(" ").length ;
  }


  return (
  <>
  <div>
  <div className="mb-3">
  <h1 className="h1">{props.heading}</h1>
  <textarea className="form-control" value={text} style={{backgroundColor:"#e7d3e6"}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleOnClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary my-1 mx-1"  onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearOnClick}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
  </div>
  <div calssName="container my-3" id="foot">
    <h2>Your text summary</h2>
    <p>{check(text)} words and {text.length}</p>
    <p>{time(text)} minutes to read</p>
    <h2 class="my-3">Preview</h2>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
  </div>
  </>
  )
}


TextForm.propTypes = {
  heading: PropTypes.string
}

