import * as Survey from "survey-react";
import "survey-react/survey.css";
import React,  {useState} from "react";
import axios from "axios";
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'
const Questionnaire = ({questionnaireCompleted})=> {
  //to display the spinner while the page makes http request
  const [isLoading, setIsLoading] = useState(false);
 const json = {
    pages: [
        {
          name: "page1",
          title: "This is the page {pageno} of {pagecount}.",
          elements: [
            { type: "text", name:  `What are your skin concerns, i.e. rosacea, acne, wrinkles, dark spots, dull skin, dry skin, hyperpigmentation, under eye bags and dark circles, etc Be Specific as possible?`, placeHolder:"Provide your answer", isRequired: true}, 
          ]
        },
        {
            name: "page2",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name: "What is your skin type? (Dry, combination,normal, sensitive, or oily) ",  placeHolder:"Provide your answer", isRequired: true}
            ]
        },
        {
            name: "page3",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name:  `How does your skin respond to peels (If you've had them)?`,  placeHolder:"Provide your answer", isRequired: true}
            ]
        },
        {
            name: "page4",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name: `Do you have any known allergies? Please list all.`,  placeHolder:"Provide your answer", isRequired: true}
            ]
        },
        {
            name: "page5",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name: `When your skin is exposed to the sun, does it tan brown, remain the same color, or turn red?`,  placeHolder:"Provide your answer", isRequired: true}
            ]
        },
        {
            name: "page6",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name: `What current products are you using on your skin, i.e. cleanser, scrub, peel, etc?`,  placeHolder:"Provide your answer", isRequired: true}
            ]
        },
        {
            name: "page7",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name:`Do you have any severe health concerns?`,  placeHolder:"Provide your answer", isRequired: true}
            ]
        },
        {
            name: "page8",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name: `Are you pregnant or breast-feeding?`,  placeHolder:"Provide your answer", isRequired: true}
            ]
        },
        {
            name: "page9",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name:  `Anything else you think I should know about your skin?`,  placeHolder:"Provide your answer", isRequired: true}
            ]
        },
        {
            name: "page10",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name: "What is your Full name? ",  placeHolder:"Provide your answer", isRequired: true},
              { type: "text", name: "What is your Email? ",  placeHolder:"Provide your answer", isRequired: true},
              { type: "text", name: "What is your Phone number? (Optional) ",  placeHolder:"Provide your answer"}
            ]
        },
      ],
      completedHtml: `<p><h4>Thank you for sharing this information with us.</h4></p>`

 };

 const onComplete = (survey, options)=>{
   setIsLoading(true);
   const survey_data = survey.data;
    
  axios.post('https://mail-maya.herokuapp.com/send-email',{answers: survey_data})
  .then(function (response) {
    setIsLoading(false);
    questionnaireCompleted();
    survey.clear();

    console.log("questionnaire submited");
  })
  .catch(function (error) {
    setIsLoading(false);
    survey.data = survey_data;
    alert("Something went wrong! Please Try Again");
  });
 }
  
  const model = new Survey.Model(json);
  return (
  <>
<LoadingOverlay
      active={isLoading}
      spinner={<BounceLoader />}
    >
    <Survey.Survey model={model} onComplete={onComplete}/>    
</LoadingOverlay>

  
  </>);


} 

export default Questionnaire;