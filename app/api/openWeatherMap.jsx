var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=metric';


//key = 2ff26ff5af4afea9ab7b945dcacdca34

//default url = http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1
//my url = http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=2ff26ff5af4afea9ab7b945dcacdca34

module.exports={
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }


    },function(res){
      throw new Error(res.data.message);

    });

  }
}
