import { Card } from "@/components/ui/card";
import { BarChart3, Brain, Calendar, MessageSquare, Users, Zap } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Smart Dashboard",
    description: "Real-time hiring metrics, pipeline visualization, and AI-powered insights at a glance.",
  },
  {
    icon: Brain,
    title: "AI Candidate Matching",
    description: "Automatically rank and shortlist candidates with 95%+ accuracy using advanced ML algorithms.",
  },
  {
    icon: Users,
    title: "Talent Pool Management",
    description: "Centralized candidate database with smart filters, tags, and automated tracking.",
  },
  {
    icon: Calendar,
    title: "Interview Scheduling",
    description: "Automated calendar integration, reminders, and seamless video conferencing setup.",
  },
  {
    icon: MessageSquare,
    title: "Unified Communications",
    description: "All candidate conversations in one place with email templates and bulk messaging.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks with automated job posting, screening, and follow-ups.",
  },
];

const RecruiterFeatures = () => {
  return (
    <section id="for-recruiters" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            For Recruiters
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your AI Hiring Command Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline your entire recruitment process with intelligent automation and data-driven insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 border-border bg-card group"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecruiterFeatures;
