import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function SectionText({ state, top, paragraph, defaultVal }) {
  const Header = styled.h1`
    font-size: ${top ? "35px" : "1.4rem"};
    color: #00373d;
    margin-bottom: 0.3rem;
    font-weight: 500;
  `;
  const HeaderContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: ${top ? "center" : "flex-start"};
    justify-content: center;
    margin-top: ${top ? "0" : "1rem"};
    margin-bottom: 0rem;
    margin-top: 2rem;
  `;
  const Paragraph = styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: 300;
    margin-bottom: 0.4rem;
    margin-top: 0.1rem;
    line-height: 1.5rem;
    width: 95%;
  `;

  const handleİnnerTexts = () => {
    if (top) return <></>;
    if (paragraph) return <Paragraph>{paragraph}</Paragraph>;
    if (state) return <Paragraph>{state?.description}</Paragraph>;
  };

  const handleHeaderText = () => {
    if (state) return state?.header;
    if (defaultVal) return defaultVal;
  };

  return (
    <HeaderContainer>
      <div>
        <Header>{handleHeaderText()}</Header>
      </div>
      {handleİnnerTexts()}
    </HeaderContainer>
  );
}

export default SectionText;