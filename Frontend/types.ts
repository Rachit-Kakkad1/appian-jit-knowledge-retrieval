export interface CaseDetails {
  id: string;
  type: string;
  jurisdiction: string;
  subCategory: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  lastUpdated: string;
  status: string;
  assignedAgent: string;
  description: string; // Internal context for AI
}

export interface Citation {
  documentName: string;
  authority: string;
  pageNumber: number;
  paragraphNumber: string;
}

export interface Policy {
  id: string;
  title: string;
  validityStatus: string;
  authority: string;
  isVerified: boolean;
  summary: string;
  citation: Citation;
}

export interface KnowledgeResponse {
  summary: string;
  policies: Policy[];
}
