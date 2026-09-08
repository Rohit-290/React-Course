import PropTypes from 'prop-types'
import React, {useState} from 'react'


export default function TextForm(props) {
  const [text,setText] = useState("Enter text here")
  function handleOnClick () {
  let newText = text.toUpperCase();
  setText(newText);
  }
  function handleLoClick () {
  let newText = text.toLowerCase();
  setText(newText);
  }
  function handleOnChange (event) {
  setText(event.target.value);
  }
  return (
  <>
  <div>
  <div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to Uppercase</button>
  <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
  </div>
  <div calssName="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length}</p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
    <h2 class="my-3">Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}


TextForm.propTypes = {
  heading: PropTypes.string
}

