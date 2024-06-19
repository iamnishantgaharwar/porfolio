import { motion } from "framer-motion";
import { MenuItem } from "./MenuItems";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <>
  <motion.ul className="list-items sm:flex flex-col h-screen justify-center" variants={variants}>
      <MenuItem   />
  </motion.ul>
    </>
);

