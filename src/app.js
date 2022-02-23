const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')
console.log(__dirname)
console.log(path.join(__dirname,'../public'))
const app = express()
// define path for express config
const dirpath = path.join(__dirname,'../public')
const viewspath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')
// hbs config:  set up handelbars and views location
app.set('views',viewspath)
app.set('view engine','hbs')
hbs.registerPartials(partialspath)
// set up static directory to serve
app.use(express.static(dirpath))
//app.use(express.static)

app.get('/about',(req,res)=>{
    res.render('about',{title:'about page',
    name: 'samir'})
})
app.get('/help',(req,res)=>{
    res.render('help',{title:'help page',
    name: 'samir'})
})
app.get('',(req,res)=>{
    res.render('index',{name: 'samir',
title: 'weather app in inex page'})
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
       return res.send({
           error:'please provide the address'})
    }
    geocode(req.query.address,(error,{latitude,longitude,place}={})=>{
        if(error){
            res.send({error})
            return console.log(error)
        }
        forcast(latitude,longitude,(error,{temperature}={})=>{
            if(error){
                res.send({error})
                return console.log(error)
            }
            res.send({
                latitude,
                longitude,
                place,
                temperature
            })
        })
       
    })
   
    })

app.listen(3000,()=>{
    console.log('app running in port 3000')
})