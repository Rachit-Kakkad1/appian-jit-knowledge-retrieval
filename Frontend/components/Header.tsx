import React from 'react';
import { ShieldCheck, Bell, UserCircle, Menu } from 'lucide-react';

interface HeaderProps {
  caseId: string;
  agentName: string;
  status: string;
}

export const Header: React.FC<HeaderProps> = ({ caseId, agentName, status }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 h-16 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-brand-800">
          <ShieldCheck className="w-6 h-6" />
          <span className="font-semibold text-lg tracking-tight">LexStream Enterprise</span>
        </div>
        
        <div className="h-6 w-px bg-gray-300 mx-2"></div>
        
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Active Case ID</span>
          <span className="text-sm font-bold text-gray-900 font-mono">{caseId}</span>
        </div>

        <div className="flex flex-col ml-4">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Status</span>
          <span className="text-sm font-medium text-amber-600 bg-amber-50 px-2 rounded-sm border border-amber-100 inline-block w-fit">
            {status}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-brand-600 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{agentName}</p>
            <p className="text-xs text-gray-500">Sr. Compliance Officer</p>
          </div>
          <UserCircle className="w-9 h-9 text-brand-300" />
        </div>
      </div>
    </header>
  );
};
