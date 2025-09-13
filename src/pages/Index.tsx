import { useState } from "react";
import ForensicsHeader from "@/components/ForensicsHeader";
import EvidenceUpload from "@/components/EvidenceUpload";
import AnalysisResults from "@/components/AnalysisResults";

const Index = () => {
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <ForensicsHeader />
      
      <main className="container mx-auto px-6 py-8">
        {!showResults ? (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Digital Evidence Extraction</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional forensics tool for extracting browser history, saved passwords, 
                chat logs, and metadata from digital devices. Upload evidence files to begin analysis.
              </p>
            </div>
            <EvidenceUpload onAnalyze={handleAnalyze} />
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <button 
                onClick={() => setShowResults(false)}
                className="text-sm text-accent hover:text-accent/80 mb-4"
              >
                ← Back to Upload
              </button>
              <h2 className="text-2xl font-bold">Evidence Analysis Results</h2>
              <p className="text-muted-foreground">
                Extraction completed successfully. Review the findings below.
              </p>
            </div>
            <AnalysisResults />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;