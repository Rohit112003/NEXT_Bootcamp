import React from "react";
import EventItem from "./EventItem";
import classes from './event-list.module.css'
const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((events) => (
        <EventItem
        key={events.id} 
          id={events.id}
          title={events.title}
          location={events.location}
          date={events.data}
          image={events.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
