import React, {useState} from 'react';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import './Main.css'


export default function Weather(){

    const [Chicago, setChicago] = useState(0)
    const [LosAngles, setLosAngles] = useState(0);
    const [Newark, setNewark] = useState(0);



    async function functionChicago(){

        // Expecting k will get weather in centigrade
        const k = await Axios.get('/CWeather');
        setChicago(k.data.Temperature);
        console.log("Chicago function clicked")
    }

    async function functionLosangles(){
        const k = await Axios.get('/LWeather');
        console.log(k.Temperature);
        setLosAngles(k.data.Temperature);
        console.log("Los angles is clicked")
    }

    async function functionNewark(){
        const k = await Axios.get('/NWeather');
        console.log(k.Temperature);
        setNewark(k.data.Temperature);
        console.log("Newark is clicked")
    }


    return(

    <div class = "conatiner" id = "layout">
        <div class = "row">
            <div class = "col-sm-3">
            <h2 > Chicago </h2>
           <Button onClick = {functionChicago} > Refresh </Button>
            <p > {Chicago} </p>
                </div>

            <div class = "col-sm-3">
            <h2 > Los Angeles </h2>
        <Button onClick = {functionLosangles}> Refresh </Button>
             <p> {LosAngles} </p>
                </div>

            <div class = "col-sm-3">
            <h2 > Newark </h2>
            <Button onClick = {functionNewark}> Refresh </Button>
            <p> {Newark} </p>
                </div>


            </div>
    </div>
     )
};