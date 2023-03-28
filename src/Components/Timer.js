import React, {useState, useEffect} from "react";

const Timer = ()=>{
    const [count, setCount] = useState(0);
    let timer;
    const handleStart = () => {
        setCount(count + 1);
    };

    const handleStop = () => {
        clearTimeout(timer);
    };
    const handlereset = () => {
        setCount(0);
        clearTimeout(timer);
    };
    useEffect(() => {
        if (count) {
            timer = setTimeout(handleStart, 1500);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [count]);

    return(
        <>
            <div>
                <div>
                    <h1>Timer</h1>
                    <hr></hr>
                </div>
                <h3>{count}</h3>
                <button type="button" className="btn btn-primary m-1" onClick={handleStart}>Start</button>
                <button type="button" className="btn btn-primary m-1" onClick={handleStop}>Pause</button>
                <button type="button" className="btn btn-primary m-1" onClick={handlereset}>Reset</button>
            </div>
        </>
    )
}

export default Timer;