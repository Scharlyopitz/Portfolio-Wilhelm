import ProjetPreview from "./ProjetPreview";
import BackBtn from "@/components/BackBtn";
import Videos from "./Videos";

export default function ProjetVideo({ item }) {
  return (
    <div className="ProjetVideoContainer">
      <div className="bg" />
      <BackBtn />
      <ProjetPreview item={item} />
      <div className="bigVideos">
        {item.videos.map((video, i) => {
          return <Videos key={i} video={video} i={i} />;
        })}
      </div>
    </div>
  );
}
