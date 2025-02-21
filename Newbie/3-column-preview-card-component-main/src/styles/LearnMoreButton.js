import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid var(--LightGray);
  font-weight: 400;
  font-family: "Lexend Deca", serif;
  color: ${(props) => `var(${props.color})`};
  padding: 13px 27px;
  border-radius: 26px;
  margin-top: 60px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: var(--LightGray);
    background: transparent;
  }
`