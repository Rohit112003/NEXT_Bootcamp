import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';
//provide by react that allows you to handle loading states
//and show fallback content until some data or resource has been loaded


async function Meals(){
    const meals =  await getMeals();
    return  <MealsGrid meals={meals}></MealsGrid>
}


export default  function MealsPage(){

    return(
        <>
        
        <header className={classes.header}>

            <h1>
                Delicious meals, created{' '}<span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favourite recipe and cook it uourself. It is easy and fun </p>
            <p className={classes.cta}>
                <Link href='/meals/share'>
                    Share Your Favourite Recipe
                </Link>
            </p>
        </header>
        {/* Placeholder UI: You wrap the components that need to asynchronously load data inside a <Suspense> component. While the data is being fetched, React will render the fallback UI that you specify inside the <Suspense> component. This fallback UI serves as a placeholder until the actual content is ready.

Data Fetching: Meanwhile, the asynchronously loaded component performs the necessary data fetching or other asynchronous tasks. Once the data is fetched, the component can render its content.

Displaying Content: When the data fetching is complete, React will re-render the component with the actual content instead of the placeholder UI. */}
        <main className={classes.main}>
            <Suspense fallback={ <p className={classes.loading}>Fetching Meals</p>}>
                <Meals/>

            </Suspense>
        
        </main>
        </>
    )
}