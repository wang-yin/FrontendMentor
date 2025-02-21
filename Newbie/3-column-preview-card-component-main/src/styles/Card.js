import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => `var(${props.color})`};
  
`;

export const CardTitle = styled.h2`
  font-family: "Big Shoulders Display", cursive;
  text-transform: uppercase;
  color: var(--LightGray);
  font-size: 30px;
  
`;

export const CardContext = styled.p`
  color: var(--White);
  line-height: 1.6;
`;
