import React from "react";
import {
  Section,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  Button,
  AboutSection,
} from "./styles/Home.styles";

const Home = () => (
  <Section>
    <HeroSection>
      <HeroTitle>Welcome to My Portfolio</HeroTitle>
      <HeroSubtitle>
        I'm passionate about problem-solving and web development
      </HeroSubtitle>
      {/* <Button href="/contact">Get in Touch</Button> */}
    </HeroSection>
    <AboutSection>
      <h2>About Me</h2>
      <p>
        I have worked on many projects using JavaScript, Node.js, Express.js,
        React.js, MongoDB, and MySQL. My areas of interest are problem-solving
        and web development. Explore my portfolio to know more about my skills
        and projects.
      </p>
    </AboutSection>
  </Section>
);

export default Home;
