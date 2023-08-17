import './App.css';

import Home from './components/Home';
import Collections from './components/Collections';
import Men from './components/Men';
import Women from './components/Women';
import About from './components/About';
import Contact from './components/Contact';

import Navbar from './components/Navbar';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export const LogInContext = createContext();



function App() {

const [LoggedIn, setLoggedIn] = useState()

  return (

    <LogInContext.Provider value={LoggedIn}>
        <BrowserRouter>
           <div className="App">
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='collections' element={<Collections />}/>
                <Route path='men' element={<Men />}/>
                <Route path='women' element={<Women />}/>
                <Route path='about' element={<About />}/>
                <Route path='contact' element={<Contact />}/>
              </Routes>      
           </div>
        </BrowserRouter>
    </LogInContext.Provider>
  );
}

export default App;
