import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Narinder</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span>
            <br />
            <span className="hero--section-title--color">Developer</span>{" "}
          </h1>
          <p className="hero--section-description">
            <span className="text-xl text-gray-800/80">
              I am a passionate frontend developer with a keen eye for design
              and a love for crafting immersive digital experiences.
            </span>
            <br />

            <div className="mt-4 text-xl text-gray-800/80">
              As you navigate through my portfolio, you'll discover a collection
              of projects that showcase my expertise in web development
            </div>
          </p>
        </div>

        <button className="flex items-center justify-center mx-auto md:mx-0">
          <a
            href="Narinder's Resume.pdf"
            target="_blank"
            className="btn btn-primary mt-4 flex items-center justify-start  mx-auto md:mx-0"
          >
            Download Resume
          </a>
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_1.png" alt="Hero Section" />
      </div>
    </section>
  );
}
