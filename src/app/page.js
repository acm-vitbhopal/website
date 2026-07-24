import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-4 border-brand-black bg-brand-yellow">
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-48 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 max-w-5xl leading-none">
            BUILDING THE <span className="text-brand-blue">FUTURE</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl">
            We are the official ACM student chapter of VIT Bhopal. We build, we learn, and we break things (sometimes on purpose).
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">Become a Member</Button>
            <Button variant="outline" size="lg" className="bg-white">View Upcoming Events</Button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16">
            HOW WE WORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card color="yellow">
              <h3 className="text-3xl font-space-grotesk font-black mb-4">Learn.</h3>
              <p className="font-bold text-lg mb-6 flex-1">
                From web development to artificial intelligence, we host workshops that take you from zero to one.
              </p>
              <div className="mt-auto">
                <Button variant="primary" className="w-full">View Resources</Button>
              </div>
            </Card>
            
            <Card color="blue" className="md:-translate-y-4">
              <h3 className="text-3xl font-space-grotesk font-black mb-4 text-white">Build.</h3>
              <p className="font-bold text-lg mb-6 flex-1 text-white">
                Apply your knowledge by building real-world projects. We run hackathons and open-source initiatives.
              </p>
              <div className="mt-auto">
                <Button variant="secondary" className="w-full">View Projects</Button>
              </div>
            </Card>

            <Card color="purple">
              <h3 className="text-3xl font-space-grotesk font-black mb-4 text-white">Connect.</h3>
              <p className="font-bold text-lg mb-6 flex-1 text-white">
                Join a community of like-minded builders. Network with seniors, alumni, and industry professionals.
              </p>
              <div className="mt-auto">
                <Button variant="secondary" className="w-full">Meet the Team</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}