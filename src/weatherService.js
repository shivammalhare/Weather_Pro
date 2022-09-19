const API_KEY = '553782144ce3e025fed3935cd90f2ce7';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const makeIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}.png`;
const getFormattedWeatherData = async(city, units ='metric') => {

    const URL = `${API_URL}?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data)=> data);

    const {main:{temp,feels_like,temp_min,temp_max, pressure,humidity},
     name,
      weather,
        wind:{speed},
        sys:{country}, } = data;
        
    const {description, icon} = weather[0];
    return {
        description, iconURL: makeIconUrl(icon),temp, temp_min, temp_max, pressure,feels_like,name, humidity, speed, country,
    };

};

export { getFormattedWeatherData};