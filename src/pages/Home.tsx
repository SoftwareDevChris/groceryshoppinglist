import { FC } from "react";

import { motion } from "framer-motion";

import styles from "../styles/Home.module.scss";

import ShoppingBag from "../assets/grocerybag.png";
import PageLayout from "../components/PageLayout";

const Home: FC = () => {
  return (
    <>
      <PageLayout centerContent={true}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ fontSize: "2rem" }} className={styles.h2}>
            Shopping List
          </h2>
          <p className={styles.madeBy}>by SoftwareDevChris</p>
        </motion.div>

        <motion.div
          className={styles.home_illustration}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={ShoppingBag} alt="A shopping bag" />
        </motion.div>
      </PageLayout>
    </>
  );
};

export default Home;
