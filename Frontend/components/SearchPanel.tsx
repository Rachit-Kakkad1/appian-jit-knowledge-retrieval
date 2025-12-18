import React from 'react';
import { Search, Filter, History } from 'lucide-react';

export const SearchPanel: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1.5">
          <Search className="w-3.5 h-3.5" />
          Assisted Search
        </label>
        <span className="text-[10px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
          Verified Policies Only
        </span>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="e.g. divorce laws before amendment"
            className="w-full pl-3 pr-10 py-2.5 text-sm border border-gray-300 rounded shadow-sm focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all placeholder:text-gray-400"
          />
           <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <kbd className="hidden sm:inline-block border border-gray-200 rounded px-1 text-[10px] font-medium text-gray-400">⌘K</kbd>
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 text-gray-600 transition-colors shadow-sm">
          <Filter className="w-4 h-4" />
          <span className="text-xs font-medium">Filters</span>
        </button>
      </div>

      <div className="flex gap-2 mt-2">
        <div className="px-2 py-1 bg-gray-100 rounded text-[10px] font-medium text-gray-600 border border-gray-200 flex items-center gap-1 cursor-pointer hover:bg-gray-200">
          <History className="w-3 h-3" />
          Pre-2023 Amendment
        </div>
        <div className="px-2 py-1 bg-gray-100 rounded text-[10px] font-medium text-gray-600 border border-gray-200 cursor-pointer hover:bg-gray-200">
           Jurisdiction: Federal
        </div>
      </div>
    </div>
  );
};
