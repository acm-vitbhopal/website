import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-yellow pb-24 pt-32 md:pb-32 md:pt-48 border-b-[3px] border-brand-black rounded-b-[3rem] -mb-[3rem] z-10">
        <div className="container mx-auto px-4 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-black mb-8 max-w-[80vw] leading-[0.85] tracking-tighter">
            Code. <br/> Innovate. <br/> <span className="text-brand-pink">Elevate.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-10 max-w-xl text-brand-black/80 font-inter">
            Join the premier tech club at VIT Bhopal. We host workshops, build projects, and help you land your dream tech role.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Button variant="primary" size="lg">
              Become a Member <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="pt-32 pb-24 bg-bg-light rounded-t-[3rem] z-0 relative">
        <div className="container mx-auto px-4 pt-12">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-6xl md:text-8xl font-black mb-4">How it works</h2>
            <p className="text-2xl font-bold font-inter text-brand-purple transform -rotate-2">
              Your journey into tech starts here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-6xl mx-auto">
            <Card color="cyan" className="transform md:rotate-[-2deg] md:translate-y-8 z-10">
              <span className="font-space-grotesk font-black text-xl mb-8 text-center block">Step #1</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-none mt-auto">Learn new skills</h3>
              <p className="font-bold text-lg leading-tight">
                From web development to AI, we host workshops that take you from zero to one.
              </p>
            </Card>
            
            <Card color="pink" className="transform md:rotate-[1deg] md:-translate-y-4 z-20 shadow-xl">
              <span className="font-space-grotesk font-black text-xl mb-8 text-center block">Step #2</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-none mt-auto">Build your project</h3>
              <p className="font-bold text-lg leading-tight">
                Apply your knowledge by building real-world projects in our hackathons.
              </p>
            </Card>

            <Card color="yellow" className="transform md:rotate-[3deg] md:translate-y-12 z-30 shadow-xl">
              <span className="font-space-grotesk font-black text-xl mb-8 text-center block">Step #3</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-none mt-auto">Check your network</h3>
              <p className="font-bold text-lg leading-tight">
                Join a community of like-minded builders. Network with seniors and alumni.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}