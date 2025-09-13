import { useState } from "react";
import { Upload, HardDrive, Smartphone, Monitor, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EvidenceUploadProps {
  onAnalyze: () => void;
}

const EvidenceUpload = ({ onAnalyze }: EvidenceUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0].name);
    }
  };

  const supportedDevices = [
    { icon: HardDrive, name: "Hard Drives", types: "NTFS, FAT32, exFAT" },
    { icon: Smartphone, name: "Mobile Devices", types: "iOS, Android" },
    { icon: Monitor, name: "System Images", types: "DD, E01, AFF" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="h-5 w-5 text-primary" />
            <span>Evidence Upload</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">
              Drop evidence files here or click to browse
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Supports disk images, mobile backups, and system snapshots
            </p>
            
            {uploadedFile && (
              <div className="mt-4 p-3 bg-secondary rounded-lg">
                <p className="text-sm">
                  <span className="text-success">✓</span> {uploadedFile}
                </p>
              </div>
            )}
            
            <Button variant="outline" className="mt-4">
              Select Files
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {supportedDevices.map((device, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <device.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-medium mb-2">{device.name}</h3>
              <p className="text-xs text-muted-foreground">{device.types}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-destructive/5 border-destructive/20">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
            <div>
              <h3 className="font-medium text-destructive mb-1">Legal Notice</h3>
              <p className="text-sm text-muted-foreground">
                Ensure proper legal authorization before analyzing any digital evidence. 
                This tool should only be used by authorized personnel in compliance with applicable laws.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {uploadedFile && (
        <div className="flex justify-center">
          <Button onClick={onAnalyze} size="lg" className="px-8">
            Begin Extraction Analysis
          </Button>
        </div>
      )}
    </div>
  );
};

export default EvidenceUpload;