import { useRouter } from "next/router";
import Projets from "@/assets/Projets.json";
import Error from "@/components/Error/Error";
import ProjetImg from "@/components/Projets/ProjetImg/ProjetImg";
import ProjetVideo from "@/components/Projets/ProjetVideo/ProjetVideo";
import Title from "@/components/Title/Title";

export default function Projet() {
  const router = useRouter();
  const categoryName = router.query.category;

  const item = Projets.find((projet) => projet.category === categoryName);

  if (!item) {
    return <Error />;
  }

  return (
    <>
      <Title title={`Portfolio | ${item.category}`} />
      {item.images && (
        <main className="ProjetImg">
          <div className="ProjetTitlImg">
            {categoryName.split("").map((l, i) => {
              return <h1 key={i}>{l} </h1>;
            })}
          </div>
          <ProjetImg item={item} />
        </main>
      )}
      {item.videos && (
        <main
          style={{ height: `${item.videos.length * 100}vh` }}
          className="ProjetVideo"
        >
          <div className="bg" />
          <div className="ProjetTitlVideo">
            {categoryName.split("").map((l, i) => {
              return <h1 key={i}>{l} </h1>;
            })}
          </div>

          <ProjetVideo item={item} />
        </main>
      )}
    </>
  );
}
