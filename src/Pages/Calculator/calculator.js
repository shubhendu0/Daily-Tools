import React , {useState, useEffect} from 'react';
import './calculator.css';

export const Calculator = () => {
    
    const getLocalItem = () =>{
        let curr_input = localStorage.getItem("current_input");
        if(curr_input){
            return curr_input;
        }
        else{
            return "";
        }
    }

    const [result, setResult] = useState(getLocalItem);

    useEffect(()=>{
        localStorage.setItem("current_input", result)
    }, [result]);

    const handleClick = (event) => {
        setResult(result.concat(event.target.name));
    }

    const clear = () => {
        setResult(" ");
    }

    const backspace = () => {
        setResult(result.slice(0, result.length - 1));
    }

    const calculate = () => {
        try{
            setResult(eval(result.toString()));
        }
        catch(err){
            setResult("Error")
        }
    }

    return(
        <div id="calculator-container">
        
            <form>
                <input type="text" value={result} />
            </form>

            <div className="keypad">
                <button onClick={clear} id="clear" className="function-keys"> C </button>
                <button onClick={backspace} id="backspace" className="function-keys"> del </button>
                <button name="/" onClick={handleClick} className="function-keys"> / </button>

                <button name="7" onClick={handleClick}> 7 </button>
                <button name="8" onClick={handleClick}> 8 </button>
                <button name="9" onClick={handleClick}> 9 </button>
                <button name="*" onClick={handleClick} className="function-keys"> * </button>

                <button name="4" onClick={handleClick}> 4 </button>
                <button name="5" onClick={handleClick}> 5 </button>
                <button name="6" onClick={handleClick}> 6 </button>
                <button name="-" onClick={handleClick} className="function-keys"> - </button>

                <button name="1" onClick={handleClick}> 1 </button>
                <button name="2" onClick={handleClick}> 2 </button>
                <button name="3" onClick={handleClick}> 3 </button>
                <button name="+" onClick={handleClick} className="function-keys"> + </button>

                <button name="." onClick={handleClick}> . </button>
                <button name="0" onClick={handleClick}> 0 </button>
                <button name="=" onClick={calculate} id="equals" className="function-keys"> = </button>

            </div>

        </div>
    )
}