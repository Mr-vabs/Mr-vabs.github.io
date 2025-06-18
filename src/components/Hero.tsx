// File: src/components/Hero.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

const profileURL = "https://avatars.githubusercontent.com/u/33443357?v=4";

export const Hero = () => (
  <section className="text-center space-y-4">
    {/* Profile Image */}
    <img
      src={profileURL}
      alt="Vaibhav's profile picture"
      className="w-32 h-32 mx-auto rounded-full shadow-lg"
    />

    {/* Name & Designation */}
    <h1 className="text-4xl font-bold">Vaibhav Kasaudhan</h1>
    <p className="text-lg text-gray-600 dark:text-gray-600">
      Software License Manager | React Dev | Tech Support Specialist
    </p>
    {/* Objective */}
    <p className="text-sm text-gray-700 dark:text-gray-600 max-w-2xl mx-auto">
      A tech enthusiast aiming to work in dynamic organizations where I can
      apply my software and hardware troubleshooting knowledge, grow in a cloud
      or DevOps-focused role, and contribute to modern IT systems. 2+ years of
      experience in software licensing, tech support & cloud infra. Strong
      skills in React, Python & system administration.
    </p>

    {/* Contact Info */}
    <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
      <p>
        Email:{" "}
        <a href="mailto:visitvabs@gmail.com" className="text-blue-500">
          visitvabs@gmail.com
        </a>
      </p>
      <p>
        Phone:{" "}
        <a href="tel:+919695336788" className="text-blue-500">
          +91 9695336788
        </a>
      </p>
      <p>Location: New Delhi, India</p>
    </div>

    {/* Social Links */}
    <div className="space-x-4 mt-4">
      <a href="https://github.com/Mr-vabs" target="_blank" rel="noreferrer">
        <FaGithub className="inline text-2xl" />
      </a>
      <a href="https://linkedin.com/in/vebhv" target="_blank" rel="noreferrer">
        <FaLinkedin className="inline text-2xl" />
      </a>
    </div>
  </section>
);
