// import type Variant from "framer-motion";

const transition = { duration: 0.2 };

export const parentVar = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  exit: { opacity: 1 },
};

export const opacityVar = {
  initial: { opacity: 0 },
  animate: { transition, opacity: 1 },
  exit: { opacity: 1 },
};

export const fromBottom = {
  initial: { opacity: 0, y: "10%" },
  animate: { transition, opacity: 1, y: 0 },
  exit: { opacity: 1, y: "10%" },
};

export const fromTop = {
  initial: { opacity: 0, y: "-10%" },
  animate: { transition, opacity: 1, y: 0 },
  exit: { opacity: 1, y: "-10%" },
};
