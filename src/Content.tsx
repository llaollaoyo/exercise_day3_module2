import "./Content.css";
import profilePhoto from "./assets/catto.jpeg";
import profileLogo from "./assets/pawprint.png";

export default function Content() {
  return (
    <div>
      <div className="flex-container">
        <div className="flex-item" id="profile-photo">
          <img src={profilePhoto} alt="Profile Photo" />
        </div>
        <div className="flex-item" id="about-me">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex-item" id="quotes">
          <img src={profileLogo} alt="Profile Logo" />
          <h2>
            "the majority of your life is the direct result of your actions,
            behaviours, and choices."
          </h2>
          <h4>—unknown</h4>
        </div>
      </div>
    </div>
  );
}
