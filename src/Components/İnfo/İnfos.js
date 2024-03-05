import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Forms from "./Forms";
import Summary from "./Summary";
import AccordionSection from "./AccordionSection";
import Extras from "./extras/Extras";

const Wrapper = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  width: 60%;
  color: blue;
  padding: 1rem 3rem;
  color: white;
  font-size: 20px;
  font-family: "Sarabun", sans-serif;
  position: relative;
  display: block;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Infos() {
  return (
    <Wrapper>
      <Forms />
      <Summary />
      <AccordionSection type="EmploymentHistory" />
      <AccordionSection type="Education" />
      <AccordionSection type="İnternShips" />
      <AccordionSection type="Skills" />
      <Extras />
    </Wrapper>
  );
}