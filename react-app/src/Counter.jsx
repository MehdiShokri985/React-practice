
import { useState } from "react";

const Counter =() =>{

    // const hook = useState(0);
    const [counter, setCounter] = useState(0);
    const [isShow,setIsShow] = useState(true);

    const increaseHandler =() => {
        setCounter((counter) => counter +1);
    };

    const increaseHandler3 =() =>{

        //  setCounter(counter +1);
        //  setCounter(counter +1);
        //  setCounter(counter +1);
        setCounter((counter) => counter +1);
        setCounter((counter) => counter +1);
        setCounter((counter) => counter +1);
      
    }

    const stopHandler =() =>{

        setCounter("-");
    };

    const showHandler =() => setIsShow(true);
    const hideHandler =() => setIsShow(false);


    return (
            <>
                <button onClick={showHandler}>show</button>
                <button onClick={hideHandler}>Hide</button>

                {
                    isShow && (
                        <div>
                            <h1>Counter</h1> 
                            <p>{counter}</p> 
                            <button onClick={increaseHandler}>Increase1</button>
                            <button onClick={increaseHandler3}>Increase3</button>
                            <button onClick={stopHandler}>Increase3</button>
                        </div>
                    )
                }
                
            </>
           );
    
} 

export default Counter;