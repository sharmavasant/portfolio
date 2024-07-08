import styled from "styled-components";

export const Nav = styled.nav`
  background: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  div {
    a {
      margin: 0 1rem;
      font-size: 1rem;
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
