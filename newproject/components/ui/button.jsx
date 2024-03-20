import Link from "next/link";
import React from "react";
import classes from "./button.module.css";
const button = (props) => {
  return <Link href={props.link}className={classes.btn}>
    {props.children}
     </Link>;
};

export default button;
