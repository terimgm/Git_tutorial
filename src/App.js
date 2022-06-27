import React from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter,
//   Routes,
//   Link,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      showAlert("Light mode has been enabled","success");
    }
   
  }

  return (
  <> 
   
<Navbar title="TextUtils" aboutText="About Us" mode={mode}  toggleMode={toggleMode} />
<Alert alert={alert} /> 
<div className="container my-3">

 {/* <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TextForm />} />
        <Route exact path="About" element={<About />}>

        </Route>
      </Routes>
    </BrowserRouter> */}

<TextForm showAlert={showAlert} heading="Enter the text to analyze Below"/>
          
{/* <About/>  */}

</div>

  </>
  );
}

export default App;
