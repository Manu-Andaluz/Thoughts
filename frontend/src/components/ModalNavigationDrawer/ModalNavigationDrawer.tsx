"use client";
import React from "react";
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

const ModalNavigationDrawer = () => {
  const path = usePathname();

  const closeDrawerNav = (e: any) => {
    const element = document.getElementById("nav-modal") as HTMLDialogElement;
    element.classList.add(style.close);
    const animationEndHandler = (event: any) => {
      element.close();
      element.classList.remove(style.close);
      element.removeEventListener("animationend", animationEndHandler);
    };
    element.addEventListener("animationend", animationEndHandler);
  };

  return (
    <dialog className={style.dialog} id="nav-modal">
      <aside id="modal-navigation-drawer-container">
        <nav className={style.navbar}>
          <span className={style.close} onClick={closeDrawerNav}>
            <CloseIcon />
          </span>
          <ul className={style.list}>
            {/* <li className={style.user_info}> */}
            {/* {authState && (
                <>
                  <div>
                    {userAvatar ? (
                      <Image
                        src={userAvatar}
                        width={40}
                        height={40}
                        alt="User picture"
                        className={style.user_picture}
                      />
                    ) : (
                      <Image
                        src={userDefaultAvatar}
                        width={40}
                        height={40}
                        alt="User picture"
                        className={style.user_picture}
                      />
                    )}
                    {userName && <h5>{userName}</h5>}
                    <p className={style.user_mail}>{userMail}</p>
                  </div>
                  <a href="#" className={style.anchor}>
                    Account
                  </a>
                  <Link href="/account" className={style.account_link}>
                    Account
                  </Link>
                </>
              )} */}
            {/* <a href="#" className={style.anchor}>
                Account
              </a>
            </li> */}
            {/* {userMail && <hr />} */}
            <li>
              <Link href={``} className={style.icon_list}>
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
              <Link href={``} className={style.icon_list}>
                <FolderIcon />
                Your Posts
              </Link>
            </li>
            <li>
              <p className={style.subTitle}>Profile</p>
            </li>
            <li>
              <Link href={``} className={style.icon_list}>
                <AccountIcon />
                Account
              </Link>
            </li>
            <li>
              <p className={style.subTitle}>Other</p>
            </li>
            <li>
              <Link href={``} className={style.icon_list}>
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
