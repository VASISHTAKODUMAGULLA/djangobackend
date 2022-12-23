import {useState} from "react";


function LoginForm(props){
    const loginStyle ={
        // margin-left: "auto",
        // margin-right: "auto",
        position: 'absolute', left: '50%', top: '50%',
        border: "black solid 1px",
        height: "250px",
        width: "200px"

    }
    const [val_name, setVal_name] = useState('');
    const [val_password, setVal_password] = useState('');
 
    function updateValue_username(e){
        // console.log(e);
        setVal_name(e.target.value);
        console.log(val_name+setVal_name);
    }
    function updateValue_password(e){
        // console.log(e);
        setVal_password(e.target.value);
        console.log(val_password);
    }
    function api(){
        alert("you are sending an api")
    }
    return (
        <div style={loginStyle}>
            <form onSubmit={api}>
            <div>
            <label style={{margin:"5px"}}>
                User Name:
                <input type='text' value={val_name} onChange={updateValue_username}/>
            </label>
            </div>
            <div>
            <label style={{margin:"5px"}}>
                Password:
                <input type='password' value={val_password} onChange={updateValue_password}/>
            </label>
            </div>
            <input style={{margin:"5px"}} type="submit" value="login"/>
            </form>
        </div>
    )
}

export default LoginForm;