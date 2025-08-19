import { Bot, Cog, Globe, BarChart3, ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services-illustration.jpg";

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-primary" />,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that enhances customer engagement and provides 24/7 support with natural language processing.",
      features: ["Natural Language Processing", "Multi-language Support", "Integration Ready", "Custom Training"]
    },
    {
      icon: <Cog className="w-12 h-12 text-primary" />,
      title: "Business Automation",
      description: "Streamline operations with AI-powered automation solutions that reduce costs and increase efficiency across your organization.",
      features: ["Process Automation", "Workflow Optimization", "Task Management", "Resource Planning"]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "AI-Powered Websites",
      description: "Next-generation websites with embedded AI capabilities for personalized user experiences and intelligent content delivery.",
      features: ["Smart Personalization", "Adaptive Content", "AI Analytics", "Performance Optimization"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Data-Driven Solutions",
      description: "Transform raw data into actionable insights with advanced analytics and machine learning algorithms.",
      features: ["Predictive Analytics", "Data Visualization", "Real-time Insights", "Custom Dashboards"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background-secondary relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and 
              drive innovation across every aspect of your organization.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card-primary p-8 rounded-2xl hover:shadow-primary transition-all duration-300 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-foreground-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-foreground-secondary">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="text-primary hover:text-primary-light font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Services Showcase Image */}
          <div className="text-center">
            <div className="relative inline-block">
              <img 
                src={servicesImage} 
                alt="AI Services Illustration" 
                className="rounded-2xl max-w-full h-auto shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Transform Your Business?
            </h3>
            <p className="text-foreground-secondary mb-6">
              Let's discuss how our AI solutions can drive your business forward.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 glow-primary"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;