import chaeumImg from "./images/chaeulBeauty/chaeTwo.png";
import SerenityImg from "./images/styleSerenity/styleSerenity.png";
import LmsImg from "./images/LMS/Frame6.png";
import HappyTooImg from "./images/happyToo/Frame5.png";
import Happiness from "./images/happiness.png";
import HMImg from "./images/hm.png";

const projectData = {
  ChaeulBeauty: {
    hoverText: "Chaeul-Beauty",
    img: chaeumImg,
    webPage: "https://chaeul-mi.com/",
    description:
      "A beauty tattoo web application for my client in South Korea to enhance customer engagement and operational efficiency.",
    link: "/projects/chaeul-beauty",
  },

  HappyToo: {
    hoverText: "Happy Too",
    // videoSrc: HappyTooVideo,
    // img: [
    //   "https://res.cloudinary.com/dmvngssd0/image/upload/v1748740097/Frame5_zke9sk.png",
    //   "https://res.cloudinary.com/dmvngssd0/image/upload/v1748740095/iPhone15_ed41gn.png",
    // ],
    img: HappyTooImg,
    description:
      "A Busniess Consulting web application designed for a small and medium business",
    webPage: "http://happytoo.netlify.app",
    link: "/projects/happy-too",
  },

  HMCaseStudy: {
    hoverText: "H&M UX Redesign",
    img: HMImg,
    description:
      "A UX redesign concept based on user pain points from the existing H&M site.",
    link: "/projects/hm-redesign",
  },

  FamilyNutrients: {
    hoverText: "Family Nutrients",
    img: "https://res.cloudinary.com/dmvngssd0/image/upload/v1751495722/Landing_Page_wx5hi5.png",
    description: "Family recipe ",

    link: "/projects/family-nutrients",
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
      "Many students struggle to find personalized educational tools thatadapt to their pace and goals. The project was initiated in response to challenges observed by Scott Ko (FNs Network), who noted how rigid, standardized learning structures fail to serve students with varied learning journeys. This LMS addresses that gap through customizable learning plans.",
    videoSrc: "https://youtube.com/embed/Ub5G4wQfq_M",
    githubUrl: "https://github.com/Mijincode/LearningManagementSystem.git",
    link: "/projects/study-plan",
  },

  Happiness: {
    hoverText: "Happiness Ranking",
    title: "Happiness Ranking",
    img: Happiness,
    videoSrc: "https://www.youtube.com/embed/U-Vrown8XYM",
    description:
      "A React-based web application for analyzing happiness survey data, enabling users to filter and visualize information across demographics.",
    githubUrl: "https://github.com/Mijincode/HappinessApp",
    link: "/projects/happiness",
  },

  FlightRoutes: {
    title: "Flight Routes and Airports",
    videoSrc: "https://www.youtube.com/embed/n7On5x0mXxo",
    description:
      "This interactive platform allows users to explore flight routes and airport information across Australia.",
    githubUrl: "https://github.com/Mijincode/FlightRoutes",
  },

  MovieApp: {
    title: "Movie Search",
    videoSrc: "https://www.youtube.com/embed/kMa4L73EOr8",
    description:
      "A movie search app that features user authentication, movie detail lookups via IMDb, and image upload for movie posters.",
    githubUrl: "https://github.com/Mijincode/MovieApp",
  },
};
export default projectData;
