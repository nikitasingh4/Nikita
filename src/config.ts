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
    description: "Data analyst passionate about finding insights that help businesses grow",
    image: identity.logo,
  },
  role: "business analyst | data analytics | excel · sql · python · tableau",
  description:
    "I'm a data analyst with a passion for finding insights that help businesses grow.\n\ncurrently:\n• Jr. Business Analyst @ Movidu Technology\n• Building data-driven solutions for 25+ partner companies\n• Specializing in Excel, SQL, Python, and Tableau\n",
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

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "about",
    description: "Data analyst with expertise in business analytics and data-driven solutions",
    image: identity.logo,
  },
  subtitle: "my story",
  about: {
    description: `
hi, i'm Nikita 👋

I'm a data analyst with a passion for finding insights that help businesses grow.
Currently based in Noida, I combine analytical thinking with business acumen to
drive meaningful results.

my journey:
• MBA in Business Analytics from GL Bajaj Institute (2025)
• BMS in Business & Finance from Gopal Narayan Singh University (2023)
• Strong foundation in data analysis, visualization, and business intelligence

what i do:
• Jr. Business Analyst at Movidu Technology (Jan 2025 - Present)
  - Automating MIS reports using Excel and Power BI for 25+ partner companies
  - Analyzing 10,000+ candidate assessment records, improving pass rates by 14%
  - Building dashboards that increased partner engagement by 12%

• Previously Analytics Intern at The Outlook (Sep - Dec 2024)
  - Cleaned 10,000+ e-commerce customer activity logs, reducing errors by 15%
  - Customer segmentation that boosted email click-through rates by 25%
  - Transaction analysis identifying peak sales patterns and seasonal trends

my approach to data:
I believe data tells stories that drive decisions. Whether it's analyzing
customer behavior, tracking KPIs, or building predictive models, I focus on
translating complex data into actionable business insights.

currently working in Noida.
open to conversations and opportunities in data analytics.`,
    image_l: {
      url: "/pic2.jpg",
      alt: "Left Picture",
    },
    image_m: {
      url: "/IMG_8828.JPG",
      // url: "/SU24 Maker Venture Photo 2.jpg",
      alt: "Middle Picture",
    },
    image_r: {
      url: "/IMG_3610.jpg",
      // url: "/SU24 Maker Venture Photo 2.jpg",
      alt: "Right Picture",
    },
  },
  timeline: {
    items: [
      {
        year: "jan 2025 - sep 2025",
        title: "jr. business analyst @ movidu technology",
        description:
          "collaborating with operations and analytics teams to prepare and automate weekly MIS reports using Excel and Power BI. Analyzing 10,000+ candidate assessment records from Movidu's AI hiring tool, boosting candidate pass rates by 14%. Building dashboards for 25+ academic institutions, increasing partner engagement by 12%.",
      },
      {
        year: "sep 2024 - dec 2024",
        title: "analytics intern @ the outlook",
        description:
          "cleaned and validated 10,000+ e-commerce customer activity logs in Excel, reducing reporting errors by 15%. Worked with CRM and marketing teams for customer segmentation, increasing click-through rates by 25%. Analyzed 12 months of transaction data using Pandas and Matplotlib to identify peak sales patterns.",
      },
      {
        year: "2023 - may 2025",
        title: "mba - business analytics",
        description:
          "pursuing MBA with major in Business Analytics from GL Bajaj Institute of Technology and Management, Greater Noida. Focusing on data-driven decision making, business intelligence, and analytical methodologies.",
      },
      {
        year: "2020 - jun 2023",
        title: "bms - business and finance",
        description:
          "bachelor of management studies with major in Business and Finance from Gopal Narayan Singh University, Sasaram. Built strong foundation in business fundamentals and financial analysis.",
      },
    ],
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "projects",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "data-driven projects solving real business problems.",
  projects: [
    {
      title: "Retail Sales Trends Insights",
      skills: "python · jupyter · pandas · numpy · matplotlib",
      description:
        "analyzed 53K+ retail transactions to identify customer behavior patterns and seasonal demand shifts. Discovered peak sales in May and found that women spent more on clothing during seasonal promotions. Used correlation analysis to confirm winter as the most profitable season, informing inventory planning.",
      image: "/datematch.png",
      year: "feb 2025 - mar 2025",
      url: "https://github.com/nikitasingh4",
    },
    {
      title: "Walmart Sales Data Analysis",
      skills: "sql · database management · business intelligence",
      description:
        "maintained a database of 1,000+ Walmart sales records across three branches. Analyzed sales trends using SQL, uncovering that Electronic Accessories were top-selling items and E-Wallets were the preferred payment method for 38% of customers. Identified a 20% revenue gap between branches.",
      image: "/project1.png",
      year: "jan 2025 - feb 2025",
      url: "https://github.com/nikitasingh4",
    },
    {
      title: "Tableau Dashboards",
      skills: "tableau · data visualization · kpi tracking",
      description:
        "created interactive dashboards including Kress Maintenance Prediction for predictive maintenance analytics, Netflix Data Analysis for content performance insights, and Airbnb Market Analysis for pricing and occupancy trends. Focused on actionable insights and intuitive visualization design.",
      image: "/project5.png",
      year: "jan 2025 - feb 2025",
      url: "https://github.com/nikitasingh4/Tableau-Project",
    },
    {
      title: "Bank Churn Predictor",
      skills: "python · scikit-learn · smote · feature engineering",
      description:
        "end-to-end churn prediction system with model ensemble and SMOTE for handling imbalanced data. Built comprehensive feature engineering pipeline to identify at-risk customers and predict bank customer churn rates with high accuracy.",
      image: "/project1.png",
      year: "2024",
      url: "https://github.com/nikitasingh4",
    },
    {
      title: "Hardware Company Sales Insights",
      skills: "sql · data analysis · business metrics",
      description:
        "analyzed hardware company sales data to uncover revenue trends, top-performing products, and regional sales patterns. Provided actionable insights for sales strategy optimization and inventory management.",
      image: "/honey.png",
      year: "2024",
      url: "https://github.com/nikitasingh4",
    },
    {
      title: "SQL Music Store Analysis",
      skills: "sql · query optimization · analytics",
      description:
        "comprehensive SQL analysis of music store database, demonstrating proficiency in complex queries, joins, aggregations, and window functions. Uncovered customer purchase patterns, popular genres, and revenue optimization opportunities.",
      image: "/project5.png",
      year: "2024",
      url: "https://github.com/nikitasingh4/SQL_Music_Store_Analysis-",
    },
  ],
};
