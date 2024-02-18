'use client'
//its only handled error tht occure in the page that sits in the same folder
export default function Error({error}){

    return <main className="error"> 
        <h1>An Error Occured!</h1>
        <p> Failed to fetch data</p>
    </main>
}