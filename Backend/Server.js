const express = require('express')
const app = express();
const axios = require('axios');



// Route for Chicago

app.get('/CWeather', async (req,res)=>{
    const API_KEY = "6e783efa890cf3e58aff8fbfd8c1d32d";
    console.log("A request came for chicago weather");
    try {
        const k = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=${API_KEY}&units=metric`);
        const temperature = k.data.main.temp;
        console.log(temperature);
        const inFarenheit = ((9 * temperature) / 5) + 32;
        const obj = {'Temperature': inFarenheit};
        return res.send(obj)
    }
    catch(err){
        console.log(err)
    }

});

// Route for Los Angles

app.get('/LWeather', async (req,res)=>{
    const API_KEY = "6e783efa890cf3e58aff8fbfd8c1d32d";
    console.log("A request came for LA weather");
    try {
        const k = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=${API_KEY}&units=metric`);
        const temperature = k.data.main.temp;
        console.log(temperature);
        const inFarenheit = ((9 * temperature) / 5) + 32;
        const obj = {'Temperature': inFarenheit}
        return res.send(obj)
    }
    catch(err){
        console.log(err)
    }

});


// Route for Newark

app.get('/NWeather', async (req,res)=>{
    const API_KEY = "6e783efa890cf3e58aff8fbfd8c1d32d";
    console.log("A request came for newark weather");
    try {
        const k = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Newark&appid=${API_KEY}&units=metric`);
        const temperature = k.data.main.temp;
        console.log(temperature);
        const inFarenheit = ((9 * temperature) / 5) + 32;
        const obj = {'Temperature': inFarenheit};
        return res.send(obj)
    }
    catch(err){
        console.log(err)
    }

});


app.listen(4000, ()=>{console.log("I am listening to port 4000")});