import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sign Up & Set Your Profile",
    description: "Create your account as a recruiter or job seeker in under 2 minutes",
    color: "from-primary to-primary/70",
  },
  {
    number: "02",
    title: "AI Does the Heavy Lifting",
    description: "Our AI analyzes, matches, and recommends the best opportunities or candidates",
    color: "from-secondary to-secondary/70",
  },
  {
    number: "03",
    title: "Connect & Collaborate",
    description: "Schedule interviews, communicate seamlessly, and make data-driven decisions",
    color: "from-accent to-accent/70",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Arrow - Hidden on mobile, shown on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-4 z-0">
                    <ArrowRight className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white text-2xl font-bold mb-6 shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Check icon */}
                  <CheckCircle2 className="h-5 w-5 text-primary mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
