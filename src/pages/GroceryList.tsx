import {
  Center,
  Container,
  TextInput,
  Text,
  List,
  Button,
  Box,
} from "@mantine/core";
import React, { FC, SyntheticEvent, useEffect, useState } from "react";

import CustomHeader from "../components/Header";

const placeholderArray = [
  "Bread",
  "Bananas",
  "Milk",
  "Avocados",
  "Chili",
  "Beer",
  "Butter",
  "Tomato",
];

interface ShoppingItem {
  id: number | string;
  name: string;
  quantity?: string | number;
}

const GroceryList: FC = () => {
  // Get the initial values from localstorage if there are any
  const storedGroceryList = localStorage.getItem("shoppingList");
  let initialState: [] = [];

  if (storedGroceryList) initialState = JSON.parse(storedGroceryList);

  const [itemName, setItemName] = useState<string>("");
  const [itemQuantity, setItemQuantity] = useState<string>("");
  const [shoppingItem, setShoppingItem] = useState<ShoppingItem | undefined>();

  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(
    initialState.length >= 1 ? initialState : []
  );

  console.log(shoppingItem);
  console.log(shoppingList.length);

  useEffect(() => {
    if (shoppingItem !== undefined) {
      setShoppingList((prevState) => [...prevState, shoppingItem]);
      setShoppingItem(undefined);
    }

    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }, [shoppingItem, shoppingList]);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setShoppingItem({
      id: shoppingList.length + 1,
      name: itemName,
      quantity: itemQuantity || "",
    });

    setItemName("");
    setItemQuantity("");
  };

  const deleteItem = (item: ShoppingItem) => {
    // Perform delete action on the selected itemName
    setShoppingList(
      shoppingList.filter((value) => {
        return value !== item;
      })
    );
  };

  const pickRandomPlaceholder = () => {
    if (!itemName) {
      const placeholderItemNumber = Math.floor(
        Math.random() * placeholderArray.length
      );
      const getRandomItem = placeholderArray[placeholderItemNumber];
      return getRandomItem + "...";
    }
  };

  return (
    <>
      <CustomHeader />

      <div className="imageBackground">
        <Container
          p="md"
          sx={(theme) => ({
            maxWidth: "600px",
          })}
        >
          {/* Headline */}
          <Text
            size="lg"
            weight={600}
            align="center"
            sx={(theme) => ({
              fontFamily: theme.other.fontLato,
            })}
          >
            Grocery manager
          </Text>

          <Center sx={{ padding: "1rem" }}>
            <form onSubmit={onSubmit} style={{ width: "100%" }}>
              <div style={{ display: "flex" }}>
                <TextInput
                  required
                  size="sm"
                  label="Item"
                  placeholder={pickRandomPlaceholder()}
                  variant="default"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  sx={(theme) => ({
                    fontFamily: theme.other.fontLato,
                    width: "70%",
                  })}
                />
                <TextInput
                  size="sm"
                  label="Quantity"
                  placeholder={"1"}
                  variant="default"
                  value={itemQuantity}
                  type="number"
                  defaultValue="1"
                  onChange={(e) => setItemQuantity(e.target.value)}
                  sx={(theme) => ({
                    fontFamily: theme.other.fontLato,
                    width: "25%",
                    marginLeft: "5%",
                  })}
                />
              </div>
              <Button
                type="submit"
                fullWidth
                title="Add item"
                sx={(theme) => ({
                  margin: "1rem 0",
                  fontFamily: theme.other.fontPoppins,
                  fontWeight: 400,
                })}
              >
                Add item
              </Button>
            </form>
          </Center>

          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <List listStyleType="none" type="unordered" sx={{ width: "100%" }}>
              {shoppingList.length < 1 && <Text align="center">No items</Text>}
              {shoppingList.map((listItem, i) => {
                return (
                  <List.Item key={i}>
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: theme.spacing.xs,
                        padding: "0.5rem",
                        textAlign: "left",
                        background:
                          theme.colorScheme === "dark"
                            ? theme.colors.dark[5]
                            : theme.colors.grey[1],
                        borderRadius: "5px",
                      })}
                    >
                      <Box
                        sx={(theme) => ({
                          display: "flex",
                          alignItems: "center",
                        })}
                      >
                        <Text
                          transform="capitalize"
                          sx={(theme) => ({
                            fontFamily: theme.other.fontPoppins,
                            fontSize: theme.fontSizes.sm,
                          })}
                        >
                          {listItem.name}
                        </Text>
                        <Text
                          sx={(theme) => ({
                            fontFamily: theme.other.fontPoppins,
                            fontSize: theme.fontSizes.sm,
                            marginLeft: "1rem",
                          })}
                        >
                          {listItem.quantity && `x${listItem.quantity}`}
                        </Text>
                      </Box>

                      <Button
                        type="button"
                        onClick={() => deleteItem(listItem)}
                        sx={(theme) => ({
                          background: "none",
                          color: theme.colors.red,
                        })}
                      >
                        Delete
                      </Button>
                    </Box>
                  </List.Item>
                );
              })}
            </List>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default GroceryList;
