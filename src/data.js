import { Code, BookOpen, Award, Users, Monitor, Terminal, Database, Cpu, Gamepad2, Layers } from 'lucide-react';

/* 
  User Data for Netflix-Themed Portfolio 
*/

const BASE_URL = import.meta.env.BASE_URL;

export const userData = {
    name: "Sarisha Kadakia", // Updated name
    logline: "Aspiring Software Engineer | CS Major @Brock University | Passionate about Full-Stack Development & System Architecture | Exploring the future of interaction through 3D graphics and spatial programming",
    heroImage: `${BASE_URL}hero-bg.png`, // We need to handle the uploaded image. I'll assume it's placed in public/
};

export const projects = [
    {
        id: 4,
        title: "Jurassic Park Interactive",
        desc: "An immersive 3D digital tour of Isla Nublar features an on-rails camera system, 'Bio-Scan' shaders, and interactive AR data panels for a VIP visitor experience.",
        image: `${BASE_URL}assets/jurassic_thumbnail.png`,
        modalImage: `${BASE_URL}assets/jurassic_gate_modal.png`,
        youtubeId: "Lun2iYYp_TE",
        videoPosition: "w-[250%] h-[250%] -top-[35%] -left-[75%] scale-100", // Custom position for Jurassic
        tags: ["R3F", "Three.js", "GSAP", "Tailwind"]
    },
    {
        id: 1,
        title: "Nutribudget",
        desc: "Price-aware nutrition planner using GroceryDB (nutrition + prices) with ML clustering, optimization, a Flask API, and a Next.js dashboard.",
        image: `${BASE_URL}assets/nutribudget_thumbnail.png`,
        videoPosition: "w-[135%] h-[135%] -top-[20%] -left-[17%]",
        youtubeId: "09PROtSZ6is",
        link: "https://nutribudget-web.vercel.app/",
        tags: ["Next.js", "Flask", "ML", "Python"],
        codeSnippet: `🥗 NutriBudget

Smart grocery planning that balances nutrition and budget
Making healthy eating affordable for everyone. NutriBudget helps you get the most nutrition for your money by analyzing real grocery data and creating optimized shopping plans.

👉 nutribudget-web.vercel.app

No installation needed - just visit the link and start planning your budget-friendly meals!

What is NutriBudget?

We built NutriBudget after realizing how hard it is to eat healthy on a tight budget. The app takes your budget, dietary preferences, and health goals, then uses machine learning to find the best combination of groceries for you.

The result? A shopping list that's nutritious, affordable, and personalized to your needs.

✨ Features

🎯 Smart Planning

Set your budget and get a complete shopping basket
Choose your diet: Vegetarian, Non-Vegetarian, or Vegan
Pick a health goal: Balanced, High Protein, or Low Sugar
🤖 AI-Powered

Smart Chef: Get personalized recipes based on your basket (powered by Google Gemini AI)
Machine learning scores every product for health and value
Intelligent optimization finds the best products for your needs
🗺️ Local Shopper

Find nearby stores that carry your items
Direct navigation to your local grocery stores
Built-in map integration
📊 Insights

See exactly how much nutrition you're getting
Compare against recommended daily values
Track how much you're saving vs typical shopping
Understand the social impact (SDG goals)
💾 Export & Share

Download your shopping list as a text or PDF file
Share with family members
Save for weekly planning
🛠️ Tech Stack

Frontend:

Next.js 14 with React
TypeScript for type safety
Tailwind CSS for styling
Framer Motion for smooth animations
Backend:

Flask (Python) REST API
Pandas for data processing
Scikit-learn for machine learning
Google Gemini AI for recipe generation
Deployment:

Frontend: Vercel
Backend: Render
Continuous deployment from GitHub
Data:

4,900+ Canadian grocery products
Real nutrition facts from Health Canada & USDA
Price data from major grocery chains
🏃 Running Locally

Want to run NutriBudget on your own machine? Here's how:

Prerequisites

Python 3.11+
Node.js 18+
Git
Backend Setup

# Navigate to backend folder
cd api

# Install Python dependencies
pip install -r requirements.txt

# Create environment file
echo "GEMINI_API_KEY=your_key_here" > .env

# Start the server
python app.py
Backend runs on http://localhost:5000

Frontend Setup

# Navigate to frontend folder
cd web

# Install dependencies
npm install

# Create environment file
echo "NEXT_PUBLIC_API_URL=http://localhost:5000" > .env.local

# Start the dev server
npm run dev
Frontend runs on http://localhost:3000

🎯 How It Works

1. Input Your Details

Tell us your budget, household size, diet type, and health goals.

2. Machine Learning Analysis

Our system uses three trained ML models working together:

🤖 Product Quality Classifier (Random Forest)

Analyzes nutritional profile to classify products as High/Medium/Low quality
Trained on 4,900 products
Considers: protein, fiber, calories vs. sugar, fat, sodium
📈 Value Predictor (Random Forest Regression)

Predicts nutritional value scores based on ingredients
Identifies products that offer exceptional nutritional value
Trained with cross-validation for accuracy
💰 Price Fairness Model (Linear Regression)

Predicts fair price based on nutritional content
Flags underpriced items as "best deals"
Helps find hidden gems in the grocery store
3. Intelligent Selection

The ML-powered optimizer picks the best combination of products that:

Fits your budget perfectly
Matches your dietary preferences
Achieves your health goals
Maximizes variety using cluster-based diversity
Balances nutrition, cost, and quality
4. Get Your Plan

Receive a complete shopping list with:

Exact products and quantities
Nutritional breakdown
Store locations
AI-generated recipes (powered by Google Gemini)
Estimated savings
📱 Screenshots

The app features a clean, modern interface with:

Intuitive budget input form
Real-time nutrition tracking
Beautiful data visualizations
Interactive recipe cards
Store locator maps
🌍 Impact

Contributing to UN Sustainable Development Goals

SDG 2: Zero Hunger

Making nutritious food accessible to budget-constrained families
Reducing food waste through smart planning
Helping people maximize their grocery budgets
SDG 3: Good Health and Well-being

Promoting healthy eating habits
Providing accurate nutritional information
Enabling informed food choices
🧠 Machine Learning Details

Models & Architecture

NutriBudget uses an ensemble of three ML models to intelligently select products:

Model	Algorithm	Purpose	Key Metrics
Quality Classifier	Random Forest (100 trees)	Classify product healthiness (High/Medium/Low)	Weighted F1: 0.38
Value Predictor	Random Forest Regression	Predict nutritional value scores	R²: 0.17
Price Fairness	Linear Regression	Estimate fair price to identify deals	R²: 0.32
How Models Work Together

Quality Classifier scores each product's health quality based on nutritional profile
Value Predictor estimates true nutritional value beyond simple metrics
Price Fairness identifies underpriced products (where predicted price > actual price)
Combined ML Score = 30% quality + 40% value + 30% deal bonus
Variety Optimizer uses cluster labels to ensure diversity (max 35% per cluster)
Training Data

Dataset Size: 4,900 Canadian grocery products
Features: 7 nutritional metrics (calories, protein, carbs, fat, sugar, fiber) + price
Training Split: 80% train, 20% test (stratified)
Pre-processing: StandardScaler normalization, missing value imputation
Clusters: K-Means segmentation (Staples, Veg/Wholefoods, Processed/Snacks, High Energy)
Feature Engineering

The models use these engineered features:

Normalized nutritional values (scaled to 0-1 range)
Price per 100g standardized across products
Protein-to-price ratio for high-protein goals
Sugar penalty factor for low-sugar optimization
Model Training

To retrain models with updated data:

cd api
python3 train_models.py
This will:

Load the latest foods_scored.csv dataset
Train all three models with hyperparameter optimization
Save models to models/ directory
Generate performance metrics in model_metrics.json
Models are automatically loaded when the API starts. Fallback to greedy algorithm if models unavailable.

🚧 Roadmap

What's next for NutriBudget:

 Meal prep guides and cooking instructions
 Weekly meal planning with recurring orders
 Allergen tracking and warnings
 Price history and trend analysis
 Multi-store comparison
 User accounts and saved preferences
 Mobile app (iOS & Android)
 Integration with online grocery delivery
🤝 Contributing

We'd love your help making NutriBudget better! Here's how:

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Make your changes
Test thoroughly
Commit (git commit -m 'Add amazing feature')
Push (git push origin feature/amazing-feature)
Open a Pull Request
Good first issues:

Adding more dietary restrictions (gluten-free, dairy-free, etc.)
Improving the ML model accuracy
Adding support for different countries/currencies
Writing tests
Improving documentation`
    },
    {
        id: 5,
        title: "NeuroBank Guardian",
        desc: "A next-generation, AI-powered banking assistant that transforms traditional financial interfaces into an intelligent, secure, and voice-activated experience.",
        image: `${BASE_URL}assets/neurobank.png`,
        youtubeId: "5Ilxdz0vWSA",
        videoEnd: 21, // 24s duration - 3s = 21s
        videoPosition: "w-[125%] h-[125%] -top-[12%] -left-[12%]", // 125% zoom as requested
        link: "https://frontend-1093567910779.us-central1.run.app",
        tags: ["Next.js", "FastAPI", "GenAI", "RAG"],
        codeSnippet: `NeuroBank Guardian

Status License Tech

The Future of Banking is Conversational.

NeuroBank Guardian is a next-generation, AI-powered banking assistant that transforms traditional financial interfaces into an intelligent, secure, and voice-activated experience. Powered by Local LLMs, Real-Time Avatars, and Vector-Based RAG, it allows users to manage their finances through natural conversation while keeping data 100% local and private.

🚀 Key Features

🤖 Real-Time AI Avatar: A lip-synced, emotionally responsive avatar that serves as your personal financial concierge.
🗣️ Voice-Activated Banking: Execute transactions, pay bills, and query accounts using natural voice commands (powered by Azure Speech SDK).
🔐 Biometric "YES AI" Security: High-value transactions require secure voice biometric confirmation.
🧠 RAG-Powered Intelligence: Instantly search thousands of transactions using semantic understanding (e.g., "How much did I spend on coffee last month?").
🌐 Bilingual Support: Native fluency in English and French, perfect for Canadian markets.
🛡️ 100% Privacy: Architecure designed for local data processing with zero unauthorized cloud egress.
⚡ Real-Time Updates: WebSocket integration ensures account balances update instantly across all devices.
🛠️ Technology Stack

Frontend

Framework: Next.js 16 (App Router)
Library: React 19
Styling: TailwindCSS 4
Icons: Lucide React
State: Hooks & Context API
Backend

Framework: FastAPI (Python 3.11)
AI Orchestration: LangChain
LLM: GPT-4o (Configurable for Local Llama 3)
Voice Services: Azure Cognitive Services (Speech-to-Text / Text-to-Speech)
Real-Time: WebSockets
Data & Infrastructure

Database: MongoDB Atlas (NoSQL)
Vector Search: MongoDB Atlas Vector Search (768 Dimensions)
Deployment: Google Cloud Run (Dockerized)
📂 Project Structure

NeuroBank-Guardian/
├── backend/                 # Python FastAPI Backend
│   ├── config/             # Configuration & Database Connection
│   ├── controllers/        # API Route Controllers
│   ├── models/             # Pydantic Data Models
│   ├── routes/             # API Endpoints
│   ├── services/           # Core Logic (Agent, Audio, Transaction)
│   └── main.py             # Application Entry Point
├── frontend/                # Next.js Frontend
│   ├── app/                # App Router Pages
│   ├── components/         # Reusable UI Components
│   └── public/             # Static Assets
└── DEPLOY_GUIDE.md         # Cloud Deployment Instructions
⚡ Getting Started

Follow these steps to set up the project locally.

Prerequisites

Node.js 18+
Python 3.10+
MongoDB Atlas Account
OpenAI API Key
Azure Speech Service Key
1. Clone the Repository

git clone https://github.com/Yagna3903/NeuroBank-Guardian.git
cd neurobank-guardian
2. Backend Setup

Navigate to the backend directory and set up the Python environment.

cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
Configure Environment Variables: Create a .env file in backend/:

# Database
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
DB_NAME=neurobank_db

# AI & Voice Keys
OPENAI_API_KEY=your_openai_key
AZURE_SPEECH_KEY=your_azure_key
AZURE_SPEECH_REGION=eastus

# Security
SECRET_KEY=your_secret_key_for_jwt
Run the Server:

uvicorn main:app --reload --port 8000
3. Frontend Setup

Open a new terminal and navigate to the frontend directory.

cd ../frontend
npm install
Configure Environment: Create a .env.local file in frontend/:

NEXT_PUBLIC_API_URL=http://localhost:8000
Run the Frontend:

npm run dev
Visit http://localhost:3000 to access NeuroBank Guardian.

🧪 Usage Guide

Login: Use the demo email yagna3903@gmail.com or click "Enter Demo Mode".
Authenticate: Enter the OTP displayed (default 000000 for demo users) and wait for the biometric animation.
Interact:
Click the Microphone and speak: "What is my checking account balance?"
Try a Transaction: "Pay $50 to my Hydro bill." -> Confirm with "YES AI".
Ask Insight: "How much have I spent on Uber this year?"
🚢 Deployment

The project includes Dockerfile configurations for both implementation layers.

Deploy to Google Cloud Run: Please refer to the detailed DEPLOY_GUIDE.md for step-by-step production deployment instructions.

🤝 Contributing

We welcome contributions! Please follow these steps:

Fork the repository.
Create a feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.`
    },
    {
        id: 3,
        title: "LOGOS: The Semantic Platformer",
        desc: "A 2D puzzle platformer where players type words to modify the environment (spawn bridges, balloons) using a semantic lookup system and Matter.js physics.",
        image: `${BASE_URL}assets/logos_thumbnail.png`,
        videoPosition: "w-[250%] h-[250%] -top-[60%] -left-[75%]", // Reverted height to original 250%
        youtubeId: "lzK9URfHFKM",
        tags: ["Game Design", "Matter.js", "JavaScript", "Algorithms"]
    },
    {
        id: 2,
        title: "Museum AR/VR",
        desc: "Coming Soon: A revolutionary mixed reality experience redefining spatial interaction.",
        image: `${BASE_URL}assets/virtual_museum_thumbnail.png`,
        youtubeId: "3JTeDoyDd0Q",
        videoPosition: "w-[250%] h-[250%] -top-[25%] -left-[75%]",
        tags: ["Unity", "AR/VR", "C#"]
    }
];

