const navBar = {
  show: true,
};

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Magdalena",
  middleName: "",
  lastName: "Kortas",
  message: " Data Scientist | AI4Good | AI4Climate | CAP® Certified Data Scientist | Women in Machine Learning & Data Science Poland | Passionate about and specialised in building AI for Good solutions ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/m-kortas",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mkortas/",
    }
  ],
};

const about = {
  show: true,
  heading: "About me",
  imageLink: require("../assets/img/magda_c.jpg"),
  imageSize: 400,
  message:
    "I am a certified, ambitious and passionate Applied Data Science expert with​ wide professional experience in Data Science & Machine Learning gained in both the private and civic sector with a rich experience in the public and civil sector in the fields of civil rights and social action. I am also a Certified Analytics Professional (CAP), certification holder, a trusted, independent American verification of the critical technical expertise and related soft skills possessed by accomplished analytics and data science professionals. Currently, I am a Data Science expert working for a Canadian company where I develop an Artificial Intelligence solution to fight water pollution and floods for smart cities’ waste disposal infrastructure in Northern America. ", 
    resume: require("../editable-stuff/resume.pdf"),

};


const repos = {
  show: true,
  heading: "Open-source projects",
  gitHubUsername: "m-kortas", 
  reposLength: 0,
  specificRepos: ['Sound-based-bird-species-detection', 'detect-waste', 'AI-playground', 'anomaly-detection'],
};

const leadership = {
  show: true,
  heading: "Targeting with AI the most important challenges of the 21st century",
  message:
    "Artificial Intelligence (AI) is a disruptive paradigm that has greater potential to assess, predict, and mitigate the risk of climate change with efficient use of data, learning algorithms, and sensing devices. It performs a calculation, makes predictions and decisions to mitigate the impacts of climate change like higher temperatures, more extreme droughts, fire seasons, floods and more extreme.  I provide solutions in the field of AI-powered climate change counteraction and environmental protection. I have been working, among others, in challenges connected to floods, water pollution, CO2 emissions reduction in the travel and energy sector, environmental pollution and environmental awareness.",
  images: [
    { 
      img: require("../assets/img/climate.jpg"), 
      label: "Climate change", 
      paragraph: "Assess, predict, and mitigate the risk of climate change" 
    },
      { 
      img: require("../assets/img/floods.jpg"), 
      label: "Floods and water pollution", 
      paragraph: "Fight water pollution and floods by predicting sewer overflow events for smart cities’ waste disposal infrastructure in Northern America" 
    },
      { 
      img: require("../assets/img/energy.jpg"), 
      label: "CO2 emissions reduction", 
      paragraph: "Adoption of renewable energy sources in the Netherlands" 
    },
      { 
      img: require("../assets/img/plastic.jpg"), 
      label: "Environmental pollution", 
      paragraph: "Detect plastic waste in the environment in Europe" 
    },
      { 
      img: require("../assets/img/bird.jpg"), 
      label: "Environmental awareness", 
      paragraph: "Usage of AI, acoustics and ornithology to classify birds in the environment in Europe" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Machine Learning", value:  95},
    { name: "Deep Learning", value:  80},
    { name: "Big Data", value:  85},
    { name: "Predictive modelling", value:  95},
    { name: "Statistics", value: 80},
    { name: "Natural Language Processing", value:  80},
    { name: "Data Analysis", value:  95},
    { name: "Data Mining", value:  95},
    { name: "Data Visualisation", value:  95},
    { name: "R Programming", value:  95},
    { name: "Python Programming", value:  85},
    { name: "Structured Query Language", value:  85},
  ],
  softSkills: [
    { name: "Goal-Oriented", value:  100},
    { name: "Collaboration", value:  95}, 
    { name: "Business Needs Understanding", value:  95}, 
    { name: "Adaptability", value:  90},
    { name: "Problem Solving", value:  95}, 
    { name: "Clear Communication Skills", value:  90},
    { name: "Organization and Quality Assurance", value:  95},
    { name: "Creativity", value:  95},
  ],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I’m looking to collaborate on AI for Good projects (especially climate change counteraction). If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "magdalenekortas@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
      {
      role: 'Member -  Women+ in Climate Tech',
      companylogo: require('../assets/img/womeninclimate.png'),
      date: 'March 2022 – Present',
    },
      {
      role: 'Member -  International Society for Data Science and Analytics (ISDSA)',
      companylogo: require('../assets/img/ISDSA.png'),
      date: 'Oct 2021 – Present',
    },
    {
      role: 'Data Scientist - Carl Data Solutions',
      companylogo: require('../assets/img/carl.png'),
      date: 'Oct 2021 – Present',
    },
      {
      role: 'Member, Global Ambassador - WomenTech Network',
      companylogo: require('../assets/img/womentech.png'),
      date: 'Jun 2020 – Present',
    },

      {
      role: 'Member - Women in AI (WAI)',
      companylogo: require('../assets/img/WAI.jpg'),
      date: 'May 2020 – Present',
    },
      
    {
      role: 'Senior Data Scientist, Owner - Magdalena Kortas Data Solutions',
      companylogo: require('../assets/img/magda_c.jpg'),
      date: 'Jul 2019 – Present',
    },
      
    {
      role: 'Co-founder, Lead ML Engineer - Women in Machine Learning & Data Science (WiMLDS) Poland',
      companylogo: require('../assets/img/wimlds.png'),
      date: 'Jul 2018 – Present',
    },
            
  

    {
      role: 'Senior Data Scientist - IHS Market (S&P Global)',
      companylogo: require('../assets/img/ihs.png'),
      date: 'Mar 2021 – Sep 2021',
    },
      
       {
      role: 'Data Science Consultant - Neptune.ai',
      companylogo: require('../assets/img/neptune.png'),
      date: 'October 2020 – November 2020',
    },
          {
      role: 'Data Scientist - PredictX',
      companylogo: require('../assets/img/predictx.jpg'),
      date: 'Aug 2019 – Feb 2021',
    },
          {
      role: 'Lead ML Engineer - Omdena',
      companylogo: require('../assets/img/omdena.png'),
      date: 'Jan 2020 – Jan 2021',
    },
          {
      role: 'Data Scientist - Eindhoven University of Technology (TU/e)',
      companylogo: require('../assets/img/tue.png'),
      date: 'Sep 2020 – Oct 2020',
    },
    {
      role: 'Data Scientist - Nordea Bank',
      companylogo: require('../assets/img/nordea.png'),
      date: 'Apr 2018 – Jul 2019',
    },
  ]
}


export { navBar, mainBody, about, skills, leadership, getInTouch, experiences, repos };
