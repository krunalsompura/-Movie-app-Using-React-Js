
import React from "react";

const Cardblank = () => {
  return (
    <div style={{ width: "300px" }}>
      <img
        style={{ width: "100%", height: "434px", objectFit: "cover" }}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
        }
        alt="no image found"
      />
      <h4>{"No name"}</h4>
      <h4>{"Movie"}</h4>
      <h4>{"Launched.."}</h4>
    </div>
  );
};

export default Cardblank;