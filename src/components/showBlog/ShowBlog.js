import React from "react";

const ShowBlog = ({ title, text }) => {
  return (
    <div>
      <h1>{title}</h1> <p>{text}</p>
    </div>
  );
};

export default ShowBlog;
