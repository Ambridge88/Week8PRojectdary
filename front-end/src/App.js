import './App.css';
import Mapbox from './components/mapbox';
import Playerinfo from './components/playerinfo';
import Rulebox from './components/rulebox';
import Title from './components/title';
function App() {
  return (

    <section className="App">
      
      <Title/>
     <Mapbox/>
     <Rulebox/>
     <Playerinfo/>
    </section>
  );
}

export default App;
