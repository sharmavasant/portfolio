import React from "react";
import {
  Section,
  ContactContainer,
  Title,
  LinkedInButton,
} from "./styles/Contact.styles";

const Contact = () => (
  <Section>
    <ContactContainer>
      <Title>Contact Me</Title>
      <p>
        If you want to get in touch, feel free to reach out to me on LinkedIn.
      </p>
      <LinkedInButton
        href="https://www.linkedin.com/in/vasantsharma76/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect on LinkedIn
      </LinkedInButton>
    </ContactContainer>
  </Section>
);

export default Contact;
