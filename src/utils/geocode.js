const request = require('request')
const geocode = (address,callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYm91bGd1YW50IiwiYSI6ImNrenUyaHV0azAxbzUycW10dDg0NDlzNTQifQ.RuffNdLZNtMfX3k3z-m8qA'
    request({url, json:true},(error,{body}={})=>{
        if(error){
            callback(error)
        }
        else if(body.features.length===0){
            callback('undefined palce')
        }
        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                place:body.features[0].place_name
            })
        }
    })

    }
    module.exports = geocode