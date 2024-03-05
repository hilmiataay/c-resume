import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
  flex-direction: row;
  margin-top: 2rem;
  z-index: 200;
  section {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
const Detail = styled.div`
  display: flex;
  width: 48%;
  align-items: center;
  font-size: 0.45rem;
  justify-content: space-around;
  margin-bottom: 0rem;

  span {
    width: 50%;
    font-weight: 300;
    color: #666666;
  }
  span:first-of-type {
    font-weight: 600;

    color: #525252;
  }
`;

const Dot = styled.span`
  border-radius: 10%;
  width: 3px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.grayMid};
`;

const BlueDot = styled(Dot)`
  background-color: ${({ theme }) => theme.colors.highlight};
`;

const DotContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  width: 60%;
  align-items: center;
  justify-content: space-around;
`;

const Skills = () => {
  const skills = useSelector((state) => state.values.values.Skills);

  return (
    <Container>
      <Title>
        <span>Skills</span>
      </Title>
      <section>
        {Object.keys(skills).map((item, i) => {
          let count = parseInt(skills[item]);
          return (
            <Detail key={i}>
              <span>{item} </span>
              <DotContainer>
                {[...Array(count)].map((item, i) => {
                  return <BlueDot key={i}> </BlueDot>;
                })}
                {[...Array(5 - count)].map((item, i) => {
                  return <Dot key={i}> </Dot>;
                })}
              </DotContainer>{" "}
            </Detail>
          );
        })}
      </section>
    </Container>
  );
};

export default Skills;