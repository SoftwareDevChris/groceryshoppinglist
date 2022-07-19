import { Center, Text } from "@mantine/core";
import React, { FC } from "react";

import CustomHeader from "../components/Header";

import ShoppingBag from "../assets/grocerybag.png";

const Home: FC = () => {
  return (
    <>
      <CustomHeader />
      <div className="imageBackground" style={{ paddingTop: "45%" }}>
        <Text
          component="h2"
          align="center"
          pt="xl"
          sx={(theme) => ({
            fontFamily: theme.other.fontLobster,
            fontSize: "2rem",
          })}
        >
          Shopping List
        </Text>
        <Text
          component="p"
          align="center"
          sx={(theme) => ({
            fontFamily: theme.other.fontLato,
            fontSize: "0.7rem",
          })}
        >
          An app by ChrisDville
        </Text>

        <div className="home_illustration">
          <img src={ShoppingBag} alt="A shopping bag" />
        </div>
      </div>
    </>
  );
};

export default Home;
