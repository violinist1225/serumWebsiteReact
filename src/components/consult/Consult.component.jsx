import React, {useState} from "react";
import { Header } from "../header/Header.component";
import Questionnaire from "../questionnaire/Questionnaire.component";
import { QuestionnaireCompleted } from "../questionnaire/QuestionnaireCompleted.component";

const Consult = ()=>{
    const [completed, setCompleted] = useState(false);
  

    const questionnaireCompleted = ()=>{
      setCompleted(true);
    }
    return (
        <>

        <Header />
         {/* section: special serums */}
      <div className="special-serums">
        <h1 className="block-title"> Your Personal Questionnaire
</h1>
        <div className="ss-content" style={{color:"black"}}>
          <p >Fill out the brief form below. I will reply back with a personalized response within 24-48 hours. 
 </p>
          {/* form */}
          <Questionnaire questionnaireCompleted={()=>{ questionnaireCompleted()}}/>

          </div>
      </div>
      {completed && <QuestionnaireCompleted handleClose= {()=>{
        setCompleted(false)
      }}/>}
        </>
 
    )
}

export default Consult;