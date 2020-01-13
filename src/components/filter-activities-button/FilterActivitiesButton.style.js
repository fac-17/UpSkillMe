import styled from 'styled-components';

const ButtonDiv = styled.div`
  flex-direction: column;
  width: 90%;
  max-width: 750px;
  margin: 1.5rem auto;
  padding-bottom: 1.5rem;
  list-style: none;
  align-items: center;
  text-align: center;
`;

const H3 = styled.h3`
    text-align: center;
    color: black;
    margin-block-start: 0.7em;
`;

const FilterActivitiesButtonStyle = styled.button`
  outline: none;
  height: 50px;
  color: white;
  width: 170px;
  margin-left: 15px;
  margin-bottom: 15px;
  background-color: inherit;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 18px;
  :focus {
    background: #1592DE;
    h3${H3} {
      color: white;
    }
  }
  @media (max-width: 615px) {
    margin-left: 8px;
    margin-bottom: 12px;
  }
`;

export { FilterActivitiesButtonStyle, ButtonDiv, H3 }
