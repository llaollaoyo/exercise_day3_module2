import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 style={{ fontSize: "100px", fontWeight: "bold" }}>
        Hello, <span>there!</span>
      </h1>
      <h4 style={{ fontWeight: "normal" }}>I'm a to-be Front-End Developer</h4>
    </div>
  );
}
