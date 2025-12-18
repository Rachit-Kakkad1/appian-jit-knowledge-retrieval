import React from 'react';
import { CaseDetails } from '../types';
import { FileText, MapPin, Tag, AlertCircle, Calendar } from 'lucide-react';

interface CaseDetailsPanelProps {
  details: CaseDetails;
}

export const CaseDetailsPanel: React.FC<CaseDetailsPanelProps> = ({ details }) => {
  const LabelValue = ({ label, value, icon: Icon }: { label: string; value: string; icon: any }) => (
    <div className="mb-5 last:mb-0">
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</span>
      </div>
      <div className="pl-5.5">
        <span className="text-sm font-medium text-gray-900 block border-l-2 border-transparent pl-1 hover:border-brand-200 transition-colors">
          {value}
        </span>
      </div>
    </div>
  );

  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-5 border-b border-gray-200 bg-gray-50/50">
        <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
          <FileText className="w-4 h-4 text-brand-600" />
          Active Case Details
        </h2>
        <p className="text-xs text-gray-500 mt-1">Context source for AI retrieval</p>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <LabelValue 
          label="Case Type" 
          value={details.type} 
          icon={FileText} 
        />
        <div className="h-px bg-gray-100 my-4"></div>
        
        <LabelValue 
          label="Jurisdiction" 
          value={details.jurisdiction} 
          icon={MapPin} 
        />
        <div className="h-px bg-gray-100 my-4"></div>

        <LabelValue 
          label="Sub-Category" 
          value={details.subCategory} 
          icon={Tag} 
        />
        <div className="h-px bg-gray-100 my-4"></div>

        <LabelValue 
          label="Priority" 
          value={details.priority} 
          icon={AlertCircle} 
        />
        <div className="h-px bg-gray-100 my-4"></div>

        <LabelValue 
          label="Last Updated" 
          value={details.lastUpdated} 
          icon={Calendar} 
        />
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="text-xs text-gray-400 text-center">
          Data synced from Core Record System
        </div>
      </div>
    </div>
  );
};
