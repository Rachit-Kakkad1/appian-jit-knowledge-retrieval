import React, { useState } from 'react';
import { Header } from './components/Header';
import { CaseDetailsPanel } from './components/CaseDetailsPanel';
import { KnowledgePanel } from './components/KnowledgePanel';
import { CaseDetails } from './types';

// Mock active case for the demo
const MOCK_CASE: CaseDetails = {
  id: "CASE-2024-8892-X",
  type: "Civil Litigation / Family Law",
  jurisdiction: "Federal Circuit (Pre-Amendment)",
  subCategory: "Asset Division & Support",
  priority: "High",
  lastUpdated: "Oct 24, 2024, 14:30 EST",
  status: "Review Pending",
  assignedAgent: "Sarah Jenkins",
  description: "Claimant is requesting retroactive spousal support adjustments based on pre-2023 amendment income definitions. The marriage dissolution occurred in 2019."
};

const App: React.FC = () => {
  const [activeCase] = useState<CaseDetails>(MOCK_CASE);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-slate-50 font-sans text-gray-900">
      <Header 
        caseId={activeCase.id} 
        agentName={activeCase.assignedAgent} 
        status={activeCase.status} 
      />
      
      <main className="flex-1 flex overflow-hidden max-w-[1920px] mx-auto w-full shadow-xl my-4 rounded-xl border border-gray-200 bg-white">
        {/* Left Panel: Static Context */}
        <div className="w-80 md:w-96 flex-shrink-0 z-10">
          <CaseDetailsPanel details={activeCase} />
        </div>

        {/* Right Panel: Dynamic Knowledge */}
        <div className="flex-1 min-w-0 bg-slate-50/50">
          <KnowledgePanel caseDetails={activeCase} />
        </div>
      </main>
    </div>
  );
};

export default App;
