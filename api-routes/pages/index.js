import { useRef ,useState} from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
// import { response } from "express";

export default function Home() {
  const[feedback , setFeedback] = useState();
  const emailInputRef = useRef();
  const feedbackRef = useRef();
  function submitFromHandler(event){
    event.preventDefault();
    // And this input object just as the text area object in JavaScript always has a value property which holds the current value of those inputs. So it holds the value entered by the user.
    const enteredEmail = emailInputRef.current.value;
    const enterdFeedback = feedbackRef.current.value;
    const reqBody = {
      email:enteredEmail,
      text:enterdFeedback
    }

    fetch('/api/feedback',{
      method:'POST',
      body:JSON.stringify(reqBody),
      // So, now we add this object to add metadata to this request, which we're sending, informing the backend,informing the API route in the end, that this request will carry JSON data.
      headers:{
        'Content-Type':'application/json'
      }
    }) .then(response => response.json()).then(data => console.log(data))
    
    
    //{email:"rohitk79739@gmail.com", text:"some feedback text"}

  }
  function loadfeedbAckHandler(){
    fetch('/api/feedback')
    .then(response => response.json())
    .then(data => setFeedback(data.feedback))
  }
  return (
    <>
      <h1>THis is home Page</h1>
      <form onSubmit={submitFromHandler}>
        <div>

        <label htmlFor="email">Your email Address</label>
        <input type="email" id="email" ref={emailInputRef}/>
        </div>
        <div>

        <label htmlFor="feedback">Your feedback Address</label>
        <textarea id="feedback" rows="5" ref={feedbackRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr/>
      <button onClick={loadfeedbAckHandler}>Load Feedback</button>
      <ul>
        {feedback.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    </>
  );
}

