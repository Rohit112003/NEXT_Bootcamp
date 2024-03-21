import EventList from "@/components/events/EventList";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
const FilteredEventspage =()=>{
    const router  = useRouter();
    const filterData = router.query.slug;
    if(!filterData){
        return <p className="center">Loading...</p>
    }

    const filterYear = filterData[0];
    const filterMonth = filterData[1];
    const numyear =+filterYear;
    const numMonth =+filterMonth;

    if(isNaN(numyear) || isNaN(numMonth) || numyear>2023 || numyear<2021|| numMonth<1 || numyear>12){

        return <p>Invalid filter please adsut the field</p>
    }
    const filteredEvents= getFilteredEvents({
        year:numyear,
        month:numMonth
    })

    if(!filteredEvents || filteredEvents.length===0){
        return <p>No event were found in choosen filter </p>
    }

    return (
     <EventList items= {filteredEvents}/>
    )
}

export default FilteredEventspage;