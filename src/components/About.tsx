import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Smartphone, Target } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Smartphone, title: 'App Development', desc: 'Native Android with Kotlin' },
    { icon: Database, title: 'Backend Engineering', desc: 'Spring Boot & REST APIs' },
    { icon: Code, title: 'AI/ML Integration', desc: 'Smart solutions' },
    { icon: Target, title: 'FAANG Goal', desc: 'Software Engineer' },
  ];

  const skills = {
    languages: ['Java', 'Python', 'C++', 'Kotlin', 'JavaScript', 'C'],
    frontend: ['React.js', 'React Native', 'HTML', 'CSS', 'Three.js'],
    backend: ['Spring Boot', 'Node.js', 'Flask', 'REST APIs', 'MERN'],
    databases: ['MongoDB', 'Firebase', 'Azure Data Storage'],
    aiml: ['scikit-learn', 'TensorFlow', 'ML model building'],
    tools: ['Git', 'Docker', 'Blender', 'Adobe Premiere Pro', 'CapCut'],
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-section animate-gradient-y" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/30 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary/25 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about building innovative solutions and constantly learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Description */}
          <div className="space-y-6 animate-slide-in">
            <Card className="border-2 border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am a passionate App Developer and Backend Enthusiast exploring the intersection 
                  of Android (Kotlin) and Spring Boot. My long-term career goal is to become a 
                  Software Engineer at a FAANG company. I focus on building projects that strengthen 
                  my fundamentals, demonstrate problem-solving, and showcase consistency.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span><strong>Education:</strong> B.Tech CSE @ JUIT (2023–2027)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span><strong>Focus Areas:</strong> App Development | Backend Engineering | AI/ML</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span><strong>Objective:</strong> FAANG Software Engineer</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interests Grid */}
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <Card 
                  key={interest.title}
                  className="hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <interest.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{interest.title}</h4>
                    <p className="text-sm text-muted-foreground">{interest.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 animate-fade-in">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h3>
                
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="font-semibold mb-3 capitalize text-lg">
                        {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;