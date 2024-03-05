import React from "react";
import { Container, Title } from "./Profile";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ReferenceContainer = styled.div`
  width: 80%;
`;

const Reference = styled.div`
  margin-top: 1.3rem;
  span {
    font-weight: 300;
    color: #666666;
    display: block;
    font-size: 0.6rem;
  }
  h4 {
    color: #525252;
    font-size: 0.6rem;
  }

  span:nth-child(2) {
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
  }
`;

const References = () => {
  const state = useSelector((state) => state.values.values["References"]);
  const accordions = Object.keys(state).map((accordion) => state[accordion]);

  return (
    <Container>
      <Title>
        <span> References</span>
      </Title>
      <ReferenceContainer>
        {accordions.map((accordion) => {
          return (
            <Reference>
              <h4>{accordion["which"]}</h4>
              <span>{accordion["company"]}</span>
              <span>{accordion["e-mail"]}</span>
              <span>{accordion["phone"]}</span>
            </Reference>
          );
        })}
      </ReferenceContainer>
    </Container>
  );
};
export default References;