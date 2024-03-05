import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  width: 30%;

  font-size: 0.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #525252;
  text-transform: uppercase;

  span {
    padding-right: 30px;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid black;
  }
`;

const İnfoContainer = styled.div`
  display: flex;

  align-items: flex-start;
  margin-top: 1rem;
  span {
    width: 30%;
    font-size: 0.4rem;
    font-weight: 600;
    color: black;
  }
`;
const İnfos = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.7rem;

    h4 {
      font-weight: 600;
      color: #525252;

      font-size: 0.6rem;
    }
    span {
      font-size: 0.6rem;
      padding: 0px 0px;
      font-style: italic;

      font-weight: 300;
      color: #666666;
      text-align: end;
    }
  }

  p {
    width: 100%;
    font-size: 0.6rem;
    font-weight: 300;
    color: #666666;
  }
`;

const Values = ({ Accordion }) => {
  const state = useSelector((state) => state.values.values[Accordion]);
  const accordions = Object.keys(state).map((accordion) => state[accordion]);

  return (
    <Container>
      <Title>
        <span>
          {" "}
          {Accordion === "EmploymentHistory"
            ? "Employment History"
            : Accordion}{" "}
        </span>
      </Title>
      {accordions.map((accordion) => {
        return (
          <İnfoContainer>
            <span>{accordion["when"]}</span>{" "}
            <İnfos>
              <div>
                <h4>
                  {accordion["which"]} - {accordion["emp-deg"]}
                </h4>
                <span>{accordion["where"]} </span>
              </div>
              <p>{accordion["text-area"]}</p>
            </İnfos>
          </İnfoContainer>
        );
      })}
    </Container>
  );
};

export default Values;