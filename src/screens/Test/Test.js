import React, { useState } from "react";
import "./test.scss";
const Test = () => {
  const [imgsrc, setImgsrc] = useState("");
  const onchange = (e) => {
    const img = e.target.files[0];
    const reader = new FileReader();
    const result = reader.readAsDataURL(img);
    reader.addEventListener("load", (e) => setImgsrc(e.target.result));
  };
  return (
    <div className="input-image-container">
      <img src={imgsrc} alt="img" className="image" />
      {/* <label htmlFor="imageupload">upload</label> */}
      <input type="file" onChange={(e) => onchange(e)} id="imageupload" />
    </div>
  );
};

export default Test;
