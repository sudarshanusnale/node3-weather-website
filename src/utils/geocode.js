const request = require('request')

const geocode =(address,callback)=>{
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?limit=1&access_token=pk.eyJ1Ijoic3VkYXJzaGFuOTgiLCJhIjoiY2thNDNmaWRqMDA0ZjNta2w4YWVvNjJraSJ9.-uteozpb8-GUzmT084kdJQ';
    
    request({url:geocodeURL, json: true},(error,response)=>{
        if(error){
            callback('Unable to connect the location servises', undefined)
        }else if(response.body.features.length==0){
            callback('Unable to find the location',undefined);
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;