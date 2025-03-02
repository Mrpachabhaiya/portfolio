"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 w-full z-50 transition-all duration-300 px-4">
      <div className="nav-container">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-[#48A6A7] rounded-full"></div>
              <span className="text-4xl font-bold text-[#2973B2]">
                Open to work
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`nav-link ${
                  activeSection === "home" ? "active" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`nav-link ${
                  activeSection === "about" ? "active" : ""
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`nav-link ${
                  activeSection === "skills" ? "active" : ""
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`nav-link ${
                  activeSection === "projects" ? "active" : ""
                }`}
              >
                Projects
              </button>
            </div>

            <Button className="custom-button">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
