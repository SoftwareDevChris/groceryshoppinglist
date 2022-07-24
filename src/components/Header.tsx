import React, { FC } from "react";

import { useState } from "react";
import { Burger, List, Text, ThemeIcon } from "@mantine/core";

import { AiFillHome } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";

import styles from "../styles/Header.module.scss";

const CustomHeader: FC = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.burgerMenuContainer}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </div>

        <Text
          component="h1"
          transform="uppercase"
          size="xl"
          className={styles.brandLogo}
          onClick={() => (window.location.href = "/")}
        >
          Groceries
        </Text>

        {opened && (
          <div className={styles.mobileMenu}>
            <List
              listStyleType={"none"}
              type="unordered"
              spacing={"sm"}
              size="lg"
              withPadding={true}
            >
              <List.Item
                icon={
                  <ThemeIcon size={30} sx={{ padding: "3px" }}>
                    <AiFillHome size={24} />
                  </ThemeIcon>
                }
              >
                <Text
                  sx={(theme) => ({
                    color: theme.colors.dark[6],
                    fontSize: theme.fontSizes.md,
                    fontFamily: theme.other.fontPoppins,
                  })}
                  component="a"
                  href="/"
                >
                  Home
                </Text>
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon size={30} sx={{ padding: "3px" }}>
                    <FaClipboardList size={22} />
                  </ThemeIcon>
                }
              >
                <Text
                  sx={(theme) => ({
                    color: theme.colors.dark[6],
                    fontSize: theme.fontSizes.md,
                    fontFamily: theme.other.fontPoppins,
                  })}
                  component="a"
                  href="/shopping-list"
                >
                  Shopping List
                </Text>
              </List.Item>
            </List>
          </div>
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
