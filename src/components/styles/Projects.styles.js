import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 800px;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  div {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #f9f9f9;
    border-left: 5px solid #333;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      color: #666;
    }
  }
`;
