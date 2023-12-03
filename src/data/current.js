
import project5 from "../assets/app.png"
import project6 from "../assets/larc.png"


const PROJECTS = [
    {
        id: 1,
        title: "TMA (Texas Marine Agency) (2020 December - Present)",
        functionalArea: "Marine Logistics and Operations",
        technologyUsed: "Node.js, AWS Lambda, PostgreSQL, PostGIS, ExtJS",
        description: "TMA (Texas Marine Agency) is a web application designed for TMA agents and customers. It facilitates planning for ship arrivals, tracking various operations, and monitoring locations in real-time. Users can listen to calls between agents, calculate the efficiency of different ports, generate various reports, and benefit from automated transcriptions for call recordings. Additionally, the application supports document text extraction.",
        image: project5, // You can replace 'project2' with the actual image source or leave it as is
        link: "https://stg-app2.texasmarineagency.info/"
    },
    {
        id: 2,
        title: "UE-NET  (2023 August - 2023 Present)",
        functionalArea: "Geospatial Simulation and Scenario Planning",
        technologyUsed: "Node.js, Reactjs, Reduxjs,Material-UI Socket.io, PostgreSQL, BigQuery,  Carto, Mapbox, Leaflet",
        description: "UE-NET Web App is a comprehensive land cover and tree modeling platform developed with Node.js, Express.js, and React.js, integrated with CARTO. The platform allows users to create and manage projects, each comprising up to three plans for current, future, and simulated scenarios. Users can import diverse datasets, including land cover, tree cover, tree stand, and Area of Interest (AOI). UE-NET supports the simulation of various scenarios using pre-defined or user-uploaded models, with customizable parameters and basemaps. The platform facilitates efficient data management through functions like drawing polygons and points, importing tables, and running models. Users can visualize and compare maps, export results as images and PDFs, and generate insightful reports",
        image: project6, // You can replace 'project2' with the actual image source or leave it as is
        link: "https://giplus.jp/"
    },
    {
        id: 3,
        title: "LarcFlood Web App  (2023 May - 2023 August)",
        functionalArea: "Climate Data Visualization & Geospatial Analysis and Mapping",
        technologyUsed: "Node.js, Reactjs, PostgreSQL, Carto.js, Deckgl",
        description: "I developed LaRC-Flood, a secure Node.js and React.js application with authentication, integrating CartoDB and Carto.js. This climate analysis tool visualizes current and future flood risks through XYZ Tiles, CARTO layers, and pop-up windows for user-friendly insights. The system includes watershed layers, predicting flood frequency changes, and supports layer customization for simultaneous viewing. Recent updates enhance layers with improved visualization, and a search feature allows users to find locations based on latitude and longitude, marked for convenience. LaRC-Flood is a concise, powerful tool for flood risk assessment, offering intuitive functionality and precise climate data.",
        image: project6, // You can replace 'project2' with the actual image source or leave it as is
        link: "https://larc-flood.wpw.jp/"
    },

    
   
];

export default PROJECTS;