import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const[mode, setMode] = useState("light") ;
  function toggleMode () {
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#30343f"
      let heading = document.querySelector(".h1");
      heading.style.color = "#f8f9fa";
      let foot = document.querySelector("#foot");
      foot.style.color = "#f8f9fa";
      let box = document.querySelector("#mybox");
      box.style.color = "#000000";
      box.style.backgroundColor = "#e2d3d3ce";
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      let heading = document.querySelector(".h1");
      heading.style.color = "#000000";
      let foot = document.querySelector("#foot");
      foot.style.color = "#000000";
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter text to analyze"/>
      {/* <About/> */}
    </div>
    </>
  );
}


export default App;
