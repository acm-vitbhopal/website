"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import EventModal from "@/components/ui/EventModal";
import { Button } from "@/components/ui/Button";

export default function PastEventsSection({ pastEvents }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {pastEvents.map((event, index) => (
          <motion.div 
            key={event.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-brand border-[2px] border-brand-navy group hover:-translate-y-1 transition-transform cursor-pointer"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="p-8 md:p-10 flex-1 flex flex-col">
              <div className="self-start inline-block bg-brand-light-blue text-brand-navy px-3 py-1 font-bold border-[2px] border-brand-navy rounded-full text-sm mb-6">
                {event.category}
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-black mb-6 leading-tight text-brand-navy group-hover:text-brand-blue transition-colors">
                {event.title}
              </h3>
              
              <p className="font-medium text-brand-navy/70 leading-relaxed mb-8 flex-1 line-clamp-3">
                {event.description}
              </p>

              <div className="grid grid-cols-2 gap-4 font-bold font-inter text-brand-navy/80 mb-8 bg-brand-off-white p-4 rounded-xl border border-brand-navy/10">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="text-sm line-clamp-1">{event.date}</span>
                </div>
                {event.time && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-blue shrink-0" />
                    <span className="text-sm line-clamp-1">{event.time}</span>
                  </div>
                )}
                {event.mode && (
                  <div className="flex items-center gap-2 col-span-2">
                    <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                    <span className="text-sm line-clamp-1">{event.mode}</span>
                  </div>
                )}
              </div>
              
              <Button variant="secondary" className="w-full mt-auto">
                View Details
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <EventModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </>
  );
}
