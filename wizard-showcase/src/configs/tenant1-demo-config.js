const config = {
  title: {
    de: "Demo Assistent – Alle Steuerelemente",
    en: "Demo Wizard - All Controls",
    zh: "Demo Wizard - All Controls",
    hi: "Demo Wizard - All Controls",
    es: "Demo Wizard - All Controls",
    fr: "Demo Wizard - All Controls",
    ar: "Demo Wizard - All Controls",
    bn: "Demo Wizard - All Controls",
    ru: "Demo Wizard - All Controls",
    pt: "Demo Wizard - All Controls",
    id: "Demo Wizard - All Controls"
  },
  theme: {
    primaryColor: "blue",
    secondaryColor: "gray"
  },
  demo: true, // In demo mode, submission is logged to console.
  pages: [
    {
      title: {
        de: "Grundlegende Eingaben",
        en: "Basic Inputs",
        zh: "Basic Inputs",
        hi: "Basic Inputs",
        es: "Basic Inputs",
        fr: "Basic Inputs",
        ar: "Basic Inputs",
        bn: "Basic Inputs",
        ru: "Basic Inputs",
        pt: "Basic Inputs",
        id: "Basic Inputs"
      },
      sections: [
        {
          heading: {
            de: "Texteingaben",
            en: "Text Inputs",
            zh: "Text Inputs",
            hi: "Text Inputs",
            es: "Text Inputs",
            fr: "Text Inputs",
            ar: "Text Inputs",
            bn: "Text Inputs",
            ru: "Text Inputs",
            pt: "Text Inputs",
            id: "Text Inputs"
          },
          questions: [
            {
              id: "q1",
              type: "text",
              label: {
                de: "Einzeiliger Texteingabe",
                en: "One-line Text Input",
                zh: "One-line Text Input",
                hi: "One-line Text Input",
                es: "One-line Text Input",
                fr: "One-line Text Input",
                ar: "One-line Text Input",
                bn: "One-line Text Input",
                ru: "One-line Text Input",
                pt: "One-line Text Input",
                id: "One-line Text Input"
              },
              tooltip: {
                de: "Geben Sie einen kurzen Text ein",
                en: "Enter a short text",
                zh: "Enter a short text",
                hi: "Enter a short text",
                es: "Enter a short text",
                fr: "Enter a short text",
                ar: "Enter a short text",
                bn: "Enter a short text",
                ru: "Enter a short text",
                pt: "Enter a short text",
                id: "Enter a short text"
              },
              info: {
                de: "Dies ist ein einfaches Texteingabefeld.",
                en: "This is a simple text input.",
                zh: "This is a simple text input.",
                hi: "This is a simple text input.",
                es: "This is a simple text input.",
                fr: "This is a simple text input.",
                ar: "This is a simple text input.",
                bn: "This is a simple text input.",
                ru: "This is a simple text input.",
                pt: "This is a simple text input.",
                id: "This is a simple text input."
              },
              required: true
            }
          ]
        },
        {
          heading: {
            de: "Auswahlmöglichkeiten",
            en: "Multiple Choice",
            zh: "Multiple Choice",
            hi: "Multiple Choice",
            es: "Multiple Choice",
            fr: "Multiple Choice",
            ar: "Multiple Choice",
            bn: "Multiple Choice",
            ru: "Multiple Choice",
            pt: "Multiple Choice",
            id: "Multiple Choice"
          },
          questions: [
            {
              id: "q2",
              type: "radio",
              label: {
                de: "Wählen Sie eine Option",
                en: "Choose one option",
                zh: "Choose one option",
                hi: "Choose one option",
                es: "Choose one option",
                fr: "Choose one option",
                ar: "Choose one option",
                bn: "Choose one option",
                ru: "Choose one option",
                pt: "Choose one option",
                id: "Choose one option"
              },
              options: ["Option 1", "Option 2", "Option 3"],
              tooltip: {
                de: "Wählen Sie nur eine Option.",
                en: "Select one option only.",
                zh: "Select one option only.",
                hi: "Select one option only.",
                es: "Select one option only.",
                fr: "Select one option only.",
                ar: "Select one option only.",
                bn: "Select one option only.",
                ru: "Select one option only.",
                pt: "Select one option only.",
                id: "Select one option only."
              },
              info: {
                de: "Radiobuttons ermöglichen eine Einzelwahl.",
                en: "Radio buttons allow single selection.",
                zh: "Radio buttons allow single selection.",
                hi: "Radio buttons allow single selection.",
                es: "Radio buttons allow single selection.",
                fr: "Radio buttons allow single selection.",
                ar: "Radio buttons allow single selection.",
                bn: "Radio buttons allow single selection.",
                ru: "Radio buttons allow single selection.",
                pt: "Radio buttons allow single selection.",
                id: "Radio buttons allow single selection."
              },
              required: true
            }
          ]
        },
        {
          heading: {
            de: "Auswahlkästchen",
            en: "Checkboxes",
            zh: "Checkboxes",
            hi: "Checkboxes",
            es: "Checkboxes",
            fr: "Checkboxes",
            ar: "Checkboxes",
            bn: "Checkboxes",
            ru: "Checkboxes",
            pt: "Checkboxes",
            id: "Checkboxes"
          },
          questions: [
            {
              id: "q3",
              type: "checkbox",
              label: {
                de: "Wählen Sie mehrere Optionen",
                en: "Select multiple options",
                zh: "Select multiple options",
                hi: "Select multiple options",
                es: "Select multiple options",
                fr: "Select multiple options",
                ar: "Select multiple options",
                bn: "Select multiple options",
                ru: "Select multiple options",
                pt: "Select multiple options",
                id: "Select multiple options"
              },
              options: ["Option A", "Option B", "Option C"],
              tooltip: {
                de: "Wählen Sie eine oder mehrere Optionen.",
                en: "Select one or more options.",
                zh: "Select one or more options.",
                hi: "Select one or more options.",
                es: "Select one or more options.",
                fr: "Select one or more options.",
                ar: "Select one or more options.",
                bn: "Select one or more options.",
                ru: "Select one or more options.",
                pt: "Select one or more options.",
                id: "Select one or more options."
              },
              info: {
                de: "Checkboxen erlauben Mehrfachauswahlen.",
                en: "Checkboxes allow multiple selections.",
                zh: "Checkboxes allow multiple selections.",
                hi: "Checkboxes allow multiple selections.",
                es: "Checkboxes allow multiple selections.",
                fr: "Checkboxes allow multiple selections.",
                ar: "Checkboxes allow multiple selections.",
                bn: "Checkboxes allow multiple selections.",
                ru: "Checkboxes allow multiple selections.",
                pt: "Checkboxes allow multiple selections.",
                id: "Checkboxes allow multiple selections."
              },
              required: false
            }
          ]
        }
      ]
    },
    {
      title: {
        de: "Erweiterte Eingaben",
        en: "Advanced Inputs",
        zh: "Advanced Inputs",
        hi: "Advanced Inputs",
        es: "Advanced Inputs",
        fr: "Advanced Inputs",
        ar: "Advanced Inputs",
        bn: "Advanced Inputs",
        ru: "Advanced Inputs",
        pt: "Advanced Inputs",
        id: "Advanced Inputs"
      },
      sections: [
        {
          heading: {
            de: "Datumsauswahl und Schieberegler",
            en: "Date Picker and Slider",
            zh: "Date Picker and Slider",
            hi: "Date Picker and Slider",
            es: "Date Picker and Slider",
            fr: "Date Picker and Slider",
            ar: "Date Picker and Slider",
            bn: "Date Picker and Slider",
            ru: "Date Picker and Slider",
            pt: "Date Picker and Slider",
            id: "Date Picker and Slider"
          },
          questions: [
            {
              id: "q4",
              type: "date",
              label: {
                de: "Wählen Sie ein Datum",
                en: "Select a Date",
                zh: "Select a Date",
                hi: "Select a Date",
                es: "Select a Date",
                fr: "Select a Date",
                ar: "Select a Date",
                bn: "Select a Date",
                ru: "Select a Date",
                pt: "Select a Date",
                id: "Select a Date"
              },
              tooltip: {
                de: "Klicken Sie, um ein Datum auszuwählen.",
                en: "Click to choose a date.",
                zh: "Click to choose a date.",
                hi: "Click to choose a date.",
                es: "Click to choose a date.",
                fr: "Click to choose a date.",
                ar: "Click to choose a date.",
                bn: "Click to choose a date.",
                ru: "Click to choose a date.",
                pt: "Click to choose a date.",
                id: "Click to choose a date."
              },
              info: {
                de: "HTML5 Datumseingabefeld.",
                en: "HTML5 date input.",
                zh: "HTML5 date input.",
                hi: "HTML5 date input.",
                es: "HTML5 date input.",
                fr: "HTML5 date input.",
                ar: "HTML5 date input.",
                bn: "HTML5 date input.",
                ru: "HTML5 date input.",
                pt: "HTML5 date input.",
                id: "HTML5 date input."
              },
              required: true
            },
            {
              id: "q5",
              type: "slider",
              label: {
                de: "Bewerten Sie Ihre Zufriedenheit",
                en: "Rate your satisfaction",
                zh: "Rate your satisfaction",
                hi: "Rate your satisfaction",
                es: "Rate your satisfaction",
                fr: "Rate your satisfaction",
                ar: "Rate your satisfaction",
                bn: "Rate your satisfaction",
                ru: "Rate your satisfaction",
                pt: "Rate your satisfaction",
                id: "Rate your satisfaction"
              },
              min: 0,
              max: 10,
              tooltip: {
                de: "Schieben Sie, um von 0 bis 10 zu bewerten.",
                en: "Slide to rate from 0 to 10.",
                zh: "Slide to rate from 0 to 10.",
                hi: "Slide to rate from 0 to 10.",
                es: "Slide to rate from 0 to 10.",
                fr: "Slide to rate from 0 to 10.",
                ar: "Slide to rate from 0 to 10.",
                bn: "Slide to rate from 0 to 10.",
                ru: "Slide to rate from 0 to 10.",
                pt: "Slide to rate from 0 to 10.",
                id: "Slide to rate from 0 to 10."
              },
              info: {
                de: "Beispiel für einen Schieberegler.",
                en: "Slider input example.",
                zh: "Slider input example.",
                hi: "Slider input example.",
                es: "Slider input example.",
                fr: "Slider input example.",
                ar: "Slider input example.",
                bn: "Slider input example.",
                ru: "Slider input example.",
                pt: "Slider input example.",
                id: "Slider input example."
              },
              required: false
            }
          ]
        },
        {
          heading: {
            de: "Rich Text und Datei-Upload",
            en: "Rich Text and File Upload",
            zh: "Rich Text and File Upload",
            hi: "Rich Text and File Upload",
            es: "Rich Text and File Upload",
            fr: "Rich Text and File Upload",
            ar: "Rich Text and File Upload",
            bn: "Rich Text and File Upload",
            ru: "Rich Text and File Upload",
            pt: "Rich Text and File Upload",
            id: "Rich Text and File Upload"
          },
          questions: [
            {
              id: "q6",
              type: "rtf",
              label: {
                de: "Rich-Text-Eingabe",
                en: "Rich Text Input",
                zh: "Rich Text Input",
                hi: "Rich Text Input",
                es: "Rich Text Input",
                fr: "Rich Text Input",
                ar: "Rich Text Input",
                bn: "Rich Text Input",
                ru: "Rich Text Input",
                pt: "Rich Text Input",
                id: "Rich Text Input"
              },
              tooltip: {
                de: "Geben Sie formatierten Text ein.",
                en: "Enter formatted text.",
                zh: "Enter formatted text.",
                hi: "Enter formatted text.",
                es: "Enter formatted text.",
                fr: "Enter formatted text.",
                ar: "Enter formatted text.",
                bn: "Enter formatted text.",
                ru: "Enter formatted text.",
                pt: "Enter formatted text.",
                id: "Enter formatted text."
              },
              info: {
                de: "Dieser Editor unterstützt grundlegende Formatierung.",
                en: "This editor supports basic formatting.",
                zh: "This editor supports basic formatting.",
                hi: "This editor supports basic formatting.",
                es: "This editor supports basic formatting.",
                fr: "This editor supports basic formatting.",
                ar: "This editor supports basic formatting.",
                bn: "This editor supports basic formatting.",
                ru: "This editor supports basic formatting.",
                pt: "This editor supports basic formatting.",
                id: "This editor supports basic formatting."
              },
              required: false
            },
            {
              id: "q7",
              type: "file",
              label: {
                de: "Datei hochladen",
                en: "Upload a File",
                zh: "Upload a File",
                hi: "Upload a File",
                es: "Upload a File",
                fr: "Upload a File",
                ar: "Upload a File",
                bn: "Upload a File",
                ru: "Upload a File",
                pt: "Upload a File",
                id: "Upload a File"
              },
              tooltip: {
                de: "Wählen Sie eine Datei zum Hochladen aus.",
                en: "Select a file to upload.",
                zh: "Select a file to upload.",
                hi: "Select a file to upload.",
                es: "Select a file to upload.",
                fr: "Select a file to upload.",
                ar: "Select a file to upload.",
                bn: "Select a file to upload.",
                ru: "Select a file to upload.",
                pt: "Select a file to upload.",
                id: "Select a file to upload."
              },
              info: {
                de: "Unterstützt gängige Dateitypen.",
                en: "Supports common file types.",
                zh: "Supports common file types.",
                hi: "Supports common file types.",
                es: "Supports common file types.",
                fr: "Supports common file types.",
                ar: "Supports common file types.",
                bn: "Supports common file types.",
                ru: "Supports common file types.",
                pt: "Supports common file types.",
                id: "Supports common file types."
              },
              required: false
            }
          ]
        }
      ]
    },
    {
      title: {
        de: "Medieneingaben",
        en: "Media Inputs",
        zh: "Media Inputs",
        hi: "Media Inputs",
        es: "Media Inputs",
        fr: "Media Inputs",
        ar: "Media Inputs",
        bn: "Media Inputs",
        ru: "Media Inputs",
        pt: "Media Inputs",
        id: "Media Inputs"
      },
      sections: [
        {
          heading: {
            de: "Multimedia per Markdown",
            en: "Multimedia via Markdown",
            zh: "Multimedia via Markdown",
            hi: "Multimedia via Markdown",
            es: "Multimedia via Markdown",
            fr: "Multimedia via Markdown",
            ar: "Multimedia via Markdown",
            bn: "Multimedia via Markdown",
            ru: "Multimedia via Markdown",
            pt: "Multimedia via Markdown",
            id: "Multimedia via Markdown"
          },
          questions: [
            {
              id: "q8",
              type: "text",
              label: {
                de: "Medieninhalt",
                en: "Media Content",
                zh: "Media Content",
                hi: "Media Content",
                es: "Media Content",
                fr: "Media Content",
                ar: "Media Content",
                bn: "Media Content",
                ru: "Media Content",
                pt: "Media Content",
                id: "Media Content"
              },
              tooltip: {
                de: "Dieser Text kann Markdown für Bilder/Videos enthalten.",
                en: "This text may include markdown for images/videos.",
                zh: "This text may include markdown for images/videos.",
                hi: "This text may include markdown for images/videos.",
                es: "This text may include markdown for images/videos.",
                fr: "This text may include markdown for images/videos.",
                ar: "This text may include markdown for images/videos.",
                bn: "This text may include markdown for images/videos.",
                ru: "This text may include markdown for images/videos.",
                pt: "This text may include markdown for images/videos.",
                id: "This text may include markdown for images/videos."
              },
              info: {
                de: "Beispiel: ![Beispielbild](https://via.placeholder.com/150) oder [Beispielvideo](https://youtu.be/dQw4w9WgXcQ)",
                en: "Example: ![Example Image](https://via.placeholder.com/150) or [Example Video](https://youtu.be/dQw4w9WgXcQ)",
                zh: "Example: ![Example Image](https://via.placeholder.com/150) or [Example Video](https://youtu.be/dQw4w9WgXcQ)",
                hi: "Example: ![Example Image](https://via.placeholder.com/150) or [Example Video](https://youtu.be/dQw4w9WgXcQ)",
                es: "Example: ![Example Image](https://via.placeholder.com/150) or [Example Video](https://youtu.be/dQw4w9WgXcQ)",
                fr: "Example: ![Example Image](https://via.placeholder.com/150) or [Example Video](https://youtu.be/dQw4w9WgXcQ)",
                ar: "Example: ![Example Image](https://via.placeholder.com/150) or [Example Video](https://youtu.be/dQw4w9WgXcQ)",
                bn: "Example: ![Example Image](https://via.placeholder.com/150) or [Example Video](https://youtu.be/dQw4w9WgXcQ)",
                ru: "Example: ![Example Image](https://via.placeholder.com/150) or [Example Video](https://youtu.be/dQw4w9WgXcQ)",
                pt: "Example: ![Example Image](https://via.placeholder.com/150) or [Example Video](https://youtu.be/dQw4w9WgXcQ)",
                id: "Example: ![Example Image](https://via.placeholder.com/150) or [Example Video](https://youtu.be/dQw4w9WgXcQ)"
              },
              required: false
            }
          ]
        }
      ]
    },
    {
      title: {
        de: "Medieninfo Beispiel",
        en: "Media Info Example",
        zh: "Media Info Example",
        hi: "Media Info Example",
        es: "Media Info Example",
        fr: "Media Info Example",
        ar: "Media Info Example",
        bn: "Media Info Example",
        ru: "Media Info Example",
        pt: "Media Info Example",
        id: "Media Info Example"
      },
      sections: [
        {
          heading: {
            de: "Beispiel",
            en: "Example",
            zh: "Example",
            hi: "Example",
            es: "Example",
            fr: "Example",
            ar: "Example",
            bn: "Example",
            ru: "Example",
            pt: "Example",
            id: "Example"
          },
          questions: [
            {
              id: "qMedia",
              type: "text",
              label: {
                de: "Medieninfo",
                en: "Media Info",
                zh: "Media Info",
                hi: "Media Info",
                es: "Media Info",
                fr: "Media Info",
                ar: "Media Info",
                bn: "Media Info",
                ru: "Media Info",
                pt: "Media Info",
                id: "Media Info"
              },
              tooltip: {
                de: "Beispiel: Markdown für Bild und Video",
                en: "Example: Markdown for image and video",
                zh: "Example: Markdown for image and video",
                hi: "Example: Markdown for image and video",
                es: "Example: Markdown for image and video",
                fr: "Example: Markdown for image and video",
                ar: "Example: Markdown for image and video",
                bn: "Example: Markdown for image and video",
                ru: "Example: Markdown for image and video",
                pt: "Example: Markdown for image and video",
                id: "Example: Markdown for image and video"
              },
              info: {
                de: "Dieses Info-Feld enthält ein Bild und ein Video:\n\n![Beispielbild](https://via.placeholder.com/150)\n\n[Beispielvideo](https://youtu.be/dQw4w9WgXcQ)",
                en: "This info box contains an image and a video:\n\n![Example Image](https://via.placeholder.com/150)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                zh: "This info box contains an image and a video:\n\n![Example Image](https://via.placeholder.com/150)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                hi: "This info box contains an image and a video:\n\n![Example Image](https://via.placeholder.com/150)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                es: "This info box contains an image and a video:\n\n![Example Image](https://via.placeholder.com/150)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                fr: "This info box contains an image and a video:\n\n![Example Image](https://via.placeholder.com/150)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                ar: "This info box contains an image and a video:\n\n![Example Image](https://via.placeholder.com/150)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                bn: "This info box contains an image and a video:\n\n![Example Image](https://via.placeholder.com/150)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                ru: "This info box contains an image and a video:\n\n![Example Image](https://via.placeholder.com/150)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                pt: "This info box contains an image and a video:\n\n![Example Image](https://via.placeholder.com/150)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                id: "This info box contains an image and a video:\n\n![Example Image](https://via.placeholder.com/150)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)"
              },
              required: false
            }
          ]
        }
      ]
    }
  ]
};

export default config;
