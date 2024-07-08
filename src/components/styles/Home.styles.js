import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem;
  background: #f9f9f9;
`;

export const HeroSection = styled.div`
  background: url("https://source.unsplash.com/random/1600x900") no-repeat
    center center/cover;
  padding: 4rem 2rem;
  color: black;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
  text-align: center;
`;

export const Button = styled.a`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: white;
  background: #27ae60;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #219150;
  }
`;

export const AboutSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
`;
