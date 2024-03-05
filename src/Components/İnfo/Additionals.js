import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToStore } from "../../store/textSlice";
import {
  İnputContainer,
  FocusBorder,
  İnput,
  Label,
  ExpandArrow,
  CollapseArrow,
} from "./Accordion";

const Additional = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  overflow: hidden;
  div {
    display: flex;
    justify-content: space-between;
  }
`;
const ExpandCollapse = styled(motion.span)`
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

function Additionals() {
  const dispatch = useDispatch();
  const [isAnimated, setAnimate] = useState(false);
  const handleFocus = (e) => {
    const border = e.target.nextElementSibling;
    border.style.width = "100%";
  };
  const handleBlur = (e) => {
    const border = e.target.nextElementSibling;
    border.style.width = "0";
  };
  const inputProps = {
    onFocus: (e) => handleFocus(e),
    onBlur: (e) => handleBlur(e),
    onChange: (e) => {
      dispatch(addToStore({ [e.target.id]: e.target.value }));
    },
    autoComplete: "off",
  };
  return (
    <>
      <AnimatePresence>
        {isAnimated ? (
          <Additional
            key="modal"
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.6, when: "beforeChildren" },
            }}
            initial={{ height: 0, opacity: 0 }}
            exit={{ height: 0, transition: { duration: 0.4 } }}
          >
            <div key={"1312313"}>
              <İnputContainer>
                <Label>Coutry </Label>
                <İnput id="Country" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
              <İnputContainer>
                <Label>City</Label>
                <İnput id="City" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
            </div>
            <div key="w42424">
              <İnputContainer>
                <Label>Address </Label>
                <İnput id="Address" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
              <İnputContainer>
                <Label>Driving License</Label>
                <İnput id="Driving license" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
            </div>
            <div key="xfsfsf">
              <İnputContainer>
                <Label>Nationality </Label>
                <İnput id="Nationality" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
              <İnputContainer>
                <Label>Date of Birth</Label>
                <İnput id="Birth date" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
            </div>
          </Additional>
        ) : null}
      </AnimatePresence>
      <ExpandCollapse
        onClick={() => {
          setAnimate((prev) => !prev);
        }}
      >
        For more info{" "}
        {isAnimated ? (
          <CollapseArrow src="https://img.icons8.com/ios-glyphs/30/000000/collapse-arrow.png" />
        ) : (
          <ExpandArrow src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png" />
        )}
      </ExpandCollapse>
    </>
  );
}

export default Additionals;