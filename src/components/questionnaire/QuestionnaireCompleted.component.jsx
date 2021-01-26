import '../../App.css';

import React from "react";

export const QuestionnaireCompleted = ({handleClose})=>{
    return (
        <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <h2>Questionnaire Completed</h2>
            <button  className="btn-close" onClick={()=>{
                handleClose()
            }}><i className="mdi mdi-close" /></button>
          </div>
          <div className="modal-body">
          <div className="ss-content" style={{width: '100%'}}>
                  <p> <b>Your questionnaire has been submitted. I will be in touch 24-48 hours. Thank you! </b> </p></div>
          </div>
        </div>
      </div>
    )
}