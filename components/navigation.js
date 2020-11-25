import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const pathname = useRouter().pathname;
  const links = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "ABOUT",
      url: "/about",
    },
    {
      name: "SERVICES",
      url: "/services",
    },
    {
      name: "PRICING",
      url: "/pricing",
    },
    {
      name: "CONTACT",
      url: "/contact",
    },
  ];
  const [menuState, setMenuState] = useState(false);

  // HANDLERS
  const showMenuHandler = () => {
    setMenuState(!menuState);
  };
  return (
    <header className="header__container">
      {/* DESKTOP NAVIGATION */}
      <div className="header__desktop">
        <Link href="/">
          <div className="header__link">
            <Image
              src="/images/logo_01.png"
              alt="subtext navigation image"
              layout="intrinsic"
              width={308}
              height={131}
              priority={true}
            />
          </div>
        </Link>
        <div className="header__links_container">
          <div className="header__links">
            {links.map((link) => (
              <Link key={link.name} href={link.url}>
                <a
                  className={
                    pathname === link.url
                      ? `header__link ${"header__link_active"}`
                      : "header__link"
                  }
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="header__mobile">
        <Link href="/">
          <div>
            <Image
              src="/images/logo_01.png"
              alt="subtext navigation image"
              layout="intrinsic"
              width={102}
              height={43}
              priority={true}
            />
          </div>
        </Link>
        <button
          className="header__menu_toggle"
          onClick={showMenuHandler}
          aria-label="show menu"
        >
          <FontAwesomeIcon className="header__user_icon" icon={faBars} />
        </button>
        <div className={`mobile__menu ${menuState ? "active-menu" : ""}`}>
          <div className="header__links">
            {links.map((link) => (
              <Link key={link.name} href={link.url}>
                <a
                  className={
                    pathname === link.url
                      ? `header__link ${"header__link_active"}`
                      : "header__link"
                  }
                  onClick={showMenuHandler}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <button
              className="mobile_menu_close_button"
              onClick={showMenuHandler}
              aria-label="show menu"
            >
              <FontAwesomeIcon
                className="header__user_icon"
                icon={faTimes}
                size="lg"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
