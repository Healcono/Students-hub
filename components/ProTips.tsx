import React from 'react';
import { Lightbulb, AlertTriangle, Sparkles } from 'lucide-react';

export const ProTips: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-xl text-white p-6 fade-in relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-10 -translate-y-10 blur-2xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-black opacity-10 rounded-full translate-x-10 translate-y-10 blur-2xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-sm font-bold backdrop-blur-sm">۳</span>
          <h2 className="text-xl font-bold">نکات طلایی</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
            <div className="flex items-start gap-3">
              <Sparkles className="shrink-0 mt-1 text-yellow-300" size={20} />
              <div>
                <h3 className="font-bold text-lg mb-1">قانون ۸۰/۲۰</h3>
                <p className="text-sm text-primary-50 leading-relaxed opacity-90">
                  ۸۰٪ زمان خود را صرف ۲۰٪ اسلایدها (بخش روش‌شناسی و نتایج) کنید. داوران بیشتر به "چگونگی" انجام کار اهمیت می‌دهند تا تعاریف اولیه.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
            <div className="flex items-start gap-3">
              <AlertTriangle className="shrink-0 mt-1 text-orange-300" size={20} />
              <div>
                <h3 className="font-bold text-lg mb-1">سادگی بصری</h3>
                <p className="text-sm text-primary-50 leading-relaxed opacity-90">
                  از نوشتن پاراگراف‌های طولانی پرهیز کنید. هر اسلاید باید نهایتاً ۵ خط متن داشته باشد. از نمودار و تصویر استفاده کنید.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-primary-200">با اعتماد به نفس و شمرده صحبت کنید.</p>
        </div>
      </div>
    </div>
  );
};