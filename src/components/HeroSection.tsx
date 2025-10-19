import { ArrowRight, Star, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/drjwqvvhz/video/upload/v1760889691/Seamless_Cinematic_Montage_Generation_qmjwgi.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 px-6 md:px-12 py-4 bg-black/30 backdrop-blur-sm">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo - Left aligned with hero content */}
          <div className="text-xl font-thin font-manrope text-foreground">
            TriPerform
          </div>
          
          {/* Centered Nav Items */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground font-thin font-manrope">Perform</a>
            <a href="#" className="text-foreground font-thin font-manrope hover:text-foreground/80 transition-colors">Coaching</a>
            <a href="#" className="text-foreground font-thin font-manrope hover:text-foreground/80 transition-colors">Reviews</a>
            <a href="#" className="text-foreground font-thin font-manrope hover:text-foreground/80 transition-colors">About</a>
            <a href="#" className="text-foreground font-thin font-manrope hover:text-foreground/80 transition-colors">Contact</a>
          </div>
          
          {/* Right Button */}
          <Button variant="nav" size="sm">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-80px)] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full max-w-7xl mx-auto">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            {/* Label */}
            <div className="flex items-center space-x-3">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-xs uppercase tracking-wide text-foreground font-medium">
                Experienced triathlon coach
              </span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-thin font-manrope text-foreground leading-tight">
                Level Up Your
              </h1>
              <h1 className="text-5xl md:text-7xl font-thin font-manrope text-foreground leading-tight">
                Performance
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-foreground max-w-2xl leading-relaxed font-light">
              Improve your triathlon performance with personalized training plans guided by an experienced coach committed to your success.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-zinc-900 w-fit border-zinc-800 border-[1px] text-white p-1 pl-4 text-sm rounded-full font-medium flex items-center gap-2 hover:scale-105 transition">
                Start now <span className="bg-white p-2 rounded-full">
                  <MoveUpRight className="w-4 h-4 text-black" />
                </span>
              </button>
            </div>

          </div>

          {/* Right side - empty for video background visibility */}
          <div className="lg:col-span-2"></div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;