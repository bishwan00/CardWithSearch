import React from "react";
import { useState } from "react";
import ShowBlog from "../showBlog/ShowBlog";
import { blogs } from "../../blogs";
import "./right.css";
import InsertBlog from "../insertBlog/InsertBlog";
const Right = ({ showBlog, showInsert }) => {
  const [search, setSearch] = useState("");
  const show = () => {
    if (showBlog) {
      return blogs
        .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
        .map((e) => {
          return <ShowBlog {...e} key={e.id} />;
        });
    } else {
      // console.log("insert true", showInsert);
      return <InsertBlog />;
    }
  };
  return (
    <div className="right">
      <div>
        {showBlog ? (
          <input
            style={{ textAlign: "center", marginTop: "1rem" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : (
          ""
        )}
      </div>
      {show()}
    </div>
  );
};

export default Right;
