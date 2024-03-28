import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const emailInputRef = useRef();
  const feedbackRef = useRef();
  function submitFromHandler(event){
    event.preventDefault();
    // And this input object just as the text area object in JavaScript always has a value property which holds the current value of those inputs. So it holds the value entered by the user.
    const enteredEmail = emailInputRef.current.value;
    const enterdFeedback = feedbackRef.current.value;

    fetch() //{email:"rohitk79739@gmail.com", text:"some feedback text"}


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
    </>
  );
}

