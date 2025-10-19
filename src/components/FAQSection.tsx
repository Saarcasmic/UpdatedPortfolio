import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What kind of training plans do you offer?",
    answer: "I offer personalized triathlon training plans for all levels, including swim, bike, run, and strength sessions tailored to your goals.",
  },
  {
    question: "How do I know if I'm ready to start training for a triathlon?",
    answer: "If you're motivated and willing to commit to regular training, I can help you prepare for your first or next triathlon, regardless of your starting point.",
  },
  {
    question: "Can I train with you if I'm not local?",
    answer: "Absolutely! I work with athletes remotely using online tools, regular check-ins, and feedback.",
  },
  {
    question: "How often will I train, and how long are the sessions?",
    answer: "Training frequency and session length are customized to your schedule, goals, and experience. Most athletes train 4-6 days per week.",
  },
  {
    question: "What equipment do I need to get started?",
    answer: "Basic swim, bike, and run gear is all you need to begin. I'll help you with recommendations as you progress.",
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-4 md:px-0">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="text-gray-400 mb-2 text-base">FAQ</div>
        <h2 className="text-4xl md:text-6xl font-light mb-8 text-black">Everything you need to know</h2>
      </div>
      <div className="max-w-2xl mx-auto flex flex-col gap-2">
        {faqs.map((faq, idx) => (
          <div key={faq.question}>
            <button
              className="w-full flex items-center justify-between text-left py-6 px-4 md:px-8 border-b border-zinc-200 focus:outline-none group"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span className="text-lg md:text-xl font-light text-black">{faq.question}</span>
              <span className="ml-4">
                {openIdx === idx ? (
                  <Minus className="w-6 h-6 text-zinc-400" />
                ) : (
                  <Plus className="w-6 h-6 text-zinc-400" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-4 md:px-8 pb-6 text-zinc-600 text-base text-left">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;