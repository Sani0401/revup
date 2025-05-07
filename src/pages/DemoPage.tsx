import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Calendar, Bot, RefreshCw } from 'lucide-react';

// Demo chat data
const initialMessages = [
  {
    id: 1,
    sender: 'ai',
    message: "👋 Hi there! I'm your AI Sales Assistant. How can I help you today?",
    timestamp: new Date(Date.now() - 120000).toISOString()
  }
];

// AI responses for the demo
const aiResponses = {
  greeting: "Thanks for reaching out! I'd be happy to tell you more about our AI SDR solution. What specific challenges are you facing with your sales process?",
  pricing: "Our pricing starts at $499/month for small teams (up to 5 sales reps) and scales based on volume. For enterprise solutions, we offer custom pricing. Would you like me to arrange a call with our sales team to discuss a tailored solution?",
  features: "Our AI SDR solution includes 24/7 lead engagement, intelligent qualification, automated scheduling, CRM integration, and detailed analytics. Is there a specific feature you'd like to learn more about?",
  demo: "I'd be happy to schedule a personalized demo with one of our product specialists. What time works best for you? I can check our calendar for available slots.",
  company: "Great question! Our company has been helping sales teams automate their processes since 2022. We work with over 500 companies across various industries. What industry is your company in?",
  schedule: "Perfect! I've found some available slots for a demo. How about any of these times:\n\n• Tomorrow at 10:00 AM\n• Tomorrow at 2:00 PM\n• Thursday at 11:00 AM\n\nWhich would work best for you?",
  confirm: "Excellent! I've scheduled a demo for tomorrow at 2:00 PM with Alex, our Senior Solutions Consultant. You'll receive a calendar invite shortly with all the details. Is there anything specific you'd like covered in the demo?",
  thanks: "You're welcome! I've made a note to cover pricing, features, and integration during your demo. Is there anything else you'd like to know before your call tomorrow?",
  bye: "Thank you for your interest in our AI SDR solution! I look forward to having you meet with Alex tomorrow. If you have any other questions in the meantime, feel free to reach out. Have a great day!"
};

// Determine which AI response to use based on user message
const getAIResponse = (message: string) => {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('pricing') || lowerMsg.includes('cost') || lowerMsg.includes('price')) {
    return aiResponses.pricing;
  } else if (lowerMsg.includes('features') || lowerMsg.includes('what') || lowerMsg.includes('can')) {
    return aiResponses.features;
  } else if (lowerMsg.includes('demo') || lowerMsg.includes('show')) {
    return aiResponses.demo;
  } else if (lowerMsg.includes('company') || lowerMsg.includes('about')) {
    return aiResponses.company;
  } else if (lowerMsg.includes('schedule') || lowerMsg.includes('book') || lowerMsg.includes('meeting') || lowerMsg.includes('call')) {
    return aiResponses.schedule;
  } else if (lowerMsg.includes('2:00') || lowerMsg.includes('2 pm') || lowerMsg.includes('tomorrow') || lowerMsg.includes('works')) {
    return aiResponses.confirm;
  } else if (lowerMsg.includes('thank')) {
    return aiResponses.thanks;
  } else if (lowerMsg.includes('bye') || lowerMsg.includes('goodbye')) {
    return aiResponses.bye;
  } else {
    return aiResponses.greeting;
  }
};

interface Message {
  id: number;
  sender: 'user' | 'ai';
  message: string;
  timestamp: string;
}

const DemoPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showScheduled, setShowScheduled] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    const newUserMessage = {
      id: messages.length + 1,
      sender: 'user' as const,
      message: inputValue,
      timestamp: new Date().toISOString()
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // If user message contains "schedule" or "2:00 PM", show calendar confirmation
    if (inputValue.toLowerCase().includes('2:00') || inputValue.toLowerCase().includes('2 pm')) {
      setTimeout(() => {
        setShowScheduled(true);
      }, 3000);
    }
    
    // Simulate AI thinking and responding
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai' as const,
        message: getAIResponse(inputValue),
        timestamp: new Date().toISOString()
      };
      
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };
  
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Try Our AI SDR Demo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience how our AI engages with leads, answers questions, and schedules meetings, just like it would with your real prospects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-primary/5 p-4 border-b border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Sales Assistant</h3>
                    <p className="text-sm text-primary">Online now</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 h-[400px] overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] p-3 rounded-lg ${
                          msg.sender === 'user' 
                            ? 'bg-primary/10 text-gray-800' 
                            : 'bg-white text-gray-800 border border-gray-100 shadow-sm'
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{msg.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{formatTime(msg.timestamp)}</p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] p-3 rounded-lg bg-white text-gray-800 border border-gray-100 shadow-sm">
                        <div className="flex space-x-2 items-center h-6">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-100 bg-white">
                <div className="flex items-center">
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..." 
                    className="flex-grow border border-gray-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button 
                    onClick={handleSendMessage}
                    disabled={isTyping || inputValue.trim() === ''}
                    className={`ml-2 bg-primary text-white rounded-full p-2 ${
                      isTyping || inputValue.trim() === '' 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-primary-dark'
                    }`}
                  >
                    {isTyping ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-500 text-center">
                  Try asking about pricing, features, or scheduling a demo.
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" /> 
                  Meeting Scheduler
                </h3>
                
                {showScheduled ? (
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                      <div className="font-medium mb-1">Meeting Confirmed!</div>
                      <p className="text-sm">Demo with Alex, Senior Solutions Consultant</p>
                      <p className="text-sm font-medium mt-2">Tomorrow at 2:00 PM (30 min)</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      Calendar invite sent to your email with Zoom details.
                    </p>
                    <button className="text-primary text-sm flex items-center">
                      <RefreshCw size={14} className="mr-1" /> Reschedule
                    </button>
                  </div>
                ) : (
                  <div className="text-gray-500 text-sm space-y-2">
                    <p>No meetings scheduled yet.</p>
                    <p>Chat with our AI to book a demo or consultation.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="font-semibold text-lg mb-4">Chat Suggestions</h3>
                <div className="space-y-2">
                  <button 
                    onClick={() => setInputValue("What are the key features of your AI SDR?")}
                    className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    What are the key features of your AI SDR?
                  </button>
                  <button 
                    onClick={() => setInputValue("How much does your solution cost?")}
                    className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    How much does your solution cost?
                  </button>
                  <button 
                    onClick={() => setInputValue("Can I schedule a demo to see it in action?")}
                    className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    Can I schedule a demo to see it in action?
                  </button>
                  <button 
                    onClick={() => setInputValue("Tomorrow at 2:00 PM works for me.")}
                    className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    Tomorrow at 2:00 PM works for me.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;