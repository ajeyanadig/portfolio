export const HERO_CONTENT = `I am a passionate full stack developer who loves crafting robust and scalable web applications. With a year of experience in MERN stack, I have worked with a variety of technologies like React, Node.js, MySQL, MongoDB, Express, Redux, Tailwind and more, with a keen eye on implementing user friendly designs and specializing in UI/UX development. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. `;

export const ABOUT_TEXT = [
  `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began while building a simple quiz web application for students during COVID in Vanilla JS with the single question
`,
  ` "How is hoisting even possible if JavaScript is an interpreted language?"`,
  `From that point on, my curioisity and obsession with uncovering how JS works in the browser began, extended further into the workings of web development, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, discovering new aesthetic designs, and building fun projects.`,
];

export const PROJECTS = [
  {
    id: 0,
    title: "The Wild Oasis",
    date: "May 2024 - Jun 2024",
    description:
      "The Wild Oasis is a full stack web application designed to manage the workings and business hotel and enhance productivity for all employees. It provides a user-friendly interface for the business to track and manage bookings, new employee logins, payment, add/update/remove new cabins/room, check-ins and check-outs. Basically all CRUD operations.",
    image: "/Oasis.png",
    tags: [
      "React",
      "React Query",
      "Supabase",
      "Styled Components",
      "CI/CD",
      "Hook-Forms",
      "Authentication",
      "React-Router",
    ],
    category: "Fullstack",
    github: "https://github.com/rishavchanda/Trackify",
    webapp: "https://the-wild-oasis-aj.vercel.app/",
  },
  {
    id: 1,
    title: "Pizza Delivery Co.",
    date: "May 2024",
    description:
      "A Front End React Web App for ordering mouth watering authentic Italian pizzas, straight from a brick oven to you. Developed using React, designed with TailwindCSS for, while using the latest React Router features imperatively along with Redux Toolkit with the latest patterns to manage remote state, global UI state, incorporating different APIs for various features",
    image: "/Pizza_Delivery.png",

    tags: ["React Js", "Redux", "Tailwind CSS", "React-Router", "RTK Toolkit"],
    category: `React`,
    github: "https://github.com/ajeyanadig/pizzaDelivery",
    webapp: "https://pizzadelivery-ajeya.netlify.app/",
  },
  {
    id: 2,
    title: "World Wise",
    date: "April 2024",
    description:
      "WorldWise is a webapp where you can keep notes about the city or, to keep track of all the places on the world map that you have visited. This is a test application running on mock Api(json-server). This project code highlights and depends heavily on Context Api, React Query and different usecases of React Router Dom v6 like putting app state in url",
    image: "W_1.png",
    tags: ["React", "Leaflet", "Lazy-Loading", "SASS"],
    category: "React",
    github: "https://github.com/ajeyanadig/WorldWise",
    webapp: "https://worldwise-ajeya.netlify.app/",
  },
  {
    id: 3,
    title: "Forkify",
    date: "Oct 2023 - Nov 2023",
    description:
      "An online Cooking Recipe Web Application with over a million recipes to search from, upload custom ones, and bookmark them too. This project was developed using an MVC architecture pattern due to the sheer size of code by trying to re-create the optimisations of React in terms of updation and data handling",
    image: `/Forkify.png`,
    tags: ["HTML", "CSS", "JavaScript", "MVC Architecture", "CI-CD", "SASS"],
    category: "Vanilla",
    github: "https://github.com/ajeyanadig/Forkify-MVC",
    webapp: "https://forkify-ajeya.netlify.app/",
    // member: [
    //   {
    //     name: "Ajeya Nadig",
    //     img: "https://avatars.githubusercontent.com/u/64485885?v=4",
    //     linkedin: "https://www.linkedin.com/in/ajeyanadig/",
    //     github: "https://github.com/ajeyanadig/",
    //   },
    //   {
    //     name: "Contributor",
    //     img: "https://avatars.githubusercontent.com/",
    //     linkedin: "https://www.linkedin.com/in//",
    //     github: "https://github.com/,
    //   },
    // ],
  },

  {
    id: 4,
    title: "Popcorn",
    date: "April 2024",
    description:
      "A simple react app you can use to search bar to find TV shows and movies, their details and imdb rating, and give your own ratings to maintain a personal list of watched content. It fetches data from the IMDB API. Key features is searching a movie from the search bar, paginated results, cancelling data requests on continuous types(neat trick), and bookmarking",
    image: "/Popcorn.png",
    tags: ["React", "CSS", "Resuable Components", "SASS"],
    category: "React",
    github: "https://github.com/ajeyanadig/WorldWise",
    webapp: "https://worldwise-ajeya.netlify.app/",
  },
  {
    id: 5,
    title: "Bankist",
    date: "Sep 2023",
    description:
      "Bankist simulates a virtual banking experience. Like any other bank, this webapp  has the option to log in to the account and use different functionalities like checking balance, having a list of transactions with their dates matched to the current locality, transferring money, requesting a loan, deleting the account, and details of withdrawals, depositins and interests all in one go. Also has a timer to make the webapp secure, after which you have to log back in ",
    image: "/Bankist_WA.png",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Vanilla",
    github: "https://github.com/ajeyanadig/WorldWise",
    webapp: "https://worldwise-ajeya.netlify.app/",
  },
  {
    id: 6,
    title: "Bankist-Marketing",
    date: "Oct 2023",
    description:
      "A marketing website for the project Bankist. Implements smooth scrolling, modals, optimised loading times by saving time using thumbnails, blurring and downloading images when scolled into view and an overall aesthetic design. The magic lies in using the Intersction Observer API ",
    image: "/Bankist_M.png",
    tags: ["JavaScript", "HTML", "Optimisation", "CSS"],
    category: "Vanilla",
    github: "https://github.com/ajeyanadig/WorldWise",
    webapp: "https://worldwise-ajeya.netlify.app/",
  },
  {
    id: 7,
    title: "Mapty",
    date: "Oct 2023",
    description:
      "Developed a fun web application where the goal is to log the workouts(running or cycling) for the users in its desired location and set some specifications for his workout accordingly. This application is built using Advanced Javascript with Object Oriented Programming which uses Geolocation APIs , Browser APIs along with some External libraries.",
    image: "/Mapty.png",
    tags: ["JavaScript", "CSS", "Geolocation-APIs", "Leaflet"],
    category: "Vanilla",
    github: "https://github.com/ajeyanadig/WorldWise",
    webapp: "https://worldwise-ajeya.netlify.app/",
  },
];
export const EXPERIENCES = [
  {
    year: "2022",
    role: "Front End Developer",
    company: "Skipper.fit",
    description: `Developed and website for a client in the fitness industry skipper.fit using HTML5, CSS3 and vanilla JavaScript from scratch. Integrated designs for each page using Figma to create an aesthetic and attractive User Experience.`,
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
  },
  {
    year: "2021 - 2022",
    role: "Platform Technical Solutions Engineer",
    company: "Databricks",
    description: `Worked closely on cloud architecture and platform related issues with AWS, Azure and GCP support on escalations, including problems in System administration, Linux, Cloud, IAM, Clusters, VM, security, Apache Spark,etc. Performed data analysis, setup continuous monitoring by parsing the realtime logs predominantly using Python and Pyspark to perform all operations by highly leveraging Databricks' Deltalake and Delta tables`,
    technologies: ["AWS", "Python", "Apache Spark", "Azure"],
  },
];
export const CONTACT = {
  address: "Navi Mumbai, Maharashtra, India ",
  phoneNo: "+91 9113595620 ",
  email: "ajeyanadigw@gmail.com",
};
