import './App.css'

const projects = [
  {
    number: '01',
    name: 'PackGuard',
    category: 'CYBERSECURITY · MACHINE LEARNING',
    status: 'IN PROGRESS',
    statusTone: 'progress',
    summary: 'Language-agnostic malicious package detection across software ecosystems. The project explores how package metadata, behavioural signals and anomaly patterns can help identify suspicious packages before installation.',
    details: 'Current pipeline includes feature extraction, an autoencoder, an MLP classifier, Isolation Forest, DBSCAN clustering and decision fusion. Payload analysis and cross-registry expansion are part of the planned workflow.',
    stack: ['Python', 'scikit-learn', 'Autoencoder', 'MLP', 'Isolation Forest', 'DBSCAN'],
    href: null,
    demo: null,
    action: 'Repository not published yet',
  },
  {
    number: '02',
    name: 'Cyber Network Analyzer',
    category: 'CYBERSECURITY · WEB DEVELOPMENT',
    status: 'LIVE DEMO',
    statusTone: 'live',
    summary: 'An interactive network visualization tool that models systems and access relationships as a graph, applying graph-theory concepts to explore network structure.',
    details: 'Built as a practical interface for visualizing nodes and their relationships.',
    stack: ['React', 'JavaScript', 'SVG', 'Graph Theory'],
    href: 'https://github.com/kiminchu5-seven/cyber-network-analyzer',
    demo: 'https://cyber-network-analyzer-1cte4n5rq-inchara-s-projects4.vercel.app',
    action: 'Explore source code',
  },
  {
    number: '03',
    name: 'Digital Borrow Tracker',
    category: 'FULL-STACK · DATABASE SYSTEMS',
    status: 'COMPLETED ACADEMIC PROJECT',
    statusTone: 'complete',
    summary: 'A database-backed application concept for recording borrowed items, tracking returns and maintaining organized borrowing records.',
    details: 'Developed using a React interface, PHP backend and MySQL database, with XAMPP used in the local development environment.',
    stack: ['React', 'PHP', 'MySQL', 'phpMyAdmin', 'XAMPP'],
    href: null,
    demo: null,
    action: 'Project repository to be linked',
  },
  {
    number: '04',
    name: 'Signature Fraud Detection',
    category: 'DEEP LEARNING · IMAGE CLASSIFICATION',
    status: 'COMPLETED DIPLOMA PROJECT',
    statusTone: 'complete',
    summary: 'A deep-learning-based project exploring the classification of handwritten signatures to distinguish genuine signatures from possible forgeries.',
    details: 'This project introduced practical work with machine learning concepts for a document-authentication use case.',
    stack: ['Python', 'Deep Learning', 'Image Analysis'],
    href: null,
    demo: null,
    action: 'Project repository to be linked',
  },
  {
    number: '05',
    name: 'Rainfall Prediction',
    category: 'MATHEMATICS · DATA ANALYSIS',
    status: 'COMPLETED ACADEMIC PROJECT',
    statusTone: 'complete',
    summary: 'An academic mathematics project applying the normal distribution to explore rainfall prediction.',
    details: 'Focused on using probability and statistical reasoning to interpret rainfall data.',
    stack: ['Probability', 'Normal Distribution', 'Data Analysis'],
    href: null,
    demo: null,
    action: 'Academic project',
  },
]

const skills = [
  { group: 'Programming', items: ['C', 'Java', 'Python', 'JavaScript'] },
  { group: 'Web & Backend', items: ['HTML', 'CSS', 'React', 'PHP'] },
  { group: 'Database & Tools', items: ['MySQL', 'phpMyAdmin', 'XAMPP', 'Git', 'GitHub', 'VS Code'] },
  { group: 'Cybersecurity', items: ['Linux', 'Ubuntu', 'Kali Linux', 'Nmap', 'Wireshark', 'Burp Suite', 'OWASP ZAP', 'TryHackMe'] },
  { group: 'Security learning', items: ['Network scanning', 'Web security testing', 'CTF practice', 'Shell scripting', 'Virtual lab testing'] },
  { group: 'Machine Learning', items: ['scikit-learn', 'Autoencoders', 'MLP', 'Isolation Forest', 'DBSCAN'] },
]

const events = [
  {
    name: 'GAVS Hackathon · Tech4Bharat',
    kind: 'Hackathon',
    date: 'November 2026',
    state: 'Idea submission phase · shortlisting results pending',
    text: 'The organizer announced an extended idea-submission window through 20 November 2026. The challenge focuses on MSME problem statements across multiple themes.',
    tone: 'progress',
  },
  {
    name: 'ANVATION 2026',
    kind: '24-hour hackathon',
    date: '8–9 October 2026',
    state: 'Attended',
    text: 'Participated in a 24-hour hackathon hosted by KS School of Engineering and Management.',
    tone: 'complete',
  },
  {
    name: 'PARADOX 2026',
    kind: 'CTF · Cybersecurity',
    date: '17–18 September 2026',
    state: 'Attended',
    text: 'Took part in a Capture The Flag event at RNS Institute of Technology, exploring practical security challenges and tools.',
    tone: 'complete',
  },
  {
    name: 'Emerging Technologies Hackathon 2026',
    kind: 'Hackathon',
    date: '2026',
    state: 'Participation',
    text: 'Explored emerging-technology problem solving in a collaborative hackathon setting.',
    tone: 'complete',
  },
  {
    name: 'HackMatrix 1.0',
    kind: 'Hackathon · Team project',
    date: '2026',
    state: 'Team repository',
    text: 'Worked in a team repository with a FastAPI-based backend setup and supporting project structure.',
    tone: 'complete',
    link: 'https://github.com/kiminchu5-seven/HackMatrix-1.0',
  },
]

