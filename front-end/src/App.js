import './App.css';
import Mapbox from './components/mapbox';
import Playerinfo from './components/playerinfo';
import Rulebox from './components/rulebox';
import Title from './components/title';
import {useState} from 'react'


function App() {
  const [ cashBalance, setCashBalance] = useState(0)
  const fetchReq = async() => {
    try {
      const response = await fetch("http://localhost:5001/robbers/1/cash", {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        });
      const data = await response.json();
      console.log(data)
      setCashBalance(data)
      // move data around my React app
    }
    catch (error) {
      console.log(error);
    }
  }
  return (

    <section className="App">
      <Title/>
      <section className='main'>
     <Mapbox/>
     <Rulebox/>
     <Playerinfo cashBalance={cashBalance}/>
     
     </section>
     
    </section>
    
  );
}

export default App;
