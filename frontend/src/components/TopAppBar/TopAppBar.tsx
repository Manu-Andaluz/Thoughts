import React from "react";
import style from "./TopAppBar.module.scss";
import { LogoIcon } from "./incons";

const TopAppBar = () => {
  return (
    <header className={style.top_app_bar}>
      <nav>
        <LogoIcon />
        <ul>
          <li>Daily Digest</li>
          <li>Design Tools</li>
          <li>Tutorials</li>
          <li>
            <button className={style.button_1}>Subscribe</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopAppBar;
