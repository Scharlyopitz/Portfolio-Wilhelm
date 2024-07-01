import ProjetPreview from "./ProjetPreview";
import { useScroll } from "framer-motion";
import BackBtn from "@/components/BackBtn";
import Videos from "./Videos";
import { useRef } from "react";

export default function ProjetVideo({ item }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="ProjetVideoContainer">
      <div className="bg" />
      <BackBtn />
      <ProjetPreview item={item} />
      <div ref={container} className="bigVideos">
        {item.videos.map((video, i) => {
          return <Videos key={i} video={video} i={i} />;
        })}
      </div>
    </div>
  );
}
