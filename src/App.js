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
import Multiverse from './Pages/Multiverse';
import Spacebattle from './Pages/Spacebattle';



function App() {

  const [kanyeQuote, setkanyeQuote]=useState({})
  const [count, setCount] =useState(0)

  const getData = async () => {

    const response = await axios.get ('https://api.kanye.rest/')
                  .then(response => console.log(response.data))
                  // .then (freeGames => setFreeGames())
                  .catch(err => console.log(err))

                  console.log(response)
  }
  return (
    <div className="App"> 
      {/* <Root/> */}
      <Routes>

        <Route path='/' element={<Root/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='Exp' element={<Exp/>}/>
        <Route path='Resume' element = {<Resume/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='/Multiverse' element ={<Multiverse/>}/>
        <Route path='/Spacebattle' element={<Spacebattle/>}/>
      </Routes>
      <div className="App">
      <button onClick={()=>setCount(count +1)}>Moitivation</button>
      <p>{kanyeQuote?.response}Quote:</p>
      <p>{kanyeQuote?.constructor}</p>

      
    </div>
    </div>
  );
}

export default App;
