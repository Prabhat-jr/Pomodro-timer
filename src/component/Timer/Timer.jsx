import { useState, useEffect } from 'react';
import React from 'react'
import "./Timer.css"

const Timer = () => {
    const [seconds,setSeconds] =useState(0);
    const [minutes,setMinutes] =useState(0);
    const [breakTime, setBreakTime]=useState(false)
    const [seconds1,setSeconds1] =useState(0);
    const [minutes1,setMinutes1] =useState(0);
const breakT=5
    
    var timer;
    
     useEffect(() => { 
        
         if(!breakTime){
      timer= setInterval(()=>{
          setSeconds(seconds+1);
          if(seconds === 59){
              setMinutes(minutes+1);
              setSeconds(0);
          }
      } ,1000)
      return ()=>clearInterval(timer);
    } else if(breakTime &&  minutes1 <= breakT){
        timer= setInterval(()=>{
            setSeconds1(seconds1+1);
            if(seconds1 === 59){
                setMinutes1(minutes1+1);
                setSeconds1(0);
            }
        } ,1000)
        if(minutes1 === breakT){
            setBreakTime(false)
            setSeconds1(0)
            setMinutes1(0)
        }
        return ()=>clearInterval(timer);
        
    } else{}
    });

    useEffect(()=>{
if(minutes === 25){
setBreakTime(true)
}
    },[minutes])
    const reset =()=>{
       setSeconds(0);
       setMinutes(0);
    }
    const pause =()=>{
        clearInterval(timer);
    }
    const start =()=>{
        
            timer= setInterval(()=>{
                setSeconds(seconds+1);
                if(seconds === 59){
                    setMinutes(minutes+1);
                    setSeconds(0);
                }
            } ,1000)
            return ()=>clearInterval(timer);
      
         
    }


        return (
        <div className="timer">
            <div className="Container">
                <div className="Timer_Containe">
             <h1>{!breakTime ? "Timer":"Break Timer"}</h1>
             {!breakTime ?<h1>{minutes < 10?"0" +minutes:minutes}:{seconds <10 ? "0"+seconds:seconds}</h1>:
             <h1>{minutes1 < 10?"0" +minutes1:minutes1}:{seconds1 <10 ? "0"+seconds1:seconds1}</h1>}
             </div>
             {!breakTime && <>
             <button className="reset" onClick={reset}>Reset</button>
             <button className="pause" onClick={pause}>Pause</button>
             <button className="start" onClick={start}>Start</button>
             </>}
            </div>
            
        </div>
    )
}

export default Timer
