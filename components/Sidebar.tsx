import React from 'react';
import { NavItem, NavItemStatus } from '../types';
import { ChevronLeft } from 'lucide-react';

interface SidebarProps {
  items: NavItem[];
  activeId: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ items, activeId, onSelect, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 z-20 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <aside 
        className={`fixed top-0 right-0 h-full bg-white border-l border-gray-100 shadow-xl lg:shadow-none z-30 transition-all duration-300 ease-in-out w-72 transform ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} flex flex-col`}
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center">
              <span className="font-bold text-xl">GP</span>
            </div>
            <div>
              <h1 className="font-bold text-gray-800 text-lg">GradPath</h1>
              <p className="text-xs text-primary-600 font-medium">مسیر موفقیت دانشجو</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-400 hover:text-gray-600">
            <ChevronLeft size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {items.map((item) => {
            const isActive = activeId === item.id;
            const isComingSoon = item.status === NavItemStatus.COMING_SOON;
            
            return (
              <button
                key={item.id}
                onClick={() => !isComingSoon && onSelect(item.id)}
                disabled={isComingSoon}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative
                  ${isActive 
                    ? 'bg-primary-50 text-primary-700 font-bold shadow-sm ring-1 ring-primary-100' 
                    : isComingSoon 
                      ? 'text-gray-400 cursor-not-allowed opacity-70' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                  }
                `}
              >
                <item.icon size={20} className={`${isActive ? 'text-primary-600' : ''}`} />
                <span className="flex-1 text-right">{item.label}</span>
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-500 rounded-r-full" />
                )}
                {isComingSoon && (
                  <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full whitespace-nowrap">
                    بزودی
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <div className="bg-primary-600 rounded-xl p-4 text-white text-center shadow-lg shadow-primary-200">
            <p className="text-sm font-medium mb-1">نسخه ۱.۰.۰</p>
            <p className="text-xs text-primary-100 opacity-80">Healthcono Academic</p>
          </div>
        </div>
      </aside>
    </>
  );
};