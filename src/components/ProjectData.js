// import Happiness from "./images/happiness.png";
// import Flight from "./images/Flight.png";
// import Movie from "./images/movie.png";

export const projectOrder = [
  // "ModelsMagazine",
  "ConfidentialFashionTech",
  "ChaeulBeauty",
  "FamilyNutrients",
  "HappyToo",
  "HMCaseStudy",
  "StudyPlan",
  "StyleSerenity",
  // "Happiness",
  // "FlightRoutes",
  // "MovieSearch",
];

const projectData = {
  // ModelsMagazine: {
  //   hoverText: "Models The Magazine",
  //   role: "UX/UI Design, Research, Interactive Prototype",
  //   img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1758072224/MacBook_Pro_and_iPhone_15_Pro_Mockup_n8q67i.png",
  //   webPage: "#", // optional: add live link if available
  //   description:
  //     "Redesigned a legacy modeling site into a scalable, trust-building platform—competitions, portfolio uploads, and advanced discovery. Delivered 56+ responsive screens and an interactive prototype.",
  //   link: "/projects/models-magazine",
  // },

  ConfidentialFashionTech: {
    hoverText: "Confidential FashionTech (NDA)",
    role: "UX/UI Lead, Design System",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1760080696/iPhone_17_Pro_deep_blue_front_lwdhc8.png",
    webPage: null,
    description:
      "“A SaaS-based creative network connecting models, photographers, and agencies — designed from zero to launch with 56+ responsive screens, consent flows, and a WCAG-aligned design system",
    link: "/projects/confidential-fashiontech",
    githubUrl: null,
  },

  ChaeulBeauty: {
    hoverText: "Chaeul-Beauty",
    role: "UX/UI Design, Full-Stack Development",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1759659997/RedesignMockup_ukwzdn.png",
    webPage: "https://chaeul-mi.com/",
    description:
      "A brand-driven web experience for a cosmetic tattoo studio, blending minimalist aesthetics and seamless UX. Designed and developed end-to-end to convey trust and elegance across devices..",
    link: "/projects/chaeul-beauty",
    githubUrl: "https://github.com/Mijincode/Chaeul_mi",
  },

  FamilyNutrients: {
    hoverText: "Family Nutrients",
    role: "UX/UI Design",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1758686774/triple_iPhone_16_Pro_mockup_black_titanium_ohebhr.png",
    description:
      "A family wellness and nutrition app built to simplify meal planning and encourage healthy habits. Designed intuitive UX flows focused on motivation, personalization, and usability",

    link: "/projects/family-nutrients",
  },

  HappyToo: {
    hoverText: "Happy Too",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1753236628/Frame_1_tsp0uk.png",
    role: "UX/UI Design, Front-End Development",
    description:
      " A SaaS-based business consulting platform showcasing scalable UX for SMEs. Designed clear onboarding, modular service cards, and a responsive system adaptable for web and mobile",
    webPage: "http://happytoo.netlify.app",
    githubUrl: "https://github.com/Mijincode/HappyToo",
    link: "/projects/happy-too",
  },

  HMCaseStudy: {
    hoverText: "H&M UX Redesign",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1753236922/Frame_8_vqrdqq.png",
    role: "UX/UI Design",
    description:
      "A UX case study reimagining H&M’s e-commerce experience. Focused on streamlining navigation, reducing cognitive load, and creating a more fluid, conversion-friendly shopping journey",
    link: "/projects/hm-redesign",
  },

  StudyPlan: {
    hoverText: "Learning Management System",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1753240923/Flying_Macbook_Air_2022_Perspective_Mockup_lzahcq.png",
    role: "UX/UI Design, Front-End Development",
    description:
      "A customizable learning management system (LMS) enabling users to design flexible study paths. Built modular components supporting user-led scheduling, progress tracking, and adaptability.",
    videoSrc: "https://youtube.com/embed/Ub5G4wQfq_M",
    githubUrl: "https://github.com/Mijincode/LearningManagementSystem",
    link: "/projects/study-plan",
  },
  StyleSerenity: {
    hoverText: "Style Serenity",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1753240162/MacBook_Pro_16-inch_Space_Gray_Mockup_bxuict.png",
    role: "UX/UI Design, Front-End Development",
    description:
      "A fashion e-commerce platform designed to elevate product discovery and checkout flow. Prioritized visual hierarchy, minimalist interface, and fluid interactions to drive conversion and engagement.",
    link: "/projects/style-serenity",
    videoSrc: "https://youtube.com/embed/fN1HkiEuzVA",
    githubUrl: "https://github.com/Mijincode/StyleSerenity",
  },

  // Happiness: {
  //   hoverText: "Happiness Ranking",
  //   title: "Happiness Ranking",
  //   img: Happiness,
  //   role: "Full-Stack Development",
  //   videoSrc: "https://www.youtube.com/embed/U-Vrown8XYM",
  //   description:
  //     "A data visualization tool for global happiness metrics. Prioritized clarity in charts and filters, with responsive UI and intuitive interaction for data exploration.",
  //   githubUrl: "https://github.com/Mijincode/HappinessApp",
  //   link: "/projects/happiness",
  // },

  // FlightRoutes: {
  //   hoverText: "Flight Routes and Airports",
  //   title: "Flight Routes and Airports",
  //   videoSrc: "https://www.youtube.com/embed/n7On5x0mXxo",
  //   role: "Full-Stack Development",
  //   img: Flight,
  //   description:
  //     "This interactive platform allows users to explore flight routes and airport information across Australia. Interactive web application integrating map APIs to display real-time Australian flight routes and airport data. Emphasized performance optimization and usability across devices.",
  //   githubUrl: "https://github.com/Mijincode/FlightRoutes",
  //   link: "/projects/flight-routes",
  // },

  // MovieSearch: {
  //   hoverText: "Movie Search",
  //   title: "Movie Search",
  //   img: Movie,
  //   videoSrc: "https://www.youtube.com/embed/kMa4L73EOr8",
  //   role: "Full-Stack Development",
  //   description:
  //     "A movie search app that features user authentication, movie detail lookups via IMDb, and image upload for movie posters.",
  //   githubUrl: "https://github.com/Mijincode/MovieApp",
  //   link: "/projects/movie-search",
  // },
};
export default projectData;
