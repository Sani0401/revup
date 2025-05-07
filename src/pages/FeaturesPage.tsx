import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Clock, Calendar, BarChart2, RefreshCw, Shield, Zap, Workflow } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      title: 'Natural Conversations',
      description: 'Our AI engages in human-like conversations, adapting tone and style to your brand voice and the context of each interaction.',
      details: [
        'Contextual understanding of prospect needs',
        'Industry-specific vocabulary and knowledge',
        'Personalized responses based on prospect data',
        'Multi-turn conversation capabilities'
      ]
    },
    {
      id: 2,
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: '24/7 Lead Engagement',
      description: 'Never miss an opportunity again with instant response to inbound leads, regardless of time zone or business hours.',
      details: [
        'Immediate response to web inquiries',
        'After-hours lead qualification',
        'Weekend and holiday coverage',
        'Multi-channel engagement (chat, email, forms)'
      ]
    },
    {
      id: 3,
      icon: <Workflow className="h-12 w-12 text-primary" />,
      title: 'Intelligent Qualification',
      description: 'Automatically qualify leads using your defined criteria for fit, intent, budget, authority, need, and timing.',
      details: [
        'Customizable qualification frameworks',
        'Progressive questioning techniques',
        'Automatic lead scoring and routing',
        'Objection handling capabilities'
      ]
    },
    {
      id: 4,
      icon: <Calendar className="h-12 w-12 text-primary" />,
      title: 'Seamless Scheduling',
      description: 'Book meetings directly into your sales team\'s calendars with real-time availability checking and confirmation.',
      details: [
        'Calendar integration (Google, Outlook, etc.)',
        'Timezone detection and adjustment',
        'Meeting rescheduling and cancellation',
        'Pre-meeting preparation materials'
      ]
    },
    {
      id: 5,
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: 'CRM Integration',
      description: 'Automatically sync all conversations, qualifications, and meetings with your CRM system for complete visibility.',
      details: [
        'Bi-directional sync with major CRMs',
        'Automatic contact creation and enrichment',
        'Activity logging and notes',
        'Custom field mapping and workflows'
      ]
    },
    {
      id: 6,
      icon: <BarChart2 className="h-12 w-12 text-primary" />,
      title: 'Performance Analytics',
      description: 'Gain insights into your sales funnel with detailed metrics on engagement, qualification, and conversion rates.',
      details: [
        'Conversion funnel visualization',
        'Response time and engagement metrics',
        'Qualification rate analytics',
        'A/B testing of conversation approaches'
      ]
    },
    {
      id: 7,
      icon: <RefreshCw className="h-12 w-12 text-primary" />,
      title: 'Continuous Learning',
      description: 'The AI improves over time by learning from outcomes, feedback, and the evolving patterns in your sales data.',
      details: [
        'Feedback loop from AE outcomes',
        'Automated performance optimization',
        'Regular model updates',
        'Learning from successful conversations'
      ]
    },
    {
      id: 8,
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: 'Enterprise Security',
      description: 'Protect your customer data with SOC 2 compliance, encryption, and robust security protocols.',
      details: [
        'SOC 2 Type II compliance',
        'End-to-end encryption',
        'GDPR and CCPA compliance',
        'Role-based access controls'
      ]
    }
  ];
  
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Sales Teams
          </h1>
          <p className="text-xl text-gray-600">
            Discover how our AI SDR can transform your sales process with these powerful capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-8">
                <div className="mb-6 bg-primary/10 p-4 rounded-full inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to see it in action?
              </h2>
              <p className="text-gray-600 mb-6">
                Experience how our AI SDR can transform your sales process with a personalized demo tailored to your business.
              </p>
              <Link 
                to="/demo" 
                className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full transition-colors duration-200 inline-block"
              >
                Try the Demo
              </Link>
            </div>
            <div className="relative p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded p-3 max-w-[80%]">
                    <p className="text-sm">Hello! I'm interested in learning more about your services.</p>
                  </div>
                  <div className="bg-primary/10 rounded p-3 max-w-[80%] ml-auto">
                    <p className="text-sm">Hi there! I'd be happy to tell you more about our AI SDR solution. What specific challenges are you facing with your sales process?</p>
                  </div>
                  <div className="bg-gray-100 rounded p-3 max-w-[80%]">
                    <p className="text-sm">We're struggling with response times for inbound leads.</p>
                  </div>
                  <div className="bg-primary/10 rounded p-3 max-w-[80%] ml-auto">
                    <p className="text-sm">That's a common challenge! Our AI SDR responds instantly to inbound leads 24/7, reducing response time from hours to seconds. Would you like to schedule a quick demo to see how it works?</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg transform rotate-2 scale-105 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      <CtaSection />
    </div>
  );
};

export default FeaturesPage;