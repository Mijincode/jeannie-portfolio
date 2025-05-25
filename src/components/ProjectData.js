import chaeumImg from "./images/chaeulBeauty/chaeTwo.png";
import SerenityImg from "./images/styleSerenity/styleSerenity.png";
import LmsImg from "./images/LMS/Frame6.png";
import LaptopHappy from "./images/happyToo/Frame5.png";

const projectData = {
  ChaeulBeauty: {
    hoverText: "Chaeul-Beauty",
    img: chaeumImg,
    webPage: "https://chaeul-mi.com/",
    description:
      "A beauty tattoo web application for my client in South Korea to enhance customer engagement and operational efficiency.",
    link: "/projects/chaeul-beauty",
  },

  StyleSerenityEcommerce: {
    hoverText: "Style Serenity",
    img: SerenityImg,
    description:
      "A fashion e-commerce web application designed for a seamless shopping experience.",
    link: "/projects/style-serenity",
  },

  StudyPlan: {
    hoverText: "Learning Management System",
    img: LmsImg,
    description:
      "This is a Learning Management System (LMS) web application for Future Leaders Network, enhancing educational experiences through interactive tools",
    videoSrc: "https://youtube.com/embed/Ub5G4wQfq_M",
    githubUrl: "https://github.com/Mijincode/StudyPlanApp",
    link: "/projects/study-plan",
  },

  HappyToo: {
    hoverText: "Happy Too",
    // videoSrc: HappyTooVideo,
    // img: HappyTooImg,
    img: LaptopHappy,
    description:
      "A Busniess Consulting web application designed for a small and medium business",
    webPage: "http://happytoo.netlify.app",
  },
  // HappinessApp: {
  //   title: "Happiness Ranking",
  //   videoSrc: "https://www.youtube.com/embed/U-Vrown8XYM",
  //   description:
  //     "A React-based web application for analyzing happiness survey data, enabling users to filter and visualize information across demographics.",
  //   githubUrl: "https://github.com/Mijincode/HappinessApp",
  // },

  // FlightRoutes: {
  //   title: "Flight Routes and Airports",
  //   videoSrc: "https://www.youtube.com/embed/n7On5x0mXxo",
  //   description:
  //     "This interactive platform allows users to explore flight routes and airport information across Australia.",
  //   githubUrl: "https://github.com/Mijincode/FlightRoutes",
  // },

  // MovieApp: {
  //   title: "Movie Search",
  //   videoSrc: "https://www.youtube.com/embed/kMa4L73EOr8",
  //   description:
  //     "A movie search app that features user authentication, movie detail lookups via IMDb, and image upload for movie posters.",
  //   githubUrl: "https://github.com/Mijincode/MovieApp",
  // },
};
export default projectData;
