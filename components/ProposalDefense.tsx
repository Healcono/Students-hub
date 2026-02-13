import React from 'react';
import { StructureTable } from './StructureTable';
import { VisualTimeline } from './VisualTimeline';
import { ProTips } from './ProTips';
import { PROPOSAL_SLIDES, TIMELINE_STEPS } from '../constants';
import { GraduationCap, FileDown } from 'lucide-react';

export const ProposalDefense: React.FC = () => {
  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
            فاز فعال
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">راهنمای دفاع از پروپوزال</h1>
          <p className="text-gray-600 max-w-2xl text-lg mb-6">
            یک نقشه‌راه جامع برای ارائه موفق. ساختار زمانی را رعایت کنید تا بهترین تاثیر را بر داوران بگذارید.
          </p>
          
          <a 
            href="https://abrehamrahi.ir/o/public/ijs3dwEi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-xl hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-200 shadow-md shadow-primary-200 hover:shadow-lg"
          >
            <FileDown size={20} />
            <span className="font-medium">دانلود فایل راهنمای اسلایدها</span>
          </a>
        </div>
        <GraduationCap className="absolute -left-10 -bottom-10 text-gray-50 w-64 h-64 rotate-12" strokeWidth={1} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column (Content & Table) */}
        <div className="xl:col-span-2 space-y-8">
          <StructureTable slides={PROPOSAL_SLIDES} />
        </div>

        {/* Right Column (Timeline & Tips) */}
        <div className="space-y-8">
           <ProTips />
           <VisualTimeline steps={TIMELINE_STEPS} />
        </div>
      </div>
    </div>
  );
};