"use client";
import React from "react";
import style from "./TopAppBar.module.scss";
import { LogoIcon } from "./incons";

const TopAppBar = () => {
  const openDrawerNav = () => {
    const element = document.getElementById("nav-modal") as HTMLDialogElement;
    console.log(element);
    element?.showModal();
  };

  return (
    <header className={style.top_app_bar}>
      <nav>
        <LogoIcon />
        <div>
          <ul>
            <li>Daily Digest</li>
            <li>Design Tools</li>
            <li>Tutorials</li>
            <li></li>
          </ul>
          <button className={style.button_1}>Subscribe</button>
        </div>

        <span onClick={openDrawerNav}>Open</span>
      </nav>
    </header>
  );
};

export default TopAppBar;
