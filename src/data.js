import arayxs from './assets/arayxs.png'
import skandha from './assets/skandha.png'
import snapurl from './assets/snapurl.png'

export const profile = {
  name: 'Neel Gopal Dalvi',
  location: 'Mumbai, India',
  status: 'Software Developer Intern at Skandha Media Services',
  email: 'dalvineel2005@gmail.com',
  github: 'https://github.com/dalvineel2005',
  linkedin: 'https://linkedin.com/in/neel-dalvi-73b204406',
  role: 'Full-stack MERN developer who reaches for data whenever a product needs to explain itself — building applications and the dashboards that make sense of them.',
  about:
    'IT graduate and full-stack developer with hands-on experience building production-style web applications on the MERN stack, with a growing focus on data analytics. Comfortable across the stack — Python, SQL, and JavaScript — with practical exposure to REST API development, database design, authentication systems, and data visualization. Still early in the career, but treats every project like it has to work for real users, not just pass a demo.',
}

export const nav = [
  ['profile', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['watchlist', 'Skills'],
  ['record', 'Education'],
  ['contact', 'Contact'],
]

export const projects = [
  {
    symbol: 'STOCK-DASH',
    image: arayxs,
    alt: 'ARAYXS trading terminal dashboard showing portfolio value, market movers and a live watchlist',
    title: 'Stock Management & Trading Dashboard',
    points: [
      'Full-stack application for stock trading: secure authentication, live trading, and end-to-end portfolio management.',
      'Scalable Node.js/Express backend built for non-blocking I/O, handling concurrent trade requests without stalling.',
      'Live price tracking, watchlists, and dynamic portfolio valuation via integrated market data services.',
      'Order Management System (OMS) covering buy/sell execution, tracking, and full order history.',
      'Interactive dashboards visualizing stock trends and historical performance, delivered in Agile sprints.',
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    live: 'https://arayxs.vercel.app',
    repo: 'https://github.com/dalvineel2005/Stock-management-and-trading-website-built-using-HTML-CSS-and-JavaScript.',
  },
  {
    symbol: 'URL-SHRT',
    image: snapurl,
    alt: 'SnapURL sign-up page',
    title: 'URL Shortener Web Application',
    points: [
      'Full-stack URL shortener for securely creating, managing, and tracking short links.',
      'JWT authentication with cookie sessions and role-based access control for user management.',
      'RESTful Express routes backed by MongoDB and Mongoose for storage, redirection, and click analytics.',
      'Server-side rendering with EJS for a fast, responsive interface with no client-side framework overhead.',
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
    live: 'https://short-url-one-beta.vercel.app',
    repo: 'https://github.com/dalvineel2005/url-shortener',
  },
]

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Skandha Media Services',
    period: 'Jun 2026 – Present',
    logo: skandha,
  },
]

export const skills = [
  { cat: 'Languages', status: 'CORE', items: ['JavaScript (ES6)', 'Python', 'HTML5', 'CSS3'] },
  { cat: 'Frameworks', status: 'CORE', items: ['React.js', 'Node.js', 'Express.js', 'EJS', 'Mongoose'] },
  { cat: 'Databases', status: 'CORE', items: ['MongoDB', 'MySQL'] },
  { cat: 'Data & Analytics', status: 'GROWING', items: ['Excel', 'Tableau', 'Data Visualization', 'Data Storytelling'] },
  { cat: 'Tools', status: 'WORKING', items: ['Git & GitHub', 'Postman', 'MongoDB Compass', 'VS Code', 'JWT', 'Nodemon', 'npm'] },
  { cat: 'Concepts', status: 'WORKING', items: ['REST API Design', 'MVC Architecture', 'Agile Development', 'Auth & Authorization'] },
]

export const tape = [
  ['REACT.JS', 'CORE'], ['NODE.JS', 'CORE'], ['EXPRESS.JS', 'CORE'], ['MONGODB', 'CORE'],
  ['PYTHON', 'CORE'], ['SQL', 'CORE'], ['TABLEAU', 'GROWING'], ['DATA-VIZ', 'GROWING'],
  ['JWT-AUTH', 'WORKING'], ['REST-API', 'WORKING'], ['MVC', 'WORKING'], ['AGILE', 'WORKING'],
]

export const education = {
  degree: 'Bachelor of Science, Information Technology',
  school: 'Abhinav College of Arts, Commerce & Science — Mumbai University, Thane',
  coursework: 'Data Foundations, Data Preparation & Exploration, Web Application Development, Software Engineering & System Design.',
  years: '2023 – 2026',
  cgpa: '8.82',
}

export const certifications = ['Data Analysis with Python', 'Machine Learning with Python']
