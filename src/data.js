import p1 from "./assets/scrap.png";
import p2 from "./assets/arbic.png";
import p3 from "./assets/dashboard_infographics.png";
import p4 from "./assets/fyp.png";
import p5 from "./assets/oman.png";
import p6 from "./assets/CS.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    {
        name: "Mobile App",
        id: "mobile-app",
    },
    {
        name: "Website",
        id: "website",
    },
];

export const projects = [
    {
        name: "ScrapHub - A digital platform for scrap buyers and sellers",
        image: p1,
        tags: ["dashboard", "website"],
        codeLink: "https://github.com/Rizwan0994/ScrapHub.git",
        // videoLink: "https://www.youtube.com/watch?v=8QZqX0ZxJZ8",
    },
    {
        name: "Arabic Corpus- Manage and analyze Arabic text",
        image: p2,
        tags: ["dashboard"],
        codeLink: "https://github.com/SoftwareConstructionAndDev/project-corpus-infinity0990.git",
    },
    {
        name: "Data-Visulization-Infogrphics",
        image: p3,
        tags: ["all"],
        codeLink: "https://github.com/Rizwan0994/Data-Visulization-Infogrphics.git",
    },
    {
        name: "Final Year Project- We Are Solving Global Problems",
        image: p4,
        tags: ["mobile-app", "dashboard"],
        codeLink: "https://github.com/Rizwan0994/ScrapHubApp.git",
    },
    {
        name: "Oman Security system - Manage Daily Security Operations",
        image: p5,
        tags: ["website", "dashboard"],
        codeLink: "https://github.com/Rizwan0994/OmanSecurity.git",
    },
    {
        name: "Client Server-JAVA-JAVAFX",
        image: p6,
        tags: ["all"],
        codeLink: "https://github.com/Rizwan0994/Client-Server-java-and-javaFX.git",
    },
];

export const achievements = [
    {
        id: 1,
        year: 25,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 2,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 20,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 20,
        description: "COMMUNITY<br />POSTS",
    },
];
