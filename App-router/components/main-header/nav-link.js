'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css'
export default function Navlink({href,children}) {

    //therefore only this small piece of markup that will be rendered on the client side
    const path = usePathname()
  return (
    <Link
      href={href}
      className={path.startsWith(href) ?`${classes.link} ${classes.active}` : classes.link}
    >
      {children}
    </Link>
  );
}
