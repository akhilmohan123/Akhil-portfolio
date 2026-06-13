// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

/* ── Intersection observer hook ── */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── Nav ── */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="nav-inner">
          <ul className="nav-links">
            {links.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>

          <a href="mailto:akhilmohan8547@gmail.com" className="nav-cta desktop-cta">
            Hire Me
          </a>

          <button
            className={`nav-menu-btn ${open ? 'open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-backdrop" onClick={() => setOpen(false)} />
      )}

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {l}
          </a>
        ))}
        <a
          href="mailto:akhilmohan8547@gmail.com"
          className="mobile-hire"
          onClick={() => setOpen(false)}
        >
          ✉ Hire Me
        </a>
      </div>
    </nav>
  );
};

/* ── Hero ── */
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-noise"></div>
      <div className="hero-grid"></div>
      <div className="hero-orb1"></div>
      <div className="hero-orb2"></div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <div className="hero-badge-dot"></div>
              Available for Opportunities
            </div>
            <h1 className="hero-h1">
              Akhil <em>Mohan</em>
              <span className="line2">Full Stack Engineer</span>
            </h1>
            <p className="hero-desc">
              Building <strong>real-time systems</strong>, KYC platforms, and
              full-stack applications with Node.js, React, WebRTC, and cloud infrastructure.
              Improved production performance by <strong>30%</strong> at Cogen Soft Tech.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn-solid">View My Work →</a>
              <a href="mailto:akhilmohan8547@gmail.com" className="btn-outline">✉ Get In Touch</a>
            </div>
            <div className="hero-chips">
              {['React.js','Node.js','WebRTC','Socket.IO','Next.js','Oracle DB','AWS','Docker'].map(c => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="photo-wrap">
              <div className="photo-bg-ring"></div>
              <div className="float-badge top-right">
                <div>
                  <div className="float-badge-num">30%</div>
                  <div className="float-badge-label">Perf. boost</div>
                </div>
                <span className="float-badge-icon">⚡</span>
              </div>
              <div className="float-badge bottom-left">
                <span className="float-badge-icon">🚀</span>
                <div>
                  <div className="float-badge-num">1</div>
                  <div className="float-badge-label">Live project</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── About ── */
const About = () => {
  return (
    <section className="section alt" id="about">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-eyebrow">About Me</div>
          <h2 className="section-title">Engineer. Builder. Problem Solver.</h2>
        </div>
        <div className="about-grid reveal">
          <div>
            <p className="about-p">I'm a <strong>Full Stack Software Engineer</strong> with 1+ year of experience shipping scalable web applications. Currently at <strong>Cogen Soft Tech Pvt Ltd</strong>, I work on Digital KYC systems aligned with banking compliance — optimizing real-time APIs, building reactive UIs, and automating document workflows with AI.</p>
            <p className="about-p">My toolkit spans the full stack: <strong>React, Node.js, Laravel, Django</strong> on the application layer; <strong>WebRTC & Socket.IO</strong> for real-time communication; and <strong>YOLOv8 + Python</strong> for ML-driven automation. I've delivered freelance platforms and personal projects that are live in production today.</p>
            <p className="about-p">Based in <strong>Kerala, India</strong> — the land of backwaters, spices, and forest canopies. Open to remote full-time roles and interesting freelance collaborations.</p>
            <div style={{marginTop:'2rem'}}>
              <a href="mailto:akhilmohan8547@gmail.com" className="btn-solid" style={{display:'inline-flex'}}>Let's Talk →</a>
            </div>
          </div>
          <div className="about-info">
            {[
              ['Role','Software Engineer'],
              ['Company','Cogen Soft Tech Pvt Ltd'],
              ['Location','Kerala, India'],
              ['Email','akhilmohan8547@gmail.com',`mailto:akhilmohan8547@gmail.com`],
              ['Phone','+91 85470 90714',`tel:+918547090714`],
              ['GitHub','akhilmohan123','https://github.com/akhilmohan123'],
              ['Experience','1+ Year'],
              ['Education','B.Tech CS, 2024'],
            ].map(([k,v,href]) => (
              <div className="info-item" key={k}>
                <span className="info-key">{k}</span>
                <span className="info-val">
                  {href ? <a href={href} target={href.startsWith('http')?'_blank':undefined}>{v}</a> : v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Skills ── */
const skills = [
  { icon:'⚡', name:'Frontend', tags:['React.js','Next.js','TypeScript','HTML5','CSS3','jQuery','Responsive Design'] },
  { icon:'🔧', name:'Backend', tags:['Node.js','Express.js','Laravel','Django','PHP','REST APIs'] },
  { icon:'🗄️', name:'Databases', tags:['Oracle DB','MongoDB','PostgreSQL','MySQL','Firebase','Firestore'] },
  { icon:'📡', name:'Real-Time & Comms', tags:['WebRTC','Socket.IO','WebSockets','NGINX RTMP'] },
  { icon:'☁️', name:'DevOps & Cloud', tags:['AWS EC2','AWS S3','Docker','NGINX','Git','Postman'] },
  { icon:'🤖', name:'AI & Automation', tags:['YOLOv8','Python','OpenCV','NumPy','Pandas'] },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-eyebrow">Technical Skills</div>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-sub">A battle-tested toolkit shaped by production systems, real-time engineering, and ML automation.</p>
        </div>
        <div className="skills-grid reveal">
          {skills.map(s => (
            <div className="skill-card" key={s.name}>
              <span className="skill-icon">{s.icon}</span>
              <div className="skill-name">{s.name}</div>
              <div className="skill-tags">
                {s.tags.map(t => <span className="stag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Experience ── */
const Experience = () => {
  const bullets = [
    { text: <>Improved Digital KYC platform performance by <strong>30%</strong> by optimizing backend APIs and real-time systems using Node.js, Socket.IO, PHP, and React.js.</> },
    { text: <>Built <strong>real-time communication features</strong> using WebRTC and Socket.IO, enabling low-latency interactions and improved debugging through structured logging.</> },
    { text: <>Designed and built <strong>RESTful APIs</strong> using Laravel and Oracle DB to retrieve customer data via unique reference IDs, returning scalable JSON responses.</> },
    { text: <>Enhanced data accuracy and system reliability by developing <strong>dynamic digital forms</strong> using PHP, JavaScript, HTML/XML, and Oracle DB.</> },
    { text: <>Automated document and signature extraction using <strong>YOLOv8, Python, OpenCV, NumPy, and Pandas</strong>, significantly reducing manual processing effort.</> },
    { text: <>Built responsive user interfaces using <strong>React.js</strong>, enhancing user experience and seamless API integration across banking workflows.</> },
  ];
  const tags = ['Node.js','React.js','Socket.IO','WebRTC','PHP','Oracle DB','Laravel','YOLOv8','Python'];
  return (
    <section className="section alt" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-eyebrow">Work Experience</div>
          <h2 className="section-title">Where I've Made Impact</h2>
        </div>
        <div className="exp-card reveal">
          <div className="exp-header">
            <div className="exp-logo">🏢</div>
            <div className="exp-meta">
              <div className="exp-company">Cogen Soft Tech Pvt Ltd</div>
              <div className="exp-role">Software Engineer</div>
            </div>
            <div className="exp-period">Nov 2024 — Present</div>
          </div>
          <div className="exp-body">
            <ul className="exp-list">
              {bullets.map((b, i) => (
                <li className="exp-item" key={i}><span>{b.text}</span></li>
              ))}
            </ul>
            <div className="exp-tags">
              {tags.map(t => <span className="etag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Projects ── */
const projects = [
  {
    badge:'Freelance · Live',
    featured: true,
    name:'Wayanad Tourism Platform',
    desc:'Full-stack tourism platform for Wayanad, Kerala. Secure admin panel with Firebase Authentication, media management for destination content, real-time Firestore sync, and a live gallery experience.',
    stack:['Next.js','Firebase Auth','Firestore','Firebase Storage'],
    links:[{ label:'🔗 Live Site', href:'https://wayanadyatra.com/', cls:'live' }],
  },
  {
    badge:'Personal',
    name:'TeleHealth Hub',
    desc:'Microservices telemedicine platform with secure APIs, real-time WebRTC video consultations, Razorpay payment gateway, Docker orchestration, and NGINX reverse proxy.',
    stack:['Django','React.js','PostgreSQL','WebRTC','Docker','NGINX','Razorpay'],
    links:[
      { label:'GitHub', href:'https://github.com/akhilmohan123/TELEMED', cls:'' }
    ]
  },
  {
    badge:'Personal',
    name:'Social Connect',
    desc:'MERN social media platform with real-time chat, JWT auth, and live broadcasting via NGINX RTMP — a full social experience built from scratch.',
    stack:['MongoDB','Express.js','React.js','Node.js','Socket.io','NGINX RTMP'],
    links:[{ label:'GitHub', href:'https://github.com/akhilmohan123/Social-media', cls:'' }]
  },
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-eyebrow">Projects</div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-sub">Freelance, personal and exploratory work across the full stack — all shipped and live.</p>
        </div>
        <div className="projects-grid reveal">
          {projects.map(p => (
            <div className={`proj-card ${p.featured ? 'featured' : ''}`} key={p.name}>
              <div className="proj-body">
                <span className={`proj-badge ${p.featured ? 'featured-badge' : ''}`}>{p.badge}</span>
                <div className="proj-name">{p.name}</div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-stack">
                  {p.stack.map(t => <span className="ptag" key={t}>{t}</span>)}
                </div>
                <div className="proj-links">
                  {p.links.map(l => (
                    <a key={l.label} href={l.href} target="_blank" className={`plink ${l.cls}`}>{l.label}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Education ── */
const Education = () => {
  return (
    <section className="section alt" id="education">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-eyebrow">Background</div>
          <h2 className="section-title">Education & Certifications</h2>
        </div>
        <div className="edu-layout reveal">
          <div className="edu-card">
            <div className="edu-icon-row">
              <div className="edu-icon">🎓</div>
              <div>
                <div className="edu-degree-name">B.Tech in Computer Science</div>
                <div className="edu-school">Universal Engineering College, Thrissur</div>
              </div>
            </div>
            <div className="edu-pills">
              <span className="edu-pill">2020 – 2024</span>
              <span className="edu-pill">CGPA: 7.42</span>
            </div>
          </div>
          <div className="certs-list">
            {[
              { icon:'🏅', title:'HackerRank Problem-Solving Certificate', source:'HackerRank · August 2024' },
              { icon:'🏅', title:'Software Engineer Intern Certificate', source:'HackerRank · August 2024' },
            ].map(c => (
              <div className="cert-card" key={c.title}>
                <div className="cert-ico">{c.icon}</div>
                <div>
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-source">{c.source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Contact ── */
const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left reveal">
            <div className="section-eyebrow">Contact</div>
            <h2 className="section-title">Let's Build<br/>Something Great.</h2>
            <p className="contact-p">Open to full-time roles, freelance projects, and good conversations about real-time systems, clean architecture, or Kerala's backwaters.</p>
            <div className="contact-list">
              {[
                { icon:'✉️', label:'Email', val:'akhilmohan8547@gmail.com', href:'mailto:akhilmohan8547@gmail.com' },
                { icon:'📞', label:'Phone', val:'+91 85470 90714', href:'tel:+918547090714' },
                { icon:'⌨️', label:'GitHub', val:'github.com/akhilmohan123', href:'https://github.com/akhilmohan123' },
                { icon:'💼', label:'LinkedIn', val:'linkedin.com/in/akhil-mohan-470296268', href:'https://www.linkedin.com/in/akhil-mohan-470296268/' },
              ].map(c => (
                <a href={c.href} className="clink" key={c.label} target={c.href.startsWith('http')?'_blank':undefined}>
                  <div className="clink-icon">{c.icon}</div>
                  <div>
                    <div className="clink-label">{c.label}</div>
                    <div className="clink-val">{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-right reveal">
            <div className="big-am">AM</div>
            <div className="contact-cta">
              <div className="contact-cta-text">Kerala, India 🌿</div>
              <a href="mailto:akhilmohan8547@gmail.com" className="btn-solid">Send a Message →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Footer ── */
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="foot-inner">
          <span className="foot-left">© 2025 <span>Akhil Mohan</span> · Built with React · Made in Kerala</span>
          <div className="foot-right">
            <a href="https://github.com/akhilmohan123" target="_blank" className="foot-soc" title="GitHub">⌨</a>
            <a href="mailto:akhilmohan8547@gmail.com" className="foot-soc" title="Email">✉</a>
            <a href="tel:+918547090714" className="foot-soc" title="Phone">📞</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;