import { useEffect, useState } from "react";

const StatsSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative py-20 px-6 md:px-12 bg-secondary min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"
        style={{
          transform: `translateY(${scrollY * -0.3}px) scale(1.1)`
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin font-manrope text-secondary-foreground leading-tight">
              From offline ideas to online reality,<br />
              I build <span className="text-primary">scalable web solutions</span> that help
              <span className="text-muted-foreground">
                 {" "}businesses and individuals succeed in the digital world.
              </span>
            </h2>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/assets/animated-dev-visual.gif"
              alt="Modern web development and coding visualization"
              className="w-full max-w-lg rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-thin font-manrope text-secondary-foreground">
              6+
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Full-stack projects built
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-thin font-manrope text-secondary-foreground">
              2
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Industry internships
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-thin font-manrope text-secondary-foreground">
              2+
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Client websites delivered
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-thin font-manrope text-secondary-foreground">
              MERN
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Stack specialization
            </p>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "RESTful APIs", "AWS & Netlify"].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;