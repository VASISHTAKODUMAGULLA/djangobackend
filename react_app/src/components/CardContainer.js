
function CardContainer(props){
    const ccStyle ={
        border: "black solid 1px",
        // width: '80vw',
        margin:'0 20px 0 0'
    }
    return (
        <div style={ccStyle}>
            <h1>My Cards</h1>
            <div style={{display:'flex'}}>
                {props.cards}
            </div>

        </div>
    )
}

export default CardContainer;