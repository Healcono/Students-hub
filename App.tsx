import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProposalDefense } from './components/ProposalDefense';
import { NAV_ITEMS } from './constants';
import { Menu, Mail, Heart } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('proposal');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar 
        items={NAV_ITEMS} 
        activeId={activeTab} 
        onSelect={(id) => {
          setActiveTab(id);
          setIsSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="lg:pr-72 min-h-screen flex flex-col transition-all duration-300">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-100 p-4 sticky top-0 z-20 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-sm">GP</span>
            </div>
            <span className="font-bold text-gray-800">GradPath</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-gray-50 rounded-lg text-gray-600"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
          {activeTab === 'proposal' ? (
            <ProposalDefense />
          ) : (
            <div className="flex flex-col items-center justify-center h-96 text-center space-y-4 bg-white rounded-3xl border border-dashed border-gray-300 m-8">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
                <Heart size={32} />
              </div>
              <h2 className="text-xl font-bold text-gray-600">به زودی ...</h2>
              <p className="text-gray-400">این بخش در حال توسعه است.</p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-8 px-4 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="font-semibold text-primary-700">@healthcono</span>
              <span className="hidden md:block text-gray-300">|</span>
              <a href="mailto:healcono@gmal.com" className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                <Mail size={16} />
                healcono@gmal.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>Developer:</span>
              <span className="font-bold text-gray-700">Dr Fatemeh Zarei</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;