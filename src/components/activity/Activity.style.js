import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 5px solid #109cf1;
  border-radius: 11px;
  width: 90%;
  max-width: 600px;
  margin: 1.5rem auto;
  padding-bottom: 1rem;
  background-color: #ebf5ee;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
`;

const ListStyle = styled.ul`
  padding: 0;
  list-style: none;
  font-size: 1rem;
`;

const Hr = styled.hr`
  height: 0.3rem;
  width: 25%;
  background: #109cf1;
  /* border: none; */
  border-width: 1px 0 0 0;
  border-radius: 30px;
`;

const ActivityLinkButton = styled.button`
  margin-top: 1rem;

  color: #fff;
  text-decoration: none;
  background: #109cf1;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  width: 80%;
  max-width: 400px;

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

const StyledImg = styled.img`
  max-height: 20px;
`;

const H3 = styled.h3`
  margin: 0.5rem;
`;

export {Div, ListStyle, ActivityLinkButton, StyledImg, H3, Hr};
