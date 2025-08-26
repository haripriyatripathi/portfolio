import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'Jaypee University of Information Technology, Solan',
      degree: 'B.Tech in Computer Science Engineering',
      period: '2023 – 2027',
      grade: 'SGPA: 7.5 | GPA: 7.0',
      location: 'Solan, HP',
      description: 'Pursuing comprehensive education in computer science with focus on software engineering fundamentals.',
      icon: '🎓',
      color: 'bg-blue-500'
    },
    {
      institution: 'Delhi Public School, Lucknow',
      degree: 'Class XI & XII (Science Stream)',
      period: '2021 – 2023',
      grade: 'Percentage: 92%',
      location: 'Lucknow, UP',
      description: 'Completed higher secondary education with focus on Mathematics, Physics, and Computer Science.',
      icon: '📚',
      color: 'bg-green-500'
    },
    {
      institution: 'St. Joseph High School, Lucknow',
      degree: 'Class X (CBSE)',
      period: '2019 – 2020',
      grade: 'Percentage: 95%',
      location: 'Lucknow, UP',
      description: 'Completed secondary education with excellent academic performance across all subjects.',
      icon: '🏫',
      color: 'bg-purple-500'
    }
  ];

  const certifications = [
    {
      title: 'Android Development Specialization',
      issuer: 'Google Developer',
      year: '2024',
      skills: ['Kotlin', 'Android Studio', 'Material Design']
    },
    {
      title: 'Spring Boot Certification',
      issuer: 'Spring Framework',
      year: '2024',
      skills: ['Spring Boot', 'RESTful APIs', 'Microservices']
    },
    {
      title: 'Machine Learning Fundamentals',
      issuer: 'Coursera',
      year: '2023',
      skills: ['Python', 'TensorFlow', 'Data Science']
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      year: '2023',
      skills: ['React', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-dark animate-gradient-x" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 right-1/3 w-32 h-32 bg-primary/30 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-24 left-1/4 w-24 h-24 bg-primary/25 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Education & Learning</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning journey through formal education and professional certifications
          </p>
        </div>

        {/* Formal Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="border-2 border-primary/10 hover:border-primary/30 shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${edu.color} rounded-full flex items-center justify-center text-white text-2xl shadow-lg flex-shrink-0`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl lg:text-2xl text-primary mb-2">
                        {edu.institution}
                      </CardTitle>
                      <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-3">
                    <Badge variant="outline" className="border-primary text-primary w-fit">
                      <Award className="w-3 h-3 mr-1" />
                      {edu.grade}
                    </Badge>
                    <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold mb-8 text-center">Certifications & Courses</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="hover:shadow-card transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                      <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        {cert.year}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-3xl font-bold mb-8 text-center">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: '95%', label: 'Class X Score', desc: 'CBSE Board Excellence' },
              { metric: '92%', label: 'Class XII Score', desc: 'Science Stream Focus' },
              { metric: '7.5', label: 'Current SGPA', desc: 'B.Tech CSE Performance' }
            ].map((highlight, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{highlight.metric}</div>
                  <h4 className="font-semibold text-lg mb-2">{highlight.label}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;