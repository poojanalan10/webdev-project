import "./About.css";

const About = () => {
  return (
    <div className="a" id="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <div className="a-img"></div>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title"> About Me </h1>
        <p className="a-sub">
          "An investment in knowledge pays the best interest."
        </p>
        <p className="a-desc">
          I have worked as an automation test engineer at Cognizant with about 3
          years of experience and it was my first job after my bachelor's. After
          working back in India, I decided to pursue my master's degree to
          advance my skills. Being a computer science master's student, I have
          had the opportunity to learn and execute various concepts of programming and analytics that widened my perspective. I have learned
          how to gather, analyze, filter, combine and represent data in the
          desired format using database management systems. I have my hands on
          some basic concepts in networking to a few advanced programming in
          java. I also have a basic understanding of web technologies. This wide
          array of learning has helped me a long way in my master's journey and
          the thirst for knowledge will continue, as the only constant is change
          when it comes to technology.
        </p>
      </div>
    </div>
  );
};
export default About;
