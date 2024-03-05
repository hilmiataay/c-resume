import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AddAccordion } from "../../store/AccordionSlice";
import { motion } from "framer-motion";
import { AddToSkills } from "../../store/textSlice";

const Container = styled.div``;

//SELECTİONS
const SelectionsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;
`;
const Selection = styled(motion.span)`
  color: black;
  background-color: ${({ theme }) => theme.colors.grayMid};
  padding: 0.3rem 0.6rem;
  font-size: 0.88rem;
  border-radius: 3.2px;
  font-weight: 300;
  transition: all 0.2s ease-in-out;
  margin-bottom: 0.3rem;
  margin-left: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.highlight};
    background-color: #e9f7ff;
  }

  span {
    font-size: 1.2rem;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
`;

//SELECTİONS

const SkillsSelection = ({ state, type }) => {
  const [selections, setSelections] = useState([
    "Communication Skills",
    "Customer Service",
    "Work in a Team",
    "Communication",
    "Work Under Pressure",
    "Microsoft Office",
    "Ability to Multitask",
    "Fast Learner",
    "Adaptability",
    "Time Management",
    "Computer Skills",
    "Teamwork",
    "Leadership Skills",
    "Decision Making",
    "Creativity",
    "İnterpersonal Skills",
    "Self-motivation",
    "Conflict Resolution",
    "Adobe Photoshop",
    "Adobe İllustrator",
    "Project Management",
    "Problem Solving",
    "Highly Organized",
  ]);
  let shuffled = selections
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 10);
  const dispatch = useDispatch();
  const selectionProps = {
    onClick: (e) => {
      dispatch(AddAccordion({ id: e.target.id, type: type, level: 5 }));
      let toSearchFor = e.target.id;
      setSelections((prev) => prev.filter((item) => toSearchFor != item));
    },
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 100,
      transition: {
        duration: 4,
        ease: "backOut",
      },
    },
  };
  return (
    <Container>
      <SelectionsContainer>
        {shuffled.map((item) => (
          <Selection {...selectionProps} id={item} key={item}>
            {item} <span>+</span>
          </Selection>
        ))}
      </SelectionsContainer>
    </Container>
  );
};

export default SkillsSelection;