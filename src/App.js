import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alerts from './components/Alerts';
import Features from './components/Features';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enable", "success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#1a1b1c';
      showAlert("Dark Mode Has Been Enable", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container">
          <Routes>
            <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
            <Route path="/about" element={<About mode={mode} showAlert={showAlert}/>}>
            </Route>
            <Route path="/features" element={<Features mode={mode} showAlert={showAlert}/>}>
            </Route>
            <Route path="*" element={<Textform heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
      {/* <Navbar title="TextUtils" aboutText="About" />
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
      {/* <Alerts alert={alert} /> */}
      {/* <div className="container my-3"> */}
      {/* <Textform showAlert={showAlert} heading="Enter Your Text To Analyze" mode={mode} /> */}
       {/* </About> */}
       {/* </div> */}
    </>
  );
}

export default App;
