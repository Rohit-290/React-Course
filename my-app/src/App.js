import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


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

const [myStyle, setNewStyle] = useState({
        color: "black",
        backgroundColor: "white",
        border: "3px solid black"    
      })
       
        function changeStyle (){
        setNewStyle({
        color: "white",
        backgroundColor: "#096e9c",
        border: "3px solid white"    
        })
      }


     
  function toggleMode () {
    if(mode==="light"){
      setMode("dark");
      changeStyle();
      showAlert("Dark mode has been enabled","success");
      document.body.style.backgroundColor  = "#300e4e";
      document.body.style.color  = "#fbfcfc";
      let fo = document.querySelector("#mybox");
      if(fo){
      fo.style.backgroundColor = "#9cd6d6";
      }
      let ne = document.querySelector("#gamma");
      ne.style.color = "white";
      let et = document.querySelector("#eta");
      et.style.color = "white";
    }else if(mode==="dark"){
      setMode("light");
      setNewStyle({color: "black",
        backgroundColor: "white",
        border: "3px solid black"});
      document.body.style.backgroundColor  = "#fcfeff";
      document.body.style.color  = "#0a0b0b";
      let fo = document.querySelector("#mybox");
      if(fo){
      fo.style.backgroundColor = "#e7d3e6";
      }
      let ne = document.querySelector("#gamma");
      ne.style.color = "black";
      let et = document.querySelector("#eta");
      et.style.color = "black";
    }
  }

return (
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter text to analyze" showAlert={showAlert} />} />
        <Route exact path="/about" element={<About myStyle={myStyle}/>} />
      </Routes>
    </div>
  </Router>
)
}


export default App;
