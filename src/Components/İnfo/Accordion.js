import React, { useState } from "react";
import styled from "styled-components";
import { RemoveAccordion, SetExpandCollapse } from "../../store/AccordionSlice";
import { useDispatch } from "react-redux";
import TextArea from "./TextArea";
import { AddToStoreSkills } from "../../store/textSlice";
import { AddAccordionValuesToStore } from "../../store/textSlice";
import { RemoveAccordionValues } from "../../store/textSlice";

export const Container = styled.div`
  border: 1px solid gainsboro;
  border-radius: 5px;
  padding: 0rem 0.4rem;
  color: black;
  position: relative;
  transform: ${(props) => (props.isVisible ? "" : "TranslateX(-1200px)")};
  transition: ease-in-out 0.3s all;

  :hover img {
    opacity: 100;
  }
`;

export const ExpandArrow = styled.img`
  width: 0.8rem;
`;

export const CollapseArrow = styled.img`
  width: 0.8rem;
`;

export const ExpandCollapse = styled.span`
  color: blue;
  font-weight: 500;
  height: 70px;
  padding: 1rem;
  font-size: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: all 3s ease-in-out;

  :hover * {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;
export const Deleteİmg = styled.img`
  width: 1.2rem;
  cursor: pointer;
  position: absolute;
  right: -30px;
  bottom: 27px;
  opacity: 0;
  transition: all 0.5s ease-in;
`;

export const ContentContainer = styled.div`
  height: ${(props) =>
    props.Expanded
      ? props.Skills
        ? "100px"
        : props.References
        ? "220px"
        : props.Languages
        ? "100px"
        : "500px"
      : "0px"};

  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;
  transition: ease-in-out 0.5s all;

  > div {
    display: flex;
    justify-content: space-between;
  }

  > section {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    height: ${(props) =>
      props.Expanded
        ? props.Skills
          ? "100px"
          : props.References
          ? "110px"
          : props.Languages
          ? "100px"
          : "400px"
        : "0px"};
  }
`;
export const İnputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 47%;
  position: relative;
`;

export const FocusBorder = styled.span`
  height: 3.2px;
  background-color: #1b91f0;
  width: 0%;
  transition: all 0.1s ease-in;
  border-bottom-right-radius: 3.2px;
  border-bottom-left-radius: 3.2px;
  align-self: center;
  position: absolute;
  bottom: 0;
`;

export const İnput = styled.input`
  background-color: ${({ theme }) => theme.colors.grayMid};
  border-radius: 3.2px;
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  padding: 1.2rem 0.4rem;
  width: 100%;
  font-size: 0.9rem;
  text-indent: 10px;
  font-weight: 400;

  :focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.2rem;
  }
`;

export const Label = styled.label`
  font-size: 0.86rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.3px;
`;

const RangeContainer = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Range = styled.input.attrs({
  type: "range",
  min: 1,
  max: 5,
  defaultValue: 5,
})`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  width: 100%;
  height: 65%;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.grayMid};

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 49px;
    width: 75px;
    border-radius: 3px;
    background: #6eedeb;
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    ::-webkit-slider-thumb {
      height: 35px;
      width: 60px;
    }

    ::-moz-range-thumb {
      width: 24px;
      height: 30px;
      -moz-appearance: none;
    }
  }
`;

const SkillNameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.4rem;

  span:nth-child(2) {
    font-weight: 200;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const AccordionHeader = styled.span`
  font-size: 1rem;
`;

export const Accordion = ({ id, state, type }) => {
  const [skill, setSkill] = useState(id);
  const [AccordionTitle, setAccordionTitle] = useState("Not Specified ⚙️");
  const [skillLevel, setSkillLevel] = useState(5);
  const [isVisible, setİsVisible] = useState(true);
  const [Expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const levels = () => {
    if (skillLevel === "1") {
      return "Novice";
    }
    if (skillLevel === "2") {
      return "Beginner";
    }
    if (skillLevel === "3") {
      return "Skillful";
    }
    if (skillLevel === "4") {
      return "Experienced";
    }
    if (skillLevel === "5") {
      return "Expert";
    }
  };

  const handleDelete = () => {
    setİsVisible(!isVisible);
    setTimeout(() => dispatch(RemoveAccordion({ id, type })), 300);
    dispatch(RemoveAccordionValues({ id, type }));
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

  const SkillsProps = {
    onChange: (e) => {
      setSkillLevel(e.target.value);
      dispatch(AddToStoreSkills({ skill: skill, level: e.target.value }));
    },
  };

  const expandCollapseProps = {
    style: { color: "#191C24", fontSize: "1rem" },
    onClick: () => setExpanded((prev) => !prev),
  };

  return (
    <Container {...contProps}>
      <Deleteİmg {...imgProps}></Deleteİmg>
      <ExpandCollapse {...expandCollapseProps}>
        {type === "Skills" ? (
          <SkillNameContainer>
            <span> {skill.length > 23 ? "Empty 👀" : skill} </span>
            <span>{levels()} </span>
          </SkillNameContainer>
        ) : (
          <AccordionHeader>{AccordionTitle}</AccordionHeader>
        )}
        {Expanded ? (
          <CollapseArrow src="https://img.icons8.com/ios-glyphs/30/000000/collapse-arrow.png" />
        ) : (
          <ExpandArrow src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png" />
        )}
      </ExpandCollapse>

      {type === "Skills" ? (
        <ContentContainer Skills={true} Expanded={Expanded}>
          <div>
            <İnputContainer>
              <Label>Skill </Label>
              <İnput
                id="skillİnput"
                defaultValue={id.length < 23 ? id : ""}
                onChange={(e) => setSkill(e.target.value)}
              />
              <FocusBorder />
            </İnputContainer>
            <RangeContainer>
              <Label>Level</Label>
              <Range {...SkillsProps}></Range>
            </RangeContainer>
          </div>
        </ContentContainer>
      ) : (
        <ContentContainer Expanded={Expanded}>
          <div>
            <İnputContainer>
              <Label>{state.which} </Label>
              <İnput id="which" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
            <İnputContainer>
              <Label>{state.who}</Label>
              <İnput id="emp-deg" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
          </div>

          <div>
            <İnputContainer>
              <Label>Start & End Date </Label>
              <İnput id="when" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
            <İnputContainer>
              <Label>{state.where}</Label>
              <İnput id="where" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
          </div>
          <section>
            <TextArea id={id} type={type} />
          </section>
        </ContentContainer>
      )}
    </Container>
  );
};
