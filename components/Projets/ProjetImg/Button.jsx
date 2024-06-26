import React from "react";

export default function Button({
  setImageTarget,
  imageTarget,
  setTranslateColums2,
  translateColums2,
}) {
  const buttonsImages = ["Previous", "Next"];

  function handleClick(e) {
    const i = e.target.dataset.i;

    setImageTarget(i == 0 ? imageTarget - 1 : imageTarget + 1),
      setTranslateColums2(i == 0 ? translateColums2 - 1 : translateColums2 + 1);
  }

  return (
    <div className="btnContainer">
      {buttonsImages.map((btn, i) => {
        return (
          <button
            data-i={i}
            onClick={(e) => {
              handleClick(e);
            }}
            key={i}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}
