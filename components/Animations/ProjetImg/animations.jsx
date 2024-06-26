export const anime = (variants) => {
  return { initial: "initial", animate: "animate", exit: "exit", variants };
};

export const easeOutQuint = [0.22, 1, 0.36, 1];

const initialPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const leftPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
const rightPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";

export const imageTransition = {
  initial: {
    clipPath: rightPath,
  },
  animate: {
    clipPath: initialPath,
  },
  exit: {
    clipPath: leftPath,
  },
};
