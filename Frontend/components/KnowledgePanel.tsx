import React, { useEffect, useState } from 'react';
import { CaseDetails, KnowledgeResponse } from '../types';
import { analyzeCaseContext } from '../services/geminiService';
import { CheckCircle2, BookOpen, AlertTriangle, Loader2, Sparkles, ScrollText, Scale } from 'lucide-react';
import { SearchPanel } from './SearchPanel';

interface KnowledgePanelProps {
  caseDetails: CaseDetails;
}

export const KnowledgePanel: React.FC<KnowledgePanelProps> = ({ caseDetails }) => {
  const [data, setData] = useState<KnowledgeResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await analyzeCaseContext(caseDetails);
        if (mounted) setData(result);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => { mounted = false; };
  }, [caseDetails]);

  return (
    <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden">
      {/* Header Area */}
      <div className="bg-white p-5 border-b border-gray-200 shadow-sm flex justify-between items-center sticky top-0 z-10">
        <div>
          <h2 className="text-lg font-bold text-brand-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-600" />
            Just-in-Time Knowledge
          </h2>
          <p className="text-xs text-brand-500 font-medium mt-1">Context-Aware Retrieval • AI Assisted</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
          <CheckCircle2 className="w-3.5 h-3.5 text-green-700" />
          <span className="text-xs font-semibold text-green-800 tracking-wide uppercase">Verified Gov Sources Only</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center h-64 space-y-4 opacity-70">
            <Loader2 className="w-8 h-8 text-brand-600 animate-spin" />
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-700">Analyzing case context...</p>
              <p className="text-xs text-gray-500 mt-1">Fetching verified knowledge bases against jurisdiction {caseDetails.jurisdiction}</p>
            </div>
          </div>
        )}

        {/* Content State */}
        {!loading && data && (
          <>
            {/* AI Summary Section */}
            <section className="bg-white rounded-lg p-5 border border-brand-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
              <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-500" />
                Case Context Summary
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {data.summary}
              </p>
            </section>

            {/* Policies Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                 <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  Applicable Laws & Policies
                </h3>
              </div>
             
              <div className="space-y-4">
                {data.policies.map((policy) => (
                  <div key={policy.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 group">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-base font-bold text-brand-900 group-hover:text-brand-700 transition-colors">
                            {policy.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                              {policy.authority}
                            </span>
                            <span className="text-xs font-medium text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded">
                              {policy.validityStatus}
                            </span>
                          </div>
                        </div>
                        {policy.isVerified && (
                          <div className="bg-green-50 p-1.5 rounded-full" title="Verified Source">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                          </div>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mt-3 mb-4 line-clamp-2">
                        {policy.summary}
                      </p>

                      {/* Mandatory Citations */}
                      <div className="bg-slate-50 rounded border border-slate-100 p-3 mt-4 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <ScrollText className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-xs font-semibold text-slate-500 uppercase">Citation:</span>
                        </div>
                        <div className="flex gap-4 text-xs text-slate-700 font-mono">
                          <span><span className="text-slate-400">Doc:</span> {policy.citation.documentName}</span>
                          <span><span className="text-slate-400">Pg:</span> {policy.citation.pageNumber}</span>
                          <span><span className="text-slate-400">Para:</span> {policy.citation.paragraphNumber}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Empty State */}
        {!loading && !data && (
           <div className="flex flex-col items-center justify-center h-64 text-center p-6 border-2 border-dashed border-gray-200 rounded-lg">
             <AlertTriangle className="w-10 h-10 text-gray-300 mb-3" />
             <p className="text-gray-500 font-medium">No applicable government-approved documents found.</p>
             <button className="mt-4 text-sm text-brand-600 font-medium hover:underline">Request manual review</button>
           </div>
        )}
      </div>

      {/* Assisted Search (Sticky Bottom) */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
         <SearchPanel />
      </div>
    </div>
  );
};
