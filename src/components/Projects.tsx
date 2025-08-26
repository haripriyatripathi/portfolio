import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Smartphone, Globe, Brain, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Day28 – PCOD & PCOS Tracker App',
      description: 'Comprehensive health tracking app with AI-powered diagnosis and symptom logging capabilities.',
      icon: Smartphone,
      features: [
        'Symptom logging and cycle tracking',
        'AI-assisted diagnosis with 85% accuracy',
        'Scalable backend APIs handling 100+ concurrent requests'
      ],
      tech: ['Kotlin', 'Spring Boot', 'MongoDB', 'AI/ML'],
      category: 'Mobile App',
      gradient: 'bg-gradient-to-br from-pink-500 to-rose-600'
    },
    {
      title: 'Netflix Clone',
      description: 'Full-featured streaming platform clone with real-time search and user authentication.',
      icon: Globe,
      features: [
        'Responsive movie browsing interface',
        'Real-time search functionality',
        'Optimized API calls reducing load time by 40%'
      ],
      tech: ['React.js', 'JavaScript', 'Firebase', 'TMDB API'],
      category: 'Web App',
      gradient: 'bg-gradient-to-br from-red-500 to-red-700'
    },
    {
      title: 'Finvest – Investment & Expense App',
      description: 'Smart investment platform with ML-driven predictions and portfolio recommendations.',
      icon: Brain,
      features: [
        'LSTM stock predictor with 87% accuracy',
        'ML-driven portfolio recommendations (+75% relevance)',
        'Secure authentication with OAuth2.0, JWT, AES encryption'
      ],
      tech: ['Kotlin', 'Flask', 'ML', 'LSTM', 'OAuth2.0'],
      category: 'FinTech',
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      title: 'MediTrack – Smart Medicine Reminder',
      description: 'Healthcare app for medicine management with analytics and cloud synchronization.',
      icon: Shield,
      features: [
        'Medicine reminders and dosage schedules',
        'Cloud-based health logs',
        'Analytics for missed doses and adherence (25% improvement)'
      ],
      tech: ['Kotlin', 'Firebase', 'Analytics', 'Cloud Sync'],
      category: 'Healthcare',
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-section animate-gradient-y" />
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-1/4 w-36 h-36 bg-primary/25 rounded-full animate-float" />
        <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-primary/35 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions that solve real-world problems with cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group border-2 border-primary/10 hover:border-primary/30 shadow-card hover:shadow-elegant transition-all duration-500 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${project.gradient} flex items-center justify-center shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary hover:opacity-90"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Accomplishments */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-3xl font-bold mb-8 text-center">Accomplishments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'NVIDIA Ideathon', place: '1st Place', desc: 'AI-powered hunger relief solution' },
              { title: 'Eureka Ideathon', place: '2nd Place', desc: 'EvoLock safety system, ₹3000 prize' },
              { title: 'EcoInnovate Ideathon', place: '1st Place', desc: 'EcoGuard filtration, ₹2500 prize' },
              { title: 'Hack-a-Care Hackathon', place: 'Top 5', desc: 'EvoLock functional prototype' }
            ].map((achievement, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <Badge variant="outline" className="border-primary text-primary mb-3">
                    {achievement.place}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;