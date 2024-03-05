import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { addToStore, countWords, setVisibility } from "../../store/textSlice";
import { useSelector, useDispatch } from "react-redux";
import { AddAccordionValuesToStore } from "../../store/textSlice";

const SummaryText = styled.textarea`
  height: ${(props) => (props.type === "Hobbies" ? "120px" : "200px")};
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.grayMid};
  border-radius: 5px;
  border: none;
  color: black;
  resize: none;
  font-size: 0.9rem;
  :focus {
    outline: 2px #1b91f0 solid;
  }

  @media (max-width: 768px) {
    height: ${(props) => (props.type === "Hobbies" ? "100px" : "100px")};
  }
`;
const Label = styled.label`
  font-size: 0.86rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.3px;

  span {
    color: black;
    font-size: 1.2rem;
  }
`;
const FocusBorder = styled.span`
  height: 2px;
  background-color: #1b91f0;
  width: 0%;
  transition: all 0.1s ease-in;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 1px;
  align-self: center;
`;

const MiniCont2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.1rem;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;

  width: 100%;
`;

const MiniCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: flex-start;
`;

const TextArea = ({ type, id }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const visibility = useSelector((state) => state.values.visibility);

  const count = useSelector(
    (state) => state.values.countedWords[`textArea${id}Count`]
  );

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(countWords({ [`textArea${id}Count`]: e.target.value.length }));
    dispatch(
      AddAccordionValuesToStore({
        AccordionType: type,
        values: {
          [e.target.id]: e.target.value,
        },
        id: id,
      })
    );
  };

  return (
    <MiniCont>
      <Label>{type === "Hobbies" ? "What do you like?" : "Description"} </Label>
      <SummaryText
        onChange={(e) => handleChange(e)}
        id={"text-area"}
        defaultValue={value}
        type={type}
      ></SummaryText>
      {type != "Hobbies" ? (
        <MiniCont2>
          <Label>
            Recruiter Tip : write 200+ characters to increase interview chances{" "}
          </Label>
          <Label>
            {" "}
            <span> {count ? count : null}</span> /200+
          </Label>
        </MiniCont2>
      ) : null}
    </MiniCont>
  );
};

export default TextArea;