import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-heaer.module.css";
import MainHeaderBackground from "./main-header-background";
import Navlink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        {/* //this imported logo in Next projects will be an object where the path
        to the image is then s tored under the SRC property */}
        <Link href="/" className={classes.logo}>
          <Image priority src={logoImg} alt="A Plate with food on it"></Image>
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
