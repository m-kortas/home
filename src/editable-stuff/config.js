const navBar = {
  show: true,
};

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Magdalena",
  middleName: "",
  lastName: "Kortas",
  message: " Data Scientist | AI4Good | AI4Climate | CAP® Certified Data Scientist | Women in Machine Learning & Data Science Poland | Passionate about and specialised in building AI for Good solutions. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/m-kortas",
    },
    {
      image: "fa-linkedin",
      url: "",
    }
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/magda.jpg"),
  imageSize: 200,
  message:
    "I am an ambitious, internationally recognised and certified Data Science expert with​ 4 years of professional experience in Data Science & Machine Learning gained in both the private and civic sector, working on international projects in the fields of Finance, Energy, Health, Circular Economy, Infrastructure, Travel, Transport and Education. Passionate about and specialised in building AI for Good solutions. An active supporter and promoter of women and gender minorities in Data Science and Machine Learning, lead and participated in many international AI4Good projects.", 
};


const repos = {
  show: true,
  heading: "Some of my projects",
  gitHubUsername: "m-kortas", 
  reposLength: 0,
  specificRepos: ['Sound-based-bird-species-detection', 'detect-waste', 'AI-playground', 'anomaly-detection'],
};

const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/magda.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/magda.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I’m looking to collaborate on AI for Good projects (especially climate change counteraction)! If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "magdalenekortas@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Data Scientist - Carl Data Solutions',
      companylogo: require('../assets/img/carl.jpg'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Data Scientist - IHS Market (S&P)',
      companylogo: require('../assets/img/ihs.jpg'),
      date: 'May 2017 – May 2018',
    },
    {
      role: 'Data Scientist - Magdalena Kortas Data Solutions',
      companylogo: require('../assets/img/magda_c.jpg'),
      date: 'May 2017 – May 2018',
    },
    {
      role: 'Data Scientist - PredictX',
      companylogo: require('../assets/img/predictx.jpg'),
      date: 'May 2017 – May 2018',
    },
    {
      role: 'Data Scientist - Nordea',
      companylogo: require('../assets/img/nordea.jpg'),
      date: 'May 2017 – May 2018',
    },
  ]
}


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
