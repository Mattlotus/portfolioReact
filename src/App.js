import axios from 'axios';
import './App.css';
import { useEffect,useState } from 'react';
import Root from './Pages/Root';
import Desktop from './Pages/Main';
import { Link, useFetcher } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';
import { AppContext } from './context/app_context';
import { useContext } from 'react';
import Squares from './components/Squares'
import Main from './Pages/Main';


function App() {
  return (
    <div className="App"> lets gooo
      {/* <Root/> */}
      <Routes>

        <Route path='/' element={<Root/>}/>
        <Route path='/Main' element={<Main/>}/>
      </Routes>
      
      

      
    </div>
  );
}

export default App;
