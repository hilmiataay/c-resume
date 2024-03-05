import React, { useState } from "react";
import styled from "styled-components";
import { RemoveAccordion } from "../../../store/AccordionSlice";
import { useDispatch } from "react-redux";
import { AddAccordionValuesToStore } from "../../../store/textSlice";
import { RemoveAccordionValues } from "../../../store/textSlice";
import {
  Deleteİmg,
  Container,
  ExpandArrow,
  CollapseArrow,
  ExpandCollapse,
  ContentContainer,
  İnputContainer,
  FocusBorder,
  İnput,
  Label,
} from "../Accordion";

const Header = styled.h1`
  font-size: 1rem;
  color: black;
  font-weight: 400;
`;

const LanguageHobbyAccordions = ({ id, type }) => {
  const [skill, setSkill] = useState(id);
  const [AccordionTitle, setAccordionTitle] = useState("Not Specified ⚙️");
  const [isVisible, setİsVisible] = useState(true);
  const [Expanded, SetExpanded] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    setİsVisible(!isVisible);
    setTimeout(() => dispatch(RemoveAccordion({ id, type })), 300);
    dispatch(RemoveAccordionValues({ id: id, type: type }));
  };
  const handleFocus = (e) => {
    const border = e.target.nextElementSibling;
    border.style.width = "100%";
  };
  const handleBlur = (e) => {
    const border = e.target.nextElementSibling;
    border.style.width = "0";
  };
  const imgProps = {
    src: "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png",
    onClick: handleDelete,
  };
  const contProps = {
    isVisible: isVisible,
  };
  const inputProps = {
    onFocus: (e) => handleFocus(e),
    onBlur: (e) => handleBlur(e),
    onChange: (e) => {
      if (e.target.id === "which") {
        setAccordionTitle(e.target.value);

        dispatch(
          AddAccordionValuesToStore({
            AccordionType: type,
            values: {
              [e.target.id]: e.target.value,
            },
            id: id,
          })
        );
      } else {
        dispatch(
          AddAccordionValuesToStore({
            AccordionType: type,
            values: {
              [e.target.id]: e.target.value,
            },
            id: id,
          })
        );
      }
    },
  };
  const expandCollapseProps = {
    style: { color: "#191C24", fontSize: "1rem" },
    onClick: () => SetExpanded((prev) => !prev),
  };
  return (
    <Container {...contProps}>
      <Deleteİmg {...imgProps}></Deleteİmg>
      <ExpandCollapse {...expandCollapseProps}>
        <Header>{AccordionTitle}</Header>
        {Expanded ? (
          <CollapseArrow src="https://img.icons8.com/ios-glyphs/30/000000/collapse-arrow.png" />
        ) : (
          <ExpandArrow src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png" />
        )}
      </ExpandCollapse>

      {type === "References" ? (
        <ContentContainer Expanded={Expanded} References={true}>
          <div>
            <İnputContainer>
              <Label>Referent's Full Name </Label>
              <İnput id="which" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
            <İnputContainer>
              <Label>Company</Label>
              <İnput id="company" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
          </div>
          <div>
            <İnputContainer>
              <Label>E-mail</Label>
              <İnput id="e-mail" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
            <İnputContainer>
              <Label>Phone</Label>
              <İnput id="phone" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
          </div>
        </ContentContainer>
      ) : (
        <ContentContainer Expanded={Expanded} Languages={true}>
          <div>
            <İnputContainer>
              <Label>Language </Label>
              <İnput id="which" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
            <İnputContainer>
              <Label>Level</Label>
              <İnput id="level" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
          </div>
        </ContentContainer>
      )}
    </Container>
  );
};

export default LanguageHobbyAccordions;