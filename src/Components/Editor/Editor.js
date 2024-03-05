import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { PageToPrint } from "./PageToPrint";
import { useReactToPrint } from "react-to-print";

const Wrapper = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  box-sizing: border-box;
  width: 40%;
  height: 100vh;
  position: fixed;
  padding: 0rem 2.3rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 100%;
    display: ${(props) => (props.previewVisibility ? "block" : "none")};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.7rem 2.1rem;
  border: none;
  border-radius: 3.2px;
  color: 00373d;
  font-size: 0.8rem;
  font-family: "Sarabun", sans-serif;
  font-weight: 700;
  width: 40%;
  box-shadow: 0px 0px 20px 7px rgba(240, 242, 249, 7);
  letter-spacing: 1.4px;
  transition: all 0.3s ease-out;
  z-index: 1000;

  :hover {
    box-shadow: 0px 10px 40px 16px rgba(240, 242, 249, 7);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.2rem;
    font-size: 0.5rem;
    width: 45%;
  }
`;

const Container = styled(motion.div)`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1rem;
  width: 100%;

  span {
    position: absolute;
    top: 40%;
    right: 43%;
  }
`;

const SavingSpinner = styled(motion.span)`
  border: 10px solid aliceblue;
  border-top: 10px solid blue;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  animation: spin 3s linear infinite;
  z-index: 1000;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Editor() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const visiblity = useSelector((state) => state.values.visibility);
  const PreviewVisibility = useSelector(
    (state) => state.Accordions.PreviewVisibility
  );
  console.log(PreviewVisibility);
  return (
    <Wrapper previewVisibility={PreviewVisibility}>
      <PageToPrint ref={componentRef} />
      <Container>
        <Button onClick={handlePrint}>Download 🥷🏼</Button>
        <span>{visiblity && <SavingSpinner key="131414" id="1414141" />}</span>
      </Container>
    </Wrapper>
  );
}