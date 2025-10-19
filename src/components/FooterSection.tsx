import { MoveUpRight } from "lucide-react";

function FooterSection() {
  return (
    <footer className="bg-black text-zinc-200 pb-16 px-4 md:px-0 z-20">
      <div className="relative min-h-[500px] flex items-center justify-center mb-12 ">
        <img src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="training plans" className="w-full h-full object-cover rounded-lg absolute top-0 left-0" />

        <div className="absolute top-0 left-0 w-full h-full bg-black/50"/>

        <div className="max-w-5xl mx-auto flex  flex-col items-center justify-center z-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6 leading-snug text-zinc-200 text-center">
              Ready to Achieve your goals?
            </h2>
            <p className="text-zinc-400 text-sm mb-4 max-w-xs text-center">
              I'm here to help you every step of the way.
            </p>
            <button className="bg-white text-black p-1 pl-4 text-sm rounded-full font-medium flex items-center gap-2 hover:scale-105 transition">
              Start now <span className="bg-black p-2 rounded-full">
                <MoveUpRight className="w-4 h-4 text-white" />
              </span>
            </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left: Logo and description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            
            <span className="font-light text-lg">TriPerform</span>
          </div>
          <p className="text-zinc-400 text-sm mb-4 max-w-xs">
            Improve your triathlon performance with personalized training plans guided by an experienced coach committed to your success.
          </p>
          <div className="text-xs text-zinc-500">Created by <span className="underline">Sebadam</span></div>
        </div>
        {/* Center: Navigation */}
        <div>
          <div className="font-light mb-4">Sections</div>
          <ul className="space-y-2 text-zinc-400 text-sm font-light">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#coaching" className="hover:text-white transition">Coaching</a></li>
            <li><a href="#reviews" className="hover:text-white transition">Reviews</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        {/* Right: Socials */}
        <div>
          <div className="font-light mb-4">Socials</div>
          <ul className="space-y-2 text-zinc-400 text-sm font-light">
            <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition">TikTok</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;