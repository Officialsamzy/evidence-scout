import { Shield, Search, Database, FileText } from "lucide-react";

const ForensicsHeader = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">FORENSICS EXTRACTOR</h1>
                <p className="text-xs text-muted-foreground">Digital Evidence Analysis System</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-terminal-green"></div>
                <span className="text-muted-foreground">System Online</span>
              </div>
              <div className="text-muted-foreground">
                <span className="text-accent">v2.1.0</span>
              </div>
            </div>
          </div>
        </div>
        
        <nav className="mt-4">
          <div className="flex space-x-6">
            <button className="flex items-center space-x-2 px-3 py-2 text-sm border-b-2 border-primary text-primary">
              <Search className="h-4 w-4" />
              <span>Extract</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
              <Database className="h-4 w-4" />
              <span>Evidence</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
              <FileText className="h-4 w-4" />
              <span>Reports</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ForensicsHeader;