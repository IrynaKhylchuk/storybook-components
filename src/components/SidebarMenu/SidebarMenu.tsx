import React, { useState } from "react";

import type { MenuItem } from "./MenuItem/MenuItem";
import { MenuItemComponent } from "./MenuItem/MenuItem";

import menuIcon from "../../assets/menu.svg";
import components from "../../assets/components.svg"
import "./SidebarMenu.css";

interface SidebarMenuProps {
  items: MenuItem[];
  defaultOpen?: boolean;
}

export const SidebarMenu = ({
  items,
  defaultOpen = false
}: SidebarMenuProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  console.log("hello");
  return (
    <div>
      <div className="openButtonContainer">
        <button onClick={openSidebar} className="openButton">
          <img src={menuIcon} alt="Open menu" />
        </button>
      </div>
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={closeSidebar}
      />
      <nav className={isOpen ? "sidebar active" : "sidebar"}>
        <div className="titleContainer">
          <img src={components} alt="logo" />
          <h1 className="title">Storybook Components</h1>
        </div>
        {items.map((item) => (
          <MenuItemComponent key={item.label} item={item} />
        ))}
      </nav>
    </div>
  );
};
