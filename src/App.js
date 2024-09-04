import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [ mode, setMode] = useState('light');
  const [ alert, setAlert] = useState(null);

  const toggleMode = ()=> {
     if(mode === 'red'){
      setMode('red');
      document.body.style.backgroundColor = 'red';
      showAlert("Red Mode Enabled succeessfully!","success")

  }
  else if(mode === 'light'){
         setMode('dark');
         document.body.style.backgroundColor = '#042743'; 
         showAlert("Dark Mode Enabled succeessfully!","success")
      }  
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode Enabled succeessfully!","success")

    }
}

  const showAlert = (message, type) =>{
    setAlert({
      msg :  message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container'>
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
