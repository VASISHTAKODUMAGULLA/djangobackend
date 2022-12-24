import './App.css';
import Card from './components/card';
import CardContainer from "./components/CardContainer";
import Basket from "./components/Basket";
import {useState} from 'react';
import InputForm from "./components/inputForm";
import SignUp from './components/signup';
import Navbar from './components/navbar';
import LoginForm from './components/login';
import Home from './components/home';
import EditAccount from './components/editAccount';
import MyItems from './components/myItems';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

    const  [colorList, setColorList] = useState(['yellow', 'green', 'black',"#FF6663"]);

    let cardList =[];


    const [basketList, setBasketList] = useState([]);

    const addCardClick = (cardId) => {
        //console.log("parent click", cardId);
        setBasketList([...basketList, cardId]);
    }
    const deleteAll = () => {
        setBasketList([]);
    }
    const deleteCard = (id) => {
        console.log(id);
        let elist = basketList.filter((el, idx) => idx !== id);
        setBasketList(elist);
    }
    cardList =colorList.map((color, idx) => (
         <Card color={color} key={idx} addHandler={addCardClick}/>
    ))

    const addCardHandler = (color) => {
        setColorList([...colorList, color])
    }
    function confirmPayment(){

        alert("Payment Confirmed!")
        console.log(basketList)
        setBasketList([]);
    }

  return (
        <div>
            <div>
                {/* <p><b>Cards:</b> {colorList.join(', ')}</p>
            <b>BasketList:</b> {basketList.join(', ')} */}
                {/* <Navbar></Navbar> */}
                <Router>
                    <Switch>
                        <Route path='/shop'>
                        <Home/>   
                        </Route>
                        <Route path='/login'>
                        <LoginForm></LoginForm>
                        </Route>
                        <Route path='/signup'>
                        <SignUp></SignUp>
                        </Route>
                        <Route path='/account'>
                        <EditAccount/>
                        </Route>
                        <Route path='/myitems'>
                        <MyItems/>
                        </Route>
                    </Switch>
                </Router>
            </div>

            {/* <div className="App">
                <CardContainer cards={cardList} ></CardContainer>
                <Basket deleteAllHandler={deleteAll} payHandler={confirmPayment} deleteCardHandler={deleteCard} cardList={basketList}></Basket>
            </div>
            <InputForm addCardButton={addCardHandler}></InputForm> */}
          
            
        </div>
    );
}

export default App;
