import {
  Search,
  Layers3,
  Code2,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the business, identify operational challenges and define what actually needs to be improved.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Map out the workflow, define the system architecture and select the right tools and integrations.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the solution, connect the required systems and test the workflow against real-world scenarios.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Monitor performance, resolve issues and continuously improve the system as business needs evolve.",
    icon: RefreshCw,
  },
];

function Approach() {
  return (
    <section className="approach-section" id="approach">
      <div className="section-container">
        <div className="approach-heading">
          <span className="section-eyebrow">
            02 / HOW I WORK
          </span>

          <h2>
            Good solutions start
            <br />
            with <span>good thinking.</span>
          </h2>

          <p>
            Technology should solve a problem, not create
            another layer of complexity. Every solution
            starts with understanding the process.
          </p>
        </div>

        <div className="approach-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="approach-card" key={step.number}>
                <div className="approach-card-top">
                  <span>{step.number}</span>
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            );
          })}
        </div>

        <div className="approach-footer">
          <span>FROM BUSINESS PROBLEM</span>
          <div className="approach-footer-line"></div>
          <span>TO WORKING SOLUTION</span>
        </div>
      </div>
    </section>
  );
}

export default Approach;