import img1 from '../assets/project-1/img1.png'
import img2 from '../assets/project-2/img1.png'
import img3 from '../assets/project-3/img1.png'
import img4 from '../assets/project-4/img1.png'

const projects = [
  {
    title: "SagaV",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Github",
      "Figma"
    ],
    description:
      "This work is a line of mocktails - alcohol free beverages that consumers can enjoy anytime and anywhere. The project is inspired by 0 alcohol beverage alternatives, as well as the theming being inspired by tarot cards and magic. I worked alongside a team of branding and product designers to deliver a digital experience.",
    imgSrc: img1,
    repo: "https://github.com/parvathi-kumar/zero-proof-website",
  },
  {
    title: "Travel HQ",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Third Party API",
      "Ajax",
      "jQuery"
    ],
    description:
      "This project was created for travel enthusiasts to find inspiration and accommodations for their next adventure. It is designed to provide travel guides and accommodations for the user based on location.",
    imgSrc: img2,
    repo: "https://hope428.github.io/travel-hq/",
  },
  {
    title: "Ibanez Guitars",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
    ],
    description:
      "This project was created to showcase some of Ibanez Guitar’s best selling products. Another reason the project was created was to showcase a basic e-commerce layout, complete with a contact form and a functional cart with products, tax, and price calculations.",
    imgSrc: img3,
    repo: "https://github.com/hope428/ibanez-guitars-single-page",
  },

  {
    title: "Guitar Chord Mastery",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "LocalStorage",
    ],
    description:
      "This project was created to help beginner and intermediate guitarists practice and reference chords based on movable chord shapes. I used HTML, CSS, and Javascript to achieve the layout and functionality, as well as the browser's localStorage function to allow the user to save favorites.",
    imgSrc: img4,
    repo: "https://github.com/hope428/guitar-chord-mastery",
  },
];

export default projects;
