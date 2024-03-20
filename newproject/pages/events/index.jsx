import React from 'react'
import {getFeaturedEvents} from '../../dummy-data'
import EventList from '@/components/events/EventList';

const index = () => {

    const feturedEvents = getFeaturedEvents();
  return (
    <div>
        <ul>
            <EventList items ={feturedEvents}/>
        </ul>
    </div>
  )
}

export default index