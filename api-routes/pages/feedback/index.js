// import { response } from 'express';
import { Fragment,useState } from 'react';
import {buildFilePath,extractFeddback,} from '../api/feedback'
function FeedbackPage(props){
    const[feedbackData, setFeedbAkData] = useState();
    function loadfFeedBackHandler(id){
        fetch('/api/'+ id).then(response=> response.json()).then(data=>{
                setFeedbAkData(data.feedBack)
        })

    }
    return (
        <Fragment>
            {feedbackData && <p>{feedbackData.email}</p>}
        <ul>
            {props.feedbackItems.map((item)=>(
                // Bind in the end allows us to pre-configure this function So it does not execute the function yet,but it pre-configures it for future execution.
                <li key={item.id}>{item.text} <button onClick={loadfFeedBackHandler.bind(null,item.id)}>Show Details</button></li>
                
           ))}
        </ul>
        </Fragment>
    )
}

export async function getStaticProps(){
    // you should not use fetch inside of getStaticProps or getServerSideProps to talk to your own API.
    // fetch()
    const filepath = buildFilePath();
    const data  = extractFeddback();
    return {
        props:{
            feedbackItems:data
        }
    }

}
export default FeedbackPage;