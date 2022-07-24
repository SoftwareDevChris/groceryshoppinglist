import { Text } from "@mantine/core";
import { FC } from "react";

import CustomHeader from "../components/Header";

import ShoppingBag from "../assets/grocerybag.png";
import PageLayout from "../components/PageLayout";

const Home: FC = () => {
  return (
    <>
      <CustomHeader />
      <PageLayout centerContent={true}>
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
          by SoftwareDevChris
        </Text>

        <div className="home_illustration">
          <img src={ShoppingBag} alt="A shopping bag" />
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