export const skills = [
    { id: 1, name: "Unity & AR Foundation", rank: 1, image: `${BASE_URL}assets/unity_thumbnail.png` },
    { id: 2, name: "C#, C++, C", rank: 2, image: `${BASE_URL}assets/c_cpp_thumbnail.png` },
    { id: 3, name: "JS, React, Three.js", rank: 3, image: `${BASE_URL}assets/js_react_threejs_thumbnail.png` },
    { id: 4, name: "Java, Python", rank: 4, image: `${BASE_URL}assets/java_python_thumbnail.png` },
    { id: 5, name: "AR/VR SDKs (ARKit, ARCore)", rank: 5, image: `${BASE_URL}assets/ar_sdk_thumbnail.png` },
    { id: 6, name: "Git & GitHub", rank: 6, image: `${BASE_URL}assets/git_github_thumbnail.png` },
    { id: 7, name: "SQL, Postgres, MySQL", rank: 7, image: `${BASE_URL}assets/sql_postgres_mysql_thumbnail.png` },
    { id: 8, name: "Linear Algebra & Physics", rank: 8, image: `${BASE_URL}assets/linear_algebra_physics_thumbnail.png` },
    { id: 9, name: "Spatial UX/UI", rank: 9, image: `${BASE_URL}assets/spatial_ux_ui_thumbnail.png` },
    { id: 10, name: "OS (Linux, Windows, macOS)", rank: 10, image: `${BASE_URL}assets/os_thumbnail.png` },
];

