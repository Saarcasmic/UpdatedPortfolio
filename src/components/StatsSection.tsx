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
              From beginners to seasoned pros,<br />
              I create <span className="text-primary">custom plans</span> tailored to help you
              <span className="text-muted-foreground">
                 {" "}unlock your full potential and succeed in races.
              </span>
            </h2>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/45eae8c2-c5d5-4e05-9f8f-43d1c7bcc5ea.png"
              alt="Triathlon coach providing guidance"
              className="w-full max-w-lg rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-thin font-manrope text-secondary-foreground">
              15+
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Years of experience
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-thin font-manrope text-secondary-foreground">
              200+
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Athletes coached
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-thin font-manrope text-secondary-foreground">
              500+
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Race strategies
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-thin font-manrope text-secondary-foreground">
              10,000+
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Training hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;