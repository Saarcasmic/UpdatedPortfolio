import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const testimonials = [
    {
      text: "The difference between training on your own and with an expert coach is huge. I've never felt more confident and prepared for my races.",
      author: "David Thompson",
      role: "Architect",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      text: "Professional coaching made all the difference. I went from struggling to finish races to actually competing for podium positions.",
      author: "Mike Rodriguez",
      role: "Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      text: "The race strategy development was game-changing. I finally learned how to pace myself properly and execute perfect race plans.",
      author: "Emma Chen",
      role: "Teacher",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentReview = testimonials[currentTestimonial];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className={`transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-black mb-8 max-w-3xl mx-auto">
            "{currentReview.text}"
          </blockquote>

          {/* Author */}
          <div className="mb-8">
            <p className="text-black font-medium text-lg">
              {currentReview.author}, {currentReview.role}
            </p>
          </div>

          {/* Avatar indicators */}
          <div className="flex justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'ring-4 ring-primary ring-offset-2 scale-110' 
                    : 'opacity-60 scale-100'
                }`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;