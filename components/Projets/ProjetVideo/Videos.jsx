import {
  useScroll,
  motion as m,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import React, { useRef } from "react";

export default function Videos({ video, i }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const clipath1 = useTransform(scrollYProgress, [0.25, 1], [50, 100]);
  const clipath2 = useTransform(scrollYProgress, [0.25, 1], [50, 0]);

  const clipPath = useMotionTemplate`polygon(${clipath2}% ${clipath2}%, ${clipath1}% ${clipath2}%, ${clipath1}% ${clipath1}%, ${clipath2}% ${clipath1}%)`;

  const rotate = useTransform(scrollYProgress, [0.25, 1], ["-25deg", "0deg"]);
  const imgRotate = useTransform(scrollYProgress, [0.25, 1], ["25deg", "0deg"]);
  const scale = useTransform(scrollYProgress, [0.25, 1], [2, 1]);

  return (
    <m.div ref={container}>
      <m.div style={{ clipPath, rotate }} className="imgContain">
        <m.img
          style={{ rotate: imgRotate, scale }}
          src={video}
          alt={`video ${i + 1}`}
        />
      </m.div>
    </m.div>
  );
}
