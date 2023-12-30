"use client";
import React, { useEffect, useState } from "react";
import style from "./TopAppBar.module.scss";
import { BurgerIcon, LogoIcon } from "./incons";
import { signOut } from "../utils/hooks/signOut";
import Link from "next/link";

const TopAppBar = () => {
  const [user, setUser] = useState<string>();

  const openDrawerNav = () => {
    const element = document.getElementById("nav-modal") as HTMLDialogElement;
    element?.showModal();
  };

  const openSignUp = () => {
    const element = document.getElementById(
      "signup-modal",
    ) as HTMLDialogElement;
    element?.showModal();
  };

  useEffect(() => {
    const isUser = localStorage.getItem("userToken");
    if (isUser) {
      setUser(() => isUser);
    }
  }, []);

  return (
    <header className={style.top_app_bar}>
      <nav>
        <Link href={"/"}>
          <LogoIcon />
        </Link>
        <div>
          <ul>
            <li>Daily Digest</li>
            {user ? (
              <li>
                <Link href={"/my-posts"}>My posts</Link>
              </li>
            ) : (
              <li>Design Tools</li>
            )}
            <li>
              <Link href={"/create-post"}>Make a Post</Link>
            </li>
            <li></li>
          </ul>
          {user ? (
            <button
              className={style.button_1}
              onClick={() => {
                signOut();
                setUser(() => "");
              }}
            >
              Sign Out
            </button>
          ) : (
            <button className={style.button_1} onClick={openSignUp}>
              Login
            </button>
          )}
        </div>

        <span onClick={openDrawerNav}>
          <BurgerIcon />
        </span>
      </nav>
    </header>
  );
};

export default TopAppBar;
