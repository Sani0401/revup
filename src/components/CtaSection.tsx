import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of sales teams already using our AI SDR to engage leads, book more meetings, and close more deals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-colors duration-200">
              Get Started
            </button>
            <button className="bg-transparent text-white border border-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-colors duration-200 flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/20 text-white/70 text-sm">
            <p>No credit card required. Free 14-day trial available.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;