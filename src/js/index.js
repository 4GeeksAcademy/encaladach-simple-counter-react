//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "../styles/index.css";

//import your own components
function SimpleCounter(props){
    return (<div className="bigCounter">
        <div className="calendar">
        <i class="fa-regular fa-clock"></i>
        </div>
        <div className="four">{props.digitFour % 10}</div>
        <div className="three">{props.digitThree % 10}</div>
        <div className="two">{props.digitTwo % 10}</div>
        <div className="one">{props.digitOne}</div>

    </div>);
}
SimpleCounter.propTypes = {
    digitFour: propTypes.number,
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitOne: propTypes.number

};

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four, three, two, one);

    counter++;

    ReactDom.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
        document.querySelector("#app")
    );   
},1000);


//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
