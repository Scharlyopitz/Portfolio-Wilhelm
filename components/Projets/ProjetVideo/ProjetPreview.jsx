import { useScroll, useTransform, motion as m } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ProjetPreview({ item }) {
  const { scrollYProgress } = useScroll();

  const [containerHeight, setContainerHeight] = useState();
  const [cadreHeight, setCadreHeight] = useState();

  // const mooveCadre = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [0, containerHeight - cadreHeight - 1]
  // );

  const mooveImages = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -containerHeight + cadreHeight + 2]
  );

  const container = useRef(null);
  const cadre = useRef(null);

  useEffect(() => {
    setContainerHeight(container.current.clientHeight);
    setCadreHeight(cadre.current.clientHeight);
  }, []);

  return (
    <div className="ProjetPreview">
      <div ref={cadre} className="cadre" />

      <m.div
        ref={container}
        style={{ y: mooveImages }}
        className="videosContainer"
      >
        {item.videos.map((video, i) => {
          return <img key={i} src={video} alt={`vidéo ${i + 1}`} />;
        })}
      </m.div>
    </div>
  );
}
