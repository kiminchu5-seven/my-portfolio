import './App.css'

const skills = [
  {
    number: '01',
    title: 'Programming',
    items: 'C  •  Java  •  Python  •  JavaScript',
  },
  {
    number: '02',
    title: 'Web Development',
    items: 'HTML  •  CSS  •  React',
  },
  {
    number: '03',
    title: 'Backend & Database',
    items: 'PHP  •  MySQL  •  XAMPP',
  },
  {
    number: '04',
    title: 'Computer Science',
    items: 'DSA  •  DBMS  •  Discrete Mathematics',
  },
]

const projects = [
  {
    type: 'LIVE PROJECT',
    title: 'Cyber Network Analyzer',
    description:
      'An interactive cybersecurity visualization tool that models users and systems as a network and analyzes access relationships using concepts from Discrete Mathematical Structures.',
    tech: ['React', 'JavaScript', 'SVG', 'Graph Theory'],
    live: true,
    demo:
      'https://cyber-network-analyzer-1cte4n5rq-inchara-s-projects4.vercel.app',
    github:
      'https://github.com/kiminchu5-seven/cyber-network-analyzer',
  },
  {
    type: 'COMPLETED',
    title: 'Digital Borrow Tracker',
    description:
      'A web-based system for managing available items, borrowing records, return tracking, and inventory information.',
    tech: ['React', 'PHP', 'MySQL', 'XAMPP'],
    live: false,
  },
  {
    type: 'COMPLETED',
    title: 'Signature Detection',
    description:
      'A deep learning project designed to classify signatures as genuine or forged, exploring the application of machine learning in security.',
    tech: ['Deep Learning', 'Python', 'Cybersecurity'],
    live: false,
  },
]

