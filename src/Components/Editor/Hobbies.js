import React from "react";
import { Container, Title, Summary } from "./Profile";
import { useSelector } from "react-redux";

const Hobbies = () => {
  const text = useSelector(
    (state) => state.values.values.Hobbies.hobbiesTextAera["text-area"]
  );

  return (
    <Container>
      <Title>
        <span> Hobbies</span>
      </Title>
      <Summary>{text}</Summary>
    </Container>
  );
};

export default Hobbies;