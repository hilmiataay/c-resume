import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const AccordionSlice = createSlice({
  name: "AccordionSlice",
  initialState: {
    Accordions: {
      EmploymentHistory: {},
      Education: {},
      İnternShips: {},
      Skills: {},
      References: {},
      Languages: {},
    },
    PreviewVisibility: false,
  },
  reducers: {
    AddAccordion: (state, action) => {
      console.log(action.payload.type);
      if (action.payload.type === "EmploymentHistory") {
        state.Accordions.EmploymentHistory = {
          ...state.Accordions.EmploymentHistory,
          ...{ [action.payload.id]: "Accordion" },
        };
      }
      if (action.payload.type === "Education") {
        console.log(current(state));
        state.Accordions.Education = {
          ...state.Accordions.Education,
          ...{ [action.payload.id]: "Accordion" },
        };
      }
      if (action.payload.type === "İnternShips") {
        state.Accordions.İnternShips = {
          ...state.Accordions.İnternShips,
          ...{ [action.payload.id]: "Accordion" },
        };
      }
      if (action.payload.type === "Skills") {
        state.Accordions.Skills = {
          ...state.Accordions.Skills,
          ...{ [action.payload.id]: "Accordion" },
        };
      }
      if (action.payload.type === "Languages") {
        state.Accordions.Languages = {
          ...state.Accordions.Languages,
          ...{ [action.payload.id]: "Accordion" },
        };
      }
      if (action.payload.type === "References") {
        state.Accordions.References = {
          ...state.Accordions.References,
          ...{ [action.payload.id]: "Accordion" },
        };
      }
    },

    RemoveAccordion: (state, action) => {
      if (action.payload.type === "EmploymentHistory") {
        const arr = Object.entries(state.Accordions.EmploymentHistory);
        const filtered = arr.filter(
          ([key, value]) => key !== action.payload.id
        );
        const newState = Object.fromEntries(filtered);
        state.Accordions.EmploymentHistory = {
          ...newState,
        };
      }
      if (action.payload.type === "Education") {
        console.log("education");
        const arr = Object.entries(state.Accordions.Education);
        const filtered = arr.filter(
          ([key, value]) => key !== action.payload.id
        );
        const newState = Object.fromEntries(filtered);
        state.Accordions.Education = {
          ...newState,
        };
      }
      if (action.payload.type === "İnternShips") {
        console.log("intern");
        const arr = Object.entries(state.Accordions.İnternShips);
        const filtered = arr.filter(
          ([key, value]) => key !== action.payload.id
        );
        const newState = Object.fromEntries(filtered);
        state.Accordions.İnternShips = {
          ...newState,
        };
      }
      if (action.payload.type === "Skills") {
        const arr = Object.entries(state.Accordions.Skills);
        const filtered = arr.filter(
          ([key, value]) => key !== action.payload.id
        );
        const newState = Object.fromEntries(filtered);
        state.Accordions.Skills = {
          ...newState,
        };
      }
      if (action.payload.type === "References") {
        const arr = Object.entries(state.Accordions.References);
        const filtered = arr.filter(
          ([key, value]) => key !== action.payload.id
        );
        const newState = Object.fromEntries(filtered);
        state.Accordions.References = {
          ...newState,
        };
      }
      if (action.payload.type === "Languages") {
        const arr = Object.entries(state.Accordions.Languages);
        const filtered = arr.filter(
          ([key, value]) => key !== action.payload.id
        );
        const newState = Object.fromEntries(filtered);
        state.Accordions.Languages = {
          ...newState,
        };
      }
    },
    TogglePreviewVisibility: (state, action) => {
      state.PreviewVisibility = !state.PreviewVisibility;
    },
  },
});

export const { AddAccordion, RemoveAccordion, TogglePreviewVisibility } =
  AccordionSlice.actions;

export default AccordionSlice.reducer;