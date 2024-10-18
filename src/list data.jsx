// BELOW IMPORTS ARE PACKAGE-COVER IMAGES & ESSENTIALS //
import edu from "./images/edu.png";
import india from "./images/kerala.png";
import europe from "./images/europe.png";
import inter from "./images/inter.png";
import honeymoon from "./images/honeymoon.png";
import Drop from "./images/DropDown.png";
import Menu from "./images/menu.jpg";
import Logo from "./images/LOGO.png";
import Abroad from "./images/Abroad.png";
import Traveler from "./images/Traveler.png";
import Experience from "./images/Experiences.png";
import AboutUs from "./images/GT-banner.png";

// EXPORTING THE ESSENTIALS FOR TOBBAR & MENUBAR //

export const DropI = Drop;
export const MenuIcon = Menu;
export const logo = Logo;
export const Banner = AboutUs;

// DATA FOR MENUBAR LIST & SIDEBAR//

export const Data = [
  {
    id: 1,
    title: "Home",
    src: "#",
    // submenu: [],
  },
  {
    id: 2,
    title: "Company",
    src: "https://www.instagram.com/karthikn_aka_sk/",
    submenu: [
      {
        id: 1,
        title: "About Us",
        src: "",
      },
      {
        id: 2,
        title: "History",
        src: "",
      },
      {
        id: 3,
        title: "Awards & Achievements",
        src: "",
      },
      {
        id: 4,
        title: "Media",
        src: "",
      },
      {
        id: 5,
        title: "Testimonials",
        src: "",
      },
      {
        id: 6,
        title: "Career",
        src: "",
      },
      {
        id: 7,
        title: "Blog",
        src: "",
      },
    ],
  },
  {
    id: 3,
    title: "Group Tours ",
    src: "",
    // submenu: [],
  },
  {
    id: 4,
    title: "Packages",
    src: "#packages",
    submenu: [
      {
        id: 1,
        title: "India",
        src: "",
      },
      {
        id: 2,
        title: "America",
        src: "",
      },
      {
        id: 3,
        title: "UK",
        src: "",
      },
      {
        id: 4,
        title: "Africa",
        src: "",
      },
    ],
  },
  {
    id: 5,
    title: "HoneyMoon",
    src: "#",
    submenu: [
      {
        id: 1,
        title: "Ooty",
        src: "/honeymoon/Ooty",
      },
      {
        id: 2,
        title: "Maldives",
        src: "/honeymoon/Maldives",
      },
      {
        id: 3,
        title: "Balli",
        src: "/honeymoon/Balli",
      },
    ],
  },
  {
    id: 6,
    title: "Cruises",
    src: "#",
    // submenu: [],
  },

  {
    id: 7,
    title: "Contact",
    src: "#",
    submenu: [
      {
        id: 1,
        title: "Contact Us",
        src: "/Contact Us",
      },
      {
        id: 2,
        title: "Chennai",
      },
      {
        id: 3,
        title: "Mumbai",
      },
      {
        id: 4,
        title: "Hydrabad",
      },
      {
        id: 5,
        title: "Coimbatore",
      },
      {
        id: 6,
        title: "Madurai",
      },
    ],
  },
];

// DATA FOR TOUR COVERS //

export const packages = [
  {
    id: 1,
    name: "India Tours ",
    title: "98 Tours",
    src: india,
    link: "#",
  },
  {
    id: 2,
    name: "International Tours",
    title: "362 Tours",
    src: inter,
    link: "#",
  },
  {
    id: 3,
    name: "Honeymoon Trips",
    title: "98 Tours",
    src: honeymoon,
    link: "#",
  },
  {
    id: 4,
    name: "Europe Tours",
    title: "144 Tours",
    src: europe,
    link: "#",
  },
  {
    id: 5,
    name: "Educational Trips",
    title: "15 Tours",
    src: edu,
    link: "#",
  },
];
export const Trip = [
  {
    id: 1,
    src: Abroad,
    cap: "50,000+ Abroad Trips",
    title:
      "For the last decade, SK Holidays have organized more than 50,000 international itineraries.",
  },

  {
    id: 2,
    src: Experience,
    cap: "Handcrafted Experiences",
    title:
      "Each and every itinerary is customized according to the taste of the customers.",
  },
  {
    id: 3,
    src: Traveler,
    cap: "Happy Travellers",
    title:
      "SK Holidays holds record of great customer satisfaction and all customers are retained with us.",
  },
];
