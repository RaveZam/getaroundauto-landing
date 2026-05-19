export type Car = {
  id: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  miles: number;
  price: number;
  body: "Sedan" | "SUV" | "Truck" | "Coupe" | "Hatchback";
  drivetrain: "FWD" | "RWD" | "AWD" | "4WD";
  highlight?: string;
  image: string;
};

// Stock photography via loremflickr — keyword-tagged Creative Commons photos.
// Locked seeds keep each car showing the same image between visits.
// Swap with real listing photos when the lot starts photographing inventory.
const stock = (tags: string, seed: number) =>
  `https://loremflickr.com/900/700/${tags}/all?lock=${seed}`;

export const inventory: Car[] = [
  {
    id: "1",
    year: 2019,
    make: "Toyota",
    model: "Camry",
    trim: "SE",
    miles: 58_412,
    price: 17_995,
    body: "Sedan",
    drivetrain: "FWD",
    highlight: "One owner",
    image: stock("toyota,camry,sedan", 11),
  },
  {
    id: "2",
    year: 2017,
    make: "Ford",
    model: "F-150",
    trim: "XLT SuperCrew",
    miles: 86_204,
    price: 22_500,
    body: "Truck",
    drivetrain: "4WD",
    highlight: "Tow package",
    image: stock("ford,f150,pickup,truck", 22),
  },
  {
    id: "3",
    year: 2020,
    make: "Honda",
    model: "CR-V",
    trim: "EX",
    miles: 47_910,
    price: 21_750,
    body: "SUV",
    drivetrain: "AWD",
    highlight: "Clean Carfax",
    image: stock("honda,crv,suv", 33),
  },
  {
    id: "4",
    year: 2016,
    make: "Chevrolet",
    model: "Silverado 1500",
    trim: "LT Z71",
    miles: 102_557,
    price: 19_900,
    body: "Truck",
    drivetrain: "4WD",
    image: stock("chevrolet,silverado,pickup", 44),
  },
  {
    id: "5",
    year: 2018,
    make: "Nissan",
    model: "Altima",
    trim: "SV",
    miles: 71_330,
    price: 13_450,
    body: "Sedan",
    drivetrain: "FWD",
    highlight: "Great fuel economy",
    image: stock("nissan,altima,sedan", 55),
  },
  {
    id: "6",
    year: 2021,
    make: "Jeep",
    model: "Grand Cherokee",
    trim: "Laredo",
    miles: 39_140,
    price: 26_995,
    body: "SUV",
    drivetrain: "4WD",
    highlight: "Like new",
    image: stock("jeep,grand-cherokee,suv", 66),
  },
];

export const formatPrice = (n: number) =>
  `$${n.toLocaleString("en-US")}`;

export const formatMiles = (n: number) =>
  `${n.toLocaleString("en-US")} mi`;
