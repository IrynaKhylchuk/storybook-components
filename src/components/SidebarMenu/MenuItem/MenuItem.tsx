import React, { useState } from "react";

import arrowUp from "../../../assets/arrow_up.svg";
import arrowDown from "../../../assets/arrow_down.svg";
import "./MenuItem.css";

export interface MenuItem {
  label: string;
  subItems?: MenuItem[];
}

export const MenuItemComponent = ({ item }: { item: MenuItem }) => {
  const [open, setOpen] = useState(false);

  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div className="itemsContainer">
      <button className="item" onClick={() => setOpen(!open)}>
        {item.label}
        {hasSubItems &&
          (open ? (
            <img src={arrowUp} alt="arrowUp" />
          ) : (
            <img src={arrowDown} alt="arrowDown" />
          ))}
      </button>

      {hasSubItems && (
        <ul className={`subItemsContainer ${open ? "open" : ""}`}>
          {item.subItems!.map((subItem) => (
            <li className="subItem" key={subItem.label}>
              <MenuItemComponent item={subItem} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