const certificates = [
  {
    title: 'AI Tools & Claude Workshop',
    issuer: 'B10x',
    date: '30 August 2026',
    description: 'Workshop completion covering practical AI-assisted workflows for presentations, data analysis, coding and debugging.',
    tag: 'AI TOOLS',
  },
  {
    title: 'Building Intelligent Applications with Generative AI',
    issuer: 'Department of Computer Science and Engineering, KS Institute of Technology',
    date: '26–28 March 2026',
    description: 'Three-day workshop focused on building intelligent applications with Generative AI.',
    tag: 'GENERATIVE AI',
  },
]

function SectionTitle({ eyebrow, title, note }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  )
}

function App() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Inchara home"><span>IA</span><i>.</i></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <span>↗</span></a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
          <p className="hero-overline">COMPUTER SCIENCE ENGINEERING · BENGALURU, INDIA</p>
          <h1>Curious by nature.<br /><em>Built to explore.</em></h1>
          <p className="hero-intro">I’m Inchara — a CSE student exploring the intersection of cybersecurity, software development and applied AI. I learn by building, testing and getting hands-on.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span>↗</span></a>
            <a className="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <span>↓</span></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/kiminchu5-seven" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/inchara-a-74862a310" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:inchara.9622@gmail.com">Email ↗</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract cybersecurity network illustration">
          <div className="art-ring ring-a" /><div className="art-ring ring-b" /><div className="art-ring ring-c" />
          <div className="art-core"><span>IA</span><small>LEARN · BUILD · SECURE</small></div>
          <div className="art-node node-1">LINUX</div><div className="art-node node-2">AI / ML</div><div className="art-node node-3">WEB</div><div className="art-node node-4">SEC</div>
          <div className="art-cross cross-1" /><div className="art-cross cross-2" />
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
      </section>

      <section className="intro-strip">
        <span>01 / PROFILE</span>
        <p>Curiosity turns into capability when you <b>build something real.</b></p>
      </section>

      <section className="section-wrap section-block" id="about">
        <SectionTitle eyebrow="02 / ABOUT ME" title={<>A little about<br /><em>how I work.</em></>} note="A student, a builder and a security enthusiast — always learning something new." />
        <div className="about-grid">
          <div className="about-story">
            <p className="lead">I’m pursuing Computer Science and Engineering at KS Institute of Technology, Bengaluru.</p>
            <p>My interests span cybersecurity, full-stack development, databases and machine learning. I enjoy understanding how systems work, experimenting in controlled environments and translating concepts into practical projects.</p>
            <p>My current focus is strengthening my Linux and cybersecurity foundations while developing PackGuard, a language-agnostic malicious package detection project.</p>
            <div className="focus-tags"><span>Cybersecurity</span><span>Applied AI</span><span>Full-stack development</span></div>
          </div>
          <div className="profile-panel">
            <div className="panel-head"><span>PROFILE.SYS</span><span>● ACTIVE</span></div>
            <div className="profile-row"><span>EDUCATION</span><b>B.E. · CSE</b></div>
            <div className="profile-row"><span>INSTITUTE</span><b>KSIT, Bengaluru</b></div>
            <div className="profile-row"><span>GRADUATION</span><b>2028</b></div>
            <div className="profile-row"><span>FOCUS</span><b>Security + AI</b></div>
            <div className="profile-row"><span>APPROACH</span><b>Hands-on learning</b></div>
            <div className="profile-terminal"><span>$ whoami</span><b>inchara@builder:~$</b><i>learning continuously_</i></div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block" id="skills">
        <SectionTitle eyebrow="03 / TOOLKIT" title={<>Skills in progress.<br /><em>Skills in practice.</em></>} note="Technologies and tools I have used through coursework, projects, labs and guided practice." />
        <div className="skills-grid">
          {skills.map((skill, index) => <article className="skill-card" key={skill.group}>
            <div className="skill-card-top"><span>0{index + 1}</span><span className="skill-mark">✳</span></div>
            <h3>{skill.group}</h3>
            <div className="skill-chips">{skill.items.map(item => <span key={item}>{item}</span>)}</div>
          </article>)}
        </div>
        <p className="skill-note">Tool familiarity reflects learning and hands-on practice; proficiency varies by tool and task.</p>
      </section>

      <section className="section-wrap section-block projects-section" id="projects">
        <SectionTitle eyebrow="04 / SELECTED WORK" title={<>Ideas turned into<br /><em>working projects.</em></>} note="A mix of ongoing engineering work, live demos and completed academic projects." />
        <div className="project-grid">
          {projects.map(project => <article className="project-card" key={project.number}>
            <div className="project-card-top"><span className="project-number">{project.number} / PROJECT</span><span className={`status-pill ${project.statusTone}`}><i />{project.status}</span></div>
            <p className="project-category">{project.category}</p>
            <h3>{project.name}</h3>
            <p className="project-summary">{project.summary}</p>
            <p className="project-details">{project.details}</p>
            <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
            <div className="project-links">
              {project.demo && <a className="project-link primary-link" href={project.demo} target="_blank" rel="noreferrer">Open live demo ↗</a>}
              {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">GitHub repository ↗</a>}
              {!project.demo && !project.href && <span className="project-pending">{project.action}</span>}
            </div>
          </article>)}
        </div>
      </section>

      <section className="section-wrap section-block" id="journey">
        <SectionTitle eyebrow="05 / EXPERIENCE & EVENTS" title={<>Learning beyond<br /><em>the classroom.</em></>} note="Hackathons, CTF participation and practical security learning." />
        <div className="journey-layout">
          <div className="journey-events">
            {events.map((event, index) => <article className="event-card" key={event.name}>
              <div className="event-index">0{index + 1}</div>
              <div className="event-content">
                <div className="event-meta"><span>{event.kind}</span><span>{event.date}</span></div>
                <h3>{event.name}</h3>
                <p>{event.text}</p>
                <div className="event-bottom"><span className={`event-state ${event.tone}`}>{event.state}</span>{event.link && <a href={event.link} target="_blank" rel="noreferrer">Team repository ↗</a>}</div>
              </div>
            </article>)}
          </div>
          <aside className="lab-panel">
            <span className="eyebrow">PRACTICAL LEARNING</span>
            <h3>Learning security by doing.</h3>
            <p>Linux and Ubuntu terminal practice, Kali Linux labs, TryHackMe Pre Security learning and introductory network/web security tooling.</p>
            <div className="lab-tools"><span>Nmap</span><span>Wireshark</span><span>Burp Suite</span><span>OWASP ZAP</span><span>Ghidra</span><span>CyberChef</span><span>Hydra</span><span>Shell scripting</span></div>
            <div className="lab-callout"><b>Controlled lab exercise</b><p>Practised a ransomware simulation inside an isolated virtual-machine environment as a learning exercise — not on live systems.</p></div>
          </aside>
        </div>
      </section>

      <section className="section-wrap section-block" id="certificates">
        <SectionTitle eyebrow="06 / WORKSHOPS & CERTIFICATES" title={<>Learning, recognised.<br /><em>Curiosity, certified.</em></>} note="Two verified workshop certificates shared for this portfolio update." />
        <div className="certificate-grid">
          {certificates.map((cert, index) => <article className="certificate-card" key={cert.title}>
            <div className="certificate-art"><span>WORKSHOP CERTIFICATE</span><strong>{index === 0 ? 'B10x' : 'KSIT'}</strong><small>{cert.tag}</small><i>✳</i></div>
            <div className="certificate-info"><div className="certificate-date">{cert.date}</div><h3>{cert.title}</h3><p className="certificate-issuer">{cert.issuer}</p><p>{cert.description}</p><span className="certificate-note">Certificate details · image preview can be added with the original scan</span></div>
          </article>)}
        </div>
      </section>

      <section className="section-wrap section-block education-section" id="education">
        <SectionTitle eyebrow="07 / EDUCATION" title={<>The foundation<br /><em>I'm building on.</em></>} />
        <div className="education-list">
          <article><span>2024 — 2028</span><div><h3>B.E. · Computer Science and Engineering</h3><p>KS Institute of Technology, Bengaluru</p><small>Expected graduation: 2028</small></div><b>01</b></article>
          <article><span>COMPLETED</span><div><h3>Diploma in Computer Science</h3><p>P.S. Polytechnic</p><small>CGPA: 8.69</small></div><b>02</b></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit" />
        <span className="eyebrow">08 / LET'S CONNECT</span>
        <h2>Have a project<br />or opportunity in mind?<br /><em>Let’s talk.</em></h2>
        <p>I'm interested in internships, collaborative projects and opportunities to keep learning through real-world work.</p>
        <div className="contact-actions"><a className="button button-primary" href="mailto:inchara.9622@gmail.com">Email me ↗</a><a className="button button-ghost" href="https://www.linkedin.com/in/inchara-a-74862a310" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a><a className="button button-ghost" href="https://github.com/kiminchu5-seven" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        <div className="contact-mail">inchara.9622@gmail.com · Bengaluru, India</div>
      </section>
      <footer className="footer"><a className="brand" href="#home"><span>IA</span><i>.</i></a><span>Designed with curiosity. Built with code.</span><span>© 2026 Inchara A</span></footer>
    </main>
  )
}

export default App
