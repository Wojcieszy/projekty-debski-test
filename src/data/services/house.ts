export const houseService = {
  intro: {
    title: "",
    paragraphs: [
  ""   ],
  },

  whenRequired: {
    title: "Kiedy świadectwo charakterystyki energetycznej jest obowiązkowe?",

    description:
      "Świadectwo charakterystyki energetycznej domu jednorodzinnego jest wymagane przede wszystkim podczas sprzedaży lub wynajmu nieruchomości. Dokument przedstawia zapotrzebowanie budynku na energię potrzebną do ogrzewania, wentylacji, przygotowania ciepłej wody użytkowej oraz innych instalacji wpływających na jego efektywność energetyczną. Na podstawie przekazanej dokumentacji oraz informacji o budynku przygotowuję świadectwo zgodne z obowiązującymi przepisami. W razie potrzeby pomagam również ustalić brakujące dane niezbędne do wykonania opracowania.",
    cards: [
      {
        title: "Sprzedaż domu",
        description:
          "Przy sprzedaży domu właściciel przekazuje świadectwo charakterystyki energetycznej nabywcy.",
      },
      {
        title: "Nowa umowa najmu",
        description:
          "Przy zawieraniu nowej umowy najmu świadectwo należy przekazać najemcy.",
      },
      {
        title: "Nowo wybudowany dom",
        description:
          "W określonych przepisami przypadkach świadectwo jest wymagane również przy oddaniu nowego domu do użytkowania.",
      },
    ],
  },

  documents: {
    title: "Jakie informacje będą potrzebne?",

    description:
      "Pełną listę dokumentów potrzebnych do przygotowania świadectwa charakterystyki energetycznej mieszkania przesyłam mailowo. Podstawowymi informacjami są między innymi:",

    cards: [
      {
        title: "Adres nieruchomości",
        description:
          "Adres domu, dla którego wykonywane jest świadectwo.",
      },
      {
        title: "Powierzchnia użytkowa",
        description:
          "Powierzchnia użytkowa domu zgodna z dokumentacją.",
      },
      {
        title: "Rok budowy",
        description:
          "Informacja o roku budowy budynku.",
      },
      {
        title: "Ogrzewanie i ciepła woda",
        description:
          "Informacje o źródle ogrzewania oraz sposobie przygotowania ciepłej wody użytkowej.",
      },
      {
        title: "Projekt lub dokumentacja",
        description:
          "Projekt budowlany lub dokumentacja techniczna, jeżeli są dostępne.",
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
        title: "Dom jednorodzinny",
        price: "400 zł",
        description:
          "Cena dotyczy domu posiadającego dokumentację techniczną.",
        featured: true,
      },

      {
        title: "Mieszkanie",
        price: "300 zł",
        description:
          "Świadectwo charakterystyki energetycznej dla mieszkania.",
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