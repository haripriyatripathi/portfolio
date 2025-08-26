import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github, Code, Download, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'haripriyatripathix@gmail.com',
      href: 'mailto:haripriyatripathix@gmail.com',
      color: 'bg-red-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/haripriyatripathi',
      href: 'https://www.linkedin.com/in/haripriyatripathi?_l=en_US',
      color: 'bg-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '/haripriyatripathi',
      href: 'https://github.com/haripriyatripathi',
      color: 'bg-gray-800'
    },
    {
      icon: Code,
      label: 'LeetCode',
      value: '/haripriyatripathi',
      href: 'https://leetcode.com/u/haripriyatripathi/',
      color: 'bg-orange-500'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborations, or just say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <Card className="border-2 border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4">Get In Touch</CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or potential collaborations. Whether you're a recruiter, fellow developer, 
                  or someone with an exciting idea, feel free to reach out!
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold group-hover:text-primary transition-colors">{contact.label}</h4>
                        <p className="text-sm text-muted-foreground">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="border-2 border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Download Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a comprehensive overview of my experience, skills, and achievements.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-elegant"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '10+', label: 'Projects Built' },
                { number: '4+', label: 'Hackathon Wins' },
                { number: '3+', label: 'Years Learning' },
                { number: '50+', label: 'Students Taught' }
              ].map((stat, index) => (
                <Card 
                  key={index}
                  className="text-center hover:shadow-card transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="border-2 border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Drop me a line and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="mt-6 border border-green-500/20 bg-green-500/5">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <Badge variant="outline" className="border-green-500 text-green-500">
                    Available for Opportunities
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently open to internships, freelance projects, and full-time roles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">
              © 2025 Haripriya Tripathi. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex justify-center gap-6">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <contact.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;