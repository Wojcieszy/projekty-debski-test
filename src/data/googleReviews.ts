export interface GoogleReview {
  author: string;
  initials: string;
  date: string;
  rating: number;
  text: string;
}

export const googleRating = {
  rating: 5.0,
  reviews: 7,
  url: "https://www.google.com/maps/place/%C5%9Awiadectwa+Charakterystyki+Energetycznej+D%C4%99bski/@52.1701206,21.0235564,17z",
};

export const googleReviews: GoogleReview[] = [
  {
    author: "Klient Google",
    initials: "KG",
    date: "tydzień temu",
    rating: 5,
    text:
      "Świadectwo wykonane bardzo szybko. Bez komplikacji. Obsługa rzetelna i fachowa. Bezproblemowy kontakt. Polecam!",
  },

  {
    author: "Klient Google",
    initials: "KG",
    date: "tydzień temu",
    rating: 5,
    text:
      "Serdecznie polecam! Świadectwo energetyczne zostało wykonane bardzo sprawnie, dokładnie i w ekspresowym tempie. Świetny kontakt i pełen profesjonalizm.",
  },

  {
    author: "Klient Google",
    initials: "KG",
    date: "5 miesięcy temu",
    rating: 5,
    text:
      "Świadectwo energetyczne zostało wykonane błyskawicznie, a cały proces przebiegł sprawnie i bezproblemowo. Świetny kontakt, szybka odpowiedź i jasne wyjaśnienia.",
  },

  {
    author: "Bożena M.",
    initials: "BM",
    date: "tydzień temu",
    rating: 5,
    text:
      "Od zgłoszenia do uzyskania świadectwa nie minęła nawet jedna doba. Dokument został przygotowany starannie i profesjonalnie. Polecam!",
  },
];