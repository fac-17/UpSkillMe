import styled from "styled-components";

const FourZeroFourBody = styled.body`
  background: #109cf1;
  height: 100vh;
  text-align: center;
`;

const FourZeroFourSection = styled.section`
  font-size: 1.2em;
  colour: #109cf1;
  height: 100%;
`;

const H1 = styled.h1`
  font-size: 3em;
  padding-top: 25px;
  color: ${props => props.theme.mainWhiteColor};
`;

const H2 = styled.h2`
  color: ${props => props.theme.mainWhiteColor};
`;

const ReturnButton = styled.button`
  border-radius: 0.5rem;
  width: 8rem;
  height: 2rem;
  font-size: 0.8rem;
  text-align: center;
  margin: 3rem 0.5rem;
  margin-left: auto;
  margin-right: auto;
  background: ${props => props.theme.mainWhiteColor};
  color: ${props => props.theme.primaryColor};
`;

const SpaceshipImage = styled.img``;
export {
  FourZeroFourBody,
  FourZeroFourSection,
  H1,
  H2,
  ReturnButton,
  SpaceshipImage
};
