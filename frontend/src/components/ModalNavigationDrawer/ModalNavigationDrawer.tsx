"use client";
import React, { useEffect, useState } from "react";
import style from "./ModalNavigationDrawer.module.scss";
import Link from "next/link";
import {
  AccountIcon,
  CloseBookIcon,
  CloseIcon,
  DocsIcon,
  FolderIcon,
  HomeIcon,
  MessageIcon,
  OpenBookIcon,
  SavedIcon,
} from "./iconts";
import { usePathname } from "next/navigation";
import { signOut } from "../utils/hooks/signOut";

const ModalNavigationDrawer = () => {
  const [user, setUser] = useState<string>();
  const links = {
    home: "/",
    my_posts: "/my-posts",
    docs: "/about",
  };

  const path = usePathname();

  const closeDrawerNav = () => {
    const element = document.getElementById("nav-modal") as HTMLDialogElement;
    element.classList.add(style.close);
    const animationEndHandler = () => {
      element.close();
      element.classList.remove(style.close);
      element.removeEventListener("animationend", animationEndHandler);
    };
    element.addEventListener("animationend", animationEndHandler);
  };

  const openSignUp = () => {
    const element = document.getElementById(
      "signup-modal",
    ) as HTMLDialogElement;
    element?.showModal();
  };

  useEffect(() => {
    const isUser = localStorage.getItem("userToken");
    if (isUser) setUser(isUser);
  }, []);

  return (
    <dialog className={style.dialog} id="nav-modal" onClick={closeDrawerNav}>
      <aside id="modal-navigation-drawer-container">
        <nav className={style.navbar}>
          <span className={style.close} onClick={closeDrawerNav}>
            <CloseIcon />
          </span>
          <ul className={style.list}>
            <li>
              <Link
                href={``}
                className={`${style.icon_list} ${
                  path === links.home && style.icon_list_active
                }`}
              >
                <HomeIcon />
                Home
              </Link>
            </li>
            <li>
              <p className={style.subTitle}>Blog</p>
            </li>
            <li>
              <Link href={``} className={style.icon_list}>
                <CloseBookIcon />
                Featured Posts
              </Link>
            </li>
            <li>
              <Link href={``} className={style.icon_list}>
                <OpenBookIcon />
                Recent Posts
              </Link>
            </li>
            <li>
              <Link href={``} className={style.icon_list}>
                <SavedIcon />
                Saved Posts
              </Link>
            </li>
            <li>
              <Link
                href={`/my-posts`}
                className={`${style.icon_list} ${
                  path === links.my_posts && style.icon_list_active
                }`}
              >
                <FolderIcon />
                Your Posts
              </Link>
            </li>
            <li>
              <p className={style.subTitle}>Profile</p>
            </li>
            {user ? (
              <li>
                <Link
                  href={``}
                  className={style.icon_list}
                  onClick={() => {
                    signOut();
                    setUser("");
                  }}
                >
                  <AccountIcon />
                  Sign Out
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  href={``}
                  className={style.icon_list}
                  onClick={openSignUp}
                >
                  <AccountIcon />
                  Sign Up
                </Link>
              </li>
            )}

            <li>
              <p className={style.subTitle}>Other</p>
            </li>
            <li>
              <Link
                href={`/about`}
                className={`${style.icon_list} ${
                  path === links.docs && style.icon_list_active
                }`}
              >
                <DocsIcon />
                Docs
              </Link>
            </li>
            <li>
              <Link href={``} className={style.icon_list}>
                <MessageIcon />
                Help
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </dialog>
  );
};

export default ModalNavigationDrawer;
