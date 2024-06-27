import ProjetPreview from "./ProjetPreview";
import { motion as m } from "framer-motion";
import BackBtn from "@/components/BackBtn";

export default function ProjetVideo({ item }) {
  return (
    <div className="ProjetVideoContainer">
      <div className="bg" />
      <BackBtn />
      <ProjetPreview item={item} />
      <div className="bigVideos">
        {item.videos.map((video, i) => {
          return <m.img key={i} src={video} alt={`video ${i + 1}`} />;
        })}
      </div>
    </div>
  );
}
