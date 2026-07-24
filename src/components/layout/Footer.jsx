import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-brand-black bg-brand-purple text-brand-black">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-space-grotesk text-4xl font-black tracking-tighter block mb-4">
              ACM<span className="text-white">.</span>VITB
            </Link>
            <p className="font-bold max-w-sm">
              The official student chapter of the Association for Computing Machinery at VIT Bhopal.
            </p>
          </div>
          
          <div>
            <h3 className="font-space-grotesk font-bold text-xl mb-4">Links</h3>
            <ul className="space-y-2 font-bold">
              <li><Link href="/about" className="hover:underline underline-offset-4">About Us</Link></li>
              <li><Link href="/events" className="hover:underline underline-offset-4">Events</Link></li>
              <li><Link href="/team" className="hover:underline underline-offset-4">Team</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-space-grotesk font-bold text-xl mb-4">Socials</h3>
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:underline underline-offset-4">Instagram</a></li>
              <li><a href="#" className="hover:underline underline-offset-4">LinkedIn</a></li>
              <li><a href="#" className="hover:underline underline-offset-4">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t-2 border-brand-black flex flex-col md:flex-row justify-between items-center gap-4 font-bold text-sm">
          <p>© {new Date().getFullYear()} ACM VIT Bhopal. All rights reserved.</p>
          <p>Built with 💛 by the Tech Team</p>
        </div>
      </div>
    </footer>
  );
}
