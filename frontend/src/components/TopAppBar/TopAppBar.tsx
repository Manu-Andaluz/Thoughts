"use client";
import React, { useEffect, useState } from "react";
import style from "./TopAppBar.module.scss";
import { BurgerIcon, LogoIcon } from "./incons";
import { signOut } from "../utils/hooks/signOut";
import Link from "next/link";
import { IsUser, useAuthContext } from "../utils/AuthContext";

const TopAppBar = () => {
  const { user } = useAuthContext() as IsUser;

  const openDrawerNav = () => {
    const element = document.getElementById("nav-modal") as HTMLDialogElement;
    element?.showModal();
  };

  return (
    <header className={style.top_app_bar}>
      <nav>
        <Link href={"/"}>
          <LogoIcon />
        </Link>
        <div>
          <ul>
            <li>
              <Link href={"/"}>Daily Digest</Link>
            </li>
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
            {user ? (
              <li>
                <a
                  onClick={() => {
                    setUser(() => "");
                    signOut();
                  }}
                >
                  Sign Out
                </a>
              </li>
            ) : (
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
            )}
          </ul>
        </div>
        <span onClick={openDrawerNav}>
          <BurgerIcon />
        </span>{" "}
      </nav>
    </header>
  );
};

export default TopAppBar;
