import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The AI SDR has been a game-changer for our sales team. We've seen a 40% increase in qualified meetings and our reps can focus on closing deals instead of chasing leads.",
    name: "Sarah Johnson",
    title: "VP of Sales, TechCorp",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    id: 2,
    quote: "We implemented the AI SDR solution last quarter and our response time dropped from 3 hours to seconds. The quality of conversations has been impressive - prospects often don't realize they're chatting with an AI.",
    name: "Michael Chen",
    title: "Sales Operations Manager, GrowthX",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    id: 3,
    quote: "As a startup with limited resources, the AI SDR has allowed us to scale our sales efforts without expanding headcount. The ROI has been incredible.",
    name: "Alex Rivera",
    title: "Founder & CEO, LaunchPad",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4
  }
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[activeIndex];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Sales Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers are saying about their experience with our AI SDR solution.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-6 w-6 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-800 italic mb-8">
                "{currentTestimonial.quote}"
              </blockquote>
              
              <div className="flex items-center flex-col">
                <img 
                  src={currentTestimonial.avatar} 
                  alt={currentTestimonial.name} 
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
                  <div className="text-gray-500">{currentTestimonial.title}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;