
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, innovative projects, 
            and ways we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                  <Send className="w-6 h-6 text-blue-400" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 min-h-[120px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to chat about 
                technology and innovation, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-slate-400">hello@developer.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Github className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">GitHub</h4>
                    <p className="text-slate-400">github.com/developer</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <p className="text-slate-400">linkedin.com/in/developer</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-white mb-4">What I'm Looking For</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Exciting mobile app development projects
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  AI-powered application opportunities
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Collaborative development partnerships
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Full-time or contract positions
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
