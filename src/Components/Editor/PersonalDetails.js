import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  margin-bottom: 1rem;
`;
const NameTitleContainer = styled.div`
  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray};
  }
  span {
    font-size: 0.8rem;
    display: inline-block;
    margin-top: 0.1rem;
    color: grey;
  }
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 1.3rem;
  font-size: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  width: 35%;
  font-size: 0.45rem;
  justify-content: flex-start;
  margin-bottom: 0.3rem;

  span {
    width: 35%;
    font-weight: 300;
    color: #666666;
  }
  span:first-of-type {
    font-weight: 600;

    color: #525252;
  }
`;

const PersonalDetails = () => {
  const PersonalDetailsValues = useSelector(
    (state) => state.values.values.forms
  );
  Object.keys(PersonalDetailsValues).map((item) => {});
  return (
    <Container>
      <NameTitleContainer>
        <h1>
          {PersonalDetailsValues.name && PersonalDetailsValues.name}{" "}
          {PersonalDetailsValues["last-name"] &&
            PersonalDetailsValues["last-name"]}{" "}
        </h1>
        <span>{PersonalDetailsValues[`job-title`]}</span>
      </NameTitleContainer>
      <DetailsContainer>
        {Object.keys(PersonalDetailsValues)
          .filter(
            (item) =>
              item != "last-name" &&
              item != "name" &&
              item != "job-title" &&
              item != "summary"
          )
          .map((item) => {
            return (
              <Detail>
                <span>{item} </span>
                <span>{PersonalDetailsValues[item]}</span>
              </Detail>
            );
          })}
      </DetailsContainer>
    </Container>
  );
};

export default PersonalDetails;