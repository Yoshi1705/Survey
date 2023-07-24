
import React,{useState} from 'react';

import WelcomePage from './Components/welcome page/welcome';

import Survey from './Components/survey page/Survey/Survey';

function App() {

  const [survey,setsurvey] = useState(false);

       const handleSurvey = () =>{
        setsurvey(true);
       }

  
  return (
    <div className="App">
       {
        survey ? (
          <Survey   onSurveyComplete={() => setsurvey(false)}/>

        ):(
          <WelcomePage onStartSurvey = {handleSurvey}/>
        )
       }
       
    </div>
  );
}

export default App;
