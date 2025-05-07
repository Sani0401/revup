import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Your AI-Powered <span className="text-primary">Sales Development</span> Representative
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Instantly engage, qualify, and schedule meetings with your inbound leads 24/7, boosting conversion rates and saving your team valuable time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/demo" 
                className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full transition-colors duration-200 text-center"
              >
                Try Demo
              </Link>
              <a 
                href="#features" 
                className="bg-white text-primary border border-primary hover:bg-primary/5 font-medium py-3 px-8 rounded-full transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500 flex items-center gap-4">
              <div className="flex -space-x-2">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <span>Trusted by 500+ sales teams worldwide</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">AI</div>
                <div>
                  <h3 className="font-semibold">AI Sales Assistant</h3>
                  <p className="text-sm text-gray-500">Online now</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-800">Hi there! I'm your AI Sales Assistant. How can I help you today?</p>
                  <p className="text-xs text-gray-500 mt-1">10:03 AM</p>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-gray-800">I'm interested in your product. Can you tell me more about pricing?</p>
                  <p className="text-xs text-gray-500 mt-1">10:04 AM</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-800">I'd be happy to discuss our pricing options. We have several plans starting at $99/month. Could you tell me a bit about your company size and needs so I can recommend the best option?</p>
                  <p className="text-xs text-gray-500 mt-1">10:04 AM</p>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-gray-800">We have about 50 employees and are looking for a solution to manage our sales pipeline better.</p>
                  <p className="text-xs text-gray-500 mt-1">10:05 AM</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] animate-pulse">
                  <p className="text-gray-800">Thanks for sharing that! For a team of your size, I'd recommend our Business plan at $199/month which includes...</p>
                </div>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="w-full border border-gray-200 rounded-full py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/30 rounded-full blur-xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;