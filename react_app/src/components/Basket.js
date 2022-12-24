import {useState} from "react";

function Basket(props){
    //cardList
    const basketStyle1={
        backgroundColor:' yellow',
        border: '1px solid black',
        width: '20vw',
        maxWidth:'300px',
        minWidth: '200px',
    }

    const basketStyle2={
        backgroundColor:' green',
        border: '1px solid black',
        width: '20vw',
        maxWidth:'300px',
        minWidth: '200px',
        height: '100px'
    }

    const [hide, setHide] = useState(true);
    const [basketStyle, setBasketStyle] = useState(basketStyle1);

    const hideHandler = (e) => {
        if (hide === false){
            setHide(true);
            setBasketStyle(basketStyle1);
        }
        else {
            setHide(false);
            setBasketStyle(basketStyle2);
        }
    }

    return (
        <div style={basketStyle}>
            <button onClick={hideHandler}>X</button>
            <h1 > Basket {props.cardList.length}</h1>
            {hide && <div style={{textAlign: 'left', margin: 10}}>
                {props.cardList.map((item, idx) => (
                    <li style={{display: 'flex'}} key={idx}>
                        <div style={{width: '100px'}}>{item} </div>
                        <div style={{width: '50px'}}>{idx} </div>
                        <button onClick={() => props.deleteCardHandler(idx)}>x</button>
                    </li>
                ))}
                 <button onClick={props.deleteAllHandler}>DeleteAll</button>
                 <button onClick={props.payHandler}>Pay</button>
            </div>
            }
        </div>
    )
}

export default Basket;