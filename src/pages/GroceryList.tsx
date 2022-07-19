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

// TO-DO's
// Add quantity input to the add-item form next to the textInput

const GroceryList: FC = () => {
  // Get the initial values from localstorage if there are any
  const storedGroceryList = localStorage.getItem("shoppingList");
  let initialState: string[] = [];

  if (storedGroceryList) initialState = JSON.parse(storedGroceryList);

  const [inputValue, setInputValue] = useState<string>("");
  const [shoppingList, setShoppingList] = useState<string[]>(
    initialState.length >= 1 ? initialState : []
  );

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }, [shoppingList]);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      setShoppingList((prevState) => [...prevState, inputValue]);
    } catch {
      console.log("Nothing was added");
    } finally {
      setInputValue("");
    }
  };

  const deleteItem = (item: string) => {
    // Perform delete action on the selected item
    const itemIndex = shoppingList.indexOf(item, 0);
    if (itemIndex >= 0) {
      setShoppingList(
        shoppingList.filter((value) => {
          return value !== item;
        })
      );
    }
  };

  const pickRandomPlaceholder = () => {
    const placeholderItemNumber = Math.floor(
      Math.random() * placeholderArray.length
    );
    const getRandomItem = placeholderArray[placeholderItemNumber];
    return getRandomItem + "...";
  };

  return (
    <>
      <CustomHeader />

      <div className="imageBackground">
        <Container p="md">
          {/* Headline */}
          <Text
            size="lg"
            weight={600}
            align="center"
            sx={(theme) => ({
              fontFamily: theme.other.fontLato,
            })}
          >
            Manage your shopping
          </Text>

          <Center sx={{ padding: "1rem" }}>
            <form onSubmit={onSubmit} style={{ width: "100%" }}>
              <TextInput
                required
                size="sm"
                label="Add item"
                placeholder={pickRandomPlaceholder()}
                variant="default"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                sx={(theme) => ({
                  fontFamily: theme.other.fontLato,
                })}
              />
              <Button
                type="submit"
                fullWidth
                title="Submit"
                sx={(theme) => ({
                  margin: "1rem 0",
                  fontFamily: theme.other.fontPoppins,
                  fontWeight: 400,
                })}
              >
                Submit
              </Button>
            </form>
          </Center>

          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Text
              align="left"
              size="md"
              sx={(theme) => ({
                fontFamily: theme.other.fontPoppins,
              })}
            >
              Your list:
            </Text>
            <List listStyleType="none" type="unordered" sx={{ width: "100%" }}>
              {shoppingList &&
                shoppingList.map((listItem, i) => {
                  return (
                    <List.Item key={i} onMouseDown={() => deleteItem(listItem)}>
                      <Box
                        sx={(theme) => ({
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
                        <Text
                          transform="capitalize"
                          sx={(theme) => ({
                            fontFamily: theme.other.fontPoppins,
                            fontSize: theme.fontSizes.sm,
                          })}
                        >
                          {listItem}
                        </Text>
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
