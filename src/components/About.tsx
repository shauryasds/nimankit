import { Users, Award, Target, Zap } from "lucide-react";
import aboutImage from "@/assets/about-bg.jpg";

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Proven Excellence",
      description: "40+ successful AI projects delivered with exceptional quality and innovation."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Team",
      description: "Led by Shaurya Deep Shukla, our team combines technical expertise with business acumen."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Client-Focused",
      description: "Serving 45,000+ daily customers with tailored AI solutions that drive real results."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Cutting-Edge Tech",
      description: "Leveraging the latest AI and machine learning technologies to stay ahead of the curve."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">NimankIT</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              We are a forward-thinking AI services agency based in Kanpur, India, dedicated to transforming 
              businesses through innovative artificial intelligence solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Pioneering AI Innovation Since Day One
              </h3>
              <p className="text-foreground-secondary mb-6 leading-relaxed">
                Founded and led by <strong className="text-primary">Shaurya Deep Shukla</strong>, 
                NimankIT has established itself as a trusted partner for businesses seeking to harness 
                the power of artificial intelligence. Our commitment to excellence and innovation has 
                resulted in successful project deliveries across diverse industries.
              </p>
              <p className="text-foreground-secondary mb-8 leading-relaxed">
                From our headquarters in Chaubepur, Kanpur, we serve clients globally, delivering 
                AI-powered solutions that not only meet today's challenges but anticipate tomorrow's 
                opportunities. Our track record speaks for itself: 40+ completed projects and 
                45,000+ daily users benefiting from our AI implementations.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="card-primary p-6 rounded-xl">
                  <div className="text-3xl font-bold text-gradient mb-2">40+</div>
                  <div className="text-foreground-secondary">Successful Projects</div>
                </div>
                <div className="card-primary p-6 rounded-xl">
                  <div className="text-3xl font-bold text-gradient mb-2">45K+</div>
                  <div className="text-foreground-secondary">Daily Users</div>
                </div>
              </div>
            </div>

            {/* Right Content - Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="card-primary p-6 rounded-xl hover:shadow-primary transition-all duration-300 group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-foreground-secondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <div className="card-primary p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Our Mission</h3>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                To democratize artificial intelligence by making cutting-edge AI solutions accessible to 
                businesses of all sizes, empowering them to innovate, scale, and thrive in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;