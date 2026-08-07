export const apartmentService = {
  intro: {
    title: "",
    paragraphs: [""
    ],
  },

  whenRequired: {
    title: "Kiedy świadectwo charakterystyki energetycznej jest obowiązkowe?",

    description:
      "Świadectwo charakterystyki energetycznej mieszkania jest wymagane przede wszystkim podczas sprzedaży lub wynajmu nieruchomości. Dokument przedstawia zapotrzebowanie lokalu na energię potrzebną do ogrzewania, wentylacji, przygotowania ciepłej wody użytkowej oraz innych instalacji wpływających na jego efektywność energetyczną. Na podstawie przekazanej dokumentacji oraz informacji o mieszkaniu przygotowuję świadectwo. W razie potrzeby pomagam również ustalić brakujące dane niezbędne do wykonania opracowania.",

    cards: [
      {
        title: "Sprzedaż mieszkania",
        description:
          "Przy sprzedaży mieszkania właściciel przekazuje świadectwo charakterystyki energetycznej nabywcy.",
      },
      {
        title: "Nowa umowa najmu",
        description:
          "Przy zawieraniu nowej umowy najmu świadectwo należy przekazać najemcy.",
      },
      {
        title: "Nowy lokal",
        description:
          "W niektórych przypadkach dokument jest wymagany również dla nowych lokali oddawanych do użytkowania.",
      },
    ],
  },

  documents: {
    title: "Jakie informacje będą potrzebne?",

    description:
      "Pełną listę dokumentów potrzebnych do przygotowania świadectwa charakterystyki energetycznej mieszkania przesyłam mailowo. Podstawowymi informacjami są między innymi:",

    cards: [
      {
        title: "Adres mieszkania",
        description:
          "Adres nieruchomości, dla której wykonywane jest świadectwo.",
      },
      {
        title: "Powierzchnia użytkowa",
        description:
          "Powierzchnia użytkowa mieszkania zgodna z dokumentacją lub aktem notarialnym.",
      },
      {
        title: "Rok budowy",
        description:
          "Informacja o roku budowy budynku, w którym znajduje się mieszkanie.",
      },
      {
        title: "Ogrzewanie i ciepła woda",
        description:
          "Informacje dotyczące źródła ogrzewania oraz sposobu przygotowania ciepłej wody użytkowej.",
      },
      {
        title: "Dokumentacja techniczna",
        description:
          "Projekt lub inne dokumenty techniczne, jeżeli są dostępne.",
      },
      {
        title: "Brak dokumentów?",
        description:
          "Jeżeli nie posiadasz pełnej dokumentacji, pomogę ustalić informacje potrzebne do wykonania świadectwa.",
      },
      
    ],
  },
    pricing: {
    title: "Ile kosztuje świadectwo charakterystyki energetycznej?",

    description:
      "",

    button: {
      text: "Skontaktuj się",
      href: "/kontakt",
    },

    cards: [
      {
        title: "Mieszkanie",
        price: "300 zł",
        description:
          "Świadectwo charakterystyki energetycznej dla mieszkania.",
        featured: true,
      },

      {
        title: "Dom jednorodzinny",
        price: "400 zł",
        description:
          "Cena dotyczy domu posiadającego dokumentację techniczną.",
      },

      {
        title: "Dodatkowe ustalenia",
        description:
          "Jeżeli wykonanie świadectwa wymaga dodatkowych ustaleń, wizji lokalnej lub wykonania pomiarów, koszt usługi ustalany jest indywidualnie. Przed rozpoczęciem realizacji zawsze przedstawiam pełną wycenę.",
        variant: "info" as const,
      },
    ],
  },
};