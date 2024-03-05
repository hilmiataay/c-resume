import React, { useState } from "react";
import styled from "styled-components";
import SvgHobby from "./svg/Hobby";
import SvgLanguage from "./svg/Language";
import SvgReference from "./svg/Reference";
import Hobbies from "./Hobbies";
import { AnimatePresence, motion } from "framer-motion";
import { ExpandCollapseForm } from "../ExpandCollapseForm";

const Container = styled.section`
  margin-bottom: 5rem;
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
const Header = styled.h1`
  font-size: 1.4rem;
  color: #00373d;
  margin-bottom: 1.4rem;
  font-weight: 500;
`;
const Option = styled.h1`
  color: ${(props) => (props.clicked ? "gray" : "black")};
  font-weight: 300;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  margin-top: 0.2rem;
  width: 47%;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  transition: 0.4s all ease-in;
  :hover {
    color: ${(props) => (props.clicked ? "gray" : "#1b91f0")};
  }
`;

const AddedExtraSectionContainer = styled.div``;

const Extras = () => {
  const [ExtraSections, setExtraSections] = useState({
    references: false,
    hobbies: false,
    languages: false,
  });
  const [Extraİtems, setExtraİtems] = useState({
    references: <SvgReference style={{ width: "50px" }} />,
    hobbies: <SvgHobby style={{ width: "50px" }} />,
    languages: <SvgLanguage style={{ width: "50px" }} />,
  });
  const handleClick = (e) => {
    setExtraSections((prev) => {
      const newState = {
        ...prev,
        [e.target.id]: !prev[e.target.id],
      };
      console.log(newState);
      return newState;
    });
  };
  const OptionProps = {
    onClick: (e) => handleClick(e),
  };

  return (
    <Container>
      <AddedExtraSectionContainer>
        {
          <AnimatePresence>
            {ExtraSections.hobbies && <Hobbies />}
            {ExtraSections.references && (
              <ExpandCollapseForm type="References" />
            )}
            {ExtraSections.languages && <ExpandCollapseForm type="Languages" />}
          </AnimatePresence>
        }
      </AddedExtraSectionContainer>
      <Options>
        <Header>Add Section</Header>
        <div>
          {Object.keys(Extraİtems).map((item) => {
            return (
              <Option clicked={ExtraSections[item]} key={item}>
                <span>{Extraİtems[item]}</span>
                <span id={item} {...OptionProps}>
                  {item[0].toUpperCase() + item.substring(1)}{" "}
                </span>
              </Option>
            );
          })}
        </div>
      </Options>
    </Container>
  );
};
export default Extras;