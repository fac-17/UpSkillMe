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
  color: red;
  margin: 0.5rem;
`;

const H4 = styled.h4`
  color: red;
  margin: 0.5rem;
`;

export { Div, Ul, Li, H3, H4 };
