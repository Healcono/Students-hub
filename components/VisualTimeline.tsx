import React from 'react';
import { TimelineStep } from '../types';

interface VisualTimelineProps {
  steps: TimelineStep[];
}

export const VisualTimeline: React.FC<VisualTimelineProps> = ({ steps }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm">۲</span>
          جریان ارائه
        </h2>
        <p className="text-sm text-gray-500 mt-1">مسیر منطقی دفاع از ابتدا تا انتها</p>
      </div>

      <div className="relative pr-4">
        {/* Vertical Line */}
        <div className="absolute top-2 bottom-0 right-[27px] w-0.5 bg-gray-100" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start gap-4 group">
              {/* Icon Circle */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border-2 border-primary-100 flex items-center justify-center text-primary-600 shadow-sm group-hover:scale-110 group-hover:border-primary-400 group-hover:shadow-md transition-all duration-300">
                <step.icon size={24} />
              </div>
              
              {/* Content */}
              <div className="pt-2 flex-1">
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-primary-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};