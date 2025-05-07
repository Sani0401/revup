import React, { useEffect, useState } from 'react';
import { LineChart, BarChart2, Users, Clock, CalendarCheck } from 'lucide-react';

// Sample data for metrics
const responseTimeData = [3, 2, 1, 0.5, 0.2, 0.1];
const meetingsBookedData = [12, 18, 22, 30, 42, 56];
const conversionRateData = [18, 20, 25, 32, 38, 42];

const MetricsPreview: React.FC = () => {
  const [currentMetric, setCurrentMetric] = useState('responseTime');
  const [animatedValue, setAnimatedValue] = useState(0);
  
  useEffect(() => {
    let target = 0;
    
    if (currentMetric === 'responseTime') target = 0.1;
    else if (currentMetric === 'meetings') target = 56;
    else if (currentMetric === 'conversion') target = 42;
    
    const startValue = animatedValue;
    const duration = 1000;
    const startTime = performance.now();
    
    const animateValue = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = startValue + (target - startValue) * progress;
      
      setAnimatedValue(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animateValue);
      }
    };
    
    requestAnimationFrame(animateValue);
  }, [currentMetric]);
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Track Your Success with Real-Time Analytics
          </h2>
          <p className="text-xl text-gray-600">
            Monitor key performance metrics and see how our AI SDR transforms your sales process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => setCurrentMetric('responseTime')}
              className={`flex items-center p-4 rounded-lg transition-all ${
                currentMetric === 'responseTime' 
                  ? 'bg-white shadow-md border-l-4 border-primary' 
                  : 'bg-gray-100 hover:bg-white hover:shadow-sm'
              }`}
            >
              <div className={`p-2 rounded-full mr-3 ${
                currentMetric === 'responseTime' ? 'bg-primary/10 text-primary' : 'bg-gray-200'
              }`}>
                <Clock size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-900">Average Response Time</h4>
                <p className="text-sm text-gray-500">From 3 min to 0.1 sec</p>
              </div>
            </button>
            
            <button 
              onClick={() => setCurrentMetric('meetings')}
              className={`flex items-center p-4 rounded-lg transition-all ${
                currentMetric === 'meetings' 
                  ? 'bg-white shadow-md border-l-4 border-primary' 
                  : 'bg-gray-100 hover:bg-white hover:shadow-sm'
              }`}
            >
              <div className={`p-2 rounded-full mr-3 ${
                currentMetric === 'meetings' ? 'bg-primary/10 text-primary' : 'bg-gray-200'
              }`}>
                <CalendarCheck size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-900">Meetings Booked</h4>
                <p className="text-sm text-gray-500">Monthly growth in meetings</p>
              </div>
            </button>
            
            <button 
              onClick={() => setCurrentMetric('conversion')}
              className={`flex items-center p-4 rounded-lg transition-all ${
                currentMetric === 'conversion' 
                  ? 'bg-white shadow-md border-l-4 border-primary' 
                  : 'bg-gray-100 hover:bg-white hover:shadow-sm'
              }`}
            >
              <div className={`p-2 rounded-full mr-3 ${
                currentMetric === 'conversion' ? 'bg-primary/10 text-primary' : 'bg-gray-200'
              }`}>
                <BarChart2 size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-900">Conversion Rate</h4>
                <p className="text-sm text-gray-500">Lead to opportunity %</p>
              </div>
            </button>
          </div>
          
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-semibold text-lg text-gray-900">
                {currentMetric === 'responseTime' && 'Response Time Improvement'}
                {currentMetric === 'meetings' && 'Monthly Meetings Growth'}
                {currentMetric === 'conversion' && 'Conversion Rate Increase'}
              </h3>
              <div className="text-sm text-gray-500">Last 6 months</div>
            </div>
            
            <div className="relative h-64">
              {/* Chart visualization */}
              <div className="absolute inset-0 flex items-end">
                {(currentMetric === 'responseTime' ? responseTimeData : 
                  currentMetric === 'meetings' ? meetingsBookedData : 
                  conversionRateData).map((value, index) => (
                  <div 
                    key={index} 
                    className="flex-1 mx-1 flex flex-col items-center justify-end"
                  >
                    <div 
                      className={`w-full ${
                        currentMetric === 'responseTime' ? 'bg-red-400' : 
                        currentMetric === 'meetings' ? 'bg-blue-400' : 
                        'bg-green-400'
                      } rounded-t-sm transition-all duration-1000 ease-out`}
                      style={{ 
                        height: `${currentMetric === 'responseTime' 
                          ? (1 - value / 3) * 100 
                          : (value / (currentMetric === 'meetings' ? 60 : 50)) * 100}%` 
                      }}
                    ></div>
                    <div className="text-xs text-gray-500 mt-2">
                      {index === 0 ? 'Jan' : index === 1 ? 'Feb' : index === 2 ? 'Mar' : 
                       index === 3 ? 'Apr' : index === 4 ? 'May' : 'Jun'}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Y-axis labels */}
              <div className="absolute left-0 inset-y-0 flex flex-col justify-between pointer-events-none">
                <div className="text-xs text-gray-400">
                  {currentMetric === 'responseTime' ? '3 min' : 
                   currentMetric === 'meetings' ? '60' : '50%'}
                </div>
                <div className="text-xs text-gray-400">
                  {currentMetric === 'responseTime' ? '0 sec' : 
                   currentMetric === 'meetings' ? '0' : '0%'}
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-3xl font-bold mb-1 text-primary">
                {currentMetric === 'responseTime' && `${animatedValue.toFixed(1)} sec`}
                {currentMetric === 'meetings' && `${Math.round(animatedValue)}`}
                {currentMetric === 'conversion' && `${Math.round(animatedValue)}%`}
              </div>
              <div className="text-gray-500">
                {currentMetric === 'responseTime' && 'Current response time'}
                {currentMetric === 'meetings' && 'Monthly meetings booked'}
                {currentMetric === 'conversion' && 'Current conversion rate'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsPreview;