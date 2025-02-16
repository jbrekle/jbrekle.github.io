const config = {
  title: {
    de: "Kundenassessment für GmbH-Umwandlung",
    en: "Customer Assessment for GmbH Conversion",
    zh: "Customer Assessment for GmbH Conversion",
    hi: "Customer Assessment for GmbH Conversion",
    es: "Customer Assessment for GmbH Conversion",
    fr: "Customer Assessment for GmbH Conversion",
    ar: "Customer Assessment for GmbH Conversion",
    bn: "Customer Assessment for GmbH Conversion",
    ru: "Customer Assessment for GmbH Conversion",
    pt: "Customer Assessment for GmbH Conversion",
    id: "Customer Assessment for GmbH Conversion"
  },
  theme: {
    primaryColor: "green",
    secondaryColor: "gray"
  },
  demo: true, // For demo mode, answers will be logged to console.
  pages: [
    {
      title: {
        de: "Persönliche Daten",
        en: "Personal Data",
        zh: "Personal Data",
        hi: "Personal Data",
        es: "Personal Data",
        fr: "Personal Data",
        ar: "Personal Data",
        bn: "Personal Data",
        ru: "Personal Data",
        pt: "Personal Data",
        id: "Personal Data"
      },
      sections: [
        {
          heading: {
            de: "Kontaktinformationen",
            en: "Contact Information",
            zh: "Contact Information",
            hi: "Contact Information",
            es: "Contact Information",
            fr: "Contact Information",
            ar: "Contact Information",
            bn: "Contact Information",
            ru: "Contact Information",
            pt: "Contact Information",
            id: "Contact Information"
          },
          questions: [
            {
              id: "name",
              type: "text",
              label: {
                de: "Vollständiger Name",
                en: "Full Name",
                zh: "Full Name",
                hi: "Full Name",
                es: "Full Name",
                fr: "Full Name",
                ar: "Full Name",
                bn: "Full Name",
                ru: "Full Name",
                pt: "Full Name",
                id: "Full Name"
              },
              tooltip: {
                de: "Ihr vollständiger Name, wie im Ausweis.",
                en: "Your full name as on your ID.",
                zh: "Your full name as on your ID.",
                hi: "Your full name as on your ID.",
                es: "Your full name as on your ID.",
                fr: "Your full name as on your ID.",
                ar: "Your full name as on your ID.",
                bn: "Your full name as on your ID.",
                ru: "Your full name as on your ID.",
                pt: "Your full name as on your ID.",
                id: "Your full name as on your ID."
              },
              info: {
                de: "Bitte geben Sie Ihren Vor- und Nachnamen ein.",
                en: "Please enter your first and last name.",
                zh: "Please enter your first and last name.",
                hi: "Please enter your first and last name.",
                es: "Please enter your first and last name.",
                fr: "Please enter your first and last name.",
                ar: "Please enter your first and last name.",
                bn: "Please enter your first and last name.",
                ru: "Please enter your first and last name.",
                pt: "Please enter your first and last name.",
                id: "Please enter your first and last name."
              },
              required: true
            },
            {
              id: "address",
              type: "multiline",
              label: {
                de: "Adresse",
                en: "Address",
                zh: "Address",
                hi: "Address",
                es: "Address",
                fr: "Address",
                ar: "Address",
                bn: "Address",
                ru: "Address",
                pt: "Address",
                id: "Address"
              },
              tooltip: {
                de: "Ihre Wohnadresse.",
                en: "Your residential address.",
                zh: "Your residential address.",
                hi: "Your residential address.",
                es: "Your residential address.",
                fr: "Your residential address.",
                ar: "Your residential address.",
                bn: "Your residential address.",
                ru: "Your residential address.",
                pt: "Your residential address.",
                id: "Your residential address."
              },
              info: {
                de: "Straße, Hausnummer, PLZ und Ort.",
                en: "Street, house number, ZIP and city.",
                zh: "Street, house number, ZIP and city.",
                hi: "Street, house number, ZIP and city.",
                es: "Street, house number, ZIP and city.",
                fr: "Street, house number, ZIP and city.",
                ar: "Street, house number, ZIP and city.",
                bn: "Street, house number, ZIP and city.",
                ru: "Street, house number, ZIP and city.",
                pt: "Street, house number, ZIP and city.",
                id: "Street, house number, ZIP and city."
              },
              required: true
            },
            {
              id: "phone",
              type: "text",
              label: {
                de: "Telefonnummer",
                en: "Phone Number",
                zh: "Phone Number",
                hi: "Phone Number",
                es: "Phone Number",
                fr: "Phone Number",
                ar: "Phone Number",
                bn: "Phone Number",
                ru: "Phone Number",
                pt: "Phone Number",
                id: "Phone Number"
              },
              tooltip: {
                de: "Ihre Telefonnummer.",
                en: "Your phone number.",
                zh: "Your phone number.",
                hi: "Your phone number.",
                es: "Your phone number.",
                fr: "Your phone number.",
                ar: "Your phone number.",
                bn: "Your phone number.",
                ru: "Your phone number.",
                pt: "Your phone number.",
                id: "Your phone number."
              },
              info: {
                de: "Für Rückfragen erreichbar.",
                en: "We may contact you for follow-up questions.",
                zh: "We may contact you for follow-up questions.",
                hi: "We may contact you for follow-up questions.",
                es: "We may contact you for follow-up questions.",
                fr: "We may contact you for follow-up questions.",
                ar: "We may contact you for follow-up questions.",
                bn: "We may contact you for follow-up questions.",
                ru: "We may contact you for follow-up questions.",
                pt: "We may contact you for follow-up questions.",
                id: "We may contact you for follow-up questions."
              },
              keyboard: "tel",
              required: true
            },
            {
              id: "email",
              type: "text",
              label: {
                de: "E-Mail-Adresse",
                en: "Email Address",
                zh: "Email Address",
                hi: "Email Address",
                es: "Email Address",
                fr: "Email Address",
                ar: "Email Address",
                bn: "Email Address",
                ru: "Email Address",
                pt: "Email Address",
                id: "Email Address"
              },
              tooltip: {
                de: "Ihre E-Mail-Adresse.",
                en: "Your email address.",
                zh: "Your email address.",
                hi: "Your email address.",
                es: "Your email address.",
                fr: "Your email address.",
                ar: "Your email address.",
                bn: "Your email address.",
                ru: "Your email address.",
                pt: "Your email address.",
                id: "Your email address."
              },
              info: {
                de: "Wir senden Ihnen weitere Informationen per E-Mail.",
                en: "We will send you further information via email.",
                zh: "We will send you further information via email.",
                hi: "We will send you further information via email.",
                es: "We will send you further information via email.",
                fr: "We will send you further information via email.",
                ar: "We will send you further information via email.",
                bn: "We will send you further information via email.",
                ru: "We will send you further information via email.",
                pt: "We will send you further information via email.",
                id: "We will send you further information via email."
              },
              validation: { type: "email" },
              required: true
            }
          ]
        }
      ]
    },
    {
      title: {
        de: "Unternehmensdaten",
        en: "Company Data",
        zh: "Company Data",
        hi: "Company Data",
        es: "Company Data",
        fr: "Company Data",
        ar: "Company Data",
        bn: "Company Data",
        ru: "Company Data",
        pt: "Company Data",
        id: "Company Data"
      },
      sections: [
        {
          heading: {
            de: "Betriebsinformationen",
            en: "Business Information",
            zh: "Business Information",
            hi: "Business Information",
            es: "Business Information",
            fr: "Business Information",
            ar: "Business Information",
            bn: "Business Information",
            ru: "Business Information",
            pt: "Business Information",
            id: "Business Information"
          },
          questions: [
            {
              id: "companyName",
              type: "text",
              label: {
                de: "Name des Unternehmens",
                en: "Company Name",
                zh: "Company Name",
                hi: "Company Name",
                es: "Company Name",
                fr: "Company Name",
                ar: "Company Name",
                bn: "Company Name",
                ru: "Company Name",
                pt: "Company Name",
                id: "Company Name"
              },
              tooltip: {
                de: "Der offizielle Name Ihres Unternehmens.",
                en: "The official name of your company.",
                zh: "The official name of your company.",
                hi: "The official name of your company.",
                es: "The official name of your company.",
                fr: "The official name of your company.",
                ar: "The official name of your company.",
                bn: "The official name of your company.",
                ru: "The official name of your company.",
                pt: "The official name of your company.",
                id: "The official name of your company."
              },
              info: {
                de: "Wie im Handelsregister eingetragen.",
                en: "As registered in the commercial register.",
                zh: "As registered in the commercial register.",
                hi: "As registered in the commercial register.",
                es: "As registered in the commercial register.",
                fr: "As registered in the commercial register.",
                ar: "As registered in the commercial register.",
                bn: "As registered in the commercial register.",
                ru: "As registered in the commercial register.",
                pt: "As registered in the commercial register.",
                id: "As registered in the commercial register."
              },
              required: true
            },
            {
              id: "foundingDate",
              type: "date",
              label: {
                de: "Gründungsdatum",
                en: "Founding Date",
                zh: "Founding Date",
                hi: "Founding Date",
                es: "Founding Date",
                fr: "Founding Date",
                ar: "Founding Date",
                bn: "Founding Date",
                ru: "Founding Date",
                pt: "Founding Date",
                id: "Founding Date"
              },
              tooltip: {
                de: "Datum der Unternehmensgründung.",
                en: "Date of company founding.",
                zh: "Date of company founding.",
                hi: "Date of company founding.",
                es: "Date of company founding.",
                fr: "Date of company founding.",
                ar: "Date of company founding.",
                bn: "Date of company founding.",
                ru: "Date of company founding.",
                pt: "Date of company founding.",
                id: "Date of company founding."
              },
              info: {
                de: "Bitte wählen Sie das Datum aus.",
                en: "Please select the date.",
                zh: "Please select the date.",
                hi: "Please select the date.",
                es: "Please select the date.",
                fr: "Please select the date.",
                ar: "Please select the date.",
                bn: "Please select the date.",
                ru: "Please select the date.",
                pt: "Please select the date.",
                id: "Please select the date."
              },
              required: true
            },
            {
              id: "annualRevenue",
              type: "slider",
              label: {
                de: "Jahresumsatz (in €)",
                en: "Annual Revenue (€)",
                zh: "Annual Revenue (€)",
                hi: "Annual Revenue (€)",
                es: "Annual Revenue (€)",
                fr: "Annual Revenue (€)",
                ar: "Annual Revenue (€)",
                bn: "Annual Revenue (€)",
                ru: "Annual Revenue (€)",
                pt: "Annual Revenue (€)",
                id: "Annual Revenue (€)"
              },
              min: 0,
              max: 1000000,
              tooltip: {
                de: "Schätzen Sie Ihren Jahresumsatz.",
                en: "Estimate your annual revenue.",
                zh: "Estimate your annual revenue.",
                hi: "Estimate your annual revenue.",
                es: "Estimate your annual revenue.",
                fr: "Estimate your annual revenue.",
                ar: "Estimate your annual revenue.",
                bn: "Estimate your annual revenue.",
                ru: "Estimate your annual revenue.",
                pt: "Estimate your annual revenue.",
                id: "Estimate your annual revenue."
              },
              info: {
                de: "Beispiel: 250000 für 250.000 €.",
                en: "For example: 250000 for €250,000.",
                zh: "For example: 250000 for €250,000.",
                hi: "For example: 250000 for €250,000.",
                es: "For example: 250000 for €250,000.",
                fr: "For example: 250000 for €250,000.",
                ar: "For example: 250000 for €250,000.",
                bn: "For example: 250000 for €250,000.",
                ru: "For example: 250000 for €250,000.",
                pt: "For example: 250000 for €250,000.",
                id: "For example: 250000 for €250,000."
              },
              required: false
            },
            {
              id: "employeeCount",
              type: "radio",
              label: {
                de: "Anzahl der Mitarbeiter",
                en: "Number of Employees",
                zh: "Number of Employees",
                hi: "Number of Employees",
                es: "Number of Employees",
                fr: "Number of Employees",
                ar: "Number of Employees",
                bn: "Number of Employees",
                ru: "Number of Employees",
                pt: "Number of Employees",
                id: "Number of Employees"
              },
              options: ["1-5", "6-10", "11-20", "More than 20"],
              tooltip: {
                de: "Wählen Sie die passende Kategorie.",
                en: "Choose the appropriate category.",
                zh: "Choose the appropriate category.",
                hi: "Choose the appropriate category.",
                es: "Choose the appropriate category.",
                fr: "Choose the appropriate category.",
                ar: "Choose the appropriate category.",
                bn: "Choose the appropriate category.",
                ru: "Choose the appropriate category.",
                pt: "Choose the appropriate category.",
                id: "Choose the appropriate category."
              },
              info: {
                de: "Kleine bis mittlere Unternehmen.",
                en: "For small to medium-sized enterprises.",
                zh: "For small to medium-sized enterprises.",
                hi: "For small to medium-sized enterprises.",
                es: "For small to medium-sized enterprises.",
                fr: "For small to medium-sized enterprises.",
                ar: "For small to medium-sized enterprises.",
                bn: "For small to medium-sized enterprises.",
                ru: "For small to medium-sized enterprises.",
                pt: "For small to medium-sized enterprises.",
                id: "For small to medium-sized enterprises."
              },
              required: true
            }
          ]
        }
      ]
    },
    {
      title: {
        de: "Umwandlungsdetails",
        en: "Conversion Details",
        zh: "Conversion Details",
        hi: "Conversion Details",
        es: "Conversion Details",
        fr: "Conversion Details",
        ar: "Conversion Details",
        bn: "Conversion Details",
        ru: "Conversion Details",
        pt: "Conversion Details",
        id: "Conversion Details"
      },
      sections: [
        {
          heading: {
            de: "Umwandlung in GmbH",
            en: "Conversion to GmbH",
            zh: "Conversion to GmbH",
            hi: "Conversion to GmbH",
            es: "Conversion to GmbH",
            fr: "Conversion to GmbH",
            ar: "Conversion to GmbH",
            bn: "Conversion to GmbH",
            ru: "Conversion to GmbH",
            pt: "Conversion to GmbH",
            id: "Conversion to GmbH"
          },
          questions: [
            {
              id: "reason",
              type: "checkbox",
              label: {
                de: "Gründe für die Umwandlung",
                en: "Reasons for Conversion",
                zh: "Reasons for Conversion",
                hi: "Reasons for Conversion",
                es: "Reasons for Conversion",
                fr: "Reasons for Conversion",
                ar: "Reasons for Conversion",
                bn: "Reasons for Conversion",
                ru: "Reasons for Conversion",
                pt: "Reasons for Conversion",
                id: "Reasons for Conversion"
              },
              options: [
                "Limitation of Liability",
                "Tax Optimization",
                "Image Improvement",
                "Growth Promotion"
              ],
              tooltip: {
                de: "Mehrfachauswahl möglich.",
                en: "Multiple selections possible.",
                zh: "Multiple selections possible.",
                hi: "Multiple selections possible.",
                es: "Multiple selections possible.",
                fr: "Multiple selections possible.",
                ar: "Multiple selections possible.",
                bn: "Multiple selections possible.",
                ru: "Multiple selections possible.",
                pt: "Multiple selections possible.",
                id: "Multiple selections possible."
              },
              info: {
                de: "Wählen Sie alle zutreffenden Gründe aus.",
                en: "Select all applicable reasons.",
                zh: "Select all applicable reasons.",
                hi: "Select all applicable reasons.",
                es: "Select all applicable reasons.",
                fr: "Select all applicable reasons.",
                ar: "Select all applicable reasons.",
                bn: "Select all applicable reasons.",
                ru: "Select all applicable reasons.",
                pt: "Select all applicable reasons.",
                id: "Select all applicable reasons."
              },
              required: true
            },
            {
              id: "currentForm",
              type: "text",
              label: {
                de: "Bisherige Unternehmensform",
                en: "Current Business Form",
                zh: "Current Business Form",
                hi: "Current Business Form",
                es: "Current Business Form",
                fr: "Current Business Form",
                ar: "Current Business Form",
                bn: "Current Business Form",
                ru: "Current Business Form",
                pt: "Current Business Form",
                id: "Current Business Form"
              },
              tooltip: {
                de: "Aktuelle Unternehmensform.",
                en: "Your current business form.",
                zh: "Your current business form.",
                hi: "Your current business form.",
                es: "Your current business form.",
                fr: "Your current business form.",
                ar: "Your current business form.",
                bn: "Your current business form.",
                ru: "Your current business form.",
                pt: "Your current business form.",
                id: "Your current business form."
              },
              info: {
                de: "Normalerweise 'Einzelunternehmen'.",
                en: "Typically 'Sole Proprietorship'.",
                zh: "Typically 'Sole Proprietorship'.",
                hi: "Typically 'Sole Proprietorship'.",
                es: "Typically 'Sole Proprietorship'.",
                fr: "Typically 'Sole Proprietorship'.",
                ar: "Typically 'Sole Proprietorship'.",
                bn: "Typically 'Sole Proprietorship'.",
                ru: "Typically 'Sole Proprietorship'.",
                pt: "Typically 'Sole Proprietorship'.",
                id: "Typically 'Sole Proprietorship'."
              },
              required: true
            },
            {
              id: "desiredDate",
              type: "date",
              label: {
                de: "Angestrebtes Umwandlungsdatum",
                en: "Desired Conversion Date",
                zh: "Desired Conversion Date",
                hi: "Desired Conversion Date",
                es: "Desired Conversion Date",
                fr: "Desired Conversion Date",
                ar: "Desired Conversion Date",
                bn: "Desired Conversion Date",
                ru: "Desired Conversion Date",
                pt: "Desired Conversion Date",
                id: "Desired Conversion Date"
              },
              tooltip: {
                de: "Wann soll die Umwandlung erfolgen?",
                en: "When should the conversion occur?",
                zh: "When should the conversion occur?",
                hi: "When should the conversion occur?",
                es: "When should the conversion occur?",
                fr: "When should the conversion occur?",
                ar: "When should the conversion occur?",
                bn: "When should the conversion occur?",
                ru: "When should the conversion occur?",
                pt: "When should the conversion occur?",
                id: "When should the conversion occur?"
              },
              info: {
                de: "Wählen Sie ein realistisches Datum.",
                en: "Please choose a realistic date.",
                zh: "Please choose a realistic date.",
                hi: "Please choose a realistic date.",
                es: "Please choose a realistic date.",
                fr: "Please choose a realistic date.",
                ar: "Please choose a realistic date.",
                bn: "Please choose a realistic date.",
                ru: "Please choose a realistic date.",
                pt: "Please choose a realistic date.",
                id: "Please choose a realistic date."
              },
              required: true
            },
            {
              id: "additionalInfo",
              type: "rtf",
              label: {
                de: "Zusätzliche Anmerkungen",
                en: "Additional Notes",
                zh: "Additional Notes",
                hi: "Additional Notes",
                es: "Additional Notes",
                fr: "Additional Notes",
                ar: "Additional Notes",
                bn: "Additional Notes",
                ru: "Additional Notes",
                pt: "Additional Notes",
                id: "Additional Notes"
              },
              tooltip: {
                de: "Weitere Informationen oder Fragen eingeben.",
                en: "Enter any further information or questions.",
                zh: "Enter any further information or questions.",
                hi: "Enter any further information or questions.",
                es: "Enter any further information or questions.",
                fr: "Enter any further information or questions.",
                ar: "Enter any further information or questions.",
                bn: "Enter any further information or questions.",
                ru: "Enter any further information or questions.",
                pt: "Enter any further information or questions.",
                id: "Enter any further information or questions."
              },
              info: {
                de: "Nutzen Sie den Editor für detaillierte Angaben.",
                en: "Use the editor for detailed input.",
                zh: "Use the editor for detailed input.",
                hi: "Use the editor for detailed input.",
                es: "Use the editor for detailed input.",
                fr: "Use the editor for detailed input.",
                ar: "Use the editor for detailed input.",
                bn: "Use the editor for detailed input.",
                ru: "Use the editor for detailed input.",
                pt: "Use the editor for detailed input.",
                id: "Use the editor for detailed input."
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
