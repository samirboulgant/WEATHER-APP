const request = require('request')
const forcast = (latitude,longitude,callback)=>{
    const url ='http://api.weatherstack.com/current?access_key=93d650dec6e721edbf7d8fc1a358444d&query='+ encodeURIComponent(latitude)  + ',' + encodeURIComponent(longitude)
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('connection failed')
        }
        else if(body.error){
            callback(body.error.info)
        }
        else{
            callback(undefined,{
                temperature: body.current.temperature
            })
        }
        
    })
}
module.exports = forcast