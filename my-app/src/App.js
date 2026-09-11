import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';


function App() {
  const[mode, setMode] = useState("light") ;
  const[alert , setAlert] = useState(null);
    function showAlert (message, types) {
      setAlert ({
        message: message,
        types: types
      })
      setTimeout(()=>{
        setAlert(null);
      },2500)
    }


  function toggleModeA () {
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
      showAlert("Dark mode A has been enabled","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      let heading = document.querySelector(".h1");
      heading.style.color = "#000000";
      let foot = document.querySelector("#foot");
      foot.style.color = "#000000";
      let box = document.querySelector("#mybox");
      box.style.color = "#000000";
      box.style.backgroundColor = "#e2d3d3ce";
    }
  }

  function toggleModeB () {
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#26413c"
      let heading = document.querySelector(".h1");
      heading.style.color = "#f8f9fa";
      let foot = document.querySelector("#foot");
      foot.style.color = "#f8f9fa";
      let box = document.querySelector("#mybox");
      box.style.color = "#fffefe";
      box.style.backgroundColor = "#1A1D1A";
      showAlert("Dark mode B has been enabled","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      let heading = document.querySelector(".h1");
      heading.style.color = "#000000";
      let foot = document.querySelector("#foot");
      foot.style.color = "#000000";
      let box = document.querySelector("#mybox");
      box.style.color = "#000000";
      box.style.backgroundColor = "#e2d3d3ce";
    }
  }

   function toggleModeC() {
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#720026"
      let heading = document.querySelector(".h1");
      heading.style.color = "#f8f9fa";
      let foot = document.querySelector("#foot");
      foot.style.color = "#f8f9fa";
      let box = document.querySelector("#mybox");
      box.style.color = "#000000";
      box.style.backgroundColor = "#ffc2b4";
      showAlert("Dark mode C has been enabled","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      let heading = document.querySelector(".h1");
      heading.style.color = "#000000";
      let foot = document.querySelector("#foot");
      foot.style.color = "#000000";
      let box = document.querySelector("#mybox");
      box.style.color = "#000000";
      box.style.backgroundColor = "#e2d3d3ce";
    }
  }



  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleModeA={toggleModeA} toggleModeB={toggleModeB} toggleModeC={toggleModeC}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading="Enter text to analyze" showAlert={showAlert}/>
      {/* <About/> */}
    </div>
    </>
  );
}


export default App;
