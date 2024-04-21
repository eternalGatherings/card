import "./styles/Main.css";
import profilePic from "../images/Sachi.jpg";
import emailIcon from "../images/email.svg";
import linkedinIcon from "../images/linkedin.svg";

function Main() {
  return (
    <main className="main">
      <img src={profilePic} className="profile-pic" alt="logo" />
      <div className="name-designation">
        <span className="name">Sachin Kn</span>
        <span className="designation">Full Stack Developer</span>
        <a className="website" href="https://www.sachinkn.in/" target="_blank" rel="noreferrer noopener">www.sachinkn.in</a>
        <div className="buttons">
          <button className="email-button">
            <img src={emailIcon} className="email-icon" alt="Email Icon" />
            <a href="mailto:sachinkn.official@gmail.com" target="_blank" rel="noreferrer noopener">Email</a>
          </button>
          <button className="linkedin-button">
            <img
              src={linkedinIcon}
              className="linkedin-icon"
              alt="LinkedIn Icon"
            />
            <a href="https://www.linkedin.com/in/sachin-kn/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          </button>
        </div>
      </div>
      <div className="about-other">
        <div className="about">
          <div className="header">About</div>
          <div className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            corrupti illum harum vel vitae incidunt iure alias, ratione quos nam
            asperiores rerum accusantium, nobis, aut amet vero a? Reprehenderit,
            corporis.
          </div>
        </div>
        <div className="interests">
          <div className="header">Interests</div>
          <div className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            corrupti illum harum vel vitae incidunt iure alias, ratione quos nam
            asperiores rerum accusantium, nobis, aut amet vero a? Reprehenderit,
            corporis.
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
