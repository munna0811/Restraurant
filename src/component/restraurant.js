import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import Navbar from "./Navbar";
import MenuCard from "./MenuCard";

const Restraurent = () => {
  const [menuData, setMenuData] = useState(Menu);
  //   const [menuList, setMenuList] = useState(uniqueList);

  const uniqueList = [
    ...new Set(
      Menu.map((currentElement) => {
        return currentElement.category;
      })
    ),
    "All",
  ];
  const [menuList, setMenuList] = useState(uniqueList);
  //... spread operator for array, [] for array, set for unique value

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currentElement) => {
      return currentElement.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restraurent;
