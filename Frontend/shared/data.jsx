// Shared portfolio data — used by all 3 variations
window.PORTFOLIO_DATA = {
  name: "TJ Swidorski",
  tagline: "Proactive, data-driven, and quietly relentless — turning numbers into decisions that move things forward.",
  // Portrait: drop your headshot JPG/PNG into Frontend/assets/ then set the path, e.g. "assets/headshot.jpg"
  portrait: null,
  hero: {
    wave: "Hi, I'm TJ.",
    headline: "I turn data into decisions",
    headlineEm: "that move the needle.",
  },
  shortBio: "Data Analyst (soon-to-be-grad) at Cornell, focused on predictive analytics in biotech, sports science, and business strategy.",
  location: "Ithaca, NY",
  status: "Graduating soon — open to new grad roles",
  roles: [
    "Data Science",
    "Data Analytics",
    "Business Analytics",
    "Revenue Management",
    "Supply Chain"
  ],
  links: {
    github: "https://github.com/TJSwidorski",
    linkedin: "https://www.linkedin.com/in/tj-swidorski/",
    email: "tjs322@cornell.edu",
    resume: "assets/TJ_Swidorski_Resume.pdf"
  },
  interests: [
    {
      title: "Predictive health & biotech",
      body: "Using data to forecast when individuals will get sick, injured, or contract disease — turning patterns into early warnings that change outcomes."
    },
    {
      title: "Applied AI / ML",
      body: "Most drawn to predictive settings: models that don't just describe what happened, but tell you what's likely next, and why it matters."
    },
    {
      title: "Data → business decisions",
      body: "Translating messy operational data into the small number of insights that actually unlock growth, efficiency, or new strategy."
    }
  ],
  experience: [
    {
      company: "4APP Sports LLC",
      role: "Data Analytics Intern",
      dates: "Jun 2025 – Aug 2025",
      blurb: "Built analytics workflows for a sports-tech platform, surfacing performance trends from raw athlete and game data."
    },
    {
      company: "Great Lakes Baseball Academy",
      role: "Sports Science Intern",
      dates: "Jun 2022 – Aug 2022",
      blurb: "Worked alongside coaches and trainers translating biomechanics + workload data into individualized player programming."
    },
    {
      company: "Great Lakes Baseball Academy",
      role: "Head Baseball Coach",
      dates: "Jun 2022 – Aug 2023",
      blurb: "Led practices, ran development plans, and mentored youth players — the leadership reps that still shape how I work on teams today."
    }
  ],
  projects: [
    {
      name: "Stroke Prediction Dashboard",
      blurb: "An interactive dashboard that predicts stroke risk from patient health indicators — built to make ML model output legible to non-technical audiences.",
      tags: ["Python", "ML", "Dashboard", "Healthcare"],
      // url: link directly to your GitHub repo or your live Streamlit app URL
      // Streamlit example: "https://tj-stroke-prediction.streamlit.app"
      // GitHub repo example: "https://github.com/TJSwidorski/stroke-prediction"
      url: "https://github.com/TJSwidorski",
      // image: drop a screenshot into Frontend/assets/ then set path, e.g. "assets/stroke-dashboard.png"
      image: null,
      placeholder: "stroke risk dashboard\nscreenshot"
    },
    {
      name: "Axiom Sports",
      blurb: "A sports analytics venture combining athlete data, scouting metrics, and predictive modeling to inform recruiting and player development decisions.",
      tags: ["Analytics", "Sports", "Product"],
      // url: link directly to your GitHub repo or live site
      url: "https://github.com/TJSwidorski",
      // image: drop a screenshot into Frontend/assets/ then set path, e.g. "assets/axiom-sports.png"
      image: null,
      placeholder: "axiom sports\nproduct shot"
    }
  ],
  certifications: [
    { issuer: "Anthropic", name: "Claude Code 101" },
    { issuer: "Anthropic", name: "Claude Code in Action" },
    { issuer: "Anthropic", name: "Introduction to Subagents" },
    { issuer: "Anthropic", name: "Introduction to Agent Skills" },
    { issuer: "LinkedIn Learning", name: "Excel — Managing and Analyzing Data" },
    { issuer: "LinkedIn Learning", name: "Power BI — Essential Training" }
  ],
  education: [
    {
      school: "Cornell University",
      degree: "B.S., graduating soon",
      detail: "Varsity Baseball — Big Red"
    }
  ],
  skills: {
    "Languages & tools": ["Python", "SQL", "R", "Excel"],
    "Analytics & BI": ["Power BI", "Tableau", "Pandas", "NumPy"],
    "ML / Modeling": ["scikit-learn", "Predictive modeling", "Statistical analysis"],
    "Other": ["Git", "Jupyter", "Claude Code"]
  },
  baseball: {
    headline: "Cornell Varsity Baseball — Big Red",
    body: "Four years on the diamond shaped how I work off it: show up early, do the unglamorous reps, communicate honestly with teammates, and trust the process when results lag the work. The same discipline I brought to film study and pitch sequencing now goes into model building and stakeholder conversations.",
    // photos: add src paths once you drop images into Frontend/assets/
    // e.g. { caption: "game day", src: "assets/baseball-game.jpg" }
    photos: [
      { caption: "game day", src: null },
      { caption: "team huddle", src: null },
      { caption: "practice reps", src: null }
    ]
  }
};
