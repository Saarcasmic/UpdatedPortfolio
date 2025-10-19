import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, MoveUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const CoachingPlans = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);
  const plans = [
    {
      name: "Basic",
      price: "$59",
      period: "/month",
      image: "/lovable-uploads/1f3e6257-5503-4380-ba50-35afe15a92ed.png",
      features: [
        "Free initial consultation",
        "1x per 2 weeks training plan update",
        "1x per 2 weeks training plan update",
        "Weekly checking"
      ]
    },
    {
      name: "Standard",
      price: "$99",
      period: "/month",
      image: "/lovable-uploads/056d32b1-1bb1-4589-a7e4-8b4a3c4893d3.png",
      features: [
        "All of the previous",
        "Development of a specific race strategy",
        "Development of a specific race strategy",
        "Benefits from my partners"
      ]
    },
    {
      name: "Premium",
      price: "$169",
      period: "/month",
      image: "/lovable-uploads/dcc8e07d-c594-40a1-923c-4d93cadeb9a8.png",
      features: [
        "All of the previous",
        "Unlimited plan updates and modifications",
        "Unlimited plan updates and modifications",
        "Working together on mindset for optimal performance"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-white py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-manrope font-thin text-4xl md:text-5xl lg:text-6xl text-center mb-32 text-black">
          Coaching plans
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`sticky top-20 mb-20 transform transition-all duration-1000 ease-out ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-32'
              }`}
              style={{
                zIndex: index + 1,
              }}
            >
              <Card className="bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 min-h-[500px] border-0 rounded-3xl overflow-hidden">
                <div className="flex">
                  <div className="w-[500px] h-[500px] flex-shrink-0 p-8">
                    <img 
                      src={plan.image} 
                      alt={`${plan.name} plan`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  
                  <CardContent className="flex-1 p-12 flex flex-col justify-center">
                    <div className="mb-8">
                      <p className="text-gray-500 text-lg mb-4">
                        {plan.price}{plan.period}
                      </p>
                      <CardTitle className="font-manrope font-thin text-4xl text-black mb-8">
                        {plan.name}
                      </CardTitle>
                    </div>
                    
                    <div className="space-y-6 mb-12">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-4">
                          <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <span className="text-black text-lg leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="bg-zinc-100 w-fit border-zinc-200 border-[1px] text-black p-1 pl-4 text-sm rounded-full font-medium flex items-center gap-2 hover:scale-105 transition">
                      Start now <span className="bg-black p-2 rounded-full">
                        <MoveUpRight className="w-4 h-4 text-white" />
                      </span>
                    </button>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingPlans;