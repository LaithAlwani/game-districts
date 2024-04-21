import Image from "next/image";
import Link from "next/link";
import "./home-page.css";

export default function Home() {
  return (
    <div className="flex-page home-page">
      <h1>Game Districts</h1>
      <h2>Boardgame League</h2>
      <em>Elevate your game to the next level</em>
      <div className="button-group">
        <Link href="/leagues" className="btn btn-primary">
          Register
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact Us
        </Link>
      </div>
      
        <Image
          src="/images/carcassonne.webp"
          alt="a game of thrones board game"
          fill
          sizes="100vw"
          priority
          className="hero-img"
        />
      

      {/* game poll */}
      {/* upcomimg leagues  */}

      {/* */}
    </div>
  );
}
