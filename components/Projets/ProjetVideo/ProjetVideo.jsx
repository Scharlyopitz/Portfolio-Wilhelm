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
          return (
            <m.img
              key={i}
              style={{ filter: "grayscale(1)" }}
              whileInView={{ filter: "grayscale(0)" }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 1 }}
              src={video}
              alt={`video ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
