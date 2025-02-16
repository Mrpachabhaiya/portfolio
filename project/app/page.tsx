"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageSquare, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5,
      });

      gsap.from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 1,
      });

      // Section animations
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        gsap.from(section.children, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-8 lg:px-16 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 hero-content">
            <p className="text-xl mb-6 text-[#48A6A7]">👋 Hi, my name is Maxence, 18 & I am</p>
            <h1 className="hero-title mb-8 text-[#2973B2]">
              Product Designer
              <br />
              UI/UX Designer
              <br />
              Developer
            </h1>
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="badge">15 000+ App Pitches Winner</span>
              <span className="badge">Awwwards Jury</span>
            </div>
            <Button className="custom-button">
              <MessageSquare className="mr-3 h-5 w-5" />
              Let's Talk
            </Button>
          </div>
          
          <div className="flex-1 hero-image">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Misty waterfall"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-8 lg:px-16 py-20">
        <h2 className="section-title">About me</h2>
        <p className="section-subtitle">Here you can find a little bit about me. I am a passionate designer and developer!</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="about-card">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&fit=crop&w=100&h=100&q=80"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Maxence</h3>
                <p className="text-gray-600">maxence-t</p>
              </div>
              <a href="https://github.com" className="ml-auto">
                <Github className="h-6 w-6" />
              </a>
            </div>
            <div className="bg-gray-100 rounded-xl px-4 py-2 inline-block mb-6">
              <span className="text-sm">5 publics projects</span>
            </div>
          </div>
          
          <div className="map-card">
            <Image
              src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/2.3522,48.8566,5,0/800x400@2x?access_token=YOUR_MAPBOX_TOKEN"
              alt="Location"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="project-card">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">My Curriculum Vitae</h3>
              <p className="text-gray-600">Hover to download</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">I am also a videographer</h3>
              <p className="text-gray-600">Check out my content on youtube</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-8 lg:px-16 py-20">
        <h2 className="section-title">My skills</h2>
        <p className="section-subtitle">I enjoy creating unique and intuitive digital experiences by utilizing a variety of tools that I have mastered over my years of experience.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Figma', experience: '6 years of experiences - 10 projects' },
            { name: 'After Effects', experience: '2 years of experiences - 3 projects' },
            { name: 'NodeJS', experience: '4 years of experiences - 5 projects' },
            { name: 'JavaScript', experience: '6 years of experiences - 7 projects' },
            { name: 'DaVinci Resolve', experience: '3 years of experiences - 4 projects' },
            { name: 'Web Development', experience: '7 years of experiences - 9 projects' },
          ].map((skill, index) => (
            <div key={index} className="skill-card">
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.experience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-8 lg:px-16 py-20">
        <h2 className="section-title">My projects</h2>
        <p className="section-subtitle">Discover the projects I have been able to develop, manage, and design over the course of my experiences in recent years.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'RealMemories',
              description: 'Transform your BeReal into a personalized album with our editor. Delivered directly to your home.',
              image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&fit=crop&w=800&h=400&q=80'
            },
            {
              title: 'Teranga App',
              description: 'Teranga allows Discord users to create their own Discord application with a drag-and-drop editor.',
              image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&fit=crop&w=800&h=400&q=80'
            },
            {
              title: 'Alumet Education',
              description: 'Alumet is a digital workspace that brings together a set of tools for students and teachers.',
              image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&fit=crop&w=800&h=400&q=80'
            }
          ].map((project, index) => (
            <div key={index} className="project-card">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Companies Section */}
      <section className="container mx-auto px-8 lg:px-16 py-20">
        <h2 className="text-2xl font-semibold text-center mb-12 text-[#2973B2]">COMPANY I WORKED WITH</h2>
        <div className="flex flex-wrap justify-center gap-16">
          <img src="/discord.svg" alt="Discord" className="h-10 company-logo" />
          <img src="/alumet.svg" alt="Alumet Education" className="h-10 company-logo" />
          <img src="/teranga.svg" alt="Teranga" className="h-10 company-logo" />
          <img src="/real.svg" alt="Real Memories" className="h-10 company-logo" />
        </div>
      </section>
    </div>
  );
}