import { FC, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import styles from "../styles/Header.module.scss";

const CustomHeader: FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.burgerMenuContainer}>
          <div
            className={styles.burgerMenuContainer}
            onClick={() => setOpened(!opened)}
          >
            {opened && <AiOutlineClose color="#efefef" size={30} />}
            {!opened && <AiOutlineMenu color="#efefef" size={30} />}
          </div>
        </div>

        <h1 className={styles.brandLogo} onClick={() => location.replace("/")}>
          Groceries
        </h1>

        {opened && (
          <motion.ul
            className={styles.mobileMenu}
            initial={{ x: -700 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <li className={styles.mobileListItem}>
              <a href="/">Home</a>
            </li>
            <li className={styles.mobileListItem}>
              <a href="/shopping-list">Shopping List</a>
            </li>
          </motion.ul>
        )}

        <div className={styles.webMenu}>
          <a href="/">Home</a>
          <a href="/shopping-list">Shopping List</a>
        </div>
      </nav>
    </header>
  );
};

export default CustomHeader;
