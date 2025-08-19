import { Trophy, Star, TrendingUp, Users } from "lucide-react";

const Projects = () => {
  const stats = [
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      number: "40+",
      label: "Successful Projects",
      description: "Delivered across various industries"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "45K+",
      label: "Daily Users",
      description: "Actively using our AI solutions"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      number: "100%",
      label: "Client Satisfaction",
      description: "Achieved through quality delivery"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      number: "300%",
      label: "Average ROI",
      description: "Generated for our clients"
    }
  ];

  const projectTypes = [
    {
      title: "E-commerce AI Solutions",
      description: "Implemented intelligent recommendation systems and chatbots for major e-commerce platforms",
      impact: "Increased sales by 45%"
    },
    {
      title: "Healthcare Automation",
      description: "Developed AI-powered patient management and diagnostic assistance systems",
      impact: "Reduced processing time by 60%"
    },
    {
      title: "Financial Analytics",
      description: "Created predictive models for risk assessment and fraud detection",
      impact: "Prevented $2M+ in losses"
    },
    {
      title: "Manufacturing Optimization",
      description: "Built smart production monitoring and quality control systems",
      impact: "Improved efficiency by 35%"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Track Record</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Numbers that speak for themselves. See how our AI solutions have transformed 
              businesses and delivered measurable results across industries.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="card-primary p-6 rounded-xl text-center hover:shadow-primary transition-all duration-300 group"
              >
                <div className="mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-foreground-secondary">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Project Showcase */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Project <span className="text-gradient">Highlights</span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projectTypes.map((project, index) => (
                <div 
                  key={index}
                  className="card-primary p-6 rounded-xl hover:shadow-primary transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h4>
                  <p className="text-foreground-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold text-sm">
                      {project.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-gradient text-center">
              Success Stories
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-primary p-6 rounded-2xl">
                <p className="text-foreground-secondary mb-4 leading-relaxed">
                  "NimankIT transformed our customer service with their AI chatbot solution. 
                  We saw a 70% reduction in response times and 90% customer satisfaction rate. 
                  Their expertise in AI implementation is unmatched."
                </p>
                <div className="text-foreground font-semibold">
                  - Dr. B Prashad, Medical Director
                </div>
              </div>

              <div className="card-primary p-6 rounded-2xl">
                <p className="text-foreground-secondary mb-4 leading-relaxed">
                  "The automation solutions provided by NimankIT increased our operational 
                  efficiency by 250%. Their team understood our requirements perfectly and 
                  delivered beyond expectations."
                </p>
                <div className="text-foreground font-semibold">
                  - Rajesh Kumar, Manufacturing Head
                </div>
              </div>

              <div className="card-primary p-6 rounded-2xl">
                <p className="text-foreground-secondary mb-4 leading-relaxed">
                  "Outstanding work! Their AI-powered website recommendation system boosted 
                  our e-commerce sales by 180%. Professional team with deep technical expertise."
                </p>
                <div className="text-foreground font-semibold">
                  - Priya Sharma, E-commerce Director
                </div>
              </div>

              <div className="card-primary p-6 rounded-2xl">
                <p className="text-foreground-secondary mb-4 leading-relaxed">
                  "NimankIT's data analytics solution helped us identify key market trends 
                  and optimize our business strategy. ROI exceeded 300% within 6 months."
                </p>
                <div className="text-foreground font-semibold">
                  - Amit Verma, Business Analyst
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-foreground-secondary mb-6">
              Let's create your next AI success story together.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-4 rounded-full font-semibold glow-primary"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;