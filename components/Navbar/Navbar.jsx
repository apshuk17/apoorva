import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import useClickOutside from "../../hooks/useClickOutside";
import HeaderImage from "../../assets/apoorva.png";

const styles = {
  container:
    "sticky top-0 z-[2] bg-[#212428] text-[#cfcfcf] font-normal w-full border-2 border-solid border-[#00000033]",
  containerScroll: "bg-[#000000f2] border-[#444444]",
  nav: "flex justify-between items-center p-8 2xl:w-[1536px] 2xl:m-auto",
  navLinkStyle: "flex row-reverse items-center gap-4",
  navSpanStyle: "text-[1.3rem] text-[#cfcfcf]",
  profile:
    "relative w-[60px] h-[60px] rounded-full shadow-[10px_10px_19px_#1c1e22] overflow-hidden",
  navListItem: "hidden md:block",
  navListLinkItem:
    "cursor-pointer text-[#c4cfde] transition-[color] duration-300 ease-in-out hover:text-[#f9004d]",
  mobileNav:
    "flex fixed z-[100] inset-y-0 left-0 min-h-screen w-screen h-screen bg-[#0000004c] transition-[transform] duration-300 ease-in-out md:hidden",
  mobileNavNavigation: "w-[250px] bg-[#212428] p-4",
  mobileNavList: "flex flex-col gap-6",
  mobileNavListLink: "text-[1.4rem] text-white",
  mobileNavClose:
    "outline outline-2 outline-white w-min my-8 hover:text-[#f9004d] focus:text-[#f9004d]",
  notActive: "translate-x-[-100%]",
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNav = useRef(null);

  useClickOutside(mobileNav, () => setIsActive(false));

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${styles.container} ${
        isScrolled ? styles.containerScroll : ""
      }`}
    >
      <nav className={styles.nav}>
        {/* LEFT SIDE */}
        <div>
          <Link href={"/"}>
            <a className={`${styles.navLinkStyle}`}>
              <span className={styles.navSpanStyle}>BIO</span>
              <div className={styles.profile}>
                <Image
                  objectFit="contain"
                  src={HeaderImage}
                  alt="nav-apoorva"
                />
              </div>
            </a>
          </Link>
        </div>
        {/* RIGHTSIDE */}
        <ul className={`flex gap-6`}>
          <li className={styles.navListItem}>
            <Link href="#">
              <a className={`${styles.navListLinkItem}`}>Home</a>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="#portofolio">
              <a className={`${styles.navListLinkItem}`}>Technologies</a>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="#resume">
              <a className={`${styles.navListLinkItem}`}>Resume</a>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="#contact">
              <a className={`${styles.navListLinkItem}`}>Contact</a>
            </Link>
          </li>
          <div className="flex md:hidden">
            <button
              className="flex bg-transparent p-[0.7rem]"
              onClick={() => {
                setIsActive(true);
              }}
            >
              <FaBars className="text-[1.8rem] text-white transition-[color] duration-300 ease-in-out hover:text-[#f9004d] focus:text-[#f9004d]" />
            </button>
          </div>
        </ul>
      </nav>
      {/* MOBILE NAVIGATION */}
      <div
        className={`${styles.mobileNav} ${
          isActive ? undefined : styles.notActive
        }`}
      >
        <nav className={styles.mobileNavNavigation} ref={mobileNav}>
          {isActive && (
            <ul className={styles.mobileNavList}>
              <div className={styles.mobileNavClose}>
                <button
                  className="flex bg-transparent p-[0.7rem]"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  <FaTimes className="text-[1.8rem] text-white transition-[color] duration-300 ease-in-out hover:text-[#f9004d] focus:text-[#f9004d]" />
                </button>
              </div>
              <li onClick={() => setIsActive(false)}>
                <Link href="#">
                  <a className={styles.mobileNavListLink}>Home</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#portofolio">
                  <a className={styles.mobileNavListLink}>Technologies</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#resume">
                  <a className={styles.mobileNavListLink}>Resume</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#contact">
                  <a className={styles.mobileNavListLink}>Contact</a>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
