import { Code, BookOpen, Award, Users, Monitor, Terminal, Database, Cpu, Gamepad2, Layers } from 'lucide-react';

/* 
  User Data for Netflix-Themed Portfolio 
*/

export const userData = {
    name: "Sarisha Kadakia", // Updated name
    logline: "Aspiring Software Engineer | CS Major @Brock University | Passionate about Full-Stack Development & System Architecture | Exploring the future of interaction through 3D graphics and spatial programming",
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
        id: 1,
        title: "Nutribudget",
        desc: "Price-aware nutrition planner using GroceryDB (nutrition + prices) with ML clustering, optimization, a Flask API, and a Next.js dashboard.",
        image: "/assets/nutribudget_thumbnail.png",
        videoPosition: "w-[135%] h-[135%] -top-[20%] -left-[17%]",
        youtubeId: "09PROtSZ6is",
        link: "https://nutribudget-web.vercel.app/",
        tags: ["Next.js", "Flask", "ML", "Python"]
    },
    {
        id: 2,
        title: "Museum AR/VR",
        desc: "Coming Soon: A revolutionary mixed reality experience redefining spatial interaction.",
        image: "/assets/virtual_museum_thumbnail.png",
        youtubeId: "3JTeDoyDd0Q",
        videoPosition: "w-[250%] h-[250%] -top-[25%] -left-[75%]",
        tags: ["Unity", "AR/VR", "C#"]
    }
];

export const skills = [
    { id: 1, name: "Unity & AR Foundation", rank: 1, image: "/assets/unity_thumbnail.png" },
    { id: 2, name: "C#, C++, C", rank: 2, image: "/assets/c_cpp_thumbnail.png" },
    { id: 3, name: "JS, React, Three.js", rank: 3, image: "/assets/js_react_threejs_thumbnail.png" },
    { id: 4, name: "Java, Python", rank: 4, image: "/assets/java_python_thumbnail.png" },
    { id: 5, name: "AR/VR SDKs (ARKit, ARCore)", rank: 5, image: "/assets/ar_sdk_thumbnail.png" },
    { id: 6, name: "Git & GitHub", rank: 6, image: "/assets/git_github_thumbnail.png" },
    { id: 7, name: "SQL, Postgres, MySQL", rank: 7, image: "/assets/sql_postgres_mysql_thumbnail.png" },
    { id: 8, name: "Linear Algebra & Physics", rank: 8, image: "/assets/linear_algebra_physics_thumbnail.png" },
    { id: 9, name: "Spatial UX/UI", rank: 9, image: "/assets/spatial_ux_ui_thumbnail.png" },
    { id: 10, name: "OS (Linux, Windows, macOS)", rank: 10, image: "/assets/os_thumbnail.png" },
];

export const experience = [
    {
        id: 1,
        title: "IT Intern",
        company: "PIONEER Engineering",
        duration: "2021 - 2023",
        desc: "Assisted in network configurations, troubleshooting hardware/software issues, and maintaining IT infrastructure for the Mumbai office.",
        image: "/assets/it_intern_thumbnail.png"
    },
    {
        id: 2,
        title: "Software Engineer",
        company: "Coming Soon",
        duration: "Future",
        desc: "Aspiring to build the next generation of spatial computing applications.",
        image: "/assets/software_engineer_thumbnail.png"
    }
];

export const genres = [
    {
        id: "education",
        title: "Education",
        desc: "Currently pursuing a B.Sc in Computer Science at Brock University. I've been exploring this field since high school and expect to graduate in 2028.",
        image: "/assets/education_thumbnail.png",
        youtubeId: "_pfE4FCAYZY",
        details: [
            { title: "Brock University", subtitle: "BSc Computer Science (2024-2028)", desc: "Bachelor's in Computer Science (2024-2028)" },
            { title: "Lakshya Institute", subtitle: "High School (2020-2022)", desc: "Excelled in PCM fields and pursued engineering (2020-2022)" },
            { title: "Pawar Public School, Mumbai", subtitle: "High School", desc: "High School" }
        ]
    },
    {
        id: "toolkit",
        title: "My Toolkit",
        image: "/assets/toolkit_thumbnail_v2.png",
        youtubeId: "HAceoquch1c",
        videoPosition: "w-[250%] h-[250%] -top-[60%] -left-[75%]",
        desc: "Equipped to build and deploy scalable applications from scratch, leveraging the JavaScript and Python ecosystems for robust architecture, and tools like Docker and Vercel for efficient, modern deployment.",
        details: [
            { title: "Languages and core", subtitle: "Python, Java, C++, C, JS", desc: "Python, Java, C++, C, JavaScript, HTML5, CSS3, R" },
            { title: "Cloud & Infrastructure", subtitle: "AWS, Docker, Vercel, Linux", desc: "AWS (Amazon Web Services), Docker, Vercel, Cloudflare, Linux, Git, GitHub" },
            { title: "Web", subtitle: "React, Next.js, AWS, Cloudflare", desc: "Full stack development," },
            { title: "Tools", subtitle: "Figma, PowerBI, Wireshark, Git", desc: "Git, GitHub, VS Code, Linux, Postman, Scikit-learn" },
            { title: "Databases", subtitle: "PostgreSQL, MongoDB, MySQL", desc: "PostgreSQL, MongoDB, MySQL, Postman, VS Code (Visual Studio Code)" }
        ]
    },
    {
        id: "contact",
        title: "Contact Me",
        image: "/assets/contact_me_thumbnail.png",
        imgClassName: "object-fill",
        youtubeId: "t36N2gwixrc",
        videoPosition: "w-[250%] h-[250%] -top-[40%] -left-[75%]",
        details: [
            { title: "Email", subtitle: "sarisha.kadakia@example.com", desc: "Let's connect!" },
            { title: "LinkedIn", subtitle: "Sarisha Kadakia", desc: "View my professional profile." }
        ]
    },
    {
        id: "certifications",
        title: "Certifications",
        image: "/assets/certifications_thumbnail.png",
        youtubeId: "9H358fsshRM",
        details: [
            { title: "Oracle Cloud", subtitle: "Foundations Associate", desc: "Certified Dec 2025." }
        ]
    },
    {
        id: "hackathons",
        title: "Leadership",
        image: "/assets/leadership_thumbnail.png",
        imgClassName: "object-[40%_center]",
        youtubeId: "R2qu_j6GAG8",
        videoEnd: 15,
        videoPosition: "w-[250%] h-[250%] -top-[15%] -left-[45%]",
        details: [
            { title: "Sheridan Datathon", subtitle: "Nov 2025", desc: "Upcoming competition." },
            { title: "Hackathon 2026", subtitle: "Jan 2026", desc: "Upcoming event." }
        ]
    }
];
