import { ArrowSquareOut } from "@phosphor-icons/react";

export const projectlist = [
  {
    id: 1,
    image: "azure.webp",
    project_title: "Azure Data Analytics Platform Implementation",
    description:
      "Designed and implemented a scalable data analytics platform on Microsoft Azure, leveraging services like Azure Data Factory, Databricks, and Synapse Analytics. Established a data lakehouse architecture using Delta Lake to provide a unified data storage and processing solution.",
    tools: [
      "Microsoft Azure",
      "Data Factory",
      "Databricks",
      "Synapse Analytics",
    ],
    links: [],
  },
  {
    id: 2,
    image: "warehouse.webp",
    project_title: "Enterprise Data Warehouse Development",
    description:
      "Built and maintained a comprehensive data warehouse, enabling advanced analytics and supporting strategic decision-making",
    tools: ["Data warehousing", "ETL Processes", "Business Intelligence"],
    links: [],
  },
  {
    id: 3,
    image: "",
    project_title: "Mission-Critical Database Migration",
    description:
      "Led the migration of a mission-critical database from SQL Server 2008 to 2019, ensuring zero downtime and enhanced performance",
    tools: ["SQL Server"],
    links: [],
  },
  {
    id: 4,
    image: "",
    project_title: "Enterprise Database Design and Implementation",
    description:
      "Designed and implemented a high-performance Oracle Database 19c system for a large-scale e-commerce platform, boosting data retrieval speed by 40%",
    tools: ["Oracle Database"],
    links: [],
  },
  {
    id: 5,
    image: "",
    project_title: "Cross-Platform Database Replication",
    description:
      "Implemented real-time data replication between SQL Server and Oracle databases, ensuring consistency across all applications",
    tools: ["SQL Server", "Oracle"],
    links: [],
  },
  {
    id: 6,
    image: "",
    project_title: "Automated Backup and Recovery System",
    description:
      "Developed an automated backup and recovery system using Tivoli and RMAN, reducing manual effort and enhancing data integrity",
    tools: ["Tivoli", "RMAN", "Riverpod", "FireBase"],
    links: [],
  },
  {
    id: 7,
    image: "",
    project_title: "Mineral Commodity Price Forecasting",
    description:
      "Developed a statistical model to forecast prices of key mineral commodities using time series analysis and market trend data and provided actionable insights by predicting price fluctuations and assessing market risks",
    tools: [],
    links: [],
  },
  {
    id: 8,
    image: "",
    project_title: "U.S. DOT Air Travel Analysis (2015) | Power BI",
    description:
      "Analyzed over 5 million commercial airline flights in 2015, visualizing flight data including airline names, flight numbers, airports, distances, and departure/arrival times using Power BI. Data provided by Quantum Analytics NG",
    tools: [],
    links: [],
  },
  {
    id: 9,
    image: "",
    project_title: "Global COVID-19 Analysis | Tableau",
    description:
      "Utilized WHO data to visualize global COVID-19 trends with Tableau dashboards, providing insights into infection rates, recoveries, and fatalities across different regions",
    tools: [],
    links: [
      {
        icon: <ArrowSquareOut size={24} />,
        link: "https://public.tableau.com/views/GLOBALCOVIDDATASET/Deathbycountries?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      },
    ],
  },
  {
    id: 10,
    image: "",
    project_title: "Stock Price Analysis (2015-2021) | Tableau",
    description:
      "Analyzed daily stock prices of Apple, Amazon, Netflix, Microsoft, Google, Facebook, Tesla, Walmart, Uber, and Zoom from 2015 to 2021. Visualized trends and trading volumes using Tableau",
    tools: [],
    links: [
      {
        icon: <ArrowSquareOut size={24} />,
        link: "https://public.tableau.com/app/profile/idowu.oluwakolamide/viz/HISTORICALSTOCKDATASET/Dashboard4",
      },
    ],
  },
];
