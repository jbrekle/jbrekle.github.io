import { Config, Page, Section, Question, QuestionType, Option, AbortCondition, Comparer } from "../configTypes";

/**
 * CHANGES:
 * - Added contactQuestions with name (Text), phone (Phone), and email (Email).
 */

const page1 = new Page(
  {
    en: "Welcome to the Demo Wizard.",
    de: "Willkommen zum Demo-Assistenten."
  },
  [
    new Section(
      { en: "Overview", de: "Übersicht" },
      [
        new Question(
          "demoExplanation",
          QuestionType.Explaination,
          {
            en: "This project is a multi-tenant, multi-language form wizard. This demo config includes examples of various input controls such as text, radio buttons, checkboxes, date pickers, rich text editors, numerical sliders, file uploads, and big tile choices. Tenant config allows for markdown-enabled ***texts*** and multimedia.",
            de: "Dieses Projekt ist einen Multi-Tenant, mehrsprachiger Formular-Assistent. Diese Demo Konfiguration beinhaltet Beispiele für verschiedene Eingabesteuerelemente wie Texteingabe, Radio Buttons, Checkboxen, Datumsauswahl, Rich Text Editor, Schieberegler für numerische Werte, Datei-Upload und große Kachel-Auswahl. Tenant Konfiguration erlaubt markdown ***Texte*** und Multimedia."
          },
          false
        )
      ]
    ),
    new Section(
      {
        en: "Basic Inputs",
        de: "Grundlegende Eingaben"
      },
      [
        new Question(
          "q1",
          QuestionType.Text,
          {
            en: "One-line Text Input",
            de: "Einzeiliger Texteingabe"
          },
          true,
          {
            en: "Enter a short text",
            de: "Geben Sie einen kurzen Text ein"
          },
          {
            en: "This is a simple text input.",
            de: "Dies ist ein einfaches Texteingabefeld."
          }
        )
      ]
    )
  ]
);

const bigTilePage = new Page(
  {
    en: "Big Tile Choice",
    de: "Große Kachel Auswahl"
  },
  [
    new Section(
      {
        en: "Please choose an option",
        de: "Bitte wählen Sie eine Option"
      },
      [
        new Question(
          "qBigTile",
          QuestionType.BigTileChoice,
          {
            en: "Please choose an option",
            de: "Bitte wählen Sie eine Option"
          },
          true,
          {
            en: "Select one of the tiles.",
            de: "Wählen Sie eine der Kacheln aus."
          },
          undefined,
          undefined,
          undefined,
          [
            new Option("1", "ok choice", "This is an ok choice."),
            new Option("2", "also ok choice", "This is also an ok choice."),
            new Option(
              "3",
              "early exit choice",
              "This choice will exit the wizard early."
            )
          ],
          undefined,
          undefined,
          new AbortCondition(
            Comparer.Equal,
            "3",
            "You have selected an early exit choice. Please contact us for further assistance."
          )
        )
      ]
    )
  ]
);

const page3 = new Page(
  {
    en: "Additional Input Examples",
    de: "Weitere Eingabe-Beispiele"
  },
  [
    new Section(
      { en: "Basic", de: "Basis" },
      [
        new Question(
          "q2",
          QuestionType.Radio,
          {
            en: "Radio Button Example",
            de: "Radio Button Beispiel"
          },
          true,
          {
            en: "Select one option",
            de: "Wählen Sie eine Option"
          },
          {
            en: "This is an example of radio buttons.",
            de: "Dies ist ein Beispiel für Radio Buttons."
          },
          undefined,
          undefined,
          ["Option A", "Option B", "Option C"]
        ),
        new Question(
          "q3",
          QuestionType.Checkbox,
          {
            en: "Checkbox Example",
            de: "Checkbox Beispiel"
          },
          false,
          {
            en: "Select one or more options",
            de: "Wählen Sie eine oder mehrere Optionen"
          },
          {
            en: "This is an example of checkboxes.",
            de: "Dies ist ein Beispiel für Checkboxen."
          },
          undefined,
          undefined,
          ["Choice 1", "Choice 2", "Choice 3"]
        ),
        new Question(
          "q4",
          QuestionType.Date,
          {
            en: "Date Picker Example",
            de: "Datumsauswahl Beispiel"
          },
          true,
          {
            en: "Click to choose a date",
            de: "Klicken Sie, um ein Datum auszuwählen"
          },
          {
            en: "This is an HTML5 date input.",
            de: "Dies ist ein HTML5 Datumseingabefeld."
          }
        )
      ]
    ),
    new Section(
      { en: "Multimedia", de: "Multimedia" },
      [
        new Question(
          "q5",
          QuestionType.RTF,
          {
            en: "Rich Text Editor Example",
            de: "Rich Text Editor Beispiel"
          },
          false,
          {
            en: "Enter formatted text",
            de: "Geben Sie formatierten Text ein"
          },
          {
            en: "This is a rich text editor that outputs markdown.",
            de: "Dies ist ein Rich Text Editor, der Markdown ausgibt."
          }
        ),
        new Question(
          "q6",
          QuestionType.File,
          {
            en: "File Upload Example",
            de: "Datei-Upload Beispiel"
          },
          false,
          {
            en: "Select a file to upload",
            de: "Wählen Sie eine Datei zum Hochladen aus"
          },
          {
            en: "This input supports common file types.",
            de: "Dieses Feld unterstützt gängige Dateitypen."
          }
        )
      ]
    ),
    new Section(
      { en: "Other", de: "Sonstiges" },
      [
        new Question(
          "q7",
          QuestionType.Explaination,
          {
            en: "Markdown Info Example: ![Sample Image](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop) [Sample Video](https://youtu.be/dQw4w9WgXcQ)",
            de: "Markdown Info Beispiel: ![Beispielbild](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop) [Beispielvideo](https://youtu.be/dQw4w9WgXcQ)"
          },
          false
        )
      ]
    )
  ]
);

