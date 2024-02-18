"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
  
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      setPickedImage(event.target.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>NO image Picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="the image selected by user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          accept="image/png image/jpeg"
          id={name}
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
