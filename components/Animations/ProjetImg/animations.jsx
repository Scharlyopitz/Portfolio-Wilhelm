export const anime = (variants) => {
  return { initial: "initial", animate: "animate", exit: "exit", variants };
};

export const imageTransition = {
  initial: {
    scale: 0,
    zIndex: 0,
  },
  animate: {
    scale: 1,
    zIndex: 1,
  },
};
