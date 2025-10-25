import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Nikita Singh",
  logo: "/pfp2.jpg",
  email: "rajputnikitasingh43@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "about",
    url: "/about",
  },
  {
    title: "projects",
    url: "/projects",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/nikitasingh4",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/nikitasingh4",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Email",
    url: "mailto:rajputnikitasingh43@gmail.com",
    icon: "mdi:email",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Nikita Singh",
    description:
      "Business Analyst passionate about turning data into decisions using SQL, Excel, Power BI, and Tableau.",
    image: identity.logo,
  },
  role: "Business Analyst | Excel · SQL · Power BI · Tableau",
  description:
    "I'm a data-driven Business Analyst with experience in analytics, reporting, and visualization.\n\nworked on:\n• Preparing and automating MIS dashboards in Excel & Power BI @ Movidu Technology\n• Cleaning, validating, and analyzing 10K+ data records @ Outlook Publishing\n• Building SQL & Tableau projects – Music Store Analysis, Case Study Portfolio, and Airbnb Market Insights\n",
  socialLinks: socialLinks,
  links: [
    {
      title: "about",
      url: "/about",
    },
    {
      title: "projects",
      url: "/projects",
    },
  ],
};

// About (/About)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "about",
    description:
      "Business Analyst with expertise in SQL, Excel, and data visualization using Tableau and Power BI.",
    image: identity.logo,
  },
  subtitle: "my story",
  about: {
    description: `
hi, i'm Nikita 
I work as a Business Analyst in Delhi-NCR. I enjoy working with data, finding patterns, and using them to help businesses improve their performance. I like solving problems, learning new things, and turning information into clear and useful insights.

my journey:
• Completed MBA in Business Analytics from GL Bajaj Institute (2025)
• Completed BMS in Business & Finance from Gopal Narayan Singh University (2023)
• Skilled in SQL, Excel, Power BI, and Tableau, with a passion for transforming data  into actionable insights

what i do:
• Jr. Business Analyst at Movidu Technology (Jan 2025 – Sep 2025)
  - Prepared and automated weekly MIS dashboards in Excel and Power BI
  - Analyzed candidate assessment records from Movidu’s AI hiring tool, improving test quality and pass rates
  - Created dashboards for 25+ academic institutions, increasing data visibility and engagement

• Analytics Intern at Outlook Publishing (Sep 2024 – Dec 2024)
  - Cleaned and validated 10,000+ subscriber activity records in Excel, improving accuracy by 15%
  - Segmented readers based on engagement to support personalized campaigns, increasing click-through by 25%
  - Wrote SQL queries to analyze churn and engagement, providing actionable insights to marketing teams

my approach to data:
I believe every dataset has a story to tell. I focus on uncovering patterns and trends that inform better business decisions.
From tracking KPIs to building dashboards, I aim to bridge the gap between data and strategy.

open to opportunities in business analytics and data-driven problem solving.`,
    image_l: {
      url: "/pic2.jpg",
      alt: "Left Picture",
    },
    image_m: {
      url: "/IMG_8828.JPG",
      alt: "Middle Picture",
    },
    image_r: {
      url: "/IMG_3610.jpg",
      alt: "Right Picture",
    },
  },
  timeline: {
    items: [
      {
        year: "jan 2025 - sep 2025",
        title: "jr. business analyst @ movidu technology",
        description:
          "collaborated with operations and analytics teams to automate weekly MIS dashboards in Excel and Power BI. analyzed 10,000+ candidate records to identify patterns improving assessment quality. created dashboards for 25+ institutions to visualize placement and performance metrics.",
      },
      {
        year: "sep 2024 - dec 2024",
        title: "analytics intern @ outlook publishing",
        description:
          "cleaned and validated 10,000+ subscriber records to improve reporting accuracy by 15%. built SQL-based reports on churn and engagement. collaborated with CRM and marketing teams to segment customers and boost click-through rates by 25%.",
      },
      {
        year: "2023 - may 2025",
        title: "mba - business analytics",
        description:
          "pursuing MBA in Business Analytics from GL Bajaj Institute of Technology and Management, Greater Noida. focusing on data-driven decision-making and business intelligence.",
      },
      {
        year: "2020 - jun 2023",
        title: "bms - business and finance",
        description:
          "bachelor of management studies with major in Business and Finance from Gopal Narayan Singh University, Sasaram. gained foundational knowledge in management, finance, and analytics.",
      },
    ],
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "projects",
    description:
      "A collection of analytics and business intelligence projects.",
    image: identity.logo,
  },
  subtitle: "data-driven projects turning insights into action.",
  projects: [
    {
      title: "SQL Music Store Analysis",
      skills: "sql · query optimization · analytics",
      description:
        "analyzed 11K+ music store records to identify top-performing artists, customers, and genres. discovered that Rock and Pop contributed 45%+ of total revenue, with the USA as the top market. built dashboards visualizing customer behavior and country-wise performance.",
      image: "/project5.png",
      year: "feb 2025 - mar 2025",
      url: "https://github.com/nikitasingh4/SQL_Music_Store_Analysis-",
    },
    {
      title: "SQL Case Studies Portfolio",
      skills: "sql · case analysis · business metrics",
      description:
        "solved 15+ domain-diverse SQL case studies (finance, healthcare, retail) involving joins, CTEs, and subqueries. calculated key metrics like revenue growth, churn rate, and retention, and published reproducible SQL scripts on GitHub.",
      image: "/project1.png",
      year: "apr 2025 - may 2025",
      url: "https://github.com/nikitasingh4/SQL-Case-Study",
    },
    {
      title: "Tableau Dashboards",
      skills: "tableau · data visualization · kpi tracking",
      description:
        "developed interactive dashboards such as Kress Maintenance Prediction, Netflix Data Analysis, and Airbnb Market Insights. focused on user-centric design and delivering actionable business insights.",
      image: "/project5.png",
      year: "jan 2025 - feb 2025",
      url: "https://public.tableau.com/app/profile/nikita.singh6825/vizzes",
    },
    {
      title: "Retail Sales Trends Analysis",
      skills: "python · pandas · matplotlib",
      description:
        "analyzed 53K+ retail transactions to uncover customer behavior and seasonal sales trends. identified top-selling categories and peak demand periods to support strategic inventory planning.",
      image: "/datematch.png",
      year: "2025",
      url: "https://github.com/nikitasingh4",
    },
  ],
};
