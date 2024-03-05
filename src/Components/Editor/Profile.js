import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  margin-top: 2rem;
`;

export const Title = styled.h1`
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

export const Summary = styled.span`
  width: 80%;
  font-size: 0.6rem;
  font-weight: 300;
  color: #666666;
  display: inline-block;
  word-wrap: break-word;
`;

const Profile = () => {
  const ProfessionalSummary = useSelector(
    (state) => state.values.values.forms.summary
  );

  return (
    <Container>
      <Title>
        <span> Profile</span>
      </Title>
      <Summary>{ProfessionalSummary}</Summary>
    </Container>
  );
};

export default Profile;