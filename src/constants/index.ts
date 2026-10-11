export type FlavorColor =
  | "brown"
  | "red"
  | "blue"
  | "orange"
  | "white"
  | "black";

export interface Flavor {
  name: string;
  color: FlavorColor;
  rotation: string;
}

export interface Nutrient {
  label: string;
  amount: string;
}

export interface TestimonialCard {
  src: string;
  rotation: string;
  name: string;
  img: string;
  translation?: string;
}

export const flavorList: Flavor[] = [
  {
    name: "Chocolate Milk",
    color: "brown",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Strawberry Milk",
    color: "red",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Cookies & Cream",
    color: "blue",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Peanut Butter Chocolate",
    color: "orange",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Vanilla Milkshake",
    color: "white",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Max Chocolate Milk",
    color: "black",
    rotation: "md:rotate-[8deg] rotate-0",
  },
];

/** Prepared for upcoming nutrition section */
export const nutrientList: Nutrient[] = [
  { label: "Potassium", amount: "245mg" },
  { label: "Calcium", amount: "500mg" },
  { label: "Vitamin A", amount: "176mcg" },
  { label: "Vitamin D", amount: "5mcg" },
  { label: "Iron", amount: "1mg" },
];

/** Prepared for upcoming testimonials section */
export const testimonialCards: TestimonialCard[] = [
  {
    src: "/videos/f1.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: "/images/p1.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f2.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: "/images/p2.png",
  },
  {
    src: "/videos/f3.mp4",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: "/images/p3.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f4.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: "/images/p4.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f5.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: "/images/p5.png",
  },
  {
    src: "/videos/f6.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: "/images/p6.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f7.mp4",
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: "/images/p7.png",
    translation: "translate-y-[10%]",
  },
];

export function getFlavorAssets(color: FlavorColor) {
  return {
    background: `/images/${color}-bg.svg`,
    drink: `/images/${color}-drink.webp`,
    elements: `/images/${color}-elements.webp`,
  } as const;
}
