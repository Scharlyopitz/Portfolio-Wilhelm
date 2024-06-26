import { useEffect, useState } from "react";
import Numbers from "./Numbers";
import Button from "./Button";
import BackBtn from "@/components/BackBtn";
import { AnimatePresence, motion as m } from "framer-motion";
import {
  imageTransition,
  anime,
  easeOutQuint,
} from "@/components/Animations/ProjetImg/animations";

export default function ProjetImg({ item }) {
  const [imageTarget, setImageTarget] = useState(0);

  const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const MaxNbrProjet = item?.images?.length.toString().split([]).reverse();

  const [translateColums1, setTranslateColums1] = useState(0);
  const [translateColums2, setTranslateColums2] = useState(1);

  useEffect(() => {
    if (translateColums2 == nums2.length) {
      setTranslateColums2(0);
      setTranslateColums1(translateColums1 + 1);
    } else if (imageTarget == 0) {
      setTranslateColums1(0);
      setTranslateColums2(1);
    } else if (translateColums2 < 0) {
      setTranslateColums1(translateColums1 - 1);
      setTranslateColums2(nums2.length - 1);
    } else if (
      translateColums1 == 0 &&
      imageTarget + 1 == item?.images?.length
    ) {
      setTranslateColums1(MaxNbrProjet[1]);
      setTranslateColums2(MaxNbrProjet[0]);
    }
  }, [imageTarget]);

  if (imageTarget == item.images?.length) {
    setImageTarget(0);
  } else if (imageTarget < 0) {
    setImageTarget(item.images?.length - 1);
  }
  return (
    <div className="ProjetImgContainer">
      <Numbers
        nums1={nums1}
        nums2={nums2}
        translateColums1={translateColums1}
        translateColums2={translateColums2}
      />

      <AnimatePresence initial={false}>
        <m.img
          key={imageTarget + 2}
          {...anime(imageTransition)}
          transition={{ duration: 0.8, ease: easeOutQuint }}
          src={item.images[imageTarget]?.image}
          alt={`image ${imageTarget + 1}`}
        />
      </AnimatePresence>

      <div className="MaxNumber">/{item.images.length} </div>
      <BackBtn />
      <Button
        imageTarget={imageTarget}
        setImageTarget={setImageTarget}
        translateColums2={translateColums2}
        setTranslateColums2={setTranslateColums2}
      />
    </div>
  );
}
