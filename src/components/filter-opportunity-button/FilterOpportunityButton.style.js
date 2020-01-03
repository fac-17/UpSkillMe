import styled from 'styled-components';

const ButtonDiv = styled.div`
  flex-direction: column;
  width: 90%;
  max-width: 750px;
  margin: 1.5rem auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  list-style: none;
  align-items: center;
  text-align: center;
`;

const H3 = styled.h3`
    text-align: center;
    color: black;
    margin-block-start: 0.7em;
`;

const FilterOpportunityButtonStyle = styled.button`
  height: 50px;
  color: white;
  width: 170px;
  margin-left: 15px;
  margin-bottom: 15px;
  background-color: inherit;
  border: 1px solid black;
  border-radius: 10px;
  :focus {
    background: #1592DE;
  }
`;

export { FilterOpportunityButtonStyle, ButtonDiv, H3 }
