const config = {
  title: "Kundenassessment für GmbH-Umwandlung",
  theme: {
    primaryColor: "green",
    secondaryColor: "gray"
  },
  demo: true, // For demo mode, answers will be logged to console.
  pages: [
    {
      title: "Persönliche Daten",
      sections: [
        {
          heading: "Kontaktinformationen",
          questions: [
            {
              id: "name",
              type: "text",
              label: "Vollständiger Name",
              tooltip: "Ihr vollständiger Name, wie im Ausweis.",
              info: "Bitte geben Sie Ihren Vor- und Nachnamen ein."
            },
            {
              id: "address",
              type: "text",
              label: "Adresse",
              tooltip: "Ihre Wohnadresse.",
              info: "Straße, Hausnummer, PLZ und Ort."
            },
            {
              id: "phone",
              type: "text",
              label: "Telefonnummer",
              tooltip: "Ihre Telefonnummer.",
              info: "Für Rückfragen erreichbar."
            },
            {
              id: "email",
              type: "text",
              label: "E-Mail-Adresse",
              tooltip: "Ihre E-Mail-Adresse.",
              info: "Wir senden Ihnen weitere Informationen per E-Mail."
            }
          ]
        }
      ]
    },
    {
      title: "Unternehmensdaten",
      sections: [
        {
          heading: "Betriebsinformationen",
          questions: [
            {
              id: "companyName",
              type: "text",
              label: "Name des Unternehmens",
              tooltip: "Der offizielle Name Ihres Unternehmens.",
              info: "Wie im Handelsregister eingetragen."
            },
            {
              id: "foundingDate",
              type: "date",
              label: "Gründungsdatum",
              tooltip: "Datum der Unternehmensgründung.",
              info: "Bitte wählen Sie das Datum aus."
            },
            {
              id: "annualRevenue",
              type: "slider",
              label: "Jahresumsatz (in €)",
              min: 0,
              max: 1000000,
              tooltip: "Schätzen Sie Ihren Jahresumsatz.",
              info: "Beispiel: 250000 für 250.000 €."
            },
            {
              id: "employeeCount",
              type: "radio",
              label: "Anzahl der Mitarbeiter",
              options: ["1-5", "6-10", "11-20", "Mehr als 20"],
              tooltip: "Wählen Sie die passende Kategorie.",
              info: "Kleine bis mittlere Unternehmen."
            }
          ]
        }
      ]
    },
    {
      title: "Umwandlungsdetails",
      sections: [
        {
          heading: "Umwandlung in GmbH",
          questions: [
            {
              id: "reason",
              type: "checkbox",
              label: "Gründe für die Umwandlung",
              options: [
                "Haftungsbeschränkung",
                "Steueroptimierung",
                "Imageverbesserung",
                "Wachstumsförderung"
              ],
              tooltip: "Mehrfachauswahl möglich.",
              info: "Wählen Sie alle zutreffenden Gründe aus."
            },
            {
              id: "currentForm",
              type: "text",
              label: "Bisherige Unternehmensform",
              tooltip: "Aktuelle Unternehmensform.",
              info: "Normalerweise 'Einzelunternehmen'."
            },
            {
              id: "desiredDate",
              type: "date",
              label: "Angestrebtes Umwandlungsdatum",
              tooltip: "Wann soll die Umwandlung erfolgen?",
              info: "Wählen Sie ein realistisches Datum."
            },
            {
              id: "additionalInfo",
              type: "rtf",
              label: "Zusätzliche Anmerkungen",
              tooltip: "Weitere Informationen oder Fragen.",
              info: "Nutzen Sie den Editor für detaillierte Angaben."
            }
          ]
        }
      ]
    }
  ]
};

export default config;
  
