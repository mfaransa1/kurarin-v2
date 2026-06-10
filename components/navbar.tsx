import Container from "./container";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      <Container>
        <nav className="flex items-center justify-between py-5">
          <div className="text-2xl font-bold">
            Kurarin Solutions
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}