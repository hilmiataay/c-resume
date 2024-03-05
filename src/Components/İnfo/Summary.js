import styled from "styled-components";
import SectionText from "./SectionText";
import { useDispatch } from "react-redux";
import { addToStore } from "../../store/textSlice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const SummaryText = styled.textarea`
  height: 200px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.grayMid};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  resize: none;
  :focus {
    outline: 2px #1b91f0 solid;
  }
`;

const paragraph =
  "Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.";

export default function Summary() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(addToStore({ [e.target.id]: e.target.value }));
  };

  return (
    <Container>
      <SectionText defaultVal={"Professional Summary"} paragraph={paragraph} />
      <SummaryText id="summary" onChange={handleChange}></SummaryText>
    </Container>
  );
}