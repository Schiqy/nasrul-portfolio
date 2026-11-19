import { ArrowUpRight, Workflow, Headset, Bot } from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI Sales & Lead Automation",
    description:
      "Turn incoming enquiries into organised opportunities. Automate lead capture, qualification and follow-up so your team can focus on meaningful conversations.",
    features: [
      "Lead capture & qualification",
      "Automated lead management",
      "Follow-up workflows",
      "CRM & application integration",
    ],
    icon: Workflow,
    label: "SALES OPERATIONS",
  },
  {
    number: "02",
    title: "AI Customer Support Automation",
    description:
      "Create smarter customer experiences with AI assistants that answer common questions, handle enquiries and route complex requests to the right people.",
    features: [
      "AI-powered customer support",
      "Knowledge-base integration",
      "FAQ & enquiry handling",
      "Human handover workflows",
    ],
    icon: Headset,
    label: "CUSTOMER EXPERIENCE",
  },
  {
    number: "03",
    title: "Custom AI Agent Automation",
    description:
      "Connect AI with your business tools and processes to automate repetitive tasks and build workflows around the way your business operates.",
    features: [
      "Custom AI agents",
      "Multi-step workflow automation",
      "API & software integrations",
      "Business process automation",
    ],
    icon: Bot,
    label: "CUSTOM SOLUTIONS",
  },
];

function Services() {
  return (
    <section className="services-section section-container" id="services">
      <div className="section-heading">
        <span className="section-eyebrow">01 / WHAT I DO</span>

        <div className="section-heading-content">
          <h2>
            Practical technology.
            <span> Meaningful outcomes.</span>
          </h2>

          <p>
            I build AI-powered systems that help businesses
            simplify operations, improve productivity and
            create better customer experiences.
          </p>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  <Icon size={23} strokeWidth={1.5} />
                </div>
              </div>

              <span className="service-label">
                {service.label}
              </span>

              <h3>{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>

              <div className="service-divider"></div>

              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#approach" className="service-link">
                Explore my approach
                <ArrowUpRight size={16} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;