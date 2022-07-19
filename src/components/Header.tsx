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
        >
          Groceries
        </Text>

        {opened && (
          <List
            listStyleType={"none"}
            type="ordered"
            spacing={"sm"}
            size="lg"
            withPadding={true}
            center
            className={styles.mobileMenu}
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
                href="/grocery-list"
              >
                Grocery List
              </Text>
            </List.Item>
          </List>
        )}
      </nav>
    </header>
  );
};

export default CustomHeader;
