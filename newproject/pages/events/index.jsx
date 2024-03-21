import React from 'react'
import {getFeaturedEvents} from '../../dummy-data'
import EventList from '@/components/events/EventList';
import EventSearch from '@/components/events/Event-Search';
import { useRouter } from 'next/router';
const index = () => {

    const feturedEvents = getFeaturedEvents();
    const router = useRouter();
    function findEventHandler(year, month){
      const fullPath = `events/${year}/${month}`
      router.push(fullPath)
    }

    
  return (
    <div>
        <ul>
          <EventSearch onSearch={findEventHandler}/>
            <EventList items ={feturedEvents}/>
        </ul>
    </div>
  )
}

export default index