export const business = {
  name: "Get Around Auto",
  shortName: "Get Around",
  phone: "870-226-1073",
  phoneHref: "tel:+18702261073",
  phoneAlt: "870-340-1159",
  phoneAltHref: "tel:+18703401159",
  tagline: "Cash Cars · Buy Here Pay Here · Refinance",
  services: ["Cash Cars", "Buy Here Pay Here", "Refinance"],
  address: {
    street: "1150 Highway 49 West",
    city: "West Helena",
    state: "Arkansas",
    zip: "72390",
    full: "1150 Highway 49 West, West Helena, Arkansas 72390",
  },
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
  established: "Est. West Helena, AR",
} as const;