// Added contact questions (Name, Phone, Email).
const contactQuestions = [
  new Question(
    "contactName",
    QuestionType.Text,
    {
      en: "Your Name",
      de: "Ihr Name"
    },
    true
  ),
  new Question(
    "contactPhone",
    QuestionType.Phone,
    {
      en: "Phone Number",
      de: "Telefonnummer"
    },
    true
  ),
  new Question(
    "contactEmail",
    QuestionType.Email,
    {
      en: "Email Address",
      de: "E-Mail-Adresse"
    },
    true
  )
];

const config: Config = new Config(
  {
    en: "Demo Wizard - All Controls",
    de: "Demo Assistent – Alle Steuerelemente",
    zh: "演示向导 - 所有控件",
    hi: "डेमो विज़ार्ड - सभी नियंत्रण",
    es: "Asistente de demostración - Todos los controles",
    fr: "Assistant de démonstration - Tous les contrôles",
    ar: "المساعد التجريبي - جميع عناصر التحكم",
    bn: "ডেমো উইজার্ড - সমস্ত নিয়ন্ত্রণ",
    ru: "Демо Мастер - Все элементы управления",
    pt: "Assistente de Demonstração - Todos os Controles",
    id: "Wizard Demo - Semua Kontrol"
  },
  {
    primaryColor: "blue",
    secondaryColor: "gray"
  },
  true,  // demo mode
  [
    page1,
    bigTilePage,
    page3
  ],
  {
    en: "Your session has ended. For further assistance, we will contact you personally.",
    de: "Ihr Dialog ist beendet. Für weitere Hilfe kontaktieren wir Sie persönlich.",
    zh: "您的对话已结束。如需进一步帮助，我们将与您联系。",
    hi: "आपका संवाद समाप्त हो गया है। आगे की सहायता के लिए हम आपसे व्यक्तिगत रूप से संपर्क करेंगे।",
    es: "Su sesión ha terminado. Para más ayuda, le contactaremos personalmente.",
    fr: "Votre session est terminée. Pour toute assistance supplémentaire, nous vous contacterons personnellement.",
    ar: "لقد انتهت جلستك. لمزيد من المساعدة، سنتصل بك شخصيًا.",
    bn: "আপনার সেশন শেষ হয়েছে। আরও সহায়তার জন্য আমরা আপনার সাথে ব্যক্তিগতভাবে যোগাযোগ করব।",
    ru: "Ваша сессия завершена. Для дальнейшей помощи мы свяжемся с вами лично.",
    pt: "Sua sessão terminou. Para mais assistência, entraremos em contato pessoalmente.",
    id: "Sesi Anda telah berakhir. Untuk bantuan lebih lanjut, kami akan menghubungi Anda secara pribadi."
  },
  {
    en: "Contact Us",
    de: "Kontaktieren Sie uns",
    zh: "联系我们",
    hi: "संपर्क करें",
    es: "Contáctenos",
    fr: "Contactez-nous",
    ar: "اتصل بنا",
    bn: "আমাদের সাথে যোগাযোগ করুন",
    ru: "Свяжитесь с нами",
    pt: "Contate-nos",
    id: "Hubungi Kami"
  },
  contactQuestions  // <--- New contact questions
);

export default config;
