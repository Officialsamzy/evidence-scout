import { useState } from "react";
import { 
  Globe, 
  Lock, 
  MessageSquare, 
  Image, 
  MapPin, 
  Clock, 
  Download,
  Eye,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const AnalysisResults = () => {
  const [analysisProgress] = useState(100);

  const extractedData = {
    browserHistory: [
      { url: "https://example-banking.com/login", timestamp: "2024-01-15 14:32:15", visits: 8 },
      { url: "https://social-media.com/messages", timestamp: "2024-01-15 14:28:43", visits: 23 },
      { url: "https://secure-email.com/inbox", timestamp: "2024-01-15 14:15:22", visits: 12 },
      { url: "https://suspicious-site.com/download", timestamp: "2024-01-15 13:45:18", visits: 2 },
    ],
    savedPasswords: [
      { site: "banking-site.com", username: "john.doe@email.com", strength: "Strong" },
      { site: "social-platform.com", username: "johndoe123", strength: "Weak" },
      { site: "work-email.com", username: "j.doe", strength: "Medium" },
    ],
    chatLogs: [
      { platform: "WhatsApp", messages: 1247, lastActivity: "2024-01-15 15:42:00" },
      { platform: "Telegram", messages: 89, lastActivity: "2024-01-15 12:33:21" },
      { platform: "Discord", messages: 342, lastActivity: "2024-01-14 23:15:45" },
    ],
    metadata: [
      { 
        file: "IMG_2024_0115.jpg", 
        location: "40.7128° N, 74.0060° W", 
        device: "iPhone 15 Pro", 
        timestamp: "2024-01-15 14:22:33" 
      },
      { 
        file: "document.pdf", 
        location: "No GPS data", 
        device: "MacBook Pro", 
        timestamp: "2024-01-15 13:15:42" 
      },
    ]
  };

  const analysisStats = [
    { label: "Browser History", value: "1,247", icon: Globe, color: "text-primary" },
    { label: "Saved Passwords", value: "23", icon: Lock, color: "text-warning" },
    { label: "Chat Messages", value: "1,678", icon: MessageSquare, color: "text-accent" },
    { label: "Media Files", value: "89", icon: Image, color: "text-success" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Extraction Analysis Complete</span>
            <Badge variant="outline" className="text-success border-success">
              100% Complete
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={analysisProgress} className="mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {analysisStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-secondary/50 rounded-lg">
                <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="browser" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="browser">Browser History</TabsTrigger>
          <TabsTrigger value="passwords">Passwords</TabsTrigger>
          <TabsTrigger value="chats">Chat Logs</TabsTrigger>
          <TabsTrigger value="metadata">Metadata</TabsTrigger>
        </TabsList>

        <TabsContent value="browser">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Browser History Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {extractedData.browserHistory.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                    <div className="flex-1">
                      <p className="font-mono text-sm">{entry.url}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {entry.timestamp}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {entry.visits} visits
                        </Badge>
                      </div>
                    </div>
                    {entry.url.includes('suspicious') && (
                      <AlertCircle className="h-4 w-4 text-destructive" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="passwords">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5" />
                <span>Saved Passwords</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {extractedData.savedPasswords.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                    <div>
                      <p className="font-medium">{entry.site}</p>
                      <p className="text-sm text-muted-foreground">{entry.username}</p>
                    </div>
                    <Badge 
                      variant={entry.strength === 'Strong' ? 'default' : entry.strength === 'Medium' ? 'secondary' : 'destructive'}
                    >
                      {entry.strength}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chats">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Chat Logs Extracted</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {extractedData.chatLogs.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                    <div>
                      <p className="font-medium">{entry.platform}</p>
                      <p className="text-sm text-muted-foreground">
                        Last activity: {entry.lastActivity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-accent">{entry.messages}</p>
                      <p className="text-xs text-muted-foreground">messages</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metadata">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>File Metadata Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {extractedData.metadata.map((entry, index) => (
                  <div key={index} className="p-3 bg-secondary/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">{entry.file}</p>
                      <Badge variant="outline">{entry.device}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {entry.location}
                      </p>
                      <p className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {entry.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center space-x-4">
        <Button variant="outline" className="flex items-center space-x-2">
          <Eye className="h-4 w-4" />
          <span>View Full Report</span>
        </Button>
        <Button className="flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Generate Report</span>
        </Button>
      </div>
    </div>
  );
};

export default AnalysisResults;