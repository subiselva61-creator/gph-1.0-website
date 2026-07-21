import { images } from "@/lib/images";

export type CaseStudy = {
  id: string;
  title: string;
  problem: string;
  resolution: string;
  location: string;
  sector: string;
  quote: string;
  attribution: string;
  role: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "samuel",
    title: "Bringing Power to a Village",
    problem: "A rural village with no reliable access to electricity.",
    resolution:
      "With the solar installation planned alongside Ada, the community gains a turning point — affordable, sustainable power through second-hand panels, and renewed hope for what it will bring.",
    location: "West Africa",
    sector: "Community Electrification",
    quote:
      "We are looking forward to the solar installation planned with your team and Ada. For our village, having access to electricity will be a turning point.",
    attribution: "Samuel N",
    role: "Community Coordinator",
    image: images.caseStudies[0],
  },
  {
    id: "aicha",
    title: "Strengthening a Women's Cooperative",
    problem:
      "An agricultural cooperative constrained by unreliable irrigation and food conservation.",
    resolution:
      "A future solar system supports irrigation, food conservation, and productivity — while strengthening the cooperative's autonomy.",
    location: "West Africa",
    sector: "Agricultural Cooperative",
    quote:
      "Our cooperative is very excited about the future solar system that will support our agricultural work. With reliable electricity, we expect to improve irrigation, food conservation, and productivity.",
    attribution: "Aïcha M",
    role: "Leader of the Women Farmers' Group",
    image: images.caseStudies[1],
  },
  {
    id: "joseph",
    title: "Extending a Small Workshop's Hours",
    problem: "A workshop limited by daylight hours and inconsistent power.",
    resolution:
      "Reliable electricity extends working hours and grows the customer base — made accessible through second-hand panel economics.",
    location: "West Africa",
    sector: "Artisan Enterprise",
    quote:
      "Being able to rely on electricity will allow me to extend my working hours and serve more customers. The approach using second-hand panels makes this project accessible.",
    attribution: "Joseph K",
    role: "Artisan & Entrepreneur",
    image: images.caseStudies[2],
  },
  {
    id: "claire",
    title: "A Partnership Model for Rural Development",
    problem:
      "Circular energy solutions and rural development goals often exist separately.",
    resolution:
      "A partnership aligning circular energy with community development — with measurable impact on education, agriculture, and local economies.",
    location: "Africa",
    sector: "NGO Partnership",
    quote:
      "Your commitment to circular energy solutions and rural development aligns perfectly with our mission. This partnership has strong potential to inspire similar projects across Africa.",
    attribution: "Claire D",
    role: "Program Manager, Partner NGO",
    image: images.caseStudies[3],
  },
  {
    id: "fatima",
    title: "Electricity for the First Time",
    problem: "A family without electricity at home.",
    resolution:
      "For the first time, evenings become safer, and children can study after sunset.",
    location: "West Africa",
    sector: "Household Electrification",
    quote:
      "My family is looking forward to having electricity in our home for the first time. We expect our evenings to be safer and more comfortable, and our children are excited to be able to study after sunset.",
    attribution: "Fatima T",
    role: "Mother of Four",
    image: images.caseStudies[4],
  },
];
