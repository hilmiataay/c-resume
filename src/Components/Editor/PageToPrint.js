import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setVisibility } from "../../store/textSlice";
import PersonalDetails from "./PersonalDetails";
import Profile from "./Profile";
import Values from "./Values";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import References from "./References";
import Languages from "./Languages";

const PageToPrintt = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 90%;
  width: 100%;
  transition: all 0.3s ease-out;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: 1.2px solid ${({ theme }) => theme.colors.grayMid};
  padding: 2rem 3rem;
  box-shadow: 0px 0px 20px 7px rgba(240, 242, 249, 7);
  color: black;
  position: relative;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 2px;
    border-radius: 100px;
    box-shadow: 100px px 100px 100px rgba(240, 242, 249, 100);
  }

  ::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 12px;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grayMid};
    border-radius: 100px;
    height: 20px;
  }

  @media print {
    font-family: "Sarabun";
    scrollbar-width: none;
    height: 596mm;
    width: 210mm;
    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }

  :hover {
    box-shadow: 0px 10px 40px 16px rgba(240, 242, 249, 7);
    transform: translateY(-5px);
  }
`;

const SavingScreen = styled(motion.div)`
  background-color: #fdfffc;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  z-index: 100;
`;

const AnimatedContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 100, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 4 } },
};

const contVars = {
  initial: { opacity: 0 },
  animate: { opacity: 100, transition: { duration: 3 } },
};

export const PageToPrint = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const visiblity = useSelector((state) => state.values.visibility);
  const state = useSelector((state) => state.values.values);

  useEffect(() => {
    document.addEventListener("keydown", () => {
      dispatch(setVisibility({ value: true }));
    });
  });
  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(setVisibility({ value: false })),
      500
    );

    return () => clearTimeout(timer);
  }, [state]);

  return (
    <PageToPrintt ref={ref}>
      <AnimatePresence>
        {visiblity ? (
          <SavingScreen
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
          />
        ) : (
          <></>
        )}
      </AnimatePresence>

      <AnimatedContainer
        variants={contVars}
        animate="animate"
        initial="initial"
      >
        <PersonalDetails />

        {state.forms.summary ? <Profile /> : <></>}

        {Object.keys(state.EmploymentHistory).length > 0 ? (
          <Values Accordion="EmploymentHistory" />
        ) : (
          <></>
        )}

        {Object.keys(state.Education).length > 0 ? (
          <Values Accordion="Education" />
        ) : (
          <></>
        )}

        {Object.keys(state.İnternShips).length > 0 ? (
          <Values Accordion="İnternShips" />
        ) : (
          <></>
        )}

        {Object.keys(state.Skills).length > 0 ? <Skills /> : null}

        {state.Hobbies?.hobbiesTextAera ? <Hobbies></Hobbies> : <></>}

        {Object.keys(state.References).length > 0 ? <References /> : <></>}

        {Object.keys(state.Languages).length > 0 ? <Languages /> : <></>}
      </AnimatedContainer>
    </PageToPrintt>
  );
});