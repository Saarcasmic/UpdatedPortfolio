import { useState, useEffect } from "react";

const AboutCoachSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      text: "My coaching blends physical training and mental strategies, helping athletes build strength and confidence to overcome their limits.",
      image: "/lovable-uploads/b1c90909-f058-478c-9d83-e86e8a037459.png",
      alt: "Coach Training Session"
    },
    {
      text: "Together, we'll break barriers and unlock your potential, turning every milestone into a victory through personalized coaching.",
      image: "/lovable-uploads/a008ca1f-63ac-40ee-9ef5-dc4525c11f38.png",
      alt: "Athlete Victory"
    },
    {
      text: "I started my triathlon journey struggling with balance and technique. Now, I guide others to achieve their full potential.",
      image: "/lovable-uploads/164e92c8-6bbc-4d32-b5d6-4644eb1c380a.png",
      alt: "Coach Portrait"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentContent = slides[currentSlide];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center min-h-[80vh]">
          {/* Text Content - Fades in and out */}
          <div className="space-y-8">
            <p className={`text-white text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed transition-all duration-300 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              {currentContent.text}
            </p>
          </div>

          {/* Image - Fades in and out */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[300px] md:w-[400px] lg:w-[500px] rounded-2xl overflow-hidden">
              <img
                src={currentContent.image}
                alt={currentContent.alt}
                className={`w-full h-full object-cover transition-all duration-300 ease-out ${
                  isVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoachSection;