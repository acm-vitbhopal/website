import { Button } from "@/components/ui/Button";
export default function TeamPage() {const executiveBoard = [
  {
    name: "Member Name",
    role: "Chairperson",
  },
  {
    name: "Member Name",
    role: "Vice Chairperson",
  },
  {
    name: "Member Name",
    role: "Secretary",
  },
  {
    name: "Member Name",
    role: "Treasurer",
  },
];const coreTeam = [
  { name: "Member Name", role: "Technical Lead" },
  { name: "Member Name", role: "Frontend Lead" },
  { name: "Member Name", role: "Backend Lead" },
  { name: "Member Name", role: "AI/ML Lead" },
  { name: "Member Name", role: "Design Lead" },
  { name: "Member Name", role: "Content Lead" },
];
  return (
    <main className="min-h-screen bg-bg-light">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            ACM VIT BHOPAL
          </p>

          <h1 className="text-5xl lg:text-7xl font-black text-brand-navy mt-6">
            Meet Our Team
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-600 leading-8">
            Meet the passionate individuals who lead ACM VIT Bhopal,
            organize technical events, build innovative projects,
            and create an amazing community for students.
          </p>

        </div>

      </section>{/* FACULTY COORDINATORS */}

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

  <div className="text-center mb-12">
    <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
      Leadership
    </p>

    <h2 className="text-4xl lg:text-5xl font-black text-brand-navy mt-4">
      Faculty Coordinators
    </h2>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-white brutal-border brutal-shadow p-8 text-center">

      <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-6"></div>

      <h3 className="text-2xl font-bold text-brand-navy">
        Dr. Faculty Name
      </h3>

      <p className="text-blue-600 mt-2">
        Faculty Coordinator
      </p>

      <p className="text-slate-600 mt-6">
        Guiding ACM VIT Bhopal towards innovation,
        technical excellence, and student growth.
      </p>

    </div>

    <div className="bg-white brutal-border brutal-shadow p-8 text-center">

      <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-6"></div>

      <h3 className="text-2xl font-bold text-brand-navy">
        Dr. Faculty Name
      </h3>

      <p className="text-blue-600 mt-2">
        Faculty Coordinator
      </p>

      <p className="text-slate-600 mt-6">
        Supporting students through mentorship,
        research, and professional development.
      </p>

    </div>

  </div>

</section>{/* EXECUTIVE BOARD */}

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

  <div className="text-center mb-12">

    <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
      Student Leadership
    </p>

    <h2 className="text-5xl font-black text-brand-navy mt-4">
      Executive Board
    </h2>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {executiveBoard.map((member, index) => (

      <div
        key={index}
        className="bg-white brutal-border brutal-shadow p-8 text-center hover:-translate-y-2 transition duration-300"
      >

        <div className="w-28 h-28 rounded-full bg-slate-200 mx-auto mb-6"></div>

        <h3 className="text-2xl font-bold text-brand-navy">
          {member.name}
        </h3>

        <p className="text-blue-600 mt-2">
          {member.role}
        </p>

      </div>

    ))}

  </div>

</section>

{/* CORE TEAM */}

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

  <div className="text-center mb-12">

    <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
      Team
    </p>

    <h2 className="text-5xl font-black text-brand-navy mt-4">
      Core Team
    </h2>

    <p className="text-slate-600 mt-4">
      The passionate students who make ACM events and initiatives successful.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {coreTeam.map((member, index) => (

      <div
        key={index}
        className="bg-white brutal-border brutal-shadow p-8 text-center hover:-translate-y-2 transition duration-300"
      >

        <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto mb-5"></div>

        <h3 className="text-xl font-bold text-brand-navy">
          {member.name}
        </h3>

        <p className="text-blue-600 mt-2">
          {member.role}
        </p>

      </div>

    ))}

  </div>

</section>

{/* JOIN CTA */}

<section className="py-24 px-6">

  <div className="max-w-5xl mx-auto bg-brand-navy brutal-border brutal-shadow p-16 text-center text-white">

    <h2 className="text-5xl font-black">
      Want to Join ACM?
    </h2>

    <p className="mt-6 text-xl text-blue-100">
      Become a part of a community of passionate developers, innovators,
      and problem-solvers. Learn, collaborate, and grow with ACM VIT Bhopal.
    </p>

    <Button className="mt-10">
  Join Our Community →
</Button>

  </div>

</section>

</main>
  );
}
