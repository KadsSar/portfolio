import { Code, BookOpen, Award, Users, Monitor, Terminal, Database, Cpu, Gamepad2, Layers } from 'lucide-react';

/* 
  User Data for Netflix-Themed Portfolio 
*/

export const userData = {
    name: "Sarisha Kadakia", // Updated name
    logline: "A CS major in Brock University building the future of spatial experiences through code and art.",
    heroImage: "/hero-bg.jpg", // We need to handle the uploaded image. I'll assume it's placed in public/
};

export const projects = [
    {
        id: 4,
        title: "Jurassic Park Interactive",
        desc: "An immersive 3D digital tour of Isla Nublar features an on-rails camera system, 'Bio-Scan' shaders, and interactive AR data panels for a VIP visitor experience.",
        image: "/assets/jurassic_thumbnail.png",
        modalImage: "/assets/jurassic_gate_modal.png",
        youtubeId: "Lun2iYYp_TE",
        videoPosition: "w-[250%] h-[250%] -top-[35%] -left-[75%] scale-100", // Custom position for Jurassic
        tags: ["R3F", "Three.js", "GSAP", "Tailwind"]
    },
    {
        id: 3,
        title: "LOGOS: The Semantic Platformer",
        desc: "A 2D puzzle platformer where players type words to modify the environment (spawn bridges, balloons) using a semantic lookup system and Matter.js physics.",
        image: "/assets/logos_thumbnail.png",
        videoPosition: "w-[250%] h-[250%] -top-[60%] -left-[75%]", // Reverted height to original 250%
        youtubeId: "lzK9URfHFKM",
        tags: ["Game Design", "Matter.js", "JavaScript", "Algorithms"]
    },
    {
        id: 2,
        title: "Museum AR/VR",
        desc: "Coming Soon: A revolutionary mixed reality experience redefining spatial interaction.",
        image: "/assets/virtual_museum_thumbnail.png",
        youtubeId: "3JTeDoyDd0Q",
        videoPosition: "w-[250%] h-[250%] -top-[25%] -left-[75%]",
        tags: ["Unity", "AR/VR", "C#"]
    },
    {
        id: 1,
        title: "Nutribudget",
        desc: "Price-aware nutrition planner using GroceryDB (nutrition + prices) with ML clustering, optimization, a Flask API, and a Next.js dashboard.",
        image: "/assets/nutribudget_thumbnail.png",
        tags: ["Next.js", "Flask", "ML", "Python"]
    }
];

export const skills = [
    { id: 1, name: "Unity & AR Foundation", rank: 1 },
    { id: 2, name: "C#, C++, C", rank: 2 },
    { id: 3, name: "JS, React, Three.js", rank: 3 },
    { id: 4, name: "Java, Python", rank: 4 },
    { id: 5, name: "AR/VR SDKs (ARKit, ARCore)", rank: 5 },
    { id: 6, name: "Git & GitHub", rank: 6 },
    { id: 7, name: "SQL, Postgres, MySQL", rank: 7 },
    { id: 8, name: "Linear Algebra & Physics", rank: 8 },
    { id: 9, name: "Spatial UX/UI", rank: 9 },
    { id: 10, name: "OS (Linux, Windows, macOS)", rank: 10 },
];

export const experience = [
    {
        id: 1,
        title: "IT Intern",
        company: "PIONEER Engineering",
        duration: "2021 - 2023",
        desc: "Assisted in network configurations, troubleshooting hardware/software issues, and maintaining IT infrastructure for the Mumbai office.",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
    },
    {
        id: 2,
        title: "Software Engineer",
        company: "Coming Soon",
        duration: "Future",
        desc: "Aspiring to build the next generation of spatial computing applications.",
        image: "https://images.unsplash.com/photo-1531297420494-856551521140?w=800&q=80"
    }
];

export const genres = [
    {
        id: "education",
        title: "Education",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
        details: [
            { title: "Brock University", subtitle: "BSc Computer Science (2024-2028)", desc: "Focusing on Spatial Computing and AI." },
            { title: "Lakshya Institute", subtitle: "High School (2020-2022)", desc: "Mumbai, India." }
        ]
    },
    {
        id: "toolkit",
        title: "My Toolkit",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        details: [
            { title: "Languages", subtitle: "Python, Java, C++, C, JS", desc: "Core spatial and logic programming." },
            { title: "Web & Cloud", subtitle: "React, Next.js, AWS, Cloudflare", desc: "Full stack development." },
            { title: "Tools", subtitle: "Figma, PowerBI, Wireshark, Git", desc: "Design and analysis." }
        ]
    },
    {
        id: "certifications",
        title: "Certifications",
        image: "https://images.unsplash.com/photo-1570616969692-5476b5fdd109?w=800&q=80",
        details: [
            { title: "Oracle Cloud", subtitle: "Foundations Associate", desc: "Certified Dec 2025." }
        ]
    },
    {
        id: "hackathons",
        title: "Leadership",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
        details: [
            { title: "Sheridan Datathon", subtitle: "Nov 2025", desc: "Upcoming competition." },
            { title: "Hackathon 2026", subtitle: "Jan 2026", desc: "Upcoming event." }
        ]
    }
];
