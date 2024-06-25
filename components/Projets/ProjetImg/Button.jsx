import React from "react";

export default function Button({
  setImageTarget,
  imageTarget,
  setTranslateColums2,
  translateColums2,
}) {
  const buttonsImages = ["Next", "Previous"];

  return (
    <>
      {buttonsImages.map((btn, i) => {
        return (
          <button
            onClick={() => {
              setImageTarget(i == 1 ? imageTarget - 1 : imageTarget + 1),
                setTranslateColums2(
                  i == 1 ? translateColums2 - 1 : translateColums2 + 1
                );
            }}
            key={i}
          >
            {btn}
          </button>
        );
      })}
    </>
  );
}
