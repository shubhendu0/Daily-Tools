import React , { useRef, useState, useEffect } from 'react';
import './stopwatch.css';

export const StopWatch = () => {

    const getLocalSecond = () =>{
        let curr_sec = localStorage.getItem("current_sec");
        if(curr_sec){
            return JSON.parse(curr_sec);
        }
        else{
            return 0;
        }
    }
    const getLocalMinute = () =>{
        let curr_min = localStorage.getItem("current_min");
        if(curr_min){
            return JSON.parse(curr_min);
        }
        else{
            return 0;
        }
    }


    const [seconds, setSeconds] = useState(getLocalSecond);
    const [minutes, setMinutes] = useState(getLocalMinute);
    const [active, setActive] = useState(false);

    const startRef = useRef();

    useEffect(()=>{
        localStorage.setItem("current_sec", seconds)
    }, [seconds]);

    useEffect(()=>{
        localStorage.setItem("current_min", minutes)
    }, [minutes]);

    const start = () => {
        setActive(true);
        startRef.current = setInterval(()=>{
            setSeconds(prevSec => prevSec + 1);
            if(seconds === 59){
                setMinutes(prevMin => prevMin + 1);
                setSeconds(0);
            }
        },1000)
    }
    const reset = () => {
        setSeconds(0);
        setMinutes(0);
        clearInterval(startRef.current);
        setActive(false);
    }

    const stop = () => {
        clearInterval(startRef.current);
        setActive(false);
    }

    return(
        <div id="stopwatch">
            <div id="show">
                <h2> {minutes<10 ? "0"+minutes : minutes } : {seconds<10 ? "0"+seconds : seconds} </h2>          
            </div>
            <div id="btn">
                <button id="start" onClick={active ? stop : start}> {active ? "Stop" : "Start"} </button>
                <button id="reset" onClick={reset} > Reset </button>
            </div>
        </div>
    )
}