export const experience = [
    {
        id: 1,
        title: "Junior Network Administrator / IT Assistant",
        company: "PIONEER Engineering",
        duration: "2021 - 2023",
        desc: "Collaborated with the IT team to maintain reliable network infrastructure, assisting in the configuration of switches, routers, and firewalls for the Mumbai branch. Executed root-cause analysis on recurring system failures, identifying hardware malfunctions and coordinating warranty replacements or repairs. Managed the end-to-end lifecycle of IT assets, from procurement and imaging to deployment and decommissioning. Documented technical procedures and troubleshooting guides to streamline future incident resolution and improve knowledge sharing.",
        image: `${BASE_URL}assets/it_intern_thumbnail.png`,
        terminalLogs: [
            "TASK_1: Collaborated with IT team on network infra (Switches/Routers/Firewalls) -> Mumbai Branch [SUCCESS]",
            "TASK_2: Root-cause analysis on system failures -> Hardware repair/replacement [COMPLETED]",
            "TASK_3: Asset Lifecycle Mgmt (Procurement to Decommission) [OPTIMIZED]",
            "TASK_4: Documentation & Troubleshooting Guides [CREATED]"
        ]
    },
    {
        id: 2,
        title: "IT Support Specialist / Lab Assistant",
        company: "Fr. Conceicao Rodrigues College of Engineering (FRCRCE)",
        duration: "2019 - 2021",
        desc: "Served as a key member of the technical support team for a premier engineering institution, ensuring high availability of IT infrastructure for computer labs, faculty departments, and administrative offices.",
        image: `${BASE_URL}assets/software_engineer_thumbnail.png`,
        terminalLogs: [
            "TASK_1: Lab Infrastructure Management (200+ workstations) -> Imaging, drivers, patch mgmt [MAINTAINED]",
            "TASK_2: Software Deployment (C/C++, Java, MATLAB, AutoCAD) & License Compliance [DEPLOYED]",
            "TASK_3: Network Admin -> Troubleshooting LAN/Switch ports/Static IPs [RESOLVED]",
            "TASK_4: Hardware Troubleshooting (Tier 1/2) -> Reduced downtime during academic hours [COMPLETED]",
            "TASK_5: User Support & Ticketing (OS/WiFi/Peripherals) [SUPPORTED]",
            "TASK_6: Exam Support -> Secure isolated network environments [SECURED]"
        ]
    }
];

