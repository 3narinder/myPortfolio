export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about_me.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title text-4xl">About me</p>
          <p className="hero--section-description text-xl text-gray-800/80">
            I'm Narinder Kumar, a dedicated front-end React.js developer with
            two years of experience in e-commerce product development.
            Specializing in React, Redux, Tailwind CSS, and Material-UI, I've
            played a pivotal role in crafting user-centric interfaces that
            enhance the online shopping experience. My proficiency in HTML, CSS,
            and Sass, coupled with a keen eye for responsive design, ensures
            that every product I work on is not only visually appealing but also
            seamlessly functional across all devices.
          </p>
          <p className="hero--section-description mt-4 text-xl text-gray-800/80">
            I thrive in collaborative environments, where my ability to adapt
            and innovate has led to successful cross-functional team
            collaborations, resulting in exceptional digital solutions.
            Passionate about continuous learning and pushing the boundaries of
            technology, I'm eager to contribute my expertise to building
            remarkable digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
