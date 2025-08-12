import Happiness from "./images/happiness.png";
import Flight from "./images/Flight.png";
import Movie from "./images/movie.png";

export const projectOrder = [
  "ChaeulBeauty",
  "HappyToo",
  "FamilyNutrients",
  "StyleSerenity",
  "HMCaseStudy",
  "StudyPlan",
  "Happiness",
  "FlightRoutes",
  "MovieSearch",
];

const projectData = {
  ChaeulBeauty: {
    hoverText: "Chaeul-Beauty",
    role: "UX/UI Design, Full-Stack Development",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1748740072/Instagram_sihuqg.png",
    webPage: "https://chaeul-mi.com/",
    description:
      "A responsive beauty studio website designed for a Korean client, focused on modern aesthetics, intuitive navigation, and mobile-first usability to improve client engagement and service bookings.",
    link: "/projects/chaeul-beauty",
    githubUrl: "https://github.com/Mijincode/Chaeul_mi",
  },

  HappyToo: {
    hoverText: "Happy Too",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1753236628/Frame_1_tsp0uk.png",
    role: "UX/UI Design, Front-End Development",
    description:
      " SaaS-based business consulting platform designed during an interview project to showcase scalable UX for SMEs. Focused on clarity, onboarding flow, and modular service cards with responsive design for cross-device usability.",
    webPage: "http://happytoo.netlify.app",
    githubUrl: "https://github.com/Mijincode/HappyToo",
    link: "/projects/happy-too",
  },

  FamilyNutrients: {
    hoverText: "Family Nutrients",
    role: "UX/UI Design",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1753239744/Frame_4_wcopiw.png",
    description:
      "Focused on simplifying healthy meal planning with intuitive navigation and visual clarity.",

    link: "/projects/family-nutrients",
  },

  StyleSerenity: {
    hoverText: "Style Serenity",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1753240162/MacBook_Pro_16-inch_Space_Gray_Mockup_bxuict.png",
    role: "UX/UI Design, Front-End Development",
    description:
      "A fashion e-commerce platform built to streamline product discovery and checkout. Prioritized visual hierarchy, minimal UI, and smooth browsing interactions to support conversion and ease of use.",
    link: "/projects/style-serenity",
    videoSrc: "https://youtube.com/embed/fN1HkiEuzVA",
    githubUrl: "https://github.com/Mijincode/StyleSerenity",
  },

  HMCaseStudy: {
    hoverText: "H&M UX Redesign",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1753236922/Frame_8_vqrdqq.png",
    role: "UX/UI Design",
    description:
      "A case study exploring pain points and reimagining the H&M e-commerce experience for clarity and flow.",
    link: "/projects/hm-redesign",
  },

  StudyPlan: {
    hoverText: "Learning Management System",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1753240923/Flying_Macbook_Air_2022_Perspective_Mockup_lzahcq.png",
    role: "UX/UI Design, Front-End Development",
    description:
      "A Learning Management System designed for customizable study plans. Built with adaptability in mind, enabling personalized learning journeys through modular components and user-led workflows.",
    videoSrc: "https://youtube.com/embed/Ub5G4wQfq_M",
    githubUrl: "https://github.com/Mijincode/LearningManagementSystem",
    link: "/projects/study-plan",
  },

  Happiness: {
    hoverText: "Happiness Ranking",
    title: "Happiness Ranking",
    img: Happiness,
    role: "Full-Stack Development",
    videoSrc: "https://www.youtube.com/embed/U-Vrown8XYM",
    description:
      "A data visualization tool for global happiness metrics. Prioritized clarity in charts and filters, with responsive UI and intuitive interaction for data exploration.",
    githubUrl: "https://github.com/Mijincode/HappinessApp",
    link: "/projects/happiness",
  },

  FlightRoutes: {
    hoverText: "Flight Routes and Airports",
    title: "Flight Routes and Airports",
    videoSrc: "https://www.youtube.com/embed/n7On5x0mXxo",
    role: "Full-Stack Development",
    img: Flight,
    description:
      "This interactive platform allows users to explore flight routes and airport information across Australia. Interactive web application integrating map APIs to display real-time Australian flight routes and airport data. Emphasized performance optimization and usability across devices.",
    githubUrl: "https://github.com/Mijincode/FlightRoutes",
    link: "/projects/flight-routes",
  },

  MovieSearch: {
    hoverText: "Movie Search",
    title: "Movie Search",
    img: Movie,
    videoSrc: "https://www.youtube.com/embed/kMa4L73EOr8",
    role: "Full-Stack Development",
    description:
      "A movie search app that features user authentication, movie detail lookups via IMDb, and image upload for movie posters.",
    githubUrl: "https://github.com/Mijincode/MovieApp",
    link: "/projects/movie-search",
  },
};
export default projectData;