export const genres = [
    {
        id: "education",
        title: "Education",
        desc: "Currently pursuing a B.Sc in Computer Science at Brock University. I've been exploring this field since high school and expect to graduate in 2028.",
        image: `${BASE_URL}assets/education_thumbnail.png`,
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
        image: `${BASE_URL}assets/toolkit_thumbnail_v2.png`,
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
        image: `${BASE_URL}assets/contact_me_thumbnail.png`,
        imgClassName: "object-fill",
        youtubeId: "t36N2gwixrc",
        videoPosition: "w-[250%] h-[250%] -top-[40%] -left-[75%]",
        desc: "Always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a specific role in mind or just want to chat about tech, feel free to reach out.",
        details: [
            { title: "Email information", subtitle: "sarishakadakia16@gmail.com", desc: "Sarishakadakia16@gmail.com\ntn24yv@brocku.ca" },
            { title: "Contact number", subtitle: "+1 647-979-1604", desc: "+1 647-979-1604" },
            { title: "LinkedIn", subtitle: "Sarisha Kadakia", desc: "www.linkedin.com/in/sarisha-kadakia", link: "https://www.linkedin.com/in/sarisha-kadakia" },
            { title: "GitHub profile", subtitle: "github.com/KadsSar", desc: "https://github.com/KadsSar", link: "https://github.com/KadsSar" }
        ]
    },
    {
        id: "certifications",
        title: "Certifications",
        image: `${BASE_URL}assets/certifications_thumbnail.png`,
        youtubeId: "9H358fsshRM",
        desc: "Continuously expanding my technical horizons through certification, with a dedicated focus on mastering modern cloud, data, and security standards.",
        details: [
            { title: "Oracle Cloud", subtitle: "Foundations Associate", desc: "Certified Dec 2025.", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=624F66C17942490A2074EACF30540BB92C693B65694A40507E9274B367865F4F" }
        ]
    },
    {
        id: "hackathons",
        title: "Honours and Leadership",
        image: `${BASE_URL}assets/leadership_thumbnail.png`,
        imgClassName: "object-[40%_center]",
        videoPosition: "w-[250%] h-[250%] -top-[15%] -left-[45%]",
        desc: "Active participant in the developer ecosystem, leveraging teamwork and technical curiosity to solve problems in competitive and collaborative environments.",
        details: [
            { title: "Volunteer at 2026 BrockU Robotics Competition", subtitle: "Volunteer", desc: "Mentor for teams, event coordinator" },
            { title: "HackVille 2026", subtitle: "Jan 2026", desc: "Developed an app within 24 hours using Python and Flask." },
            { title: "Sheridan Datathon", subtitle: "Nov 2025", desc: "Collaborated with a team to implement real time data tracking and analysis using Python and Scikit-learn." },
            { title: "Head volunteer at PAWS NGO", subtitle: "Volunteer", desc: "Head of volunteer initiatives to raise awareness about animal welfare." },
            { title: "Treasurer at Brock SSA club", subtitle: "Treasurer", desc: "Managing finances and budgeting for Brock Hindu cultural events of the club" }
        ]
    }
];
