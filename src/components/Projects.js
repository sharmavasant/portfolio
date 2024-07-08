import React from "react";
import { Section } from "./styles/Projects.styles";

const Projects = () => (
  <Section>
    <h1>Projects</h1>
    <div>
      <h2>Smiling-Mind</h2>
      <p>
        This website is for people who are mentally disturbed. It provides
        music, books, games, mental health check-up reports, and a chat system
        to the users so that they feel good and peaceful.
      </p>
      <p>Technologies: EJS, JavaScript, Node.js, Tailwind CSS, CSS, MongoDB</p>
    </div>
    <div>
      <h2>Medi-Pharma Website</h2>
      <p>
        A real-time medicine ordering application where users can log in, place
        orders, and track their deliveries. Admins can update the delivery
        status.
      </p>
      <p>Technologies: JavaScript, Node.js, CSS, EJS, MongoDB</p>
    </div>
  </Section>
);

export default Projects;
