import project1 from "../assets/Screenshot (56).png";
import project2 from "../assets/Screenshot (57).png";
import project3 from "../assets/Screenshot (64).png";
import project4 from "../assets/Screenshot (63).png";
import project5 from "../assets/Screenshot (61).png"
import project6 from "../assets/Screenshot (62).png"

const PROJECTS = [
  
    {
    id: 1,
    title: "News Blog(MERN)",
    functionalArea: "Blog",
    technologyUsed: "NodeJS,ReactJS,ExpressJS,JWT,ReduxJS,MongoDB",
    description: "News Blog is Developed Using MERN STACK it has features of writing news blog with image upload feature and it has a user registration and login as well,every loggedIn user can comment and like on news",
    image: project5,
    link: "https://cms-blog-kalyan.herokuapp.com/"
},
{
    id: 2,
    title: "EatFit(MERN)",
    functionalArea: "Productivity",
    technologyUsed: "NodeJS,ReactJS,ExpressJS,JWT,Nodemailer,MongoDB,Bootstrap",
    description: "Eat Fit is a web application which keeps track of your calories consumed for every meal with time and date,It has features of account activation and password reset",
    image: project6,
    link: "https://eatfit-kalyan.herokuapp.com/"
},
   
    {
        id: 3,
        title: "E-Pharmacy(MERN)",
       
        functionalArea: "E-COM",
        technologyUsed: "Nodejs, ExpressJS, ES6 javascript,React,Mongo Atlas, Bootstrap",
        description: "E-pharamacy is a full stack web application which serves in medicine supply field,with payment integration and admin panel",
        image: project3,
        link: "https://e-meds.herokuapp.com/"
    },
    {
        id: 4,
        title: "TBS(NodeJS)",
       
        functionalArea: "Booking Systems",
        technologyUsed: "Nodejs, ExpressJS, ES6 javascript,Mongo Atlas",
        description: "Train Ticket Booking application were we can book tickets search trains between two stations,as there is no fron-end developed for this,I developed Backend part of this application only",
        image: project4,
        link: "https://github.com/attainu/Robin-Railway-Booking-System/tree/dev"
    },
    {
        id: 5,
        title: "Best Buy(Learning Project)",
        functionalArea: "E-COMMERCE",
        technologyUsed: "React JS, Styled Components React-Icons.",
        description: "Best Buy is a react application which has a functionality of e-commerce,I built this application to get familiar with react and its not live Project.",
        image: project1,
        link: "https://react-ecommerce-kalyan.netlify.app/"
    },
    {
        id: 6,
        title: "M-tube(Learning Project Done Under Guidance Of Instructor)",
       
        functionalArea: "Entertainment",
        technologyUsed: "React,Redux,Redux-Thunk,Google Youtube-API,Ant-D",
        description: "I tried to replicate the youtube as closer as possible by using Google's Youtube API's and react,redux.",
        image: project2,
        link: "https://my-tube-kalyan.netlify.app/"
    },
   
];

export default PROJECTS;