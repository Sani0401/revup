import React from 'react';
import { Clock, Calendar, Bot, BarChart, RefreshCw, Shield } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: '24/7 Lead Engagement',
    description: 'Respond to inbound leads instantly, any time of day or night, ensuring no opportunity is ever missed.'
  },
  {
    id: 2,
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'Intelligent Qualification',
    description: 'Automatically qualify leads using customizable criteria for fit, intent, budget, and timing.'
  },
  {
    id: 3,
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: 'Automated Scheduling',
    description: 'Book meetings directly into your sales team\'s calendars with seamless integration and real-time availability.'
  },
  {
    id: 4,
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Performance Analytics',
    description: 'Track key metrics and conversion rates with detailed dashboards and actionable insights.'
  },
  {
    id: 5,
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
    title: 'Continuous Learning',
    description: 'The AI improves over time based on feedback and outcomes, constantly enhancing performance.'
  },
  {
    id: 6,
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Secure Integration',
    description: 'Seamlessly connect with your existing CRM, email, and calendar systems with enterprise-grade security.'
  }
];

const FeaturesHighlight: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Sales Teams
          </h2>
          <p className="text-xl text-gray-600">
            Our AI SDR comes packed with everything you need to streamline your sales process and convert more leads.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 bg-primary/10 p-3 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlight;