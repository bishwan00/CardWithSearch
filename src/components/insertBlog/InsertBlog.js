import React from "react";
import "./insert.css";
import { useState } from "react";
import { blogs } from "../../blogs";
const InsertBlog = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const id = blogs[blogs.length - 1];

  return (
    <div className="insert">
      <form>
        <label>Title:</label>
        <br></br>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br></br>
        <label>text:</label> <br></br>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="button"
          value="submit"
          onClick={() => {
            blogs.push({
              id: id.id + 1,
              title: title,
              text: text,
            });
            console.log(blogs);
            setText("");
            setTitle("");
          }}
        />
      </form>
    </div>
  );
};

export default InsertBlog;
