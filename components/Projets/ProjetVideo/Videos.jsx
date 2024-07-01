import {
  useScroll,
  motion as m,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import React, { useRef } from "react";

export default function Videos({ video, i, progress, range, targetScale }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: container,
    // offset: ["start end", "start start"],
  });

  const clipath1 = useTransform(scrollYProgress, [0, 1], [50, 100]);
  const clipath2 = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const clipPath = useMotionTemplate`polygon(${clipath2}% ${clipath2}%, ${clipath1}% ${clipath2}%, ${clipath1}% ${clipath1}%, ${clipath2}% ${clipath1}%)`;

  const rotate = useTransform(scrollYProgress, [0, 1], ["-25deg", "0deg"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 0.5]);
  // const scaleImg = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // const rotateImg = useTransform(scrollYProgress, [0, 1], ["-25deg", "0deg"]);
  // const roImg = useTransform(scrollYProgress, [0, 1], ["25deg", "0deg"]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  // const scaleDown = useTransform(progress, range, [1, targetScale]);
  // const top = useTransform(progress, range, [0, 1]);

  return (
    <m.div ref={container}>
      <m.img src={video} alt={`video ${i + 1}`} />
    </m.div>
  );
}
