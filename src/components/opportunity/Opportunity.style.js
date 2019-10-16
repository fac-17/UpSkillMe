import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 11px;
  width: 90%;
  max-width: 600px;
  margin: 1.5rem auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Ul = styled.ul`
  list-style: none;
  align-items; center;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  text-decoration: none;
  margin: 0.5rem;
`;

const H3 = styled.h3`
  margin: 0.5rem;
`;

const H4 = styled.h4`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-weight: lighter;
  `;

const Button = styled.button`
  margin-top: 1rem;
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-decoration: none;
  background: #109cf1;
  color: white;
  padding: 1%;
  border-radius: 5px;

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

export { Div, Ul, Li, H3, H4, Button };
