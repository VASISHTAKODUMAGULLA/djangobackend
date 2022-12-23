import {useState} from "react";


function InputForm(props){

    const [val, setVal] = useState('');

    function updateValue(e){
        console.log(e);
        setVal(e.target.value);
    }

    return (
        <div>
            <label>
                New color:
                <input type='text' value={val} onChange={updateValue}/>
            </label>
            <button onClick={() => props.addCardButton(val)}>Add card</button>
            
        </div>
    )
}

export default InputForm;