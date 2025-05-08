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
              <div className="space-y-4 mb-6">
                <p className="text-lg font-medium text-gray-800">
                  Aaron, the Inbound SDR
                </p>
                <p className="text-gray-600">
                  Aaron handles every form submission or demo request instantly, qualifying and routing leads to the right human, so your reps can stay focused on selling.
                </p>
                <img 
                  src="https://www.artisan.co/_next/image?url=%2Fassets%2Faaron.webp&w=1080&q=75" 
                  alt="Aaron, the Inbound SDR" 
                  className="rounded-lg"
                />
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Responds in real-time to form fills and calendar bookings</li>
                <li>Uses routing logic to send the right leads to the right reps</li>
                <li>Applies qualification filters to eliminate noise</li>
                <li>Frees your team from manual lead triage and follow-up</li>
              </ul>
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