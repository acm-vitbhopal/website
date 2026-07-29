"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { AboutACM } from "@/components/home/AboutACM";
import { FeaturedEvent } from "@/components/home/FeaturedEvent";
import { PastProjects } from "@/components/home/PastProjects";
import { AcmInitiatives } from "@/components/home/AcmInitiatives";
import { Membership } from "@/components/home/Membership";

export default function Home() {
  return (
    <div className="flex flex-col relative bg-bg-light min-h-screen">
      <HeroSection />
      <AboutACM />
      <FeaturedEvent />
      <PastProjects />
      <AcmInitiatives />
      <Membership />
    </div>
  );
}