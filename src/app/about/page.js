export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F4F8FC]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-6 mb-8">
              <h1 className="text-5xl lg:text-6xl font-black text-[#0B2A4A]">
                ABOUT
              </h1>
              <div className="flex-1 h-[3px] bg-[#0B2A4A]" />
            </div>

            <p className="text-lg leading-9 text-slate-700 max-w-xl">
              ACM Student Chapter at VIT Bhopal is a vibrant community where
              passionate developers, designers, innovators and problem-solvers
              collaborate to learn, build and shape the future of technology.
            </p>

            <button className="mt-10 px-8 py-4 rounded-full bg-[#0B2A4A] text-white font-semibold">
              Join Our Community →
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div>
              <h2 className="text-7xl lg:text-8xl font-black leading-none text-[#0B2A4A]">
                BUILD.
              </h2>
              <h2 className="text-7xl lg:text-8xl font-black leading-none text-[#0B2A4A]">
                LEARN.
              </h2>
              <h2 className="text-7xl lg:text-8xl font-black leading-none text-[#0B2A4A]">
                LEAD.
              </h2>
            </div>
          </div>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="uppercase tracking-widest text-blue-600 font-semibold">
              ABOUT ACM VIT BHOPAL
            </span>

            <h2 className="text-5xl font-black text-[#0B2A4A] mt-4 mb-6">
              Empowering Future Innovators
            </h2>

            <p className="text-lg text-slate-600 leading-8">
              The ACM Student Chapter at VIT Bhopal brings together students
              passionate about programming, AI, cybersecurity, web development,
              and innovation. Through workshops, hackathons, technical talks,
              and collaborative projects, we help students grow technically and
              professionally.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-4xl font-black text-[#0B2A4A]">250+</h3>
              <p className="mt-2 text-slate-600">Active Members</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-4xl font-black text-[#0B2A4A]">40+</h3>
              <p className="mt-2 text-slate-600">Technical Events</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-4xl font-black text-[#0B2A4A]">15+</h3>
              <p className="mt-2 text-slate-600">Projects Built</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-4xl font-black text-[#0B2A4A]">100%</h3>
              <p className="mt-2 text-slate-600">Learning Driven</p>
            </div>

          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-black text-[#0B2A4A]">
            What We Do
          </h2>

          <p className="text-slate-600 mt-4 text-lg">
            Creating opportunities to learn, innovate, and collaborate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-2xl font-bold text-[#0B2A4A]">
              Workshops
            </h3>
            <p className="text-slate-600 mt-3">
              Hands-on sessions on modern technologies and programming.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-[#0B2A4A]">
              Hackathons
            </h3>
            <p className="text-slate-600 mt-3">
              Build real-world projects while competing with talented peers.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-[#0B2A4A]">
              Projects
            </h3>
            <p className="text-slate-600 mt-3">
              Work on impactful open-source and chapter initiatives.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-[#0B2A4A]">
              Community
            </h3>
            <p className="text-slate-600 mt-3">
              Connect with developers, mentors, and industry experts.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto bg-[#0B2A4A] rounded-[40px] p-16 text-center text-white">

          <h2 className="text-5xl font-black">
            Ready to Build the Future?
          </h2>

          <p className="mt-6 text-xl text-blue-100">
            Join ACM VIT Bhopal and become part of a community that learns,
            creates, and grows together.
          </p>

          <button className="mt-10 bg-white text-[#0B2A4A] px-10 py-4 rounded-full font-bold text-lg">
            Become a Member
          </button>

        </div>

      </section>

    </main>
  );
}