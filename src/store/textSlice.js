import { createSlice, current } from "@reduxjs/toolkit";
import { startsWith } from "lodash";

export const textSlice = createSlice({
  name: "textSlice",
  initialState: {
    values: {
      forms: {},
      EmploymentHistory: {},
      Education: {},
      İnternShips: {},
      Skills: {},
      Hobbies: {},
      Languages: {},
      References: {},
    },
    visibility: false,
    typed: null,
    countedWords: {},
  },

  reducers: {
    addToStore: (state, action) => {
      state.values.forms = { ...state.values.forms, ...action.payload };
    },
    countWords: (state, action) => {
      state.countedWords = {
        ...state.countedWords,
        ...action.payload,
      };
    },
    // deleteFromStore: (state, action) => {},
    AddToStoreEmploymentHistory: (state, action) => {
      state.values.EmploymentHistory = {
        ...state.values.EmploymentHistory,
        ...action.payload,
      };
    },
    AddToStoreSkills: (state, action) => {
      state.values.Skills = {
        ...state.values.Skills,
        ...{ [action.payload.skill]: action.payload.level },
      };
    },
    AddAccordionValuesToStore: (state, action) => {
      if (action.payload.AccordionType === "EmploymentHistory") {
        state.values.EmploymentHistory = {
          ...state.values.EmploymentHistory,
          [action.payload.id]: {
            ...state.values.EmploymentHistory[action.payload.id],
            ...action.payload.values,
          },
        };
      }
      if (action.payload.AccordionType === "Education") {
        state.values.Education = {
          [action.payload.id]: {
            ...state.values.Education[action.payload.id],
            ...action.payload.values,
          },
        };
      }
      if (action.payload.AccordionType === "İnternShips") {
        state.values.İnternShips = {
          [action.payload.id]: {
            ...state.values.İnternShips[action.payload.id],
            ...action.payload.values,
          },
        };
      }
      if (action.payload.AccordionType === "Hobbies") {
        state.values.Hobbies = {
          [action.payload.id]: {
            ...state.values.Hobbies[action.payload.id],
            ...action.payload.values,
          },
        };
      }
      if (action.payload.AccordionType === "References") {
        state.values.References = {
          ...state.values.References,
          [action.payload.id]: {
            ...state.values.References[action.payload.id],
            ...action.payload.values,
          },
        };
      }
      if (action.payload.AccordionType === "Languages") {
        state.values.Languages = {
          [action.payload.id]: {
            ...state.values.Languages[action.payload.id],
            ...action.payload.values,
          },
        };
      }
    },
    RemoveAccordionValues: (state, action) => {
      //

      let theState = state.values[action.payload.type];

      // oldObj = { ...state.values };

      delete theState[action.payload.id];

      state.values[action.payload.type] = { ...theState };

      // state.values[action.payload.type] = { ...newState };
    },
    setVisibility: (state, action) => {
      state.visibility = action.payload.value;
    },
  },
});

export const {
  addToStore,
  countWords,
  RemoveAccordionValues,
  setClicked,
  AddToStoreEmploymentHistory,
  AddToStoreSkills,
  AddAccordionValuesToStore,
  setVisibility,
} = textSlice.actions;

export default textSlice.reducer;