import React from "react";
import {
  Section,
  SkillsContainer,
  SkillCategory,
} from "./styles/Skills.styles";

const Skills = () => (
  <Section>
    <h1>Technical Skills</h1>
    <SkillsContainer>
      <SkillCategory>
        <h2>Languages</h2>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
      </SkillCategory>
      <SkillCategory>
        <h2>Developer Tools</h2>
        <ul>
          <li>VS Code</li>
          <li>IntelliJ IDEA</li>
          <li>Git</li>
        </ul>
      </SkillCategory>
      <SkillCategory>
        <h2>Cloud/Databases</h2>
        <ul>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      </SkillCategory>
      <SkillCategory>
        <h2>Soft Skills</h2>
        <ul>
          <li>Communication</li>
          <li>Problem Solving</li>
          <li>Self Motivation</li>
          <li>Active listening</li>
        </ul>
      </SkillCategory>
    </SkillsContainer>
  </Section>
);

export default Skills;
