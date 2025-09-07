import { useState } from "react";
import { AnalyticsUpload } from "@/components/features/analytics-upload";
import { SlideEditor } from "@/components/features/slide-editor";
import { ReportGenerator } from "@/components/features/report-generator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  FileText, 
  Brain,
  Download,
  Settings,
  Play,
  Eye,
  CheckCircle,
  AlertTriangle,
  Info,
  Presentation
} from "lucide-react";

export default function Analytics() {
  const [activeAnalysis, setActiveAnalysis] = useState<string | null>(null);

  const analysisTypes = [
    {
      id: "descriptive",
      title: "Descriptive Statistics",
      description: "Comprehensive statistical overview of your data",
      icon: BarChart3,
      features: ["Mean, Median, Mode", "Standard Deviation", "Quartiles & Outliers", "Distribution Analysis"],
      estimatedTime: "< 1 minute"
    },
    {
      id: "correlation",
      title: "Correlation Analysis", 
      description: "Pearson correlation matrix with statistical significance",
      icon: TrendingUp,
      features: ["Correlation Coefficients", "P-values", "Heatmap Visualization", "Significance Testing"],
      estimatedTime: "1-2 minutes"
    },
    {
      id: "regression",
      title: "Regression Modeling",
      description: "Multiple linear regression with model diagnostics",
      icon: Brain,
      features: ["Linear Regression", "R² Values", "Coefficients", "Residual Analysis"],
      estimatedTime: "2-3 minutes"
    },
    {
      id: "hypothesis",
      title: "Hypothesis Testing",
      description: "T-tests, ANOVA, and variance analysis",
      icon: FileText,
      features: ["T-tests", "ANOVA", "Levene's Test", "Chi-square Tests"],
      estimatedTime: "1-2 minutes"
    }
  ];

  const sampleResults = [
    {
      title: "Manufacturing Quality Control",
      description: "Analysis of production line efficiency and defect rates",
      date: "2024-01-15",
      status: "Completed",
      insights: 3,
      type: "Quality Control"
    },
    {
      title: "Process Optimization Study",
      description: "Temperature and pressure correlation analysis",
      date: "2024-01-14", 
      status: "Completed",
      insights: 5,
      type: "Process Engineering"
    },
    {
      title: "Equipment Performance Analysis",
      description: "Predictive maintenance based on sensor data",
      date: "2024-01-13",
      status: "In Progress",
      insights: 2,
      type: "Predictive Maintenance"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            Professional Analytics
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Advanced <span className="text-gradient">Data Analysis</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload your CSV or Excel files and get comprehensive statistical analysis, 
            regression modeling, and professional insights powered by AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Analysis Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Section */}
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Data Upload & Analysis
                </CardTitle>
                <CardDescription>
                  Start by uploading your data file to begin comprehensive analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnalyticsUpload />
              </CardContent>
            </Card>

            {/* Analysis Configuration */}
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Analysis Configuration
                </CardTitle>
                <CardDescription>
                  Select the types of analysis you want to perform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {analysisTypes.map((analysis) => (
                    <Card 
                      key={analysis.id}
                      className={`cursor-pointer transition-all duration-smooth border-2 ${
                        activeAnalysis === analysis.id
                          ? "border-primary bg-primary/5 shadow-glow"
                          : "border-border/40 hover:border-primary/50"
                      }`}
                      onClick={() => setActiveAnalysis(analysis.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-smooth ${
                            activeAnalysis === analysis.id
                              ? "bg-gradient-primary scale-110"
                              : "bg-muted"
                          }`}>
                            <analysis.icon className={`w-5 h-5 ${
                              activeAnalysis === analysis.id ? "text-white" : "text-primary"
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm mb-1">{analysis.title}</h3>
                            <p className="text-xs text-muted-foreground mb-2">{analysis.description}</p>
                            <div className="text-xs text-primary font-medium">
                              Est. {analysis.estimatedTime}
                            </div>
                          </div>
                        </div>
                        {activeAnalysis === analysis.id && (
                          <div className="mt-3 pt-3 border-t border-border/40">
                            <div className="space-y-2">
                              {analysis.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs">
                                  <CheckCircle className="w-3 h-3 text-primary" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <Button 
                    className="bg-gradient-industrial text-white flex-1"
                    disabled={!activeAnalysis}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Run Analysis
                  </Button>
                  <Button variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Preview */}
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Analysis Results
                </CardTitle>
                <CardDescription>
                  Your analysis results will appear here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="statistics">Statistics</TabsTrigger>
                    <TabsTrigger value="visualizations">Charts</TabsTrigger>
                    <TabsTrigger value="insights">AI Insights</TabsTrigger>
                    <TabsTrigger value="presentations">Reports</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-4">
                    <div className="text-center py-12 text-muted-foreground">
                      <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Upload data and run analysis to see results here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="statistics" className="space-y-4">
                    <div className="text-center py-12 text-muted-foreground">
                      <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Statistical results will be displayed here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="visualizations" className="space-y-4">
                    <div className="text-center py-12 text-muted-foreground">
                      <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Charts and visualizations will appear here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="insights" className="space-y-4">
                    <div className="text-center py-12 text-muted-foreground">
                      <Brain className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>AI-powered insights will be generated here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="presentations" className="space-y-4">
                    <Tabs defaultValue="slide-editor" className="space-y-4">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="slide-editor">Slide Editor</TabsTrigger>
                        <TabsTrigger value="report-generator">Report Generator</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="slide-editor">
                        <SlideEditor />
                      </TabsContent>
                      
                      <TabsContent value="report-generator">
                        <ReportGenerator />
                      </TabsContent>
                    </Tabs>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Export Results
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate PDF Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Presentation className="w-4 h-4 mr-2" />
                  Create Presentation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Analysis Settings
                </Button>
              </CardContent>
            </Card>

            {/* Recent Analysis */}
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Recent Analysis</CardTitle>
                <CardDescription>Your latest data analysis projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sampleResults.map((result, index) => (
                  <div key={index} className="p-3 border border-border/40 rounded-lg hover:bg-muted/30 transition-colors duration-fast">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{result.title}</h4>
                      <Badge 
                        variant={result.status === "Completed" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {result.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{result.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{result.date}</span>
                      <div className="flex items-center gap-1">
                        <Info className="w-3 h-3 text-primary" />
                        <span className="text-primary">{result.insights} insights</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Analysis Tips */}
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Analysis Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Ensure your data has clear column headers</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Remove empty rows and columns before upload</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Large files may take longer to process</p>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Use numeric data for statistical analysis</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}