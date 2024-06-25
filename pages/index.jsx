import { motion as m } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="Home">
      <div className="HomeTxtContainer">
        <div className="letters">
          {"Wilhelm".split("").map((letter, i) => {
            return <h1 key={i}>{letter}</h1>;
          })}
        </div>
        <div className="letters">
          {"Opitz".split("").map((letter, i) => {
            return <h1 key={i}>{letter}</h1>;
          })}
        </div>
        <div className="letters ">
          {"Portfolio".split("").map((letter, i) => {
            return <h1 key={i}>{letter}</h1>;
          })}
        </div>
        <Link href="/sommaire">Start</Link>
      </div>
    </main>
  );
}
