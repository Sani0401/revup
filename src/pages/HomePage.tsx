import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Calendar, BarChart } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import MetricsPreview from '../components/MetricsPreview';
import TestimonialSection from '../components/TestimonialSection';
import FeaturesHighlight from '../components/FeaturesHighlight';
import CtaSection from '../components/CtaSection';

const HomePage: React.FC = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">87%</p>
              <p className="text-gray-600">Lead Response Rate</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-gray-600">Availability</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">3x</p>
              <p className="text-gray-600">Meeting Conversion</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">60%</p>
              <p className="text-gray-600">Time Saved for SDRs</p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesHighlight />
      
      <MetricsPreview />
      
      <TestimonialSection />
      
      <CtaSection />
    </div>
  );
};

export default HomePage;