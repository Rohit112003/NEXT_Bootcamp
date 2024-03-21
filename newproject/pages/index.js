import EventSearch from "@/components/events/Event-Search";
import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/dummy-data";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const events = getAllEvents()
  return (
    <div>
      <EventSearch/>
      <EventList items ={events}/>
    </div>
  )
}
  