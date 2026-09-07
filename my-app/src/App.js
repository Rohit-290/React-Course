import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container" heading="Enter text to analyze"><TextForm/></div>
    </>
  );
}

export default App;
