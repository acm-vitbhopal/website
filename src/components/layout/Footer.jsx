import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto brutal-border border-x-0 border-b-0 bg-brand-navy text-brand-off-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-space-grotesk text-4xl font-black tracking-tighter block mb-4">
              ACM<span className="text-brand-light-blue">.</span>VITB
            </Link>
            <p className="font-bold max-w-sm text-brand-off-white/80">
              The official student chapter of the Association for Computing Machinery at VIT Bhopal.
            </p>
          </div>

          <div>
            <h3 className="font-space-grotesk font-bold text-xl mb-4">Links</h3>
            <ul className="space-y-2 font-bold">
              <li><Link href="/about" className="hover:underline underline-offset-4 text-brand-off-white/80 hover:text-brand-light-blue">About Us</Link></li>
              <li><Link href="/events" className="hover:underline underline-offset-4 text-brand-off-white/80 hover:text-brand-light-blue">Events</Link></li>
              <li><Link href="/team" className="hover:underline underline-offset-4 text-brand-off-white/80 hover:text-brand-light-blue">Team</Link></li>
              <li><Link href="/projects" className="hover:underline underline-offset-4 text-brand-off-white/80 hover:text-brand-light-blue">Projects</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-space-grotesk font-bold text-xl mb-4">Socials</h3>
            <ul className="space-y-2 font-bold">
              <li><a href="https://instagram.com/acmvitbhopal" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 text-brand-off-white/80 hover:text-brand-light-blue">Instagram</a></li>
              <li><a href="https://linkedin.com/company/acmvitbhopal" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 text-brand-off-white/80 hover:text-brand-light-blue">LinkedIn</a></li>
              <li><a href="https://github.com/acm-vitbhopal" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 text-brand-off-white/80 hover:text-brand-light-blue">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-brand-blue/40 flex flex-col md:flex-row justify-between items-center gap-4 font-bold text-sm text-brand-off-white/70">
          <p>© {year} ACM VIT Bhopal. All rights reserved.</p>
          <p>Built with 💙 by the ACM VIT Bhopal Tech Team</p>
        </div>
      </div>
    </footer>
  );
}
