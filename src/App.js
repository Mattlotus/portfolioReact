import axios from 'axios';
import './App.css';
import { useEffect,useState } from 'react';
import Root from './Pages/Root';
import Desktop from './Pages/Main';
import { Link, useFetcher } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';
import { AppContext } from './context/app_context';
import { useContext } from 'react';
import Squares from './components/Squares';
import Main from './Pages/Main';
import Exp from './Pages/Exp';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App"> 
      {/* <Root/> */}
      <Routes>

        <Route path='/' element={<Root/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='Exp' element={<Exp/>}/>
        <Route path ='Resume' element = {<Resume/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
      
      

      
    </div>
  );
}

export default App;
