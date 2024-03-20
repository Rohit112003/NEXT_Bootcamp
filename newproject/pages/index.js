import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/dummy-data";
import Head from "next/head";
import Image from "next/image";
EventList

export default function Home() {
  const events = getAllEvents()
  return (
    <div>
      <EventList items ={events}/>
    </div>
  )
}
  