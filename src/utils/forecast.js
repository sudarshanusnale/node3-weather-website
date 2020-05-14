const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    
    const url = 'http://api.weatherstack.com/current?access_key=315a0fa0de651de9931095323d67044c&query='+latitude+','+longitude+'&units=m';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect to weather srvises',undefined);
        }else if(response.body.error){
            callback('unable to find the location',undefined);
        }else{
             callback(undefined,'It is currently ' + response.body.current.temperature + ' degrees out. The humidty is ' + response.body.current.humidity + ' ');
        }
    })
}

module.exports = forecast;