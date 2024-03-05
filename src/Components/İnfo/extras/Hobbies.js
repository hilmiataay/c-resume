import React, { useState } from "react";
import styled from "styled-components";
import TextArea from "../TextArea";
import { motion } from "framer-motion";

const Container = styled(motion.section)`
  margin-bottom: 3rem;
`;
const Header = styled.h1`
  font-size: 1.4rem;
  color: #00373d;
  margin-bottom: 0.8rem;
  font-weight: 500;
`;
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 100, transition: { duration: 2 } },
  exit: { opacity: 0, transition: { duration: 1.2 } },
};
const Hobbies = () => {
  return (
    <Container
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header>Hobbies</Header>
      <TextArea type={"Hobbies"} id="hobbiesTextAera" />
    </Container>
  );
};

export default Hobbies;