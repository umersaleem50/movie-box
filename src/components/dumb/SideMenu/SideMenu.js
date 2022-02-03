import React, { useState } from "react";
import Auxiliary from "../../UI/Hoc/Auxiliary";
import Overlay from "../../UI/Overlay/Overlay";
import classes from "./SideMenu.module.scss";
import Button from "../../UI/Button/Button";
const SideMenu = (props) => {
  const links = [
    {
      name: "Home",
      address: "/",
    },
    {
      name: "Movies",
      address: "/",
    },
    {
      name: "Contact Us",
      address: "/",
    },
  ];

  const toggleClasses = [
    classes.SideMenu,
    props.toggle ? classes.toggle : null,
  ];

  const generateLinks = () => {
    return links.map((link, i) => {
      return (
        <li key={i}>
          <a
            // Perent component will have prop [activeLink] that will add class 'active' to matched link
            className={
              link.name.toLowerCase() === props.activeLink.toLowerCase()
                ? classes.active
                : ""
            }
            href={link.address}
          >
            {link.name}
          </a>
        </li>
      );
    });
  };
  return (
    <Auxiliary>
      <div className={toggleClasses.join(" ")}>
        <Button type="close" clicked={props.closeSideBar} />
        <nav className={classes.Navigation}>
          {/* This will generate Links */}
          <ul>{generateLinks()}</ul>
        </nav>
      </div>
      {/* Overlay is another Component that takes opacity prop */}
      <Overlay
        opacity={0.9}
        clicked={props.closeSideBar}
        show={props.toggle}
        index={"20"}
      />
    </Auxiliary>
  );
};

export default SideMenu;

// Props = [activeLink]
