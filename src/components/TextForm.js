import React, {useState} from 'react'

export default function TextForm(props) {
    const handeleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted in to uppercase", "success");
    }

    const handeleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted in to lowercase", "success");
  }

  const handeleClearClick = () =>{
    let newText = "";
    setText(newText);
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

    const handleOnChange = (event) =>{
      // console.log("On change");
      setText(event.target.value);
  }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        
        </div>
        <button className="btn btn-primary mx-1" onClick={handeleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handeleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handeleClearClick}>Clear Text</button>

        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3">
      <h2>Your text summery</h2>
      <p >{((text.trim().split(" ")).filter(function (element) {
                    return element != "";
                })).length} words and {text.length} characters </p>
      {/* <p>{text.split(" ").length} words, {text.length} characters</p> */}
      <p>{0.008 * text.split(" ").length} words, {text.length} Minuts Read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text: "Enter something text box above to preview it here"}</p>
    </div>
    </>
  )
}
