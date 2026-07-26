"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { AboutACM } from "@/components/home/AboutACM";
import { FeaturedEvent } from "@/components/home/FeaturedEvent";
import { PastProjects } from "@/components/home/PastProjects";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Membership } from "@/components/home/Membership";

export default function Home() {
  return (
    <div className="flex flex-col relative bg-brand-yellow min-h-screen">
      <HeroSection />
      <AboutACM />
      <FeaturedEvent />
      <PastProjects />
      <HowItWorks />
      <Membership />
    </div>
  );
}