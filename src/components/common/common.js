import styled from "styled-components";

export const Button = styled.button`
  border-radius: 0.5rem;
  width: 7rem;
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
  margin: 3rem 0.5rem;
  background-color: ${props => props.theme.secondaryGreyColor};
`;

export const Label = styled.label`
  font-size: ${props => props.theme.h3FontSize};
`;
