import { FC } from "react";

import { motion } from "framer-motion";

interface Props {
  children: JSX.Element[] | JSX.Element;
  centerContent?: Boolean;
}

const PageLayout: FC<Props> = ({ children, centerContent }: Props) => {
  return (
    <div
      className="imageBackground"
      style={centerContent ? { display: "flex" } : { display: "block" }}
    >
      <motion.div
        initial={{ opacity: 1, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: -100 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageLayout;
