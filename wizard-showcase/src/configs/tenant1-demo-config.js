const config = {
  title: "Demo Wizard - All Controls",
  theme: {
    primaryColor: "blue",
    secondaryColor: "gray"
  },
  demo: true, // In demo mode, submission is logged to console.
  pages: [
    {
      title: "Basic Inputs",
      sections: [
        {
          heading: "Text Inputs",
          questions: [
            {
              id: "q1",
              type: "text",
              label: "One-line Text Input",
              tooltip: "Enter a short text",
            }
          ]
        },
        {
          heading: "Multiple Choice",
          questions: [
            {
              id: "q2",
              type: "radio",
              label: "Choose one option",
              options: ["Option 1", "Option 2", "Option 3"],
              tooltip: "Select one option only.",
              info: "Radio buttons allow single selection."
            }
          ]
        },
        {
          heading: "Checkboxes",
          questions: [
            {
              id: "q3",
              type: "checkbox",
              label: "Select multiple options",
              options: ["Option A", "Option B", "Option C"],
              tooltip: "Select one or more options.",
              info: "Checkboxes allow multiple selections."
            }
          ]
        }
      ]
    },
    {
      title: "Advanced Inputs",
      sections: [
        {
          heading: "Date Picker and Slider",
          questions: [
            {
              id: "q4",
              type: "date",
              label: "Select a Date",
              tooltip: "Click to choose a date.",
              info: "HTML5 date input."
            },
            {
              id: "q5",
              type: "slider",
              label: "Rate your satisfaction",
              min: 0,
              max: 10,
              tooltip: "Slide to rate from 0 to 10.",
              info: "Slider input example."
            }
          ]
        },
        {
          heading: "Rich Text and File Upload",
          questions: [
            {
              id: "q6",
              type: "rtf",
              label: "Rich Text Input",
              tooltip: "Enter formatted text.",
              info: "This editor supports basic formatting."
            },
            {
              id: "q7",
              type: "file",
              label: "Upload a File",
              tooltip: "Select a file to upload.",
              info: "Supports common file types."
            }
          ]
        }
      ]
    },
    {
      title: "Media Inputs",
      sections: [
        {
          heading: "Images and Videos",
          questions: [
            {
              id: "q8",
              type: "image",
              label: "Display an Image",
              src: "https://via.placeholder.com/150",
              tooltip: "This is a placeholder image.",
              info: "Images can be displayed within questions."
            },
            {
              id: "q9",
              type: "youtube",
              label: "YouTube Video",
              videoId: "dQw4w9WgXcQ",
              tooltip: "Embedded YouTube player.",
              info: "Enjoy the video content."
            }
          ]
        }
      ]
    },
    {
      title: "Grouped and Collapsible Sections",
      sections: [
        {
          heading: "Collapsible Section Example",
          collapsible: true,
          questions: [
            {
              id: "q10",
              type: "text",
              label: "Collapsible Text Input",
              tooltip: "Enter text here.",
              info: "This section can be collapsed."
            }
          ]
        },
        {
          heading: "Accordion Example",
          accordion: true,
          questions: [
            {
              id: "q11",
              type: "radio",
              label: "Accordion Multiple Choice",
              options: ["Yes", "No"],
              tooltip: "Select your answer.",
              info: "Accordion behavior demonstration."
            }
          ]
        }
      ]
    }
  ]
};

export default config;
  
