//Styled components
import styled from "styled-components";

const FormStyle = styled.form`
  display: ${props => props.formDisplay};
  max-width: 90%;
  margin: 10px;
  position: relative;
  background: #ffffff;
  margin: 0 auto 1%;
  padding: 3%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 2.5%;
`;

const Input = styled.input`
  display: block;
  width: 90%;

  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 2.5%;
  padding: 1.5%;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

const TextArea = styled.textarea`
  display: block;
  width: 90%;

  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 2.5%;
  padding: 1.5%;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

// font-family: "Nunito", sans-serif;

const Select = styled.select`
  display: block;
  width: 95%;
`;

const Submit = styled.input`
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
  background-color: rgb(16,156,241);
  color: white;
  border-radius: 5px;
  height: 50px;
  width: 140px;
  text-align: center;
  text-decoration: none;
  padding: 1%;
  border-radius: 5px;
  display: block;
  transition: all 0.4s ease 0s;
  cursor: pointer;

  box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);

  :hover {
    background: #434343;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

export {FormStyle, Label, Input, Select, Submit, TextArea};