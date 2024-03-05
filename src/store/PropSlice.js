import { createSlice, current } from "@reduxjs/toolkit";

export const PropsSlice = createSlice({
  name: "PropSlice",
  initialState: {
    EmploymentHistory: {
      header: "Employment History",
      description: `Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).`,
      addButton: "employment",
      which: "Job Title",
      who: "Employer",
      where: "City",
    },
    Education: {
      header: "Education",
      description: `A varied education on your resume sums up the value that your learnings and background will bring to job.`,
      addButton: "education",
      which: "School",
      who: "Degree",
      where: "City",
    },
    İnternShips: {
      header: "Internships",
      description: `You can add interships  you want hiring managers to see! Keep it simple!`,
      addButton: "internship",
      which: "Job Title",
      who: "Employer",
      where: "City",
    },
    Skills: {
      header: "Skills",
      description: `Choose 5 of the most important skills to show your talents! Make sure they match the keywords of the job listing if applying via an online system.`,
      addButton: "skill",
      which: "Employer",
    },
    References: {
      addButton: "reference",
    },
    Languages: {
      addButton: "language",
    },
  },
  reducers: {},
});

export default PropsSlice.reducer;