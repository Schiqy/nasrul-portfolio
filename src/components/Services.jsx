
import { useState } from "react";
import {
  ArrowUpRight,
  Globe2,
  Layers3,
  Workflow,
} from "lucide-react";

const categories = [
  {
    id: "web",
    number: "01",
    label: "WEBSITE DEVELOPMENT",
    title: "A stronger digital presence.",
    description:
      "Thoughtful, responsive websites that communicate your value, build trust and help turn visitors into customers.",
    icon: Globe2,

    services: [
      {
        title: "Landing Pages",
        description:
          "Focused pages for campaigns, products and lead generation, designed around a clear call to action.",
      },
      {
        title: "Corporate Websites",
        description:
          "Professional multi-page websites that explain what your business does and build credibility.",
      },
      {
        title: "Custom Web Experiences",
        description:
          "Responsive, interactive web experiences tailored to your brand, audience and goals.",
      },
    ],

    tech: [
      {
        name: "React",
        logo: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "HTML5",
        logo: "https://cdn.simpleicons.org/html5/E34F26",
      },
      {
        name: "CSS3",
        logo: "https://cdn.simpleicons.org/css3/1572B6",
      },
      {
        name: "Vite",
        logo: "https://cdn.simpleicons.org/vite/646CFF",
      },
    ],
  },

  {
    id: "ai",
    number: "02",
    label: "AI & BUSINESS AUTOMATION",
    title: "Less repetitive work. More momentum.",
    description:
      "Connect your tools and use AI-powered workflows to handle enquiries, organise leads and streamline everyday operations.",
    icon: Workflow,

    services: [
      {
        title: "AI Lead Capture",
        description:
          "Capture enquiries, collect key details, qualify prospects and send organised leads to your team.",
      },
      {
        title: "AI Customer Support",
        description:
          "Help customers get quick answers with AI assistants connected to your business information.",
      },
      {
        title: "Workflow Automation",
        description:
          "Automate repetitive handoffs, notifications and follow-ups across the tools your team already uses.",
      },
    ],

    tech: [
      {
        name: "OpenAI",
        logo: "https://cdn.simpleicons.org/openai/FFFFFF",
      },
      {
        name: "n8n",
        logo: "https://cdn.simpleicons.org/n8n/EA4B71",
      },
      {
        name: "Node.js",
        logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
      },
      {
        name: "WhatsApp",
        logo: "https://cdn.simpleicons.org/whatsapp/25D366",
      },
      {
        name: "Google Sheets",
        logo: "https://cdn.simpleicons.org/googlesheets/34A853",
      },
    ],
  },

  {
    id: "software",
    number: "03",
    label: "CUSTOM SOFTWARE SOLUTIONS",
    title: "Software shaped around your workflow.",
    description:
      "Purpose-built applications and integrations for business processes that off-the-shelf tools cannot quite handle.",
    icon: Layers3,

    services: [
      {
        title: "Business Applications",
        description:
          "Purpose-built tools that help teams manage information and day-to-day operations.",
      },
      {
        title: "API & System Integrations",
        description:
          "Connect platforms and services so information moves reliably between business tools.",
      },
      {
        title: "Custom Management Systems",
        description:
          "Centralise specific workflows with tailored dashboards, data views and management features.",
      },
    ],

    tech: [
      {
        name: "React",
        logo: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "Node.js",
        logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      {
        name: "Supabase",
        logo: "https://cdn.simpleicons.org/supabase/3FCF8E",
      },
      {
        name: "AWS",
        logo: "https://cdn.simpleicons.org/amazonaws/FF9900",
      },
    ],
  },
];

function Services() {
  const [activeId, setActiveId] = useState("web");

  const active = categories.find(
    (category) => category.id === activeId
  );

  const ActiveIcon = active.icon;

  return (
    <section
      className="services-section section-container"
      id="services"
    >
      <div className="section-heading">
        <span className="section-eyebrow">
          01 / WHAT WE DO
        </span>

        <div className="section-heading-content">
          <h2>
            Digital solutions.
            <span> Built for what is next.</span>
          </h2>

          <p>
            From your first website to intelligent automation
            and custom software, we help turn business
            challenges into practical technology.
          </p>
        </div>
      </div>

      {/* Service category switcher */}
      <div
        className="services-switcher"
        role="tablist"
        aria-label="Service categories"
      >
        {categories.map((category) => {
          const Icon = category.icon;
          const selected = activeId === category.id;

          return (
            <button
              className={`service-tab ${
                selected ? "active" : ""
              }`}
              type="button"
              role="tab"
              id={`service-tab-${category.id}`}
              aria-selected={selected}
              aria-controls="service-category-panel"
              key={category.id}
              onClick={() => setActiveId(category.id)}
            >
              <Icon size={17} strokeWidth={1.7} />
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active service category */}
      <div
        className="service-category-panel"
        id="service-category-panel"
        role="tabpanel"
        aria-labelledby={`service-tab-${active.id}`}
        key={active.id}
      >
        <div className="service-category-intro">
          <div className="service-category-copy">
            <span className="service-label">
              {active.number} / {active.label}
            </span>

            <h3>{active.title}</h3>

            <p>{active.description}</p>
          </div>

          <div
            className="service-category-icon"
            aria-hidden="true"
          >
            <ActiveIcon size={30} strokeWidth={1.4} />
          </div>
        </div>

        {/* Individual services */}
        <div className="service-offerings">
          {active.services.map((service, index) => (
            <article
              className="service-offering-card"
              key={service.title}
            >
              <span className="service-offering-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h4>{service.title}</h4>

              <p>{service.description}</p>

              <a
                href="#approach"
                className="service-link"
              >
                Discuss this service
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>

        {/* Technology stack */}
        <div className="service-tech-stack">
          <div className="service-tech-heading">
            <div>
              <span className="service-label">
                THE TECHNOLOGY
              </span>

              <h4>Tools behind the solution</h4>
            </div>

            <span className="service-tech-note">
              Selected to fit each project
            </span>
          </div>

          <div className="service-tech-list">
            {active.tech.map((technology) => (
              <div
                className="service-tech-item"
                key={technology.name}
              >
                <img
                  src={technology.logo}
                  alt=""
                  loading="lazy"
                />

                <span>{technology.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="service-stack-disclaimer">
        Technology choices vary depending on project
        requirements, integrations and scalability needs.
      </p>
    </section>
  );
}

export default Services;
