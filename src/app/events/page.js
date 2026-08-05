"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EVENTS_DATA } from "@/constants/events";
import { Calendar, MapPin, Clock } from "lucide-react";
import PastEventsSection from "./PastEventsSection";

export default function EventsPage() {
  const upcomingEvents = EVENTS_DATA.filter((event) => event.type === "Upcoming");
  const pastEvents = EVENTS_DATA.filter((event) => event.type === "Past");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section (Blue Theme) */}
      <section className="bg-brand-light-blue py-24 md:py-32 relative overflow-hidden">
        {/* Soft Wave Backgrounds */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
          <svg className="absolute bottom-0 left-0 w-[200%] md:w-full h-auto min-h-[70vh] text-brand-off-white" viewBox="0 0 1440 600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,150 C250,550 550,50 950,250 C1200,350 1440,100 1440,100 L1440,600 L0,600 Z" opacity="0.5"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-8xl font-black text-brand-blue mb-6 tracking-tighter"
          >
            Our Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-bold font-inter text-brand-navy/80 max-w-2xl mx-auto"
          >
            Workshops, hackathons, and seminars. Come build with us.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-bg-light flex-1">
        <div className="container mx-auto px-4">
          
          {/* Upcoming Events */}
          <div className="mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy">Upcoming</h2>
              <div className="flex-1 h-[2px] bg-brand-navy/10 mt-2"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div 
                  key={event.id} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-brand border-[2px] border-brand-navy group hover:-translate-y-1 transition-transform"
                >
                  <div className="p-8 md:p-10 flex-1">
                    <div className="inline-block bg-brand-light-blue text-brand-navy px-3 py-1 font-bold border-[2px] border-brand-navy rounded-full text-sm mb-6">
                      {event.category}
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-black mb-6 leading-tight text-brand-navy group-hover:text-brand-blue transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="font-medium text-brand-navy/70 leading-relaxed mb-8">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 font-bold font-inter text-brand-navy/80 mb-8 bg-brand-off-white p-4 rounded-xl border border-brand-navy/10">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-brand-blue" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-brand-blue" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <MapPin className="w-5 h-5 text-brand-blue" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    
                    <Button variant="primary" className="w-full">
                      Register Now
                    </Button>
                  </div>
                </motion.div>
              ))}
              
              {upcomingEvents.length === 0 && (
                <div className="col-span-2 p-12 text-center bg-white rounded-3xl border-[2px] border-dashed border-brand-navy/20">
                  <p className="font-bold text-xl text-brand-navy/60">No upcoming events currently scheduled. Check back soon!</p>
                </div>
              )}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy">Past Events</h2>
              <div className="flex-1 h-[2px] bg-brand-navy/10 mt-2"></div>
            </motion.div>
            
            <PastEventsSection pastEvents={pastEvents} />
          </div>

        </div>
      </section>
    </div>
  );
}