function App() {
  return (
    <div className="portfolio">

      {/* Animated background */}
      <div className="background-grid"></div>

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-bracket">[</span>
          IA
          <span className="logo-bracket">]</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
        </div>

        <div className="nav-status">
          <span></span>
          ONLINE
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-orb orb-one"></div>
        <div className="hero-orb orb-two"></div>

        <div className="network network-one">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>

        <div className="hero-content">

          <div className="terminal-label">
            <span className="terminal-dot"></span>
            portfolio.exe
            <span className="cursor">_</span>
          </div>

          <p className="hero-kicker">
            COMPUTER SCIENCE ENGINEERING STUDENT
          </p>

          <h1>
            Hi, I'm <span>Inchara</span>
          </h1>

          <h2>
            Building. Learning. <span>Securing.</span>
          </h2>

          <p className="hero-description">
            Aspiring cybersecurity and software development professional
            passionate about turning concepts into practical technology.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              Explore Projects
              <span>↗</span>
            </a>

            <a href="#contact" className="outline-button">
              Let's Connect
            </a>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              View Resume ↗
            </a>

          </div>

          <div className="hero-meta">

            <div>
              <strong>05</strong>
              <span>SEMESTER</span>
            </div>

            <div>
              <strong>03</strong>
              <span>PROJECTS</span>
            </div>

            <div>
              <strong>01</strong>
              <span>LIVE DEMO</span>
            </div>

          </div>

        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">

        <div className="section-heading">
          <span>01 / ABOUT</span>
          <h2>More than just code.</h2>
        </div>

        <div className="about-layout">

          <div className="about-main">

            <p className="large-text">
              I'm a Computer Science and Engineering student who enjoys
              understanding how technology works — and then building
              something with it.
            </p>

            <p>
              My interests currently revolve around cybersecurity,
              software development, web technologies, databases and
              problem solving. I believe the best way to learn technology
              is by actually creating and experimenting with projects.
            </p>

            <p>
              I'm continuously expanding my technical skills through
              academic projects, hands-on labs and independent learning.
            </p>

          </div>

          <div className="about-terminal">

            <div className="terminal-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">

              <p><b>$</b> whoami</p>
              <p className="terminal-output">
                inchara@developer
              </p>

              <p><b>$</b> interests</p>

              <p className="terminal-output">
                cybersecurity<br />
                software-development<br />
                problem-solving
              </p>

              <p><b>$</b> status</p>
              <p className="terminal-success">
                ● learning continuously
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <div className="section-heading">
          <span>02 / SKILLS</span>
          <h2>Tools I work with.</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.number}>

              <div className="skill-number">
                {skill.number}
              </div>

              <div>
                <h3>{skill.title}</h3>
                <p>{skill.items}</p>
              </div>

              <div className="skill-arrow">
                ↗
              </div>

            </div>
          ))}

        </div>

        <div className="skill-strip">
          <span>CURRENTLY LEARNING</span>
          <b>CYBERSECURITY</b>
          <i>•</i>
          <b>DSA</b>
          <i>•</i>
          <b>WEB DEVELOPMENT</b>
          <i>•</i>
          <b>DATABASE SYSTEMS</b>
        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">

        <div className="section-heading">
          <span>03 / PROJECTS</span>
          <h2>Things I've built.</h2>
        </div>

        <div className="projects-list">

          {projects.map((project, index) => (
            <article
              className={`project-card ${
                project.live ? 'featured-project' : ''
              }`}
              key={project.title}
            >

              <div className="project-index">
                0{index + 1}
              </div>

              <div className="project-content">

                <div
                  className={`project-type ${
                    project.live ? 'live' : ''
                  }`}
                >
                  <span></span>
                  {project.type}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                {project.live && (
                  <div className="project-actions">

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-button small"
                    >
                      Launch Live Demo ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="outline-button small"
                    >
                      View GitHub
                    </a>

                  </div>
                )}

              </div>

              {project.live && (
                <div className="project-visual">

                  <div className="visual-grid"></div>

                  <div className="visual-node node-a">A</div>
                  <div className="visual-node node-b">B</div>
                  <div className="visual-node node-c">C</div>
                  <div className="visual-node node-d">D</div>

                  <div className="connection connection-one"></div>
                  <div className="connection connection-two"></div>
                  <div className="connection connection-three"></div>
                  <div className="connection connection-four"></div>

                  <div className="visual-label">
                    NETWORK / ANALYSIS
                  </div>

                </div>
              )}

            </article>
          ))}

        </div>

      </section>

      {/* EDUCATION */}
      <section id="education" className="section">

        <div className="section-heading">
          <span>04 / JOURNEY</span>
          <h2>Where I'm headed.</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-date">
              CURRENT
            </div>

            <div className="timeline-content">
              <h3>
                B.E. Computer Science & Engineering
              </h3>

              <p>
                KS Institute of Technology, Bengaluru
              </p>

              <span>
                Expected Graduation — 2028
              </span>
            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-date">
              COMPLETED
            </div>

            <div className="timeline-content">

              <h3>Diploma</h3>

              <p>
                PES Polytechnic
              </p>

              <span>
                CGPA — 8.69
              </span>

            </div>

          </div>

        </div>

        <div className="certifications-box">

          <div>
            <span>CERTIFICATIONS</span>
            <h3>
              Learning beyond the classroom.
            </h3>
          </div>

          <div className="cert-list">
            <p>AI Tools Workshop — B10x</p>
            <p>Java Completion Certificate</p>
            <p>Python Completion Certificate</p>
            <p>Skill Competency Certificate</p>
            <p>Signature Detection — Project Completion</p>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div className="contact-glow"></div>

        <span className="contact-label">
          05 / CONTACT
        </span>

        <h2>
          Let's build something
          <span> meaningful.</span>
        </h2>

        <p>
          I'm always interested in learning, building projects and
          connecting with people in technology.
        </p>

        <div className="contact-buttons">

          <a
            href="mailto:inchara.9622@gmail.com"
            className="primary-button"
          >
            Email Me ↗
          </a>

          <a
            href="https://www.linkedin.com/in/inchara-a-74862a310"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button"
          >
            LinkedIn ↗
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button"
          >
            Resume ↗
          </a>

        </div>

        <div className="contact-email">
          inchara.9622@gmail.com
        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div>
          <span className="footer-logo">
            [ IA ]
          </span>

          <span>
            Built with curiosity & code.
          </span>
        </div>

        <span>
          © 2026 Inchara A
        </span>

      </footer>

    </div>
  )
}

export default App