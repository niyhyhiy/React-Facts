import reactLogo from "../images/react-logo.png"; // match the exact case

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={reactLogo} alt="React logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
}
