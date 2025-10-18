import { Card } from "@/components/ui/card";
import { Award, BookOpen, FileSearch, MessageCircle, TrendingUp, Video } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "ATS Resume Analyzer",
    description: "Get instant feedback on your resume with ATS compatibility scores and optimization tips.",
  },
  {
    icon: Award,
    title: "AI Resume Builder",
    description: "Create professional, ATS-friendly resumes with AI-powered content suggestions.",
  },
  {
    icon: TrendingUp,
    title: "Skill Gap Analysis",
    description: "Identify missing skills for your target role with personalized learning recommendations.",
  },
  {
    icon: Video,
    title: "Mock Interview Practice",
    description: "Practice with AI-powered interviews and get detailed feedback to improve your performance.",
  },
  {
    icon: BookOpen,
    title: "Course Recommendations",
    description: "Discover relevant courses and certifications to boost your career prospects.",
  },
  {
    icon: MessageCircle,
    title: "AI Career Assistant",
    description: "24/7 AI chatbot to help with resume writing, job searching, and career guidance.",
  },
];

const CandidateFeatures = () => {
  return (
    <section id="for-candidates" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            For Job Seekers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Land Your Dream Job Faster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered tools to optimize your resume, enhance your skills, and ace every interview
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
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="h-6 w-6 text-secondary" />
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

export default CandidateFeatures;
