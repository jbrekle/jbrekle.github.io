﻿const config = {
  title: {
    de: "Demo Assistent – Alle Steuerelemente",
    en: "Demo Wizard - All Controls",
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
  theme: {
    primaryColor: "blue",
    secondaryColor: "gray"
  },
  demo: true,
  consultationMessage: {
    de: "Ihr Dialog ist beendet. Für weitere Hilfe kontaktieren wir Sie persönlich.",
    en: "Your session has ended. For further assistance, we will contact you personally.",
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
  consulationButtonLabel: {
    de: "Kontaktieren Sie uns",
    en: "Contact Us",
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
  contactQuestions: [
    {
      id: "contactEmail",
      type: "text",
      label: {
        de: "E-Mail-Adresse für Rückruf",
        en: "Contact Email",
        zh: "联系电子邮件",
        hi: "संपर्क ईमेल",
        es: "Correo de Contacto",
        fr: "Email de Contact",
        ar: "البريد الإلكتروني للتواصل",
        bn: "ফোন কলের জন্য ইমেইল",
        ru: "Контактный Email",
        pt: "Email de Contato",
        id: "Email Kontak"
      },
      tooltip: {
        de: "Geben Sie Ihre E-Mail-Adresse ein, damit wir Sie kontaktieren können.",
        en: "Enter your email address for us to contact you.",
        zh: "请输入您的电子邮件地址，以便我们联系您。",
        hi: "हमें संपर्क करने के लिए अपना ईमेल पता दर्ज करें।",
        es: "Ingresa tu dirección de correo electrónico para que podamos contactarte.",
        fr: "Entrez votre adresse e-mail pour que nous puissions vous contacter.",
        ar: "أدخل بريدك الإلكتروني لنتواصل معك.",
        bn: "আপনার ইমেইল ঠিকানা লিখুন যাতে আমরা আপনার সাথে যোগাযোগ করতে পারি।",
        ru: "Введите ваш email, чтобы мы могли с вами связаться.",
        pt: "Digite seu email para que possamos contatá-lo.",
        id: "Masukkan email Anda agar kami dapat menghubungi Anda."
      },
      info: {
        de: "Ihre E-Mail wird ausschließlich zur Kontaktaufnahme verwendet.",
        en: "Your email will only be used to contact you.",
        zh: "您的电子邮件仅用于联系我们。",
        hi: "आपका ईमेल केवल संपर्क के लिए उपयोग किया जाएगा।",
        es: "Tu correo solo se usará para contactarte.",
        fr: "Votre email sera uniquement utilisé pour vous contacter.",
        ar: "سيتم استخدام بريدك الإلكتروني فقط للتواصل معك.",
        bn: "আপনার ইমেইল শুধুমাত্র যোগাযোগের জন্য ব্যবহার করা হবে।",
        ru: "Ваш email будет использоваться только для связи с вами.",
        pt: "Seu email será usado apenas para contato.",
        id: "Email Anda hanya akan digunakan untuk menghubungi Anda."
      },
      validation: { type: "email" },
      required: true
    }
  ],
  pages: [
    {
      title: {
        de: "Grundlegende Eingaben",
        en: "Basic Inputs",
        zh: "基本输入",
        hi: "बेसिक इनपुट्स",
        es: "Entradas Básicas",
        fr: "Entrées de base",
        ar: "مدخلات أساسية",
        bn: "মৌলিক ইনপুট",
        ru: "Основные поля",
        pt: "Entradas Básicas",
        id: "Input Dasar"
      },
      sections: [
        {
          heading: {
            de: "Texteingaben",
            en: "Text Inputs",
            zh: "文本输入",
            hi: "पाठ इनपुट",
            es: "Entradas de Texto",
            fr: "Entrées de texte",
            ar: "مدخلات نصية",
            bn: "টেক্সট ইনপুট",
            ru: "Текстовые поля",
            pt: "Entradas de Texto",
            id: "Input Teks"
          },
          questions: [
            {
              id: "q1",
              type: "text",
              label: {
                de: "Einzeiliger Texteingabe",
                en: "One-line Text Input",
                zh: "单行文本输入",
                hi: "एक-पंक्ति पाठ इनपुट",
                es: "Entrada de Texto de Una Línea",
                fr: "Saisie de texte sur une ligne",
                ar: "إدخال نص من سطر واحد",
                bn: "এক সারির টেক্সট ইনপুট",
                ru: "Однострочное текстовое поле",
                pt: "Entrada de Texto de Uma Linha",
                id: "Input Teks Satu Baris"
              },
              tooltip: {
                de: "Geben Sie einen kurzen Text ein",
                en: "Enter a short text",
                zh: "输入简短文本",
                hi: "एक छोटा पाठ दर्ज करें",
                es: "Ingrese un texto corto",
                fr: "Entrez un texte court",
                ar: "أدخل نصًا قصيرًا",
                bn: "একটি সংক্ষিপ্ত টেক্সট লিখুন",
                ru: "Введите короткий текст",
                pt: "Digite um texto curto",
                id: "Masukkan teks singkat"
              },
              info: {
                de: "Dies ist ein einfaches Texteingabefeld.",
                en: "This is a simple text input.",
                zh: "这是一个简单的文本输入。",
                hi: "यह एक सरल पाठ इनपुट है।",
                es: "Esta es una entrada de texto simple.",
                fr: "Ceci est une saisie de texte simple.",
                ar: "هذا حقل إدخال نص بسيط",
                bn: "এটি একটি সহজ টেক্সট ইনপুট।",
                ru: "Это простое текстовое поле.",
                pt: "Esta é uma entrada de texto simples.",
                id: "Ini adalah input teks sederhana."
              },
              required: true
            }
          ]
        }
      ]
    },
    // New second page with BigTileChoice.
    {
      title: {
        de: "Große Kachel Auswahl",
        en: "Big Tile Choice",
        zh: "大瓷砖选择",
        hi: "बिग टाइल चॉइस",
        es: "Elección de Gran Azulejo",
        fr: "Choix de Grande Tuile",
        ar: "اختيار المربع الكبير",
        bn: "বড় টাইল চয়েস",
        ru: "Большой выбор плитки",
        pt: "Escolha de Grande Ladrilho",
        id: "Pilihan Ubin Besar"
      },
      sections: [
        {
          heading: {
            de: "Bitte wählen Sie eine Option",
            en: "Please choose an option",
            zh: "请选择一个选项",
            hi: "कृपया एक विकल्प चुनें",
            es: "Por favor, elija una opción",
            fr: "Veuillez choisir une option",
            ar: "يرجى اختيار خيار",
            bn: "একটি বিকল্প নির্বাচন করুন",
            ru: "Пожалуйста, выберите вариант",
            pt: "Por favor, escolha uma opção",
            id: "Silakan pilih satu opsi"
          },
          questions: [
            {
              id: "qBigTile",
              type: "bigTileChoice",
              label: {
                de: "Bitte wählen Sie eine Option",
                en: "Please choose an option",
                zh: "请选择一个选项",
                hi: "कृपया एक विकल्प चुनें",
                es: "Por favor, elija una opción",
                fr: "Veuillez choisir une option",
                ar: "يرجى اختيار خيار",
                bn: "একটি বিকল্প নির্বাচন করুন",
                ru: "Пожалуйста, выберите вариант",
                pt: "Por favor, escolha uma opção",
                id: "Silakan pilih satu opsi"
              },
              tooltip: {
                de: "Wählen Sie eine der Kacheln aus.",
                en: "Select one of the tiles.",
                zh: "选择一个瓷砖。",
                hi: "इन टाइलों में से एक चुनें।",
                es: "Seleccione una de las opciones.",
                fr: "Sélectionnez l'une des tuiles.",
                ar: "اختر واحدة من المربعات.",
                bn: "একটি টাইল নির্বাচন করুন।",
                ru: "Выберите одну из плиток.",
                pt: "Selecione um dos ladrilhos.",
                id: "Pilih salah satu ubin."
              },
              options: [
                { id: "1", label: "ok choice", explaination: "This is an ok choice." },
                { id: "2", label: "also ok choice", explaination: "This is also an ok choice." },
                { id: "3", label: "early exit choice", explaination: "This choice will exit the wizard early." }
              ],
              abortCondition: {
                comparer: "equal",
                value: "3",
                abortExplaination: "You have selected an early exit choice. Please contact us for further assistance."
              },
              required: true
            }
          ]
        }
      ]
    },
    {
      title: {
        de: "Erweiterte Eingaben",
        en: "Advanced Inputs",
        zh: "高级输入",
        hi: "एडवांस इनपुट्स",
        es: "Entradas Avanzadas",
        fr: "Entrées avancées",
        ar: "مدخلات متقدمة",
        bn: "উন্নত ইনপুট",
        ru: "Расширенные поля",
        pt: "Entradas Avançadas",
        id: "Input Lanjutan"
      },
      sections: [
        {
          heading: {
            de: "Datumsauswahl und Schieberegler",
            en: "Date Picker and Slider",
            zh: "日期选择和滑块",
            hi: "डेट पिकर और स्लाइडर",
            es: "Selector de fecha y deslizador",
            fr: "Sélecteur de date et curseur",
            ar: "منتقي التاريخ والمنزلق",
            bn: "তারিখ নির্বাচন এবং স্লাইডার",
            ru: "Выбор даты и ползунок",
            pt: "Seletor de Data e Slider",
            id: "Pemilih Tanggal dan Slider"
          },
          questions: [
            {
              id: "q4",
              type: "date",
              label: {
                de: "Wählen Sie ein Datum",
                en: "Select a Date",
                zh: "选择日期",
                hi: "एक तारीख चुनें",
                es: "Elige una fecha",
                fr: "Choisissez une date",
                ar: "اختر تاريخاً",
                bn: "একটি তারিখ নির্বাচন করুন",
                ru: "Выберите дату",
                pt: "Selecione uma data",
                id: "Pilih tanggal"
              },
              tooltip: {
                de: "Klicken Sie, um ein Datum auszuwählen.",
                en: "Click to choose a date.",
                zh: "点击选择日期",
                hi: "तारीख चुनने के लिए क्लिक करें",
                es: "Haz clic para elegir una fecha",
                fr: "Cliquez pour choisir une date",
                ar: "انقر لاختيار تاريخ",
                bn: "তারিখ নির্বাচন করতে ক্লিক করুন",
                ru: "Нажмите, чтобы выбрать дату",
                pt: "Clique para escolher uma data",
                id: "Klik untuk memilih tanggal"
              },
              info: {
                de: "HTML5 Datumseingabefeld.",
                en: "HTML5 date input.",
                zh: "HTML5 日期输入。",
                hi: "HTML5 तारीख इनपुट।",
                es: "Entrada de fecha HTML5.",
                fr: "Saisie de date HTML5.",
                ar: "حقل إدخال التاريخ من HTML5",
                bn: "HTML5 তারিখ ইনপুট।",
                ru: "Поле ввода даты HTML5.",
                pt: "Entrada de data HTML5.",
                id: "Input tanggal HTML5."
              },
              required: true
            },
            {
              id: "q5",
              type: "slider",
              label: {
                de: "Bewerten Sie Ihre Zufriedenheit",
                en: "Rate your satisfaction",
                zh: "评价您的满意度",
                hi: "अपनी संतुष्टि को रेट करें",
                es: "Califica tu satisfacción",
                fr: "Évaluez votre satisfaction",
                ar: "قيّم رضاك",
                bn: "আপনার সন্তুষ্টি রেট করুন",
                ru: "Оцените свою удовлетворенность",
                pt: "Avalie sua satisfação",
                id: "Nilai kepuasan Anda"
              },
              min: 0,
              max: 10,
              tooltip: {
                de: "Schieben Sie, um von 0 bis 10 zu bewerten.",
                en: "Slide to rate from 0 to 10.",
                zh: "滑动以从0到10评分",
                hi: "0 से 10 तक रेट करने के लिए स्लाइड करें",
                es: "Desliza para calificar de 0 a 10",
                fr: "Faites glisser pour évaluer de 0 à 10",
                ar: "اسحب للتقييم من 0 إلى 10",
                bn: "0 থেকে 10 পর্যন্ত রেট করতে স্লাইড করুন",
                ru: "Перетащите, чтобы оценить от 0 до 10",
                pt: "Deslize para avaliar de 0 a 10",
                id: "Geser untuk menilai dari 0 sampai 10"
              },
              info: {
                de: "Beispiel für einen Schieberegler.",
                en: "Slider input example.",
                zh: "滑块输入示例",
                hi: "स्लाइडर इनपुट उदाहरण",
                es: "Ejemplo de entrada de deslizador",
                fr: "Exemple de curseur",
                ar: "مثال على المنزلق",
                bn: "স্লাইডার ইনপুট উদাহরণ",
                ru: "Пример ползунка",
                pt: "Exemplo de slider",
                id: "Contoh input slider"
              },
              required: false
            }
          ]
        },
        {
          heading: {
            de: "Rich Text und Datei-Upload",
            en: "Rich Text and File Upload",
            zh: "富文本和文件上传",
            hi: "रिच टेक्स्ट और फ़ाइल अपलोड",
            es: "Texto enriquecido y carga de archivos",
            fr: "Texte enrichi et téléversement de fichiers",
            ar: "النص الغني وتحميل الملفات",
            bn: "রিচ টেক্সট এবং ফাইল আপলোড",
            ru: "Редактирование текста и загрузка файлов",
            pt: "Texto Rico e Upload de Arquivos",
            id: "Teks Kaya dan Unggah File"
          },
          questions: [
            {
              id: "q6",
              type: "rtf",
              label: {
                de: "Rich-Text-Eingabe",
                en: "Rich Text Input",
                zh: "富文本输入",
                hi: "रिच टेक्स्ट इनपुट",
                es: "Entrada de texto enriquecido",
                fr: "Saisie de texte enrichi",
                ar: "إدخال نص منسق",
                bn: "রিচ টেক্সট ইনপুট",
                ru: "Редактирование текста",
                pt: "Entrada de Texto Rico",
                id: "Input Teks Kaya"
              },
              tooltip: {
                de: "Geben Sie formatierten Text ein.",
                en: "Enter formatted text.",
                zh: "输入格式化文本",
                hi: "फ़ॉर्मेटेड टेक्स्ट दर्ज करें",
                es: "Introduce un texto formateado",
                fr: "Entrez un texte formaté",
                ar: "أدخل نصًا منسقًا",
                bn: "ফরম্যাট করা টেক্সট লিখুন",
                ru: "Введите форматированный текст",
                pt: "Digite um texto formatado",
                id: "Masukkan teks yang diformat"
              },
              info: {
                de: "Dieser Editor unterstützt grundlegende Formatierung.",
                en: "This editor supports basic formatting.",
                zh: "此编辑器支持基本格式化",
                hi: "यह संपादक बुनियादी स्वरूपण का समर्थन करता है",
                es: "Este editor admite une mise en forme basique.",
                fr: "Cet éditeur prend en charge la mise en forme de base.",
                ar: "يدعم هذا المحرر التنسيق الأساسي",
                bn: "এই সম্পাদকটি মৌলিক ফরম্যাটিং সমর্থন করে",
                ru: "Этот редактор поддерживает базовое форматирование",
                pt: "Este editor suporta formatação básica",
                id: "Editor ini mendukung format dasar"
              },
              required: false
            },
            {
              id: "q7",
              type: "file",
              label: {
                de: "Datei hochladen",
                en: "Upload a File",
                zh: "上传文件",
                hi: "फ़ाइल अपलोड करें",
                es: "Subir un archivo",
                fr: "Télécharger un fichier",
                ar: "تحميل ملف",
                bn: "ফাইল আপলোড করুন",
                ru: "Загрузить файл",
                pt: "Carregar um arquivo",
                id: "Unggah File"
              },
              tooltip: {
                de: "Wählen Sie eine Datei zum Hochladen aus.",
                en: "Select a file to upload.",
                zh: "选择要上传的文件",
                hi: "अपलोड करने के लिए फ़ाइल चुनें",
                es: "Selecciona un archivo para subir",
                fr: "Sélectionnez un fichier à télécharger",
                ar: "اختر ملفاً للتحميل",
                bn: "আপলোড করার জন্য একটি ফাইল নির্বাচন করুন",
                ru: "Выберите файл для загрузки",
                pt: "Selecione um arquivo para enviar",
                id: "Pilih file untuk diunggah"
              },
              info: {
                de: "Unterstützt gängige Dateitypen.",
                en: "Supports common file types.",
                zh: "支持常见的文件类型",
                hi: "सामान्य फ़ाइल प्रकारों का समर्थन करता है",
                es: "Admite tipos de archivos comunes",
                fr: "Prend en charge les types de fichiers courants",
                ar: "يدعم أنواع الملفات الشائعة",
                bn: "সাধারণ ফাইল টাইপ সমর্থিত",
                ru: "Поддерживает распространенные типы файлов",
                pt: "Suporta tipos de arquivos comuns",
                id: "Mendukung jenis file umum"
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
        zh: "媒体输入",
        hi: "मीडिया इनपुट्स",
        es: "Entradas de Medios",
        fr: "Entrées multimédias",
        ar: "مدخلات الوسائط",
        bn: "মিডিয়া ইনপুট",
        ru: "Медиа Ввод",
        pt: "Entradas de Mídia",
        id: "Input Media"
      },
      sections: [
        {
          heading: {
            de: "Multimedia per Markdown",
            en: "Multimedia via Markdown",
            zh: "通过 Markdown 的多媒体",
            hi: "Markdown के माध्यम से मल्टीमीडिया",
            es: "Multimedia vía Markdown",
            fr: "Multimédia via Markdown",
            ar: "الوسائط عبر Markdown",
            bn: "Markdown এর মাধ্যমে মিডিয়া",
            ru: "Мультимедиа через Markdown",
            pt: "Multimídia via Markdown",
            id: "Multimedia melalui Markdown"
          },
          questions: [
            {
              id: "q8",
              type: "text",
              label: {
                de: "Medieninhalt",
                en: "Media Content",
                zh: "媒体内容",
                hi: "मीडिया सामग्री",
                es: "Contenido Multimedia",
                fr: "Contenu multimédia",
                ar: "محتوى الوسائط",
                bn: "মিডিয়া বিষয়বস্তু",
                ru: "Медиа Контент",
                pt: "Conteúdo de Mídia",
                id: "Konten Media"
              },
              tooltip: {
                de: "Dieser Text kann Markdown für Bilder/Videos enthalten.",
                en: "This text may include markdown for images/videos.",
                zh: "此文本可包含图片/视频的 Markdown。",
                hi: "इस टेक्स्ट में छवियाँ/वीडियो के लिए मार्कडाउन हो सकता है।",
                es: "Este texto puede incluir Markdown para imágenes/videos.",
                fr: "Ce texte peut inclure du markdown pour images/vidéos.",
                ar: "قد يحتوي هذا النص على تنسيق Markdown للصور/الفيديو.",
                bn: "এই টেক্সটে ইমেজ/ভিডিও এর জন্য মার্কডাউন থাকতে পারে।",
                ru: "Этот текст может содержать markdown для изображений/видео.",
                pt: "Este texto pode incluir markdown para imagens/vídeos.",
                id: "Teks ini mungkin termasuk markdown untuk gambar/video."
              },
              info: {
                de: "Beispiel: ![Beispielbild](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) oder [Beispielvideo](https://youtu.be/dQw4w9WgXcQ)",
                en: "Example: ![Example Image](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) or [Example Video](https://youtu.be/dQw4w9WgXcQ)",
                zh: "示例：![示例图片](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) 或 [示例视频](https://youtu.be/dQw4w9WgXcQ)",
                hi: "उदाहरण: ![Example Image](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) या [Example Video](https://youtu.be/dQw4w9WgXcQ)",
                es: "Ejemplo: ![Imagen de Ejemplo](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) o [Video de Ejemplo](https://youtu.be/dQw4w9WgXcQ)",
                fr: "Exemple : ![Image d'exemple](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) ou [Vidéo d'exemple](https://youtu.be/dQw4w9WgXcQ)",
                ar: "مثال: ![صورة مثال](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3) أو [فيديو مثال](https://youtu.be/dQw4w9WgXcQ)",
                bn: "উদাহরণ: ![উদাহরণ ছবি](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3) অথবা [উদাহরণ ভিডিও](https://youtu.be/dQw4w9WgXcQ)",
                ru: "Данный информационный блок содержит изображение и видео:\n\n![Пример изображения](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[Пример видео](https://youtu.be/dQw4w9WgXcQ)",
                pt: "Example not available in Portuguese.",
                id: "Example not available in Indonesian."
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
        zh: "媒体信息示例",
        hi: "मीडिया जानकारी उदाहरण",
        es: "Ejemplo de Información Multimedia",
        fr: "Exemple d'information multimédia",
        ar: "مثال على معلومات الوسائط",
        bn: "মিডিয়া তথ্যের উদাহরণ",
        ru: "Пример медиа информации",
        pt: "Exemplo de Informação de Mídia",
        id: "Contoh Info Media"
      },
      sections: [
        {
          heading: {
            de: "Beispiel",
            en: "Example",
            zh: "示例",
            hi: "उदाहरण",
            es: "Ejemplo",
            fr: "Exemple",
            ar: "مثال",
            bn: "উদাহরণ",
            ru: "Пример",
            pt: "Exemple",
            id: "Contoh"
          },
          questions: [
            {
              id: "qMedia",
              type: "text",
              label: {
                de: "Medieninfo",
                en: "Media Info",
                zh: "媒体信息",
                hi: "मीडिया जानकारी",
                es: "Información Multimedia",
                fr: "Information multimédia",
                ar: "معلومات الوسائط",
                bn: "মিডিয়া তথ্য",
                ru: "Медиа Информация",
                pt: "Informação de Mídia",
                id: "Info Media"
              },
              tooltip: {
                de: "Beispiel: Markdown für Bild und Video",
                en: "Example: Markdown for image and video",
                zh: "示例：用于图片和视频的 Markdown",
                hi: "उदाहरण: छवि और वीडियो के लिए मार्कडाउन",
                es: "Ejemplo: Markdown para imagen y video",
                fr: "Exemple : Markdown pour image et vidéo",
                ar: "مثال: تنسيق Markdown للصورة والفيديو",
                bn: "উদাহরণ: ছবি ও ভিডিওর জন্য মার্কডাউন",
                ru: "Пример: Markdown для изображения и видео",
                pt: "Exemplo: Markdown para imagem e vídeo",
                id: "Contoh: Markdown untuk gambar dan video"
              },
              info: {
                de: "Dieses Info-Feld enthält ein Bild und ein Video:\n\n![Beispielbild](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\n[Beispielvideo](https://youtu.be/dQw4w9WgXcQ)",
                en: "This info box contains an image and a video:\n\n![Example Image](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                zh: "此信息框包含一张图片和一个视频：\n\n![示例图片](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[示例视频](https://youtu.be/dQw4w9WgXcQ)",
                hi: "इस जानकारी बॉक्स में एक चित्र और एक वीडियो शामिल है:\n\n![Example Image](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                es: "Esta caja de información contiene una imagen y un video:\n\n![Imagen de Ejemplo](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[Video de Ejemplo](https://youtu.be/dQw4w9WgXcQ)",
                fr: "Cette boîte d'information contient une image et une vidéo :\n\n![Image d'exemple](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[Vidéo d'exemple](https://youtu.be/dQw4w9WgXcQ)",
                ar: "هذا الصندوق يحتوي على صورة وفيديو:\n\n![صورة مثال](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[فيديو مثال](https://youtu.be/dQw4w9WgXcQ)",
                bn: "এই তথ্য বাক্সে একটি ছবি এবং একটি ভিডিও রয়েছে:\n\n![উদাহরণ ছবি](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[উদাহরণ ভিডিও](https://youtu.be/dQw4w9WgXcQ)",
                ru: "Данный информационный блок содержит изображение и видео:\n\n![Пример изображения](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[Пример видео](https://youtu.be/dQw4w9WgXcQ)",
                pt: "Example not available in Portuguese.",
                id: "Example not available in Indonesian."
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
        zh: "媒体信息示例",
        hi: "मीडिया जानकारी उदाहरण",
        es: "Ejemplo de Información Multimedia",
        fr: "Exemple d'information multimédia",
        ar: "مثال على معلومات الوسائط",
        bn: "মিডিয়া তথ্যের উদাহরণ",
        ru: "Пример медиа информации",
        pt: "Exemplo de Informação de Mídia",
        id: "Contoh Info Media"
      },
      sections: [
        {
          heading: {
            de: "Beispiel",
            en: "Example",
            zh: "示例",
            hi: "उदाहरण",
            es: "Ejemplo",
            fr: "Exemple",
            ar: "مثال",
            bn: "উদাহরণ",
            ru: "Пример",
            pt: "Exemple",
            id: "Contoh"
          },
          questions: [
            {
              id: "qMedia",
              type: "text",
              label: {
                de: "Medieninfo",
                en: "Media Info",
                zh: "媒体信息",
                hi: "मीडिया जानकारी",
                es: "Información Multimedia",
                fr: "Information multimédia",
                ar: "معلومات الوسائط",
                bn: "মিডিয়া তথ্য",
                ru: "Медиа Информация",
                pt: "Informação de Mídia",
                id: "Info Media"
              },
              tooltip: {
                de: "Beispiel: Markdown für Bild und Video",
                en: "Example: Markdown for image and video",
                zh: "示例：用于图片和视频的 Markdown",
                hi: "उदाहरण: छवि और वीडियो के लिए मार्कडाउन",
                es: "Ejemplo: Markdown para imagen y video",
                fr: "Exemple : Markdown pour image et vidéo",
                ar: "مثال: تنسيق Markdown للصور/الفيديو",
                bn: "উদাহরণ: ছবি ও ভিডিওর জন্য মার্কডাউন",
                ru: "Пример: Markdown для изображения и видео",
                pt: "Exemplo: Markdown para imagem e vídeo",
                id: "Contoh: Markdown untuk gambar dan video"
              },
              info: {
                de: "Dieses Info-Feld enthält ein Bild und ein Video:\n\n![Beispielbild](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\n[Beispielvideo](https://youtu.be/dQw4w9WgXcQ)",
                en: "This info box contains an image and a video:\n\n![Example Image](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                zh: "此信息框包含一张图片和一个视频：\n\n![示例图片](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[示例视频](https://youtu.be/dQw4w9WgXcQ)",
                hi: "इस जानकारी बॉक्स में एक चित्र और एक वीडियो शामिल है:\n\n![Example Image](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[Example Video](https://youtu.be/dQw4w9WgXcQ)",
                es: "Esta caja de información contiene una imagen y un video:\n\n![Imagen de Ejemplo](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[Video de Ejemplo](https://youtu.be/dQw4w9WgXcQ)",
                fr: "Cette boîte d'information contient une image et une vidéo :\n\n![Image d'exemple](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[Vidéo d'exemple](https://youtu.be/dQw4w9WgXcQ)",
                ar: "هذا الصندوق يحتوي على صورة وفيديو:\n\n![صورة مثال](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[فيديو مثال](https://youtu.be/dQw4w9WgXcQ)",
                bn: "এই তথ্য বাক্সে একটি ছবি এবং একটি ভিডিও রয়েছে:\n\n![উদাহরণ ছবি](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[উদাহরণ ভিডিও](https://youtu.be/dQw4w9WgXcQ)",
                ru: "Данный информационный блок содержит изображение и видео:\n\n![Пример изображения](https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop)\n\n[Пример видео](https://youtu.be/dQw4w9WgXcQ)",
                pt: "Example not available in Portuguese.",
                id: "Example not available in Indonesian."
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
