import React, { useState,useEffect } from "react";

import "./styles.css";
import WelcomePage from "../../welcome page/welcome";

import ThankYouPage from "../../Thankyou page/ThankyouPage";
import Confirmation from "../UserConfirmation/Confirmation";

import { db } from "../../../firebase";

function Survey(props) {
  const questions = [
    {
      id: 1,
      text: "How satisfied are you with our products?",
    },
    {
      id: 2,
      text: "How fair are the prices compared to similar retailers?",
    },
    {
      id: 3,
      text: "How satisfied are you with the value for money of your purchase?",
    },
    {
      id: 4,
      text: "How satisfied are you with the value for money of your purchase?",
    },
    {
      id: 5,
      text: "What could we do to improve our service?",
    },
  ];

   const [currentQuestion, setcurrentQuestion] = useState(0);
   const [answers, setAnswers] = useState({});
   const [confirm , setConfirm] = useState(false);

   const [thankYouScreen, setThankYouScreen] = useState(false);

   const [showWelcome , setshowWelcome] = useState(false);
   

  const handleprev = () => {
    
    setcurrentQuestion((prevqn) => Math.max(prevqn - 1, 0));
  };

  const handlenext = () => {
    if(currentQuestion ===  questions.length-1)
    {
      
      setConfirm(true);
    }else{
    setcurrentQuestion((nextqn) => Math.min(nextqn + 1, questions.length - 1));
    }
  };
  
  const handleConfirmationYes = () => {
    setConfirm(false);
    setThankYouScreen(true);
     
  };

  const handleConfirmationNo = () => {
     
    setConfirm(false);
  };


  const handleRating = (rating) => {
    setAnswers((prevres) => ({
      ...prevres,
      [questions[currentQuestion].id]: rating,
    }));
    
  };


  const Rendercircles = () => {
    return (
      <div className="rating-circles">
        {[1, 2, 3, 4, 5].map((rating, index) => (
          <div
            key={index}
            className={`circle ${
              answers[questions[currentQuestion].id] === rating
                ? "selected"
                : ""
            }`}
            onClick={() => handleRating(rating)}
          >
            {rating}
          </div>
        ))}
      </div>
    );
  };

  const handleSkip = () => {
    setAnswers((prevres) => ({
      ...prevres,
      [questions[currentQuestion].id]: null,
    }));
    handlenext();
  };

   useEffect(() => {
    if (thankYouScreen) {
      // If ThankYouPage is shown, set a timeout to show the WelcomePage after 1 second
      const timer = setTimeout(() => {
        setThankYouScreen(false);
        props.onSurveyComplete();
        setshowWelcome(true);
      }, 5000);

      // Clean up the timer when the component unmounts or when thankYouScreen becomes false
      return () => clearTimeout(timer);
    }
  }, [thankYouScreen] , props);

  

  return (
    <div className="survey-container">

       {showWelcome && <WelcomePage  />}

    <div className = {`main-container ${confirm || thankYouScreen   ? "blur" : "main-container"}`}>
      
      <h1>Customer Survey</h1>

      <div className="progress-bar">
        <h4>
          {currentQuestion + 1}/{questions.length}
        </h4>
      </div>
      <br />
      <br />

      <div className="question-container">
        <h3>{currentQuestion + 1}.</h3>
        <p>{questions[currentQuestion].text}</p>
      </div>

      <div className="customer-rating">{Rendercircles()}</div>

      <div className="button-container">
         <div className="prev-btn">
            <button onClick={handleprev} disabled={currentQuestion === 0}>
              Previous
            </button>
          </div>
          <div className="next-btn">
           
              <button onClick={handlenext}>Next</button>
          
              
            <button onClick={handleSkip} style={{marginLeft:'10px'}}>Skip</button>
          </div>
        </div>
      </div>

      {thankYouScreen && <ThankYouPage />}


      {
        confirm &&
        ( <Confirmation 
          yesConfirm = {handleConfirmationYes}  
          noConfirm = {handleConfirmationNo} />
        )
      }

      
     
    </div>
  );
}

export default Survey;
