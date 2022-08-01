import { FC } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import GroceryList from "./pages/GroceryList";
import CustomHeader from "./components/Header";

const App: FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <CustomHeader />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="shopping-list" element={<GroceryList />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
