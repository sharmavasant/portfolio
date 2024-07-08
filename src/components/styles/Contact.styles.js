import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem;
  background: #f9f9f9;
  text-align: center;
`;

export const ContactContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const LinkedInButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: white;
  background: #0077b5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    background: #005582;
  }
`;
