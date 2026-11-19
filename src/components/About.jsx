import { ArrowUpRight, Code2, Cloud, Database, BrainCircuit } from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Application development, programming and system design.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "AI-powered workflows, agents and intelligent integrations.",
  },
  {
    icon: Cloud,
    title: "Cloud & Integration",
    description: "Cloud services, APIs and connected applications.",
  },
  {
    icon: Database,
    title: "Data & Systems",
    description: "Data processing, databases and information workflows.",
  },
];

function About() {
  return (
    <section className="about-section section-container" id="about">
      <div className="about-intro">
        <span className="section-eyebrow">03 / A LITTLE ABOUT ME</span>

        <h2>
          Engineering mindset.
          <span> Curiosity for what's next.</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-profile">
          <div className="profile-monogram">
            NH<span>.</span>
          </div>

          <div className="profile-caption">
            <span>SOFTWARE ENGINEER</span>
            <span>AI AUTOMATION ENTHUSIAST</span>
          </div>
        </div>

        <div className="about-text">
          <h3>
            Hello, I'm Nasrul Hakimi.
          </h3>

          <p>
            I'm a software engineer with an interest in
            building practical technology that solves
            real-world problems.
          </p>

          <p>
            My engineering experience has exposed me to
            application development, cloud technologies,
            APIs and data platforms. I'm now applying that
            foundation to AI automation and business
            software solutions.
          </p>

          <p>
            I believe good technology should be useful,
            reliable and thoughtfully designed. My goal is
            to build systems that make everyday business
            operations simpler and more efficient.
          </p>

          <a href="#contact" className="about-link">
            Let's connect
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="focus-area-heading">
        <span className="section-eyebrow">
          AREAS OF INTEREST
        </span>
        <p>
          The technologies and disciplines shaping my work.
        </p>
      </div>

      <div className="focus-grid">
        {focusAreas.map((area) => {
          const Icon = area.icon;

          return (
            <div className="focus-card" key={area.title}>
              <Icon size={21} strokeWidth={1.5} />
              <h4>{area.title}</h4>
              <p>{area.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;