import { useScroll, motion as m, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Videos({
  video,
  i,
  progress,
  range,
  targetY,
  targetScale,
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scaleDown = useTransform(progress, range, [1, targetScale]);
  const y = useTransform(progress, range, ["0", targetY]);
  return (
    <m.div style={{ scale: scaleDown, y }} ref={container}>
      <m.img transition={{ duration: 1 }} src={video} alt={`video ${i + 1}`} />
    </m.div>
  );
}
