import { Card } from "@/components/ui/Card";

export function HowItWorks() {
  return (
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
  );
}
