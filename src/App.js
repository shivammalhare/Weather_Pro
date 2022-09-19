import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';
import Descriptions from './components/Descriptions';

import {getFormattedWeatherData} from "./weatherService";
import { useEffect, useState } from "react";

 
function App() {

  const  [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('imperial'); // metric or imperial

  useEffect(() => {
    
    const fetchWeatherData = async () => {
    const data = await getFormattedWeatherData('paris',units);

    setWeather(data);
     
    };
    fetchWeatherData();
  }, [])
  
  
  
    return (
    <div className="app" style={{backgroundImage:`url(${coldBg})`}} >
     

     <div className="overlay">
      {
        weather && ( 
          <div className="container">
          <div className="section section__inputs">
            
            
            <input type="text" placeholder="Enter City....." />
            <button>°F</button>
          
            </div>

            <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconURL} alt="icon" />
              
              <h3>{weather.description}</h3>
              </div>


              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${units=== 'metric' ? "C" : "F"}`}</h1>  
                <h3>Feeling Cold...</h3> 
              </div>

          </div>

          <Descriptions  weather={weather} units={units}/>  
       </div>


        )

      }
          
     </div>
      </div>
   ); 
}

export default App;
