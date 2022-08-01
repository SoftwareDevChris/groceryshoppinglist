import { FC, SyntheticEvent, useEffect, useState, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";

import styles from "../styles/GroceryList.module.scss";

import PageLayout from "../components/PageLayout";

const placeholderArray = [
  "Bread",
  "Bananas",
  "Milk",
  "Avocados",
  "Chilisauce",
  "Beer",
  "Butter",
  "Tomatoes",
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
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [shoppingItem, setShoppingItem] = useState<ShoppingItem | undefined>();

  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(
    initialState.length >= 1 ? initialState : []
  );

  // console.log(shoppingItem);
  // console.log(shoppingList.length);

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
    setItemQuantity(1);
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
      <PageLayout>
        <div className={styles.container}>
          {/* Headline */}
          <h3 className={styles.h3} style={{ fontSize: "1.2rem" }}>
            List manager
          </h3>

          <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <input
                type="text"
                name="itemName"
                id="inputItemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder={pickRandomPlaceholder()}
                required
              />
              <input
                type="text"
                name="itemQuantity"
                id="inputQuantity"
                defaultValue={1}
                onChange={(e) => setItemQuantity(+e.target.value)}
                placeholder="1"
              />
            </div>
            <motion.button className={styles.button} whileTap={{ scale: 0.9 }}>
              Add item
            </motion.button>
          </form>

          <ul className={styles.shoppingList}>
            {shoppingList.length < 1 && (
              <p className="noItems" style={{ textAlign: "center" }}>
                No items
              </p>
            )}
            {shoppingList.map((listItem, i) => {
              return (
                <motion.li
                  key={i}
                  className={styles.shoppingListItem}
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, x: -200 }}
                >
                  <div className={styles.shoppingItemContent}>
                    <p className={styles.shoppingItemName}>{listItem.name}</p>
                    <p className={styles.shoppingItemQuantity}>
                      {listItem.quantity && `x${listItem.quantity}`}
                    </p>
                  </div>

                  <button
                    className={styles.deleteShoppingItem}
                    onClick={() => deleteItem(listItem)}
                  >
                    Delete
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </PageLayout>
    </>
  );
};

export default GroceryList;
