import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 800px;
  border-radius: 8px;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
`;

export const SkillCategory = styled.div`
  flex: 1 1 30%;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 0.5rem;

      &:before {
        content: "✓";
        color: #27ae60;
        margin-right: 0.5rem;
      }
    }
  }
`;
