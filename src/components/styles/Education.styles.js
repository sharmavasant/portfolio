import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 800px;
`;

export const Timeline = styled.div`
  position: relative;
  margin: 2rem 0;
  padding: 1rem 0;
  list-style: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #333;
    left: 50%;
    margin-left: -1px;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  width: 50%;
  padding: 1rem 2rem;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even) {
    left: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 1.5rem;
    width: 20px;
    height: 20px;
    background: #333;
    border-radius: 50%;
    left: -40px;
    transform: translateX(-50%);
  }

  &:nth-child(even)::before {
    left: -20px;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Date = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

export const Title = styled.h4`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
`;
