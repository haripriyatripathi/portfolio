import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Android App Developer',
      company: 'Yahmi.co',
      period: 'May 2025 – July 2025',
      type: 'Internship',
      location: 'Remote',
      achievements: [
        'Developed Android frontend in Kotlin with responsive UI and API integration',
        'Optimized Azure Data Storage using DAA algorithms, achieving 30% faster performance',
        'Led a 4-member team, managing sprints, tasks, and stakeholder communication'
      ],
      skills: ['Kotlin', 'Android', 'Azure', 'Team Leadership', 'API Integration']
    },
    {
      role: 'Graphic Designer',
      company: 'Psyber.co',
      period: 'Jan 2025 – Feb 2025',
      type: 'Contract',
      location: 'Remote',
      achievements: [
        'Created advanced 3D Blender models with professional texturing, lighting, and animations'
      ],
      skills: ['Blender', '3D Modeling', 'Animation', 'Texturing', 'Lighting']
    },
    {
      role: 'Freelancer',
      company: 'Multiple Clients',
      period: 'Jul 2024 – Present',
      type: 'Freelance',
      location: 'Remote',
      achievements: [
        'Content Writer @ Grexa.ai: SEO-driven content creation and campaign support',
        'Java Coding Tutor @ Auriv Learning: Conducted coding sessions focusing on logical thinking',
        'Video Editor @ Coding Junior: Produced educational videos using Adobe Premiere Pro and CapCut'
      ],
      skills: ['Content Writing', 'SEO', 'Java', 'Teaching', 'Video Editing', 'Adobe Premiere Pro']
    }
  ];

  const volunteering = [
    {
      org: 'GirlScript Summer of Code',
      role: 'Contributor',
      period: '2025–Present',
      desc: 'Contributing to open-source projects with mentor support'
    },
    {
      org: 'TIEDC, JUIT',
      role: 'Corporate Relations Member',
      period: '2024–2025',
      desc: 'Building connections for internships and sponsorships'
    },
    {
      org: 'IEEE JUIT',
      role: 'Finance & Programming Member',
      period: '2023–2024',
      desc: 'Taught C to 50+ students and organized tech events'
    },
    {
      org: 'E-Cell, IIT Bombay',
      role: 'Campus Ambassador',
      period: '2024',
      desc: 'Promoting innovation and entrepreneurship'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building practical skills through hands-on development and leadership opportunities
          </p>
        </div>

        {/* Professional Experience */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="border-2 border-primary/10 hover:border-primary/30 shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary">{exp.role}</CardTitle>
                    <h4 className="text-xl font-semibold">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <Badge variant="outline" className="border-primary text-primary w-fit">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Volunteering Section */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold mb-8 text-center">Volunteering & Leadership</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {volunteering.map((vol, index) => (
              <Card 
                key={index}
                className="hover:shadow-card transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">{vol.org}</h4>
                      <p className="text-primary font-medium">{vol.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{vol.desc}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {vol.period}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;