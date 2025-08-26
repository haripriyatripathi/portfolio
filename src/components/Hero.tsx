import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import profileImage from '/lovable-uploads/ec8c3ab1-019e-46ee-97f2-a7cf45bccf57.png';

const Hero = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/haripriyatripathi', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/haripriyatripathi?_l=en_US', 
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'mailto:haripriyatripathix@gmail.com', 
      label: 'Email' 
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-dark animate-gradient-y" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground animate-slide-in">
                Hi there! I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Haripriya
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Tripathi
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                App Developer & Backend Enthusiast
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Passionate about exploring the intersection of Android (Kotlin) and Spring Boot. 
              Building projects that strengthen fundamentals and showcase problem-solving skills. 
              My goal: Software Engineer at a FAANG company.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 shadow-elegant"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-elegant"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              
              {/* Main profile container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-primary rounded-full animate-glow opacity-20" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-elegant">
                  <img
                    src={profileImage}
                    alt="Haripriya Tripathi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Skills floating badges */}
              <div className="absolute top-16 -left-8 bg-card border border-border rounded-lg px-3 py-2 shadow-card animate-float">
                <span className="text-sm font-medium">Kotlin</span>
              </div>
              <div className="absolute bottom-20 -right-8 bg-card border border-border rounded-lg px-3 py-2 shadow-card animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-sm font-medium">Spring Boot</span>
              </div>
              <div className="absolute top-32 right-4 bg-card border border-border rounded-lg px-3 py-2 shadow-card animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-sm font-medium">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;