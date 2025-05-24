import React, { useState, useEffect, Suspense } from "react";
import {
  Menu,
  X,
  Palette,
  ListTodo ,
  Send,
  ViewIcon,
  ExternalLink,ShoppingCart,
} from "lucide-react";
import "./index.css";
import { sendEmail } from './email.js';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive user interfaces with user experience.Please,click this block to see more detail",
      details:
        "Designed the user-interface for Rapid GPA calculator using adobe photoshop",
      technologies: ["Adobe Photoshop"],
      image: "./Images/Rapid Cgpa.png",
      anchor: "https://play.google.com/store/apps/details?id=edu.rapid.cgpa",
      repo: "",
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "Full-stack Ecommerce platform: Shopkart",
      description:
        "Developed and Deployed 'ShopKart' which is full-stack Ecommerce platform.It's one of my personal development project.Please,click this block to see more detail",
      details:
        "Developed and Deployed 'ShopKart' which is full-stack Ecommerce platform using Django template with MySQL for secure data management. Implemented user authentication, product listings, and order processing.For optimized UI & performance designed a responsive interface with HTML, CSS, JavaScript, and Bootstrap.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Django",
        "MySQL",
      ],
      image: "./Images/Shopkart SS.png",
      anchor: "https://shopkart-7d3j.onrender.com/",
      repo: "https://github.com/Ajanthan-SV/My-Ecommerce-site-ShopKart.git",
    },
    {
      icon: <ListTodo size={40} />,
      title: "Todo Web-App",
      description:
        "Developed and Deployed 'Todo WebApp' using ReactJs.It's one of my personal development project.Please,click this block to see more detail",
      details:
        "Developed and Deployed Todo Web-Application using ReactJs in which,I have used the localstorage also known as temporary Storage.By this you can able to create an account and sigin.Provided the functionality of personalize your task.",
      technologies: ["ReactJs", "CSS", "JavaScript"],
      image: "./Images/todo app.png",
      anchor: "https://ajanthan-todo.netlify.app/",
      repo:"https://github.com/Ajanthan-SV/todo.git",
    },
  ];



  return (
    <div className="App relative min-h-screen">
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <nav className="nav custom-navbar">
            <div className="logo">
              <i className="fa fa-code"></i> Ajanthan
            </div>
            <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <a
                href="#home"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#projects"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
            <button
              className="menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </div>
      </header>

      <section id="home" className="hero relative overflow-hidden">
        <div className="absolute inset-0">
          <Suspense fallback={<div className="absolute inset-0 bg-gray-900" />}>
            <ParticlesBackground />
          </Suspense>
        </div>
        <div className="container relative z-10">
          <div className="hero-content">
            <div className="hero-text">
              <h2>Hello I'm</h2>
              <h1 className="title">Web-Developer</h1>
              <p>
                I'm a passionate Computer Science Engineering student on a
                journey to explore the world of website development. From coding
                to crafting user-friendly interfaces, I dive into the world of
                code with enthusiasm. I am eager to apply my skills and
                knowledge in a real-world setting.which,helps me to develop my
                skills and always eager to learn and mastering the art of
                creating impactful online experiences.
              </p>
              <a
                href="https://drive.google.com/file/d/1OOXbyAcbMLFeNPRdjHK-i_K0GQgELjvH/view?usp=sharing"
                className="btn"
                style={{ marginRight: "10px" }}
              >
                View Resume
                <ViewIcon size={20} />
              </a>
              <a href="https://github.com/Ajanthan-SV" className="btn">
                GitHub Profile
                <ExternalLink size={20} />
              </a>
            </div>
            <div className="hero-image">
              <img src="Images/Aj with Coat_2.jpg" alt="Profile" />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <div className="section-title">
            <h2>My Projects</h2>
            <p>Explore my latest work and specialties</p>
          </div>
          <div className="projects-slider">
            <div className="slider-container">
              <div className="slider-track">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="project-card"
                    onClick={() =>
                      setSelectedProject(selectedProject === index ? null : index)
                    }
                  >
                    <div className="project-icon">{project.icon}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div
          className={`project-modal ${
            selectedProject !== null ? "active" : ""
          }`}
        >
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>
            {/* <div className="project-icon">{projects[selectedProject].icon}</div> */}
            <div className="project-image">
              <img src={projects[selectedProject].image} alt={projects[selectedProject].title} />
            </div>
            <h3>{projects[selectedProject].title}</h3>
            <p className="project-details">{projects[selectedProject].details}</p>
            <a href={projects[selectedProject].anchor} className="view-project">View Project</a>{"  "}
            <a href={projects[selectedProject].repo} className="view-project">View code</a>
            <div className="technologies">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                {projects[selectedProject].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="skills bg-gray-100 py-12">
        <div className="container mx-auto">
          <div className="section-title text-center mb-8">
            <h2 className="text-3xl font-bold">My Skills</h2>
            <p className="text-gray-600">
              Here are some of the skills I have acquired
            </p>
          </div>
          <div className="skills-list">
            <div className="skill-item bg-white p-6 rounded-lg shadow-md">
              <div className="skill-icon mb-4">
                <i className="fab fa-react text-blue-500 text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Frontend Development</h3>
              <p className="text-gray-600">
                HTML, CSS, Bootstrap, JavaScript, ReactJs
              </p>
            </div>
            <div className="skill-item bg-white p-6 rounded-lg shadow-md">
              <div className="skill-icon mb-4">
                <i className="fas fa-server text-green-500 text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Backend Development</h3>
              <p className="text-gray-600">Django</p>
            </div>
            <div className="skill-item bg-white p-6 rounded-lg shadow-md">
              <div className="skill-icon mb-4">
                <i className="fas fa-database text-yellow-500 text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Database Management</h3>
              <p className="text-gray-600">MySQL,Sqlite</p>
            </div>
            {/* <div className="skill-item bg-white p-6 rounded-lg shadow-md">
              <div className="skill-icon mb-4">
                <i className="fas fa-cloud text-purple-500 text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold">DevOps</h3>
              <p className="text-gray-600">Docker, Kubernetes, CI/CD, AWS, Azure</p>
            </div> */}
            <div className="skill-item bg-white p-6 rounded-lg shadow-md">
              <div className="skill-icon mb-4">
                <i className="fas fa-tools text-red-500 text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Other Skills</h3>
              <p className="text-gray-600">
                Adaptability,Observation,Team Work,Problem Solving
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Me</h2>
            <p>Let's discuss your next project</p>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>
                I'm always interested in hearing about new opportunities.
                Whether you have a question or just want to say hi, I'll get
                back to you!
              </p>
              <div className="contact-details">
                <p>Email: svjajanthan8@gmail.com</p>
                <p>Location: Trichy, India</p>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Subject</label>
                <input type="email" id="subject" placeholder="Enter Subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <button type="button" className="btn" onClick={sendEmail}> 
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Ajanthan. All rights reserved.</p>
          <div className="footer-nav-links">
            <a href="#home" className="footer-nav-link">
              Home
            </a>
            <a href="#about" className="footer-nav-link">
              About
            </a>
            <a href="#skills" className="footer-nav-link">
              Skills
            </a>
            <a href="#services" className="footer-nav-link">
              Services
            </a>
            <a href="#contact" className="footer-nav-link">
              Contact
            </a>
          </div>
          <div className="social-links">
            <a
              href="mailto:svjajanthan8@gmail.com"
              className="social-icon"
              aria-label="Gmail"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ajanthan-s-v-59b541251/"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
