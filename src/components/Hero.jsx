import {
  ArrowDown,
  ArrowUpRight,
  Workflow,
  Bot,
  Database,
  Zap,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* Left: Hero Content */}
      <div className="hero-content">

        <div className="hero-eyebrow">
          <span className="eyebrow-indicator"></span>
          SOFTWARE ENGINEERING / AI AUTOMATION
        </div>

        <h1>
          Building smarter
          <span className="gradient-text"> systems </span>
          for modern businesses.
        </h1>

        <p className="hero-description">
          I'm Nasrul Hakimi, a software engineer focused on
          designing and building AI-powered automation and
          software solutions that help businesses work smarter.
        </p>

        <div className="hero-actions">
          <a href="#services" className="button-primary">
            Explore what I build
            <ArrowUpRight size={17} />
          </a>

          <a href="#about" className="button-secondary">
            More about me
          </a>
        </div>

        <div className="hero-note">
          <ArrowDown size={15} />
          <span>Scroll to explore</span>
        </div>

      </div>

      {/* Right: Abstract Technology Visual */}
      <div className="hero-visual">

        <div className="visual-grid"></div>

        <div className="visual-top-label">
          <span>FIG. 001</span>
          <span>INTELLIGENT SYSTEMS</span>
        </div>

        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="orbit orbit-three"></div>

        <div className="visual-center">
          <div className="visual-center-icon">
            <Workflow size={38} strokeWidth={1.3} />
          </div>
          <span>AI SYSTEMS</span>
        </div>

        <div className="floating-card card-top">
          <Bot size={17} />
          <span>AI AGENTS</span>
        </div>

        <div className="floating-card card-left">
          <Zap size={17} />
          <span>AUTOMATION</span>
        </div>

        <div className="floating-card card-right">
          <Database size={17} />
          <span>INTEGRATION</span>
        </div>

        <div className="visual-bottom-label">
          <span>DESIGN</span>
          <span className="visual-line"></span>
          <span>BUILD</span>
          <span className="visual-line"></span>
          <span>OPTIMISE</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;