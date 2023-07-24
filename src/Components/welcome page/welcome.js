import React from 'react';
import './style.css';
 
const WelcomePage = (props) =>
{
    return(
        <div className ='container'>
            <h1>Welcome to Our Shop Survey!</h1>
            <p>We value your feedback. Please take a moment to answer a few questions.</p>
            <button onClick={props.onStartSurvey}>START</button>
        </div>
    )
}



export default WelcomePage;