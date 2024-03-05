import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Additionals from "./Additionals";
import { useSelector, useDispatch } from "react-redux";
import { addToStore } from "../../store/textSlice";
import SectionText from "./SectionText";
import { İnputContainer, FocusBorder, İnput, Label } from "./Accordion";

const PersonalDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 2.2rem 0;
  > div {
    display: flex;
    justify-content: space-between;
  }
  span {
    font-size: 0.8rem;
  }
`;
const İnputContainerFull = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

function Forms() {
  // ──────────────────────────────────────── Input Props and functions ──────────
  const dispatch = useDispatch();
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
  };
  // ──────────────────────────────────────────────────

  return (
    <PersonalDetails>
      <SectionText defaultVal={"Personal Details"} />
      <div>
        <İnputContainerFull>
          <Label>Wanted Job Title </Label>
          <İnput id="job-title" {...inputProps} />
          <FocusBorder />
        </İnputContainerFull>
      </div>
      <div>
        <İnputContainer>
          <Label>First Name</Label>
          <İnput id="name" {...inputProps} />
          <FocusBorder />
        </İnputContainer>
        <İnputContainer>
          <Label>Last Name</Label>
          <İnput id="last-name" {...inputProps} />
        </İnputContainer>
      </div>
      <div>
        <İnputContainer>
          <Label>Email</Label>
          <İnput id="Email" {...inputProps} />
          <FocusBorder />
        </İnputContainer>
        <İnputContainer>
          <Label>Phone</Label>
          <İnput id="Phone" {...inputProps} />
          <FocusBorder />
        </İnputContainer>
      </div>
      <Additionals />
    </PersonalDetails>
  );
}

export default Forms;