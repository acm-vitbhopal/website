import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EVENTS_DATA } from "@/constants/events";
import { Calendar, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Events | ACM VIT Bhopal",
  description: "Discover upcoming and past events hosted by ACM VIT Bhopal.",
};

export default function EventsPage() {
  const upcomingEvents = EVENTS_DATA.filter((event) => event.type === "Upcoming");
  const pastEvents = EVENTS_DATA.filter((event) => event.type === "Past");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-brand-pink py-20 border-b-[3px] border-brand-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            Our Events
          </h1>
          <p className="text-xl md:text-2xl font-bold font-inter text-brand-black/90 max-w-2xl mx-auto">
            Workshops, hackathons, and seminars. Come build with us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-bg-light flex-1">
        <div className="container mx-auto px-4">
          
          {/* Upcoming Events */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-5xl md:text-6xl font-black">Upcoming</h2>
              <div className="flex-1 h-1 bg-brand-black mt-2"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} color={event.color} className="relative hover:-translate-y-1">
                  <div className="absolute top-6 right-6 bg-white text-brand-black px-4 py-1 rounded-full font-bold text-sm border-2 border-brand-black shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                    {event.category}
                  </div>
                  
                  <h3 className="text-4xl font-black mb-6 mt-4 pr-24 leading-tight">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-col gap-3 font-bold font-inter mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="font-bold text-lg leading-tight mb-8 flex-1">
                    {event.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Button variant="secondary" className="w-full bg-white">
                      Register Now
                    </Button>
                  </div>
                </Card>
              ))}
              
              {upcomingEvents.length === 0 && (
                <p className="font-bold text-xl text-gray-500">No upcoming events currently scheduled. Check back soon!</p>
              )}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-5xl md:text-6xl font-black">Past Events</h2>
              <div className="flex-1 h-1 bg-brand-black mt-2"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <Card key={event.id} color={event.color} className="opacity-90 grayscale-[0.2]">
                  <div className="absolute top-6 right-6 bg-brand-black text-white px-4 py-1 rounded-full font-bold text-sm">
                    {event.category}
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 mt-4 pr-24 leading-tight">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-col gap-2 font-bold font-inter mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="font-bold leading-tight mb-6 flex-1">
                    {event.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Button variant="outline" className="w-full border-[3px]">
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
