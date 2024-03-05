import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Title = styled.h1`
  width: 30%;
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #525252;
  span {
    padding-right: 30px;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid black;
  }
`;

const Container = styled.div`
  display: flex;
  margin-top: 3rem;
  align-items: center;
  div {
    width: 80%;
  }
`;
const Language = styled.div`
  span {
    font-size: 0.7rem;
  }
`;
const Languages = () => {
  const state = useSelector((state) => state.values.values.Languages);
  const accordions = Object.keys(state).map((accordion) => state[accordion]);
  return (
    <Container>
      <Title>
        {" "}
        <span>Languages</span>{" "}
      </Title>
      <div>
        {accordions.map((accordion) => {
          return (
            <Language>
              <span> {accordion["which"] + "/" + accordion["level"]} </span>
            </Language>
          );
        })}
      </div>
    </Container>
  );
};

export default Languages;