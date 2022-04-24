import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: #6b8067;
  height: 3rem;
  width: 15rem;
  color: #fff;
  border: 0;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  font-family: "Open Sans";
  font-weight: bold;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  text-align: center;

  @media (max-width: 420px) {
    width: 100%;
  }
`;
