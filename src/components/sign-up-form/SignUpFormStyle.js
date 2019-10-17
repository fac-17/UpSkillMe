import styled from "styled-components";

const H2 = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.h1FontSize};
`;

const Input = styled.input`
  border-radius: 0.5rem;
  width: 5rem;
  height: 2rem;
  font-size: ${props => props.theme.h3FontSize};
  text-align: center;
  margin: 1rem 0.5rem;
  background-color: ${props => props.theme.secondaryGreyColor};
`;

const SimpleForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const EmailInput = styled.input`
  border: 1px black solid;
`;
export { H2, Input, EmailInput, SimpleForm };
