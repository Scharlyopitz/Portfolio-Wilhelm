import Projets from "@/assets/Projets.json";
import Link from "next/link";

export default function Sommaire() {
  return (
    <main className="Sommaire">
      <div className="linksContainer">
        <div className="link">
          <Link href={"/"}>
            <h1>Home</h1>
          </Link>
        </div>
        {Projets.map((projet, i) => {
          return (
            <div key={i} className="linkCate">
              <Link
                href={`/sommaire/${projet.category}`}
                className="SommaireTxtContainer"
              >
                {projet.category.split("").map((p, i) => {
                  return <h1 key={i}>{p} </h1>;
                })}
                <span>{`( ${
                  projet.images?.length || projet.videos?.length
                } )`}</span>
              </Link>
            </div>
          );
        })}
        <div className="link">
          <Link href={"/contact"}>
            <h1>Contact</h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
