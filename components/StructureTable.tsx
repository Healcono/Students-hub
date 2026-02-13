import React, { useState } from 'react';
import { SlideData } from '../types';
import { Copy, Check, Clock } from 'lucide-react';

interface StructureTableProps {
  slides: SlideData[];
}

export const StructureTable: React.FC<StructureTableProps> = ({ slides }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = slides.map(s => `${s.slideRange}: ${s.topic} (${s.duration})`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden fade-in">
      <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm">۱</span>
            ساختار ارائه
          </h2>
          <p className="text-sm text-gray-500 mt-1">زمان‌بندی پیشنهادی برای جلسه ۳۰ دقیقه‌ای</p>
        </div>
        <button 
          onClick={handleCopy}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            copied 
              ? 'bg-green-100 text-green-700' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'کپی شد' : 'کپی چک‌لیست'}
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-gray-50/50 text-gray-500 text-xs font-semibold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 rounded-tr-xl">شماره اسلاید</th>
              <th className="px-6 py-4">موضوع</th>
              <th className="px-6 py-4">زمان ایده‌آل</th>
              <th className="px-6 py-4 rounded-tl-xl">نکات کلیدی</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {slides.map((slide, index) => (
              <tr 
                key={slide.id} 
                className={`group transition-colors hover:bg-primary-50/30 ${index === slides.length - 1 ? '' : ''}`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  <span className="bg-white border border-gray-200 px-2 py-1 rounded text-gray-600 text-xs group-hover:border-primary-200 group-hover:text-primary-700 transition-colors">
                    {slide.slideRange}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                  {slide.topic}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-primary-400" />
                    {slide.duration}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {slide.keyNotes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